# rust-nodejs-bundler

package.json

```json
  "scripts": {
    "build": "esbuild web/index.ts --outfile=dist/index.js --bundle"
  },
```

Cargo.toml

```toml
[dependencies]
# optional features: actix, warp
nodejs-bundler = { git = "https://github.com/SpiralP/rust-nodejs-bundler.git" }

[build-dependencies]
nodejs-bundler-codegen = { git = "https://github.com/SpiralP/rust-nodejs-bundler.git" }
```

build.rs

```rust
fn main() {
  nodejs_bundler_codegen::build();
}
```

main.rs

```rust
include!(concat!(env!("OUT_DIR"), "/nodejs_bundle.rs"));

fn main() {
  let data = NODEJS_BUNDLE.get_file("index.html").unwrap();
  println!("{}", String::from_utf8_lossy(&data));
}

```

main.rs with [warp](https://github.com/seanmonstar/warp) feature enabled

```rust
include!(concat!(env!("OUT_DIR"), "/nodejs-bundler.rs"));

#[tokio::main]
async fn main() {
  println!("try http://127.0.0.1:3030/");
  warp::serve(NODEJS_BUNDLE.as_filter())
    .run(([127, 0, 0, 1], 3030))
    .await;
}
```

main.rs with [actix](https://github.com/actix/actix-web) feature enabled

```rust
include!(concat!(env!("OUT_DIR"), "/nodejs-bundler.rs"));

#[actix_web::main]
async fn main() -> std::io::Result<()> {
  use actix_web::{App, HttpServer};

  println!("try http://127.0.0.1:3030/");
  HttpServer::new(|| App::new().route("/*", NODEJS_BUNDLE.as_route()))
    .bind("127.0.0.1:3030")?
    .run()
    .await
}
```
