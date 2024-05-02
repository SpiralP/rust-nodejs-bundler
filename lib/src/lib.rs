pub use phf;
use std::path::Path;

pub type Files = phf::Map<&'static str, &'static [u8]>;

pub struct NodeJsBundle {
    files: Files,
}

fn get_local_path(mut path: &str) -> &str {
    if let Some(rest) = path.strip_prefix('/') {
        path = rest;
    }
    if path.is_empty() {
        path = "index.html";
    }
    path
}

impl NodeJsBundle {
    #[must_use]
    pub const fn new(files: Files) -> Self {
        Self { files }
    }

    /// returns (path, bytes)
    #[must_use]
    pub fn get_file<'a>(&'static self, path: &'a str) -> Option<(&'a str, Vec<u8>)> {
        let path = get_local_path(path);
        let bytes = zstd::stream::decode_all(*self.files.get(path)?).ok()?;
        Some((path, bytes))
    }

    #[must_use]
    pub fn get_content_type(path: &str) -> &'static str {
        let path = get_local_path(path);
        let extension = Path::new(path)
            .extension()
            .unwrap_or_default()
            .to_ascii_lowercase();

        match extension.to_string_lossy().as_ref() {
            "css" => "text/css; charset=utf-8",
            "js" => "application/javascript; charset=utf-8",
            "html" => "text/html; charset=utf-8",
            _ => "application/octet-stream",
        }
    }

    #[cfg(feature = "actix")]
    #[must_use]
    pub fn as_actix_handler(
        &'static self,
    ) -> impl actix_web::Handler<(actix_web::HttpRequest,), Output = actix_web::HttpResponse> {
        use std::future;

        use actix_web::{http::header::ContentType, HttpRequest, HttpResponse};

        |req: HttpRequest| -> future::Ready<HttpResponse> {
            let path = req.path();

            future::ready(if let Some((path, bytes)) = self.get_file(path) {
                let mut builder = HttpResponse::Ok();

                if let Ok(content_type) = Self::get_content_type(path).parse() {
                    builder.content_type(ContentType(content_type));
                }

                builder.body(bytes)
            } else {
                HttpResponse::NotFound().finish()
            })
        }
    }

    #[cfg(feature = "actix")]
    #[must_use]
    pub fn as_actix_route(&'static self) -> actix_web::Route {
        use actix_web::web;

        web::get().to(self.as_actix_handler())
    }

    #[cfg(feature = "actix")]
    #[must_use]
    pub fn as_actix_resource(&'static self) -> actix_web::Resource {
        use actix_web::Resource;

        Resource::new("/{path}*")
            .name(env!("CARGO_PKG_NAME"))
            .to(self.as_actix_handler())
    }

    #[cfg(feature = "warp")]
    #[must_use]
    pub fn as_warp_filter(&'static self) -> warp::filters::BoxedFilter<(impl warp::Reply,)> {
        use warp::Filter;

        warp::path::full()
            .map(move |path| self.as_warp_reply(&path))
            .boxed()
    }

    #[cfg(feature = "warp")]
    #[must_use]
    pub fn as_warp_reply(&'static self, path: &warp::filters::path::FullPath) -> impl warp::Reply {
        use warp::http::Response;

        let path = path.as_str();

        if let Some((path, data)) = self.get_file(path) {
            Response::builder()
                .header("Content-Type", Self::get_content_type(path))
                .body(data)
                .unwrap()
        } else {
            Response::builder().status(404).body(vec![]).unwrap()
        }
    }

    #[cfg(feature = "rocket")]
    #[must_use]
    pub fn as_rocket_route(&'static self) -> rocket::Route {
        use rocket::{
            http::{ContentType, Method, Status},
            route::{Handler, Outcome},
            Data, Request, Route,
        };

        #[derive(Clone)]
        struct RocketHandler(&'static NodeJsBundle);

        #[rocket::async_trait]
        impl Handler for RocketHandler {
            async fn handle<'r>(&self, req: &'r Request<'_>, data: Data<'r>) -> Outcome<'r> {
                let Ok(path) = req.routed_segments(0..).to_path_buf(false) else {
                    return Outcome::Forward((data, Status::Ok));
                };
                let Some((_, bytes)) = self.0.get_file(&path.to_string_lossy()) else {
                    return Outcome::Forward((data, Status::Ok));
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

    #[cfg(feature = "rouille")]
    #[must_use]
    pub fn as_rouille_response(&'static self, request: &rouille::Request) -> rouille::Response {
        if let Some((path, data)) = self.get_file(&request.url()) {
            let extension = path.rsplit_once('.').map_or(path, |(_left, right)| right);

            rouille::Response::from_data(rouille::extension_to_mime(extension), data)
        } else {
            rouille::Response::empty_404()
        }
    }
}
