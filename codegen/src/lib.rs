mod utils;

use std::{
    env, fs,
    fs::File,
    io::Write,
    path::{Path, PathBuf},
};

use walkdir::WalkDir;

use crate::utils::{command, is_dir, is_file, rerun_if_changed, run};

pub enum PackageManager {
    Npm,
    Yarn,
}

impl PackageManager {
    fn install(&self) -> bool {
        match self {
            Self::Npm => run(command("npm").arg("install")),
            Self::Yarn => run(command("yarn").arg("install")),
        }
    }

    fn run_script(&self, script_name: &str, node_env: &str) -> bool {
        match self {
            Self::Npm => run(command("npm")
                .arg("run-script")
                .arg(script_name)
                .env("NODE_ENV", node_env)),
            Self::Yarn => run(command("yarn")
                .arg("run")
                .arg(script_name)
                .env("NODE_ENV", node_env)),
        }
    }
}

pub struct Builder {
    /// optionally change directory before doing anything
    ///
    /// default `None`
    pub current_dir: Option<PathBuf>,

    /// watch for changes in this directory
    ///
    /// deafult `"web"`
    pub src_dir: PathBuf,

    /// directory to bundle files in
    ///
    /// default `"dist"`
    pub dist_dir: PathBuf,

    /// use npm instead of yarn
    ///
    /// default `None`
    pub package_manager: Option<PackageManager>,

    /// delete dist folder before building
    ///
    /// default `false`
    pub clean_dist: bool,

    /// package.json script name for when building debug
    ///
    /// default `"build"`
    pub script_debug: String,

    /// package.json script name for when building release
    ///
    /// default `"build"`
    pub script_release: String,
}

impl Default for Builder {
    fn default() -> Self {
        Self {
            current_dir: None,
            src_dir: "web".into(),
            dist_dir: "dist".into(),
            package_manager: None,
            clean_dist: false,
            script_debug: "build".into(),
            script_release: "build".into(),
        }
    }
}

impl Builder {
    pub fn build(self) {
        let last_current_dir = env::current_dir().unwrap();
        let out_dir = env::var("OUT_DIR").unwrap();

        let src_dir = &self.src_dir;
        let dist_dir = &self.dist_dir;

        let current_dir = if let Some(current_dir) = &self.current_dir {
            env::set_current_dir(current_dir).expect("changing directory to current_dir");
            current_dir
        } else {
            &last_current_dir
        };

        rerun_if_changed(current_dir.join("package.json"));
        assert!(is_file("package.json"), "package.json not found");

        rerun_if_changed(current_dir.join(src_dir));
        assert!(is_dir(src_dir), "web directory not found");

        rerun_if_changed(current_dir.join("package-lock.json"));
        rerun_if_changed(current_dir.join("yarn.lock"));

        let package_manager = self.package_manager.unwrap_or_else(|| {
            if is_file("package-lock.json") {
                PackageManager::Npm
            } else if is_file("yarn.lock") {
                PackageManager::Yarn
            } else {
                panic!("Couldn't autodetect package manager since no lock file was found!");
            }
        });

        // if no node_modules, run npm install
        if !is_dir("node_modules") {
            assert!(package_manager.install());
        }

        if self.clean_dist {
            let _ = fs::remove_dir_all(dist_dir);
        }

        let (script_name, node_env) = if cfg!(debug_assertions) {
            (&self.script_debug, "development")
        } else {
            (&self.script_release, "production")
        };
        assert!(package_manager.run_script(script_name, node_env));

        assert!(
            is_dir(dist_dir),
            "dist directory wasn't created after running build script"
        );

        let path = Path::new(&out_dir).join("nodejs_bundle.rs");
        let mut rust_code_file = File::create(&path).unwrap();

        let mut phf = phf_codegen::Map::new();
        phf.phf_path("::nodejs_bundler::phf");

        let paths: Vec<_> = WalkDir::new(dist_dir)
            .into_iter()
            .filter_map(|entry| match entry {
                Ok(entry) if entry.file_type().is_file() => {
                    let path = entry.path().to_path_buf();
                    let relative_path = path.strip_prefix(dist_dir).unwrap();
                    let relative_path = relative_path.to_str().unwrap().to_string();
                    let relative_path = relative_path.replace('\\', "/");
                    Some((relative_path, path))
                }
                _ => None,
            })
            .collect();

        // compress files into OUT_DIR
        for (relative_path, path) in &paths {
            let encoded_path = Path::new(&out_dir)
                .join("nodejs_bundler")
                .join(relative_path);

            let encoded_path_dir = encoded_path.parent().unwrap();
            if !encoded_path_dir.exists() {
                fs::create_dir_all(encoded_path_dir).unwrap();
            }

            zstd::stream::copy_encode(
                File::open(path).unwrap(),
                File::create(&encoded_path).unwrap(),
                zstd::DEFAULT_COMPRESSION_LEVEL,
            )
            .unwrap();

            let relative_path = relative_path.as_str();
            phf.entry(
                relative_path,
                &format!("include_bytes!({encoded_path:?}) as &'static [u8]"),
            );
        }

        writeln!(rust_code_file, "#[allow(clippy::unreadable_literal)]").unwrap();

        writeln!(
            rust_code_file,
            "static NODEJS_BUNDLE: ::nodejs_bundler::NodeJsBundle = \
             ::nodejs_bundler::NodeJsBundle::new({});",
            phf.build()
        )
        .unwrap();

        env::set_current_dir(last_current_dir).unwrap();
    }
}

/// Build with default options.
pub fn build() {
    Builder::default().build()
}
