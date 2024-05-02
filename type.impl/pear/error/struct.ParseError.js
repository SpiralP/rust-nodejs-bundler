(function() {var type_impls = {
"pear":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ParseError%3CC,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pear/error.rs.html#5\">source</a><a href=\"#impl-Clone-for-ParseError%3CC,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"pear/error/struct.ParseError.html\" title=\"struct pear::error::ParseError\">ParseError</a>&lt;C, E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pear/error.rs.html#5\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"pear/error/struct.ParseError.html\" title=\"struct pear::error::ParseError\">ParseError</a>&lt;C, E&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","pear::input::ParseError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ParseError%3CC,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pear/error.rs.html#5\">source</a><a href=\"#impl-Debug-for-ParseError%3CC,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pear/error/struct.ParseError.html\" title=\"struct pear::error::ParseError\">ParseError</a>&lt;C, E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pear/error.rs.html#5\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","pear::input::ParseError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-ParseError%3CC,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pear/error.rs.html#43-56\">source</a><a href=\"#impl-Display-for-ParseError%3CC,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C: <a class=\"trait\" href=\"pear/input/trait.Show.html\" title=\"trait pear::input::Show\">Show</a>, E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"pear/error/struct.ParseError.html\" title=\"struct pear::error::ParseError\">ParseError</a>&lt;C, E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pear/error.rs.html#44-55\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","pear::input::ParseError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ParseError%3CC,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pear/error.rs.html#24-41\">source</a><a href=\"#impl-ParseError%3CC,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C, E&gt; <a class=\"struct\" href=\"pear/error/struct.ParseError.html\" title=\"struct pear::error::ParseError\">ParseError</a>&lt;C, E&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/pear/error.rs.html#25-27\">source</a><h4 class=\"code-header\">pub fn <a href=\"pear/error/struct.ParseError.html#tymethod.new\" class=\"fn\">new</a>(parser: <a class=\"struct\" href=\"pear/input/struct.ParserInfo.html\" title=\"struct pear::input::ParserInfo\">ParserInfo</a>, error: E, context: C) -&gt; <a class=\"struct\" href=\"pear/error/struct.ParseError.html\" title=\"struct pear::error::ParseError\">ParseError</a>&lt;C, E&gt;</h4></section><section id=\"method.push_info\" class=\"method\"><a class=\"src rightside\" href=\"src/pear/error.rs.html#29-31\">source</a><h4 class=\"code-header\">pub fn <a href=\"pear/error/struct.ParseError.html#tymethod.push_info\" class=\"fn\">push_info</a>(&amp;mut self, parser: <a class=\"struct\" href=\"pear/input/struct.ParserInfo.html\" title=\"struct pear::input::ParserInfo\">ParserInfo</a>, context: C)</h4></section><section id=\"method.into\" class=\"method\"><a class=\"src rightside\" href=\"src/pear/error.rs.html#34-40\">source</a><h4 class=\"code-header\">pub fn <a href=\"pear/error/struct.ParseError.html#tymethod.into\" class=\"fn\">into</a>&lt;E2: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;E&gt;&gt;(self) -&gt; <a class=\"struct\" href=\"pear/error/struct.ParseError.html\" title=\"struct pear::error::ParseError\">ParseError</a>&lt;C, E2&gt;</h4></section></div></details>",0,"pear::input::ParseError"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()