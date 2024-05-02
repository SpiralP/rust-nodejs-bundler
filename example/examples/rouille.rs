#[cfg(feature = "with_rouille")]
include!(concat!(env!("OUT_DIR"), "/nodejs_bundle.rs"));

#[cfg(feature = "with_rouille")]
fn main() {
    println!("try http://127.0.0.1:3030/");
    rouille::start_server("127.0.0.1:3030", move |request| {
        NODEJS_BUNDLE.as_rouille_response(request)
    });
}

#[cfg(not(feature = "with_rouille"))]
fn main() {
    panic!("run with --features with_rouille");
}
