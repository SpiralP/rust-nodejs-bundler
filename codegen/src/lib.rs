use std::{
    env, fs,
    fs::File,
    io::Write,
    path::{Path, PathBuf},
    process::Command,
};

use walkdir::WalkDir;

fn check_command(command: &mut Command) -> bool {
    command.status().unwrap().success()
}

fn run(cmd: &str) -> bool {
    if cfg!(target_os = "windows") {
        check_command(Command::new("cmd").arg("/C").arg(cmd))
    } else {
        check_command(Command::new("sh").arg("-c").arg(cmd))
    }
}

fn run_envs(cmd: &str, envs: Vec<(&str, &str)>) -> bool {
    if cfg!(target_os = "windows") {
        check_command(Command::new("cmd").arg("/C").arg(cmd).envs(envs))
    } else {
        check_command(Command::new("sh").arg("-c").arg(cmd).envs(envs))
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
    /// default `false`
    pub npm: bool,

    /// delete dist folder before building
    ///
    /// default `false`
    pub clean_dist: bool,

    /// package.json script name for when building debug
    ///
    /// default `"build"`
    pub script_dev: String,

    /// package.json script name for when building release
    ///
    /// default `"build"`
    pub script_prod: String,
}

impl Default for Builder {
    fn default() -> Self {
        Self {
            current_dir: None,
            src_dir: "web".into(),
            dist_dir: "dist".into(),
            npm: false,
            clean_dist: false,
            script_dev: "build".into(),
            script_prod: "build".into(),
        }
    }
}

impl Builder {
    pub fn build(self) {
        let last_current_dir = env::current_dir().unwrap();
        let out_dir = env::var("OUT_DIR").unwrap();

        let src_dir = &self.src_dir;
        let dist_dir = &self.dist_dir;
        let yarn = !self.npm;

        if let Some(current_dir) = &self.current_dir {
            env::set_current_dir(current_dir).expect("changing directory to current_dir");
        }

        println!(
            "cargo:rerun-if-changed={}",
            self.current_dir
                .clone()
                .unwrap_or_default()
                .join("package.json")
                .display()
        );
        assert!(
            fs::metadata("package.json")
                .map(|meta| meta.is_file())
                .unwrap_or(false),
            "package.json not found"
        );

        println!(
            "cargo:rerun-if-changed={}",
            self.current_dir.unwrap_or_default().join(src_dir).display()
        );
        assert!(
            fs::metadata(src_dir)
                .map(|meta| meta.is_dir())
                .unwrap_or(false),
            "web directory not found"
        );

        if !out_dir.contains("rls") {
            // if no node_modules, run npm install
            if fs::metadata("node_modules").is_err() {
                if yarn {
                    assert!(run("yarn install"));
                } else {
                    assert!(run("npm install"));
                }
            }

            if self.clean_dist {
                let _ = fs::remove_dir_all(dist_dir);
            }

            let node_env = if cfg!(debug_assertions) {
                "development"
            } else {
                "production"
            };

            let script_name = if cfg!(debug_assertions) {
                self.script_dev
            } else {
                self.script_prod
            };

            if yarn {
                assert!(run_envs(
                    &format!("yarn run {script_name}"),
                    vec![("NODE_ENV", node_env)]
                ));
            } else {
                assert!(run_envs(
                    &format!("npm run-script {script_name}"),
                    vec![("NODE_ENV", node_env)]
                ));
            }
        }

        assert!(
            fs::metadata(dist_dir)
                .map(|meta| meta.is_dir())
                .unwrap_or(false),
            "dist directory wasn't created"
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
