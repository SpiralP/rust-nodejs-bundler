fn main() {
    nodejs_bundler_codegen::Builder {
        dist_dir: "web/dist".into(),
        script_debug: "build".into(),
        script_release: "build:prod".into(),
        src_dir: "src".into(),
        ..Default::default()
    }
    .build();
}
