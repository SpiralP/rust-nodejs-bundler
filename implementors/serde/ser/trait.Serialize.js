(function() {var implementors = {
"actix_web":[["impl&lt;T&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"actix_web/web/struct.Data.html\" title=\"struct actix_web::web::Data\">Data</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"actix_web/web/struct.Form.html\" title=\"struct actix_web::web::Form\">Form</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"actix_web/web/struct.Json.html\" title=\"struct actix_web::web::Json\">Json</a>&lt;T&gt;"]],
"figment":[["impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"figment/value/enum.Value.html\" title=\"enum figment::value::Value\">Value</a>"],["impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"figment/value/enum.Num.html\" title=\"enum figment::value::Num\">Num</a>"],["impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"figment/value/enum.Empty.html\" title=\"enum figment::value::Empty\">Empty</a>"],["impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"figment/value/struct.Tag.html\" title=\"struct figment::value::Tag\">Tag</a>"],["impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"figment/value/magic/struct.RelativePathBuf.html\" title=\"struct figment::value::magic::RelativePathBuf\">RelativePathBuf</a>"],["impl&lt;A, B&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"figment/value/magic/enum.Either.html\" title=\"enum figment::value::magic::Either\">Either</a>&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"figment/value/magic/struct.Tagged.html\" title=\"struct figment::value::magic::Tagged\">Tagged</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>"],["impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"figment/struct.Profile.html\" title=\"struct figment::Profile\">Profile</a>"]],
"indexmap":[["impl&lt;K, V, S&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>"],["impl&lt;T, S&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>"]],
"rocket":[["impl <a class=\"trait\" href=\"rocket/serde/trait.Serialize.html\" title=\"trait rocket::serde::Serialize\">Serialize</a> for <a class=\"enum\" href=\"rocket/config/enum.LogLevel.html\" title=\"enum rocket::config::LogLevel\">LogLevel</a>"],["impl <a class=\"trait\" href=\"rocket/serde/trait.Serialize.html\" title=\"trait rocket::serde::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rocket/data/struct.Limits.html\" title=\"struct rocket::data::Limits\">Limits</a>"],["impl <a class=\"trait\" href=\"rocket/serde/trait.Serialize.html\" title=\"trait rocket::serde::Serialize\">Serialize</a> for <a class=\"type\" href=\"rocket/request/type.FlashMessage.html\" title=\"type rocket::request::FlashMessage\">FlashMessage</a>&lt;'_&gt;"],["impl <a class=\"trait\" href=\"rocket/serde/trait.Serialize.html\" title=\"trait rocket::serde::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rocket/config/struct.Ident.html\" title=\"struct rocket::config::Ident\">Ident</a>"],["impl <a class=\"trait\" href=\"rocket/serde/trait.Serialize.html\" title=\"trait rocket::serde::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rocket/config/struct.Config.html\" title=\"struct rocket::config::Config\">Config</a>"],["impl <a class=\"trait\" href=\"rocket/serde/trait.Serialize.html\" title=\"trait rocket::serde::Serialize\">Serialize</a> for <a class=\"enum\" href=\"rocket/config/enum.Sig.html\" title=\"enum rocket::config::Sig\">Sig</a>"],["impl <a class=\"trait\" href=\"rocket/serde/trait.Serialize.html\" title=\"trait rocket::serde::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rocket/config/struct.Shutdown.html\" title=\"struct rocket::config::Shutdown\">Shutdown</a>"],["impl&lt;'v&gt; <a class=\"trait\" href=\"rocket/serde/trait.Serialize.html\" title=\"trait rocket::serde::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rocket/form/struct.Context.html\" title=\"struct rocket::form::Context\">Context</a>&lt;'v&gt;"],["impl <a class=\"trait\" href=\"rocket/serde/trait.Serialize.html\" title=\"trait rocket::serde::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rocket/form/name/struct.Name.html\" title=\"struct rocket::form::name::Name\">Name</a>"],["impl <a class=\"trait\" href=\"rocket/serde/trait.Serialize.html\" title=\"trait rocket::serde::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rocket/form/name/struct.Key.html\" title=\"struct rocket::form::name::Key\">Key</a>"],["impl <a class=\"trait\" href=\"rocket/serde/trait.Serialize.html\" title=\"trait rocket::serde::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rocket/form/name/struct.NameBuf.html\" title=\"struct rocket::form::name::NameBuf\">NameBuf</a>&lt;'_&gt;"],["impl&lt;'v&gt; <a class=\"trait\" href=\"rocket/serde/trait.Serialize.html\" title=\"trait rocket::serde::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rocket/form/struct.Errors.html\" title=\"struct rocket::form::Errors\">Errors</a>&lt;'v&gt;"],["impl&lt;'v&gt; <a class=\"trait\" href=\"rocket/serde/trait.Serialize.html\" title=\"trait rocket::serde::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rocket/form/struct.Error.html\" title=\"struct rocket::form::Error\">Error</a>&lt;'v&gt;"]],
"rocket_http":[["impl&lt;'a&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rocket_http/uri/struct.Origin.html\" title=\"struct rocket_http::uri::Origin\">Origin</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rocket_http/uri/struct.Reference.html\" title=\"struct rocket_http::uri::Reference\">Reference</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rocket_http/uri/struct.Authority.html\" title=\"struct rocket_http::uri::Authority\">Authority</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rocket_http/uri/struct.Absolute.html\" title=\"struct rocket_http::uri::Absolute\">Absolute</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rocket_http/uri/struct.Asterisk.html\" title=\"struct rocket_http::uri::Asterisk\">Asterisk</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rocket_http/uri/struct.Host.html\" title=\"struct rocket_http::uri::Host\">Host</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"rocket_http/enum.Method.html\" title=\"enum rocket_http::Method\">Method</a>"],["impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rocket_http/struct.RawStr.html\" title=\"struct rocket_http::RawStr\">RawStr</a>"]],
"serde":[],
"serde_json":[["impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"serde_json/struct.Map.html\" title=\"struct serde_json::Map\">Map</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>&gt;"],["impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>"],["impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"serde_json/value/struct.Number.html\" title=\"struct serde_json::value::Number\">Number</a>"]],
"toml":[["impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"toml/map/struct.Map.html\" title=\"struct toml::map::Map\">Map</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"toml/value/enum.Value.html\" title=\"enum toml::value::Value\">Value</a>&gt;"],["impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"toml/value/enum.Value.html\" title=\"enum toml::value::Value\">Value</a>"],["impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"toml/value/struct.Datetime.html\" title=\"struct toml::value::Datetime\">Datetime</a>"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"toml/struct.Spanned.html\" title=\"struct toml::Spanned\">Spanned</a>&lt;T&gt;"]],
"ubyte":[["impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"ubyte/struct.ByteUnit.html\" title=\"struct ubyte::ByteUnit\">ByteUnit</a>"]],
"uncased":[["impl&lt;'a&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for &amp;'a <a class=\"struct\" href=\"uncased/struct.UncasedStr.html\" title=\"struct uncased::UncasedStr\">UncasedStr</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"uncased/struct.Uncased.html\" title=\"struct uncased::Uncased\">Uncased</a>&lt;'a&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()