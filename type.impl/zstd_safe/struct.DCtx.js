(function() {var type_impls = {
"zstd_safe":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DCtx%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#852-1208\">source</a><a href=\"#impl-DCtx%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"struct\" href=\"zstd_safe/struct.DCtx.html\" title=\"struct zstd_safe::DCtx\">DCtx</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_create\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#856-861\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.try_create\" class=\"fn\">try_create</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Self&gt;</h4></section></summary><div class=\"docblock\"><p>Try to create a new decompression context.</p>\n<p>Returns <code>None</code> if the operation failed (for example, not enough memory).</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.create\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#868-871\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.create\" class=\"fn\">create</a>() -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new decoding context.</p>\n<h5 id=\"panics\"><a class=\"doc-anchor\" href=\"#panics\">§</a>Panics</h5>\n<p>If the context creation fails.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decompress\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#879-895\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.decompress\" class=\"fn\">decompress</a>&lt;C: <a class=\"trait\" href=\"zstd_safe/trait.WriteBuf.html\" title=\"trait zstd_safe::WriteBuf\">WriteBuf</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;mut self,\n    dst: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut C</a>,\n    src: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>],\n) -&gt; <a class=\"type\" href=\"zstd_safe/type.SafeResult.html\" title=\"type zstd_safe::SafeResult\">SafeResult</a></h4></section></summary><div class=\"docblock\"><p>Fully decompress the given frame.</p>\n<p>This decompress an entire frame in-memory. If you can have enough memory to store both the\ninput and output buffer, then it may be faster that streaming decompression.</p>\n<p>Wraps the <code>ZSTD_decompressDCtx()</code> function.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decompress_using_dict\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#905-924\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.decompress_using_dict\" class=\"fn\">decompress_using_dict</a>&lt;C: <a class=\"trait\" href=\"zstd_safe/trait.WriteBuf.html\" title=\"trait zstd_safe::WriteBuf\">WriteBuf</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;mut self,\n    dst: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut C</a>,\n    src: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>],\n    dict: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>],\n) -&gt; <a class=\"type\" href=\"zstd_safe/type.SafeResult.html\" title=\"type zstd_safe::SafeResult\">SafeResult</a></h4></section></summary><div class=\"docblock\"><p>Fully decompress the given frame using a dictionary.</p>\n<p>Dictionary must be identical to the one used during compression.</p>\n<p>If you plan on using the same dictionary multiple times, it is faster to create a <code>DDict</code>\nfirst and use <code>decompress_using_ddict</code>.</p>\n<p>Wraps <code>ZSTD_decompress_usingDict</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decompress_using_ddict\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#931-949\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.decompress_using_ddict\" class=\"fn\">decompress_using_ddict</a>&lt;C: <a class=\"trait\" href=\"zstd_safe/trait.WriteBuf.html\" title=\"trait zstd_safe::WriteBuf\">WriteBuf</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;mut self,\n    dst: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut C</a>,\n    src: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>],\n    ddict: &amp;<a class=\"struct\" href=\"zstd_safe/struct.DDict.html\" title=\"struct zstd_safe::DDict\">DDict</a>&lt;'_&gt;,\n) -&gt; <a class=\"type\" href=\"zstd_safe/type.SafeResult.html\" title=\"type zstd_safe::SafeResult\">SafeResult</a></h4></section></summary><div class=\"docblock\"><p>Fully decompress the given frame using a dictionary.</p>\n<p>Dictionary must be identical to the one used during compression.</p>\n<p>Wraps the <code>ZSTD_decompress_usingDDict()</code> function.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.init\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#958-961\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.init\" class=\"fn\">init</a>(&amp;mut self) -&gt; <a class=\"type\" href=\"zstd_safe/type.SafeResult.html\" title=\"type zstd_safe::SafeResult\">SafeResult</a></h4></section></summary><div class=\"docblock\"><p>Initializes an existing <code>DStream</code> for decompression.</p>\n<p>This is equivalent to calling:</p>\n<ul>\n<li><code>reset(SessionOnly)</code></li>\n<li><code>disable_dictionary()</code></li>\n</ul>\n<p>Wraps the <code>ZSTD_initCStream()</code> function.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reset\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#1000-1004\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.reset\" class=\"fn\">reset</a>(&amp;mut self, reset: <a class=\"enum\" href=\"zstd_safe/enum.ResetDirective.html\" title=\"enum zstd_safe::ResetDirective\">ResetDirective</a>) -&gt; <a class=\"type\" href=\"zstd_safe/type.SafeResult.html\" title=\"type zstd_safe::SafeResult\">SafeResult</a></h4></section></summary><div class=\"docblock\"><p>Resets the state of the context.</p>\n<p>Depending on the reset mode, it can reset the session, the parameters, or both.</p>\n<p>Wraps the <code>ZSTD_DCtx_reset()</code> function.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.load_dictionary\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#1017-1025\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.load_dictionary\" class=\"fn\">load_dictionary</a>(&amp;mut self, dict: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"type\" href=\"zstd_safe/type.SafeResult.html\" title=\"type zstd_safe::SafeResult\">SafeResult</a></h4></section></summary><div class=\"docblock\"><p>Loads a dictionary.</p>\n<p>This will let this context decompress frames that were compressed using this dictionary.</p>\n<p>The dictionary content will be copied internally and does not need to be kept alive after\ncalling this function.</p>\n<p>If you need to use the same dictionary for multiple contexts, it may be more efficient to\ncreate a <code>DDict</code> first, then loads that.</p>\n<p>The dictionary will apply to all future frames, until a new dictionary is set.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.disable_dictionary\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#1030-1038\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.disable_dictionary\" class=\"fn\">disable_dictionary</a>(&amp;mut self) -&gt; <a class=\"type\" href=\"zstd_safe/type.SafeResult.html\" title=\"type zstd_safe::SafeResult\">SafeResult</a></h4></section></summary><div class=\"docblock\"><p>Return to “no-dictionary” mode.</p>\n<p>This will disable any dictionary/prefix previously registered for future frames.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ref_ddict\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#1047-1054\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.ref_ddict\" class=\"fn\">ref_ddict</a>&lt;'b&gt;(&amp;mut self, ddict: &amp;<a class=\"struct\" href=\"zstd_safe/struct.DDict.html\" title=\"struct zstd_safe::DDict\">DDict</a>&lt;'b&gt;) -&gt; <a class=\"type\" href=\"zstd_safe/type.SafeResult.html\" title=\"type zstd_safe::SafeResult\">SafeResult</a><div class=\"where\">where\n    'b: 'a,</div></h4></section></summary><div class=\"docblock\"><p>References a dictionary.</p>\n<p>This will let this context decompress frames compressed with the same dictionary.</p>\n<p>It will apply to all frames decompressed by this context (until a new dictionary is set).</p>\n<p>Wraps the <code>ZSTD_DCtx_refDDict()</code> function.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ref_prefix\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#1063-1074\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.ref_prefix\" class=\"fn\">ref_prefix</a>&lt;'b&gt;(&amp;mut self, prefix: &amp;'b [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"type\" href=\"zstd_safe/type.SafeResult.html\" title=\"type zstd_safe::SafeResult\">SafeResult</a><div class=\"where\">where\n    'b: 'a,</div></h4></section></summary><div class=\"docblock\"><p>Use some prefix as single-use dictionary for the next frame.</p>\n<p>Just like a dictionary, this only works if compression was done with the same prefix.</p>\n<p>But unlike a dictionary, this only applies to the next frame.</p>\n<p>Wraps the <code>ZSTD_DCtx_refPrefix()</code> function.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_parameter\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#1077-1111\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.set_parameter\" class=\"fn\">set_parameter</a>(&amp;mut self, param: <a class=\"enum\" href=\"zstd_safe/enum.DParameter.html\" title=\"enum zstd_safe::DParameter\">DParameter</a>) -&gt; <a class=\"type\" href=\"zstd_safe/type.SafeResult.html\" title=\"type zstd_safe::SafeResult\">SafeResult</a></h4></section></summary><div class=\"docblock\"><p>Sets a decompression parameter.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decompress_stream\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#1124-1139\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.decompress_stream\" class=\"fn\">decompress_stream</a>&lt;C: <a class=\"trait\" href=\"zstd_safe/trait.WriteBuf.html\" title=\"trait zstd_safe::WriteBuf\">WriteBuf</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;mut self,\n    output: &amp;mut <a class=\"struct\" href=\"zstd_safe/struct.OutBuffer.html\" title=\"struct zstd_safe::OutBuffer\">OutBuffer</a>&lt;'_, C&gt;,\n    input: &amp;mut <a class=\"struct\" href=\"zstd_safe/struct.InBuffer.html\" title=\"struct zstd_safe::InBuffer\">InBuffer</a>&lt;'_&gt;,\n) -&gt; <a class=\"type\" href=\"zstd_safe/type.SafeResult.html\" title=\"type zstd_safe::SafeResult\">SafeResult</a></h4></section></summary><div class=\"docblock\"><p>Performs a step of a streaming decompression operation.</p>\n<p>This will read some data from <code>input</code> and/or write some data to <code>output</code>.</p>\n<h5 id=\"returns\"><a class=\"doc-anchor\" href=\"#returns\">§</a>Returns</h5>\n<ul>\n<li><code>Ok(0)</code> if the current frame just finished decompressing successfully.</li>\n<li><code>Ok(hint)</code> with a hint for the “ideal” amount of input data to provide in the next call.\nCan be safely ignored.</li>\n</ul>\n<p>Wraps the <code>ZSTD_decompressStream()</code> function.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.in_size\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#1144-1146\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.in_size\" class=\"fn\">in_size</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Wraps the <code>ZSTD_DStreamInSize()</code> function.</p>\n<p>Returns a hint for the recommended size of the input buffer for decompression.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.out_size\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#1151-1153\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.out_size\" class=\"fn\">out_size</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Wraps the <code>ZSTD_DStreamOutSize()</code> function.</p>\n<p>Returns a hint for the recommended size of the output buffer for decompression.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.sizeof\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#1156-1158\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.sizeof\" class=\"fn\">sizeof</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Wraps the <code>ZSTD_sizeof_DCtx()</code> function.</p>\n</div></details></div></details>",0,"zstd_safe::DStream"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-DCtx%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#846-850\">source</a><a href=\"#impl-Default-for-DCtx%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"zstd_safe/struct.DCtx.html\" title=\"struct zstd_safe::DCtx\">DCtx</a>&lt;'_&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#847-849\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","zstd_safe::DStream"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-DCtx%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#1210-1216\">source</a><a href=\"#impl-Drop-for-DCtx%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"zstd_safe/struct.DCtx.html\" title=\"struct zstd_safe::DCtx\">DCtx</a>&lt;'_&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#1211-1215\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","zstd_safe::DStream"],["<section id=\"impl-Send-for-DCtx%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#1218\">source</a><a href=\"#impl-Send-for-DCtx%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"zstd_safe/struct.DCtx.html\" title=\"struct zstd_safe::DCtx\">DCtx</a>&lt;'_&gt;</h3></section>","Send","zstd_safe::DStream"],["<section id=\"impl-Sync-for-DCtx%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#1220\">source</a><a href=\"#impl-Sync-for-DCtx%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"zstd_safe/struct.DCtx.html\" title=\"struct zstd_safe::DCtx\">DCtx</a>&lt;'_&gt;</h3></section>","Sync","zstd_safe::DStream"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()