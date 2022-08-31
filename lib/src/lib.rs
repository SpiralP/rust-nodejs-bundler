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

    pub fn get_content_type(file_path: &str) -> Option<&'static str> {
        if file_path.ends_with(".css") {
            Some("text/css; charset=utf-8")
        } else if file_path.ends_with(".js") {
            Some("application/javascript; charset=utf-8")
        } else if file_path.ends_with(".html") {
            Some("text/html; charset=utf-8")
        } else {
            None
        }
    }

    #[cfg(feature = "actix")]
    pub fn as_actix_handler(
        &'static self,
    ) -> impl actix_web::Handler<(actix_web::HttpRequest,), Output = actix_web::HttpResponse> {
        use std::future;

        use actix_web::{http::header::ContentType, HttpRequest, HttpResponse};

        |req: HttpRequest| -> future::Ready<HttpResponse> {
            let file_path = req.path();

            future::ready(if let Some(bytes) = self.get_file(file_path) {
                let mut builder = HttpResponse::Ok();

                if let Some(content_type) = Self::get_content_type(file_path) {
                    builder.content_type(ContentType(content_type.parse().unwrap()));
                }

                builder.body(bytes)
            } else {
                HttpResponse::NotFound().finish()
            })
        }
    }

    #[cfg(feature = "actix")]
    pub fn as_actix_route(&'static self) -> actix_web::Route {
        use actix_web::web;

        web::get().to(self.as_actix_handler())
    }

    #[cfg(feature = "actix")]
    pub fn as_actix_resource(&'static self) -> actix_web::Resource {
        use actix_web::Resource;

        Resource::new("/{path}*")
            .name(env!("CARGO_PKG_NAME"))
            .to(self.as_actix_handler())
    }

    #[cfg(feature = "warp")]
    pub fn as_warp_filter(&'static self) -> warp::filters::BoxedFilter<(impl warp::Reply,)> {
        use warp::Filter;

        warp::path::full()
            .map(move |path| self.as_warp_reply(path))
            .boxed()
    }

    #[cfg(feature = "warp")]
    pub fn as_warp_reply(&'static self, path: warp::filters::path::FullPath) -> impl warp::Reply {
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

    #[cfg(feature = "rocket")]
    pub fn as_rocket_route(&'static self) -> rocket::Route {
        use rocket::{
            http::{ContentType, Method},
            route::{Handler, Outcome},
            Data, Request, Route,
        };

        #[derive(Clone)]
        struct RocketHandler(&'static NodeJsBundle);

        #[rocket::async_trait]
        impl Handler for RocketHandler {
            async fn handle<'r>(&self, req: &'r Request<'_>, data: Data<'r>) -> Outcome<'r> {
                let path = match req.routed_segments(0..).to_path_buf(false) {
                    Ok(path) => path,
                    Err(_) => return Outcome::Forward(data),
                };
                let bytes = match self.0.get_file(&path.to_string_lossy()) {
                    Some(bytes) => bytes,
                    None => return Outcome::Forward(data),
                };
                let content_type = path
                    .extension()
                    .and_then(|ext| ContentType::from_extension(&ext.to_string_lossy()))
                    .unwrap_or(ContentType::HTML);

                Outcome::from(req, (content_type, bytes))
            }
        }

        Route::new(Method::Get, "/<path..>", RocketHandler(self))
    }
}
