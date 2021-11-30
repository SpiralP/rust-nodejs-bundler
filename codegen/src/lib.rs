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
    pub web_dir: PathBuf,

    /// directory to bundle files in
    ///
    /// default `"dist"`
    pub dist_dir: PathBuf,

    /// use npm instead of yarn
    ///
    /// default `false`
    pub npm: bool,
}

impl Default for Builder {
    fn default() -> Self {
        Self {
            current_dir: None,
            web_dir: "web".into(),
            dist_dir: "dist".into(),
            npm: false,
        }
    }
}

impl Builder {
    pub fn build(self) {
        let last_current_dir = env::current_dir().unwrap();
        let out_dir = env::var("OUT_DIR").unwrap();

        let web_dir = &self.web_dir;
        let dist_dir = &self.dist_dir;
        let yarn = !self.npm;

        if let Some(current_dir) = self.current_dir {
            env::set_current_dir(current_dir).expect("changing directory to current_dir");
        }

        println!("cargo:rerun-if-changed=package.json");
        assert!(
            fs::metadata("package.json")
                .map(|meta| meta.is_file())
                .unwrap_or(false),
            "package.json not found"
        );

        println!("cargo:rerun-if-changed={}", web_dir.display());
        assert!(
            fs::metadata(&web_dir)
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

            let _ = fs::remove_dir_all(&dist_dir);

            if cfg!(debug_assertions) {
                if yarn {
                    assert!(run_envs(
                        "yarn run build",
                        vec![("NODE_ENV", "development")]
                    ));
                } else {
                    assert!(run_envs(
                        "npm run-script build",
                        vec![("NODE_ENV", "development")]
                    ));
                }
            } else if yarn {
                assert!(run("yarn run build"));
            } else {
                assert!(run("npm run-script build"));
            }
        }

        assert!(
            fs::metadata(&dist_dir)
                .map(|meta| meta.is_dir())
                .unwrap_or(false),
            "dist directory wasn't created"
        );

        let path = Path::new(&out_dir).join("nodejs_bundle.rs");
        let mut rust_code_file = File::create(&path).unwrap();

        let mut phf = phf_codegen::Map::new();
        phf.phf_path("::nodejs_bundler::phf");

        let paths: Vec<_> = WalkDir::new(&dist_dir)
            .into_iter()
            .filter_map(|entry| match entry {
                Ok(entry) if entry.file_type().is_file() => {
                    let path = entry.path().to_path_buf();
                    let relative_path = path.strip_prefix(dist_dir).unwrap();
                    let relative_path = relative_path.to_str().unwrap().to_string();
                    let relative_path = relative_path.replace("\\", "/");
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
                &format!("include_bytes!({:?}) as &'static [u8]", encoded_path),
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
