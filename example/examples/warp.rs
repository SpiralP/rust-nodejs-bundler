#[cfg(feature = "with_warp")]
include!(concat!(env!("OUT_DIR"), "/nodejs_bundle.rs"));

#[cfg(feature = "with_warp")]
#[tokio::main]
async fn main() {
    println!("try http://127.0.0.1:3030/");
    warp::serve(NODEJS_BUNDLE.as_filter())
        .run(([127, 0, 0, 1], 3030))
        .await;
}

#[cfg(not(feature = "with_warp"))]
fn main() {
    panic!("run with --features with_warp");
}
