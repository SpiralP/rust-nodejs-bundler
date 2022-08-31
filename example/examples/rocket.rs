#[cfg(feature = "with_rocket")]
include!(concat!(env!("OUT_DIR"), "/nodejs_bundle.rs"));

#[cfg(feature = "with_rocket")]
#[rocket::main]
async fn main() -> Result<(), rocket::Error> {
    let _rocket = rocket::build()
        .mount("/", vec![NODEJS_BUNDLE.as_rocket_route()])
        .launch()
        .await?;

    Ok(())
}

#[cfg(not(feature = "with_rocket"))]
fn main() {
    panic!("run with --features with_rocket");
}
