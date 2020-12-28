(function() {var implementors = {};
implementors["actix_codec"] = [{"text":"impl&lt;T, U&gt; UnsafeUnpin for Framed&lt;T, U&gt;","synthetic":false,"types":[]}];
implementors["actix_utils"] = [{"text":"impl&lt;S, T, U, I&gt; UnsafeUnpin for Dispatcher&lt;S, T, U, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Service&lt;Request = &lt;U as Decoder&gt;::Item, Response = I&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Error: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Future: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: AsyncRead + AsyncWrite,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Encoder&lt;I&gt; + Decoder,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;U as Encoder&lt;I&gt;&gt;::Error: Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, T&gt; UnsafeUnpin for Dispatcher&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Stream,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Service&lt;Request = S::Item, Response = ()&gt; + 'static,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Service&gt; UnsafeUnpin for TimeoutServiceResponse&lt;T&gt;","synthetic":false,"types":[]}];
implementors["tracing_futures"] = [{"text":"impl&lt;T&gt; UnsafeUnpin for Instrumented&lt;T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()