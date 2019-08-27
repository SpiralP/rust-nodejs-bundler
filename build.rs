use includedir_codegen::Compression;
use std::{env, fs, process::Command};

fn run(cmd: &str) -> bool {
  if cfg!(target_os = "windows") {
    Command::new("cmd")
      .args(&["/C", cmd])
      .status()
      .unwrap()
      .success()
  } else {
    Command::new("sh")
      .arg("-c")
      .arg(cmd)
      .status()
      .unwrap()
      .success()
  }
}

fn main() {
  let last_cwd = env::current_dir().unwrap();
  let workspace_dir = std::path::Path::new(&env::var("OUT_DIR").unwrap())
    .join("..")
    .join("..")
    .join("..")
    .join("..")
    .join("..")
    .canonicalize()
    .unwrap();
  env::set_current_dir(&workspace_dir).unwrap();

  if !env::var("OUT_DIR").unwrap().contains("rls") {
    if fs::metadata("package.json").is_ok() {
      if fs::metadata("node_modules").is_err() {
        assert!(run("yarn install"));
      }

      let _ = fs::remove_dir_all("dist");
      assert!(run("yarn build"));
    }
  }

  let CARGO_MANIFEST_DIR = env::var("CARGO_MANIFEST_DIR").unwrap();
  env::set_var("CARGO_MANIFEST_DIR", workspace_dir);

  includedir_codegen::start("WEB_FILES")
    .dir("dist", Compression::Gzip)
    .build("web_files.rs")
    .unwrap();

  env::set_var("CARGO_MANIFEST_DIR", CARGO_MANIFEST_DIR);
  env::set_current_dir(last_cwd).unwrap();
}
