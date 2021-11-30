include!(concat!(env!("OUT_DIR"), "/nodejs_bundle.rs"));

fn main() {
    let data = NODEJS_BUNDLE.get_file("index.js").unwrap();
    println!("{}", String::from_utf8_lossy(&data));
}
