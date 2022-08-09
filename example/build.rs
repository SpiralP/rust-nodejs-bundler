fn main() {
    nodejs_bundler_codegen::Builder {
        dist_dir: "web/dist".into(),
        script_prod: "build:prod".into(),
        src_dir: "src".into(),
        ..Default::default()
    }
    .build();
}
