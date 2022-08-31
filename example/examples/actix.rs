#[cfg(feature = "with_actix")]
include!(concat!(env!("OUT_DIR"), "/nodejs_bundle.rs"));

#[cfg(feature = "with_actix")]
#[actix_web::main]
async fn main() -> std::io::Result<()> {
    use actix_web::{App, HttpServer};

    println!("try http://127.0.0.1:3030/");
    HttpServer::new(|| App::new().route("/*", NODEJS_BUNDLE.as_actix_route()))
        .bind("127.0.0.1:3030")?
        .run()
        .await
}

#[cfg(not(feature = "with_actix"))]
fn main() {
    panic!("run with --features with_actix");
}
