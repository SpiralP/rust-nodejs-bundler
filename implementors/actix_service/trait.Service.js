(function() {var implementors = {};
implementors["actix_connect"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"actix_connect/trait.Address.html\" title=\"trait actix_connect::Address\">Address</a>&gt; <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a> for <a class=\"struct\" href=\"actix_connect/struct.TcpConnector.html\" title=\"struct actix_connect::TcpConnector\">TcpConnector</a>&lt;T&gt;","synthetic":false,"types":["actix_connect::connector::TcpConnector"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"actix_connect/trait.Address.html\" title=\"trait actix_connect::Address\">Address</a>&gt; <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a> for <a class=\"struct\" href=\"actix_connect/struct.Resolver.html\" title=\"struct actix_connect::Resolver\">Resolver</a>&lt;T&gt;","synthetic":false,"types":["actix_connect::resolve::Resolver"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"actix_connect/trait.Address.html\" title=\"trait actix_connect::Address\">Address</a>&gt; <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a> for <a class=\"struct\" href=\"actix_connect/struct.ConnectService.html\" title=\"struct actix_connect::ConnectService\">ConnectService</a>&lt;T&gt;","synthetic":false,"types":["actix_connect::service::ConnectService"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"actix_connect/trait.Address.html\" title=\"trait actix_connect::Address\">Address</a> + 'static&gt; <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a> for <a class=\"struct\" href=\"actix_connect/struct.TcpConnectService.html\" title=\"struct actix_connect::TcpConnectService\">TcpConnectService</a>&lt;T&gt;","synthetic":false,"types":["actix_connect::service::TcpConnectService"]}];
implementors["actix_http"] = [{"text":"impl <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a> for <a class=\"struct\" href=\"actix_http/h1/struct.ExpectHandler.html\" title=\"struct actix_http::h1::ExpectHandler\">ExpectHandler</a>","synthetic":false,"types":["actix_http::h1::expect::ExpectHandler"]},{"text":"impl&lt;T, S, B, X, U&gt; <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a> for <a class=\"struct\" href=\"actix_http/h1/struct.H1ServiceHandler.html\" title=\"struct actix_http::h1::H1ServiceHandler\">H1ServiceHandler</a>&lt;T, S, B, X, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;Request = <a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"associatedtype\" href=\"actix_service/trait.Service.html#associatedtype.Error\" title=\"type actix_service::Service::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/error/struct.Error.html\" title=\"struct actix_http::error::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"associatedtype\" href=\"actix_service/trait.Service.html#associatedtype.Response\" title=\"type actix_service::Service::Response\">Response</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;B&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"actix_http/body/trait.MessageBody.html\" title=\"trait actix_http::body::MessageBody\">MessageBody</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;X: <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;Request = <a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Response = <a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;X::<a class=\"associatedtype\" href=\"actix_service/trait.Service.html#associatedtype.Error\" title=\"type actix_service::Service::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/error/struct.Error.html\" title=\"struct actix_http::error::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;Request = (<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, <a class=\"struct\" href=\"actix_codec/framed/struct.Framed.html\" title=\"struct actix_codec::framed::Framed\">Framed</a>&lt;T, <a class=\"struct\" href=\"actix_http/h1/struct.Codec.html\" title=\"struct actix_http::h1::Codec\">Codec</a>&gt;), Response = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U::<a class=\"associatedtype\" href=\"actix_service/trait.Service.html#associatedtype.Error\" title=\"type actix_service::Service::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/error/struct.Error.html\" title=\"struct actix_http::error::Error\">Error</a>&gt;,&nbsp;</span>","synthetic":false,"types":["actix_http::h1::service::H1ServiceHandler"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a> for <a class=\"struct\" href=\"actix_http/h1/struct.UpgradeHandler.html\" title=\"struct actix_http::h1::UpgradeHandler\">UpgradeHandler</a>&lt;T&gt;","synthetic":false,"types":["actix_http::h1::upgrade::UpgradeHandler"]}];
implementors["actix_service"] = [];
implementors["actix_utils"] = [{"text":"impl&lt;A, B&gt; <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a> for <a class=\"struct\" href=\"actix_utils/either/struct.EitherService.html\" title=\"struct actix_utils::either::EitherService\">EitherService</a>&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;Response = A::<a class=\"associatedtype\" href=\"actix_service/trait.Service.html#associatedtype.Response\" title=\"type actix_service::Service::Response\">Response</a>, Error = A::<a class=\"associatedtype\" href=\"actix_service/trait.Service.html#associatedtype.Error\" title=\"type actix_service::Service::Error\">Error</a>&gt;,&nbsp;</span>","synthetic":false,"types":["actix_utils::either::EitherService"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a> for <a class=\"struct\" href=\"actix_utils/inflight/struct.InFlightService.html\" title=\"struct actix_utils::inflight::InFlightService\">InFlightService</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>,&nbsp;</span>","synthetic":false,"types":["actix_utils::inflight::InFlightService"]},{"text":"impl&lt;R, E, F&gt; <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a> for <a class=\"struct\" href=\"actix_utils/keepalive/struct.KeepAliveService.html\" title=\"struct actix_utils::keepalive::KeepAliveService\">KeepAliveService</a>&lt;R, E, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>() -&gt; E,&nbsp;</span>","synthetic":false,"types":["actix_utils::keepalive::KeepAliveService"]},{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a> for <a class=\"struct\" href=\"actix_utils/order/struct.InOrderService.html\" title=\"struct actix_utils::order::InOrderService\">InOrderService</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"associatedtype\" href=\"actix_service/trait.Service.html#associatedtype.Response\" title=\"type actix_service::Service::Response\">Response</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"associatedtype\" href=\"actix_service/trait.Service.html#associatedtype.Future\" title=\"type actix_service::Service::Future\">Future</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"associatedtype\" href=\"actix_service/trait.Service.html#associatedtype.Error\" title=\"type actix_service::Service::Error\">Error</a>: 'static,&nbsp;</span>","synthetic":false,"types":["actix_utils::order::InOrderService"]},{"text":"impl <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a> for <a class=\"struct\" href=\"actix_utils/time/struct.LowResTimeService.html\" title=\"struct actix_utils::time::LowResTimeService\">LowResTimeService</a>","synthetic":false,"types":["actix_utils::time::LowResTimeService"]},{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a> for <a class=\"struct\" href=\"actix_utils/timeout/struct.TimeoutService.html\" title=\"struct actix_utils::timeout::TimeoutService\">TimeoutService</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>,&nbsp;</span>","synthetic":false,"types":["actix_utils::timeout::TimeoutService"]}];
implementors["actix_web"] = [];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()