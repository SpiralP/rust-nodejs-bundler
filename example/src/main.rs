include!(concat!(env!("OUT_DIR"), "/nodejs_bundle.rs"));

fn main() {
    let (path, data) = NODEJS_BUNDLE.get_file("index.js").unwrap();
    println!("{:?}: {:?}", path, String::from_utf8_lossy(&data));
}
