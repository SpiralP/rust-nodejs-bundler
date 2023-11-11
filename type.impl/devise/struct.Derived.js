(function() {var type_impls = {
"devise":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Derived%3C'p,+T,+P%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/devise_core/derived.rs.html#141\">source</a><a href=\"#impl-Derived%3C'p,+T,+P%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'p, T, P&gt; <a class=\"struct\" href=\"devise/struct.Derived.html\" title=\"struct devise::Derived\">Derived</a>&lt;'p, T, P&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.from\" class=\"method\"><a class=\"src rightside\" href=\"src/devise_core/derived.rs.html#142\">source</a><h4 class=\"code-header\">pub fn <a href=\"devise/struct.Derived.html#tymethod.from\" class=\"fn\">from</a>(value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'p T</a>, parent: P) -&gt; <a class=\"struct\" href=\"devise/struct.Derived.html\" title=\"struct devise::Derived\">Derived</a>&lt;'p, T, P&gt;</h4></section></div></details>",0,"devise::Variant","devise::Struct","devise::Enum","devise::Union"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Derived%3C'f,+Variant,+Derived%3C'f,+ItemEnum%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/devise_core/derived.rs.html#169\">source</a><a href=\"#impl-Derived%3C'f,+Variant,+Derived%3C'f,+ItemEnum%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'f&gt; <a class=\"struct\" href=\"devise/struct.Derived.html\" title=\"struct devise::Derived\">Derived</a>&lt;'f, <a class=\"struct\" href=\"devise/syn/struct.Variant.html\" title=\"struct devise::syn::Variant\">Variant</a>, <a class=\"struct\" href=\"devise/struct.Derived.html\" title=\"struct devise::Derived\">Derived</a>&lt;'f, <a class=\"struct\" href=\"devise/syn/struct.ItemEnum.html\" title=\"struct devise::syn::ItemEnum\">ItemEnum</a>&gt;&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.builder\" class=\"method\"><a class=\"src rightside\" href=\"src/devise_core/derived.rs.html#170\">source</a><h4 class=\"code-header\">pub fn <a href=\"devise/struct.Derived.html#tymethod.builder\" class=\"fn\">builder</a>&lt;F&gt;(&amp;self, f: F) -&gt; <a class=\"struct\" href=\"devise/proc_macro2/struct.TokenStream.html\" title=\"struct devise::proc_macro2::TokenStream\">TokenStream</a><span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"struct\" href=\"devise/struct.Field.html\" title=\"struct devise::Field\">Field</a>&lt;'_&gt;) -&gt; <a class=\"struct\" href=\"devise/proc_macro2/struct.TokenStream.html\" title=\"struct devise::proc_macro2::TokenStream\">TokenStream</a>,</span></h4></section><section id=\"method.fields\" class=\"method\"><a class=\"src rightside\" href=\"src/devise_core/derived.rs.html#189\">source</a><h4 class=\"code-header\">pub fn <a href=\"devise/struct.Derived.html#tymethod.fields\" class=\"fn\">fields</a>(self) -&gt; <a class=\"struct\" href=\"devise/struct.Fields.html\" title=\"struct devise::Fields\">Fields</a>&lt;'f&gt;</h4></section></div></details>",0,"devise::Variant"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Derived%3C'p,+ItemEnum%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/devise_core/derived.rs.html#194\">source</a><a href=\"#impl-Derived%3C'p,+ItemEnum%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'p&gt; <a class=\"struct\" href=\"devise/struct.Derived.html\" title=\"struct devise::Derived\">Derived</a>&lt;'p, <a class=\"struct\" href=\"devise/syn/struct.ItemEnum.html\" title=\"struct devise::syn::ItemEnum\">ItemEnum</a>&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.variants\" class=\"method\"><a class=\"src rightside\" href=\"src/devise_core/derived.rs.html#195\">source</a><h4 class=\"code-header\">pub fn <a href=\"devise/struct.Derived.html#tymethod.variants\" class=\"fn\">variants</a>(\n    self\n) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"struct\" href=\"devise/struct.Derived.html\" title=\"struct devise::Derived\">Derived</a>&lt;'p, <a class=\"struct\" href=\"devise/syn/struct.Variant.html\" title=\"struct devise::syn::Variant\">Variant</a>, <a class=\"struct\" href=\"devise/struct.Derived.html\" title=\"struct devise::Derived\">Derived</a>&lt;'p, <a class=\"struct\" href=\"devise/syn/struct.ItemEnum.html\" title=\"struct devise::syn::ItemEnum\">ItemEnum</a>&gt;&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a></h4></section></div></details>",0,"devise::Enum"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Derived%3C'p,+ItemStruct%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/devise_core/derived.rs.html#201\">source</a><a href=\"#impl-Derived%3C'p,+ItemStruct%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'p&gt; <a class=\"struct\" href=\"devise/struct.Derived.html\" title=\"struct devise::Derived\">Derived</a>&lt;'p, <a class=\"struct\" href=\"devise/syn/struct.ItemStruct.html\" title=\"struct devise::syn::ItemStruct\">ItemStruct</a>&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.fields\" class=\"method\"><a class=\"src rightside\" href=\"src/devise_core/derived.rs.html#202\">source</a><h4 class=\"code-header\">pub fn <a href=\"devise/struct.Derived.html#tymethod.fields\" class=\"fn\">fields</a>(self) -&gt; <a class=\"struct\" href=\"devise/struct.Fields.html\" title=\"struct devise::Fields\">Fields</a>&lt;'p&gt;</h4></section><section id=\"method.builder\" class=\"method\"><a class=\"src rightside\" href=\"src/devise_core/derived.rs.html#206\">source</a><h4 class=\"code-header\">pub fn <a href=\"devise/struct.Derived.html#tymethod.builder\" class=\"fn\">builder</a>&lt;F&gt;(&amp;self, f: F) -&gt; <a class=\"struct\" href=\"devise/proc_macro2/struct.TokenStream.html\" title=\"struct devise::proc_macro2::TokenStream\">TokenStream</a><span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"struct\" href=\"devise/struct.Field.html\" title=\"struct devise::Field\">Field</a>&lt;'_&gt;) -&gt; <a class=\"struct\" href=\"devise/proc_macro2/struct.TokenStream.html\" title=\"struct devise::proc_macro2::TokenStream\">TokenStream</a>,</span></h4></section></div></details>",0,"devise::Struct"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Derived%3C'p,+T,+P%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/devise_core/derived.rs.html#163\">source</a><a href=\"#impl-Clone-for-Derived%3C'p,+T,+P%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'p, T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"devise/struct.Derived.html\" title=\"struct devise::Derived\">Derived</a>&lt;'p, T, P&gt;<span class=\"where fmt-newline\">where\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/devise_core/derived.rs.html#164\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"devise/struct.Derived.html\" title=\"struct devise::Derived\">Derived</a>&lt;'p, T, P&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","devise::Variant","devise::Struct","devise::Enum","devise::Union"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-Derived%3C'p,+T,+P%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/devise_core/derived.rs.html#147\">source</a><a href=\"#impl-Deref-for-Derived%3C'p,+T,+P%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'p, T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"devise/struct.Derived.html\" title=\"struct devise::Derived\">Derived</a>&lt;'p, T, P&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = T</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/devise_core/derived.rs.html#150\">source</a><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","devise::Variant","devise::Struct","devise::Enum","devise::Union"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Derived%3C'p,+T,+P%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/devise_core/derived.rs.html#127\">source</a><a href=\"#impl-Debug-for-Derived%3C'p,+T,+P%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'p, T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"devise/struct.Derived.html\" title=\"struct devise::Derived\">Derived</a>&lt;'p, T, P&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/devise_core/derived.rs.html#127\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","devise::Variant","devise::Struct","devise::Enum","devise::Union"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ToTokens-for-Derived%3C'p,+T,+P%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/devise_core/derived.rs.html#155\">source</a><a href=\"#impl-ToTokens-for-Derived%3C'p,+T,+P%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'p, T, P&gt; <a class=\"trait\" href=\"devise/quote/trait.ToTokens.html\" title=\"trait devise::quote::ToTokens\">ToTokens</a> for <a class=\"struct\" href=\"devise/struct.Derived.html\" title=\"struct devise::Derived\">Derived</a>&lt;'p, T, P&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"devise/quote/trait.ToTokens.html\" title=\"trait devise::quote::ToTokens\">ToTokens</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_tokens\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/devise_core/derived.rs.html#156\">source</a><a href=\"#method.to_tokens\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"devise/quote/trait.ToTokens.html#tymethod.to_tokens\" class=\"fn\">to_tokens</a>(&amp;self, tokens: &amp;mut <a class=\"struct\" href=\"devise/proc_macro2/struct.TokenStream.html\" title=\"struct devise::proc_macro2::TokenStream\">TokenStream</a>)</h4></section></summary><div class='docblock'>Write <code>self</code> to the given <code>TokenStream</code>. <a href=\"devise/quote/trait.ToTokens.html#tymethod.to_tokens\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_token_stream\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/quote/to_tokens.rs.html#59\">source</a><a href=\"#method.to_token_stream\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"devise/quote/trait.ToTokens.html#method.to_token_stream\" class=\"fn\">to_token_stream</a>(&amp;self) -&gt; <a class=\"struct\" href=\"devise/proc_macro2/struct.TokenStream.html\" title=\"struct devise::proc_macro2::TokenStream\">TokenStream</a></h4></section></summary><div class='docblock'>Convert <code>self</code> directly into a <code>TokenStream</code> object. <a href=\"devise/quote/trait.ToTokens.html#method.to_token_stream\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_token_stream\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/quote/to_tokens.rs.html#69-71\">source</a><a href=\"#method.into_token_stream\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"devise/quote/trait.ToTokens.html#method.into_token_stream\" class=\"fn\">into_token_stream</a>(self) -&gt; <a class=\"struct\" href=\"devise/proc_macro2/struct.TokenStream.html\" title=\"struct devise::proc_macro2::TokenStream\">TokenStream</a><span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Convert <code>self</code> directly into a <code>TokenStream</code> object. <a href=\"devise/quote/trait.ToTokens.html#method.into_token_stream\">Read more</a></div></details></div></details>","ToTokens","devise::Variant","devise::Struct","devise::Enum","devise::Union"],["<section id=\"impl-Copy-for-Derived%3C'p,+T,+P%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/devise_core/derived.rs.html#161\">source</a><a href=\"#impl-Copy-for-Derived%3C'p,+T,+P%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'p, T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"devise/struct.Derived.html\" title=\"struct devise::Derived\">Derived</a>&lt;'p, T, P&gt;<span class=\"where fmt-newline\">where\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</span></h3></section>","Copy","devise::Variant","devise::Struct","devise::Enum","devise::Union"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()