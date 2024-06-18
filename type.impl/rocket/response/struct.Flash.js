(function() {var type_impls = {
"rocket":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Flash%3CR%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rocket/response/flash.rs.html#76\">source</a><a href=\"#impl-Debug-for-Flash%3CR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"rocket/response/struct.Flash.html\" title=\"struct rocket::response::Flash\">Flash</a>&lt;R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rocket/response/flash.rs.html#76\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rocket::response::flash::FlashMessage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Flash%3CR%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rocket/response/flash.rs.html#99-185\">source</a><a href=\"#impl-Flash%3CR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R&gt; <a class=\"struct\" href=\"rocket/response/struct.Flash.html\" title=\"struct rocket::response::Flash\">Flash</a>&lt;R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/rocket/response/flash.rs.html#114-121\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocket/response/struct.Flash.html#tymethod.new\" class=\"fn\">new</a>&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;, M: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;(\n    res: R,\n    kind: K,\n    message: M,\n) -&gt; <a class=\"struct\" href=\"rocket/response/struct.Flash.html\" title=\"struct rocket::response::Flash\">Flash</a>&lt;R&gt;</h4></section></summary><div class=\"docblock\"><p>Constructs a new <code>Flash</code> message with the given <code>kind</code>, <code>message</code>, and\nunderlying <code>responder</code>.</p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<p>Construct a “suggestion” message with contents “Try this out!” that\nredirects to “/”.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>rocket::response::{Redirect, Flash};\n\n<span class=\"kw\">let </span>message = Flash::new(Redirect::to(<span class=\"string\">\"/\"</span>), <span class=\"string\">\"suggestion\"</span>, <span class=\"string\">\"Try this out!\"</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.success\" class=\"method\"><a class=\"src rightside\" href=\"src/rocket/response/flash.rs.html#137-139\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocket/response/struct.Flash.html#tymethod.success\" class=\"fn\">success</a>&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;(responder: R, message: S) -&gt; <a class=\"struct\" href=\"rocket/response/struct.Flash.html\" title=\"struct rocket::response::Flash\">Flash</a>&lt;R&gt;</h4></section></summary><div class=\"docblock\"><p>Constructs a “success” <code>Flash</code> message with the given <code>responder</code> and\n<code>message</code>.</p>\n<h5 id=\"examples-1\"><a class=\"doc-anchor\" href=\"#examples-1\">§</a>Examples</h5>\n<p>Construct a “success” message with contents “It worked!” that redirects\nto “/”.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>rocket::response::{Redirect, Flash};\n\n<span class=\"kw\">let </span>message = Flash::success(Redirect::to(<span class=\"string\">\"/\"</span>), <span class=\"string\">\"It worked!\"</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.warning\" class=\"method\"><a class=\"src rightside\" href=\"src/rocket/response/flash.rs.html#155-157\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocket/response/struct.Flash.html#tymethod.warning\" class=\"fn\">warning</a>&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;(responder: R, message: S) -&gt; <a class=\"struct\" href=\"rocket/response/struct.Flash.html\" title=\"struct rocket::response::Flash\">Flash</a>&lt;R&gt;</h4></section></summary><div class=\"docblock\"><p>Constructs a “warning” <code>Flash</code> message with the given <code>responder</code> and\n<code>message</code>.</p>\n<h5 id=\"examples-2\"><a class=\"doc-anchor\" href=\"#examples-2\">§</a>Examples</h5>\n<p>Construct a “warning” message with contents “Watch out!” that redirects\nto “/”.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>rocket::response::{Redirect, Flash};\n\n<span class=\"kw\">let </span>message = Flash::warning(Redirect::to(<span class=\"string\">\"/\"</span>), <span class=\"string\">\"Watch out!\"</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.error\" class=\"method\"><a class=\"src rightside\" href=\"src/rocket/response/flash.rs.html#173-175\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocket/response/struct.Flash.html#tymethod.error\" class=\"fn\">error</a>&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;(responder: R, message: S) -&gt; <a class=\"struct\" href=\"rocket/response/struct.Flash.html\" title=\"struct rocket::response::Flash\">Flash</a>&lt;R&gt;</h4></section></summary><div class=\"docblock\"><p>Constructs an “error” <code>Flash</code> message with the given <code>responder</code> and\n<code>message</code>.</p>\n<h5 id=\"examples-3\"><a class=\"doc-anchor\" href=\"#examples-3\">§</a>Examples</h5>\n<p>Construct an “error” message with contents “Whoops!” that redirects\nto “/”.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>rocket::response::{Redirect, Flash};\n\n<span class=\"kw\">let </span>message = Flash::error(Redirect::to(<span class=\"string\">\"/\"</span>), <span class=\"string\">\"Whoops!\"</span>);</code></pre></div>\n</div></details></div></details>",0,"rocket::response::flash::FlashMessage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Responder%3C'r,+'o%3E-for-Flash%3CR%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rocket/response/flash.rs.html#191-196\">source</a><a href=\"#impl-Responder%3C'r,+'o%3E-for-Flash%3CR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'r, 'o: 'r, R: <a class=\"trait\" href=\"rocket/response/trait.Responder.html\" title=\"trait rocket::response::Responder\">Responder</a>&lt;'r, 'o&gt;&gt; <a class=\"trait\" href=\"rocket/response/trait.Responder.html\" title=\"trait rocket::response::Responder\">Responder</a>&lt;'r, 'o&gt; for <a class=\"struct\" href=\"rocket/response/struct.Flash.html\" title=\"struct rocket::response::Flash\">Flash</a>&lt;R&gt;</h3></section></summary><div class=\"docblock\"><p>Sets the message cookie and then uses the wrapped responder to complete the\nresponse. In other words, simply sets a cookie and delegates the rest of the\nresponse handling to the wrapped responder. As a result, the <code>Outcome</code> of\nthe response is the <code>Outcome</code> of the wrapped <code>Responder</code>.</p>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.respond_to\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rocket/response/flash.rs.html#192-195\">source</a><a href=\"#method.respond_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rocket/response/trait.Responder.html#tymethod.respond_to\" class=\"fn\">respond_to</a>(self, req: &amp;'r <a class=\"struct\" href=\"rocket/request/struct.Request.html\" title=\"struct rocket::request::Request\">Request</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"rocket/response/type.Result.html\" title=\"type rocket::response::Result\">Result</a>&lt;'o&gt;</h4></section></summary><div class='docblock'>Returns <code>Ok</code> if a <code>Response</code> could be generated successfully. Otherwise,\nreturns an <code>Err</code> with a failing <code>Status</code>. <a href=\"rocket/response/trait.Responder.html#tymethod.respond_to\">Read more</a></div></details></div></details>","Responder<'r, 'o>","rocket::response::flash::FlashMessage"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()