fn main() {
    nodejs_bundler_codegen::Builder {
        current_dir: Some("web".into()),
        src_dir: "src".into(),
        script_prod: "build:prod".into(),
        ..Default::default()
    }
    .build();
}
