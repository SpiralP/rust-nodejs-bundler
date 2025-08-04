use std::{fs, path::Path, process::Command};

pub fn is_dir<P: AsRef<Path>>(path: P) -> bool {
    fs::metadata(path)
        .map(|meta| meta.is_dir())
        .unwrap_or(false)
}

pub fn is_file<P: AsRef<Path>>(path: P) -> bool {
    fs::metadata(path)
        .map(|meta| meta.is_file())
        .unwrap_or(false)
}

pub fn run(command: &mut Command) -> bool {
    println!("Running command: {:?}", command);
    command.status().unwrap().success()
}

pub fn command(program: &str) -> Command {
    #[cfg(target_os = "windows")]
    let program = format!("{program}.cmd");

    Command::new(program)
}

pub fn rerun_if_changed<P: AsRef<Path>>(path: P) {
    println!("cargo:rerun-if-changed={}", path.as_ref().display());
}
