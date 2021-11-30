fn main() {
    nodejs_bundler_codegen::Builder {
        script_prod: "build:prod".into(),
        ..Default::default()
    }
    .build();
}
