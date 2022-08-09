pub use phf;

pub type Files = phf::Map<&'static str, &'static [u8]>;

pub struct NodeJsBundle {
    files: Files,
}

impl NodeJsBundle {
    pub const fn new(files: Files) -> Self {
        Self { files }
    }

    pub fn get_file(&'static self, mut file_path: &str) -> Option<Vec<u8>> {
        if file_path.starts_with('/') {
            file_path = file_path.get(1..)?;
        }
        if file_path.is_empty() {
            file_path = "index.html";
        }

        let data = self.files.get(file_path)?;

        zstd::stream::decode_all(*data).ok()
    }

    pub fn get_content_type(file_path: &str) -> Option<String> {
        if file_path.ends_with(".css") {
            Some("text/css; charset=utf-8".to_string())
        } else if file_path.ends_with(".js") {
            Some("application/javascript; charset=utf-8".to_string())
        } else if file_path.ends_with(".html") {
            Some("text/html; charset=utf-8".to_string())
        } else {
            None
        }
    }

    #[cfg(feature = "actix")]
    pub fn as_route(&'static self) -> actix_web::Route {
        use actix_web::{http::header::ContentType, web, HttpRequest, HttpResponse};

        web::get().to(move |req: HttpRequest| -> HttpResponse {
            let file_path = req.path();

            if let Some(bytes) = self.get_file(file_path) {
                let mut builder = HttpResponse::Ok();

                if let Some(content_type) = Self::get_content_type(file_path) {
                    builder.set(ContentType(content_type.parse().unwrap()));
                }

                builder.body(bytes)
            } else {
                HttpResponse::NotFound().finish()
            }
        })
    }

    #[cfg(feature = "warp")]
    pub fn as_filter(&'static self) -> warp::filters::BoxedFilter<(impl warp::Reply,)> {
        use warp::Filter;

        warp::path::full()
            .map(move |path| self.as_reply(path))
            .boxed()
    }

    #[cfg(feature = "warp")]
    pub fn as_reply(&'static self, path: warp::filters::path::FullPath) -> impl warp::Reply {
        use warp::http::Response;

        let path = path.as_str();

        if let Some(data) = self.get_file(path) {
            let mut response = Response::builder();

            if let Some(content_type) = Self::get_content_type(path) {
                response = response.header("Content-Type", content_type);
            }

            response.body(data).unwrap()
        } else {
            Response::builder().status(404).body(vec![]).unwrap()
        }
    }
}
