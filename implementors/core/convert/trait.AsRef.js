(function() {var implementors = {};
implementors["actix_http"] = [{"text":"impl AsRef&lt;RequestHead&gt; for RequestHeadType","synthetic":false,"types":[]}];
implementors["actix_web"] = [{"text":"impl&lt;T&gt; AsRef&lt;T&gt; for Path&lt;T&gt;","synthetic":false,"types":[]}];
implementors["bytes"] = [{"text":"impl AsRef&lt;[u8]&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for BytesMut","synthetic":false,"types":[]}];
implementors["bytestring"] = [{"text":"impl AsRef&lt;[u8]&gt; for ByteString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for ByteString","synthetic":false,"types":[]}];
implementors["either"] = [{"text":"impl&lt;L, R, Target&gt; AsRef&lt;Target&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;Target&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;Target&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;L, R&gt; AsRef&lt;str&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;str&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;str&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;L, R&gt; AsRef&lt;Path&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;Path&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;Path&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;L, R&gt; AsRef&lt;OsStr&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;OsStr&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;OsStr&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;L, R&gt; AsRef&lt;CStr&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;CStr&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;CStr&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;L, R, Target&gt; AsRef&lt;[Target]&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;[Target]&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;[Target]&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["failure"] = [{"text":"impl AsRef&lt;dyn Fail + 'static&gt; for Error","synthetic":false,"types":[]}];
implementors["futures_util"] = [{"text":"impl&lt;T:&nbsp;AsRef&lt;[u8]&gt;&gt; AsRef&lt;[u8]&gt; for Window&lt;T&gt;","synthetic":false,"types":[]}];
implementors["generic_array"] = [{"text":"impl&lt;T, N&gt; AsRef&lt;[T]&gt; for GenericArray&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["http"] = [{"text":"impl AsRef&lt;str&gt; for HeaderName","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for HeaderName","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for HeaderValue","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for Method","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for Authority","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;str&gt; for Port&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: AsRef&lt;str&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for Scheme","synthetic":false,"types":[]}];
implementors["mime"] = [{"text":"impl AsRef&lt;str&gt; for Mime","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; AsRef&lt;str&gt; for Name&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["multipart"] = [{"text":"impl AsRef&lt;Path&gt; for SaveDir","synthetic":false,"types":[]}];
implementors["regex_syntax"] = [{"text":"impl AsRef&lt;[u8]&gt; for Literal","synthetic":false,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; AsRef&lt;[&lt;A as Array&gt;::Item]&gt; for SmallVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["tempfile"] = [{"text":"impl AsRef&lt;Path&gt; for TempDir","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Path&gt; for TempPath","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OsStr&gt; for TempPath","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Path&gt; for NamedTempFile","synthetic":false,"types":[]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; AsRef&lt;[&lt;A as Array&gt;::Item]&gt; for ArrayVec&lt;A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'s, T&gt; AsRef&lt;[T]&gt; for SliceVec&lt;'s, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; AsRef&lt;[&lt;A as Array&gt;::Item]&gt; for TinyVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["tokio"] = [{"text":"impl AsRef&lt;TcpStream&gt; for ReadHalf&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;TcpStream&gt; for WriteHalf&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;TcpStream&gt; for OwnedReadHalf","synthetic":false,"types":[]},{"text":"impl AsRef&lt;TcpStream&gt; for OwnedWriteHalf","synthetic":false,"types":[]},{"text":"impl AsRef&lt;UdpSocket&gt; for SendHalf","synthetic":false,"types":[]},{"text":"impl AsRef&lt;UdpSocket&gt; for RecvHalf","synthetic":false,"types":[]},{"text":"impl AsRef&lt;UnixDatagram&gt; for RecvHalf&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;UnixDatagram&gt; for SendHalf&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;UnixDatagram&gt; for OwnedSendHalf","synthetic":false,"types":[]},{"text":"impl AsRef&lt;UnixDatagram&gt; for OwnedRecvHalf","synthetic":false,"types":[]},{"text":"impl AsRef&lt;UnixStream&gt; for ReadHalf&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;UnixStream&gt; for WriteHalf&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;UnixStream&gt; for OwnedReadHalf","synthetic":false,"types":[]},{"text":"impl AsRef&lt;UnixStream&gt; for OwnedWriteHalf","synthetic":false,"types":[]}];
implementors["tracing_core"] = [{"text":"impl AsRef&lt;str&gt; for Field","synthetic":false,"types":[]}];
implementors["trust_dns_proto"] = [{"text":"impl AsRef&lt;[u8]&gt; for Label","synthetic":false,"types":[]}];
implementors["unicase"] = [{"text":"impl&lt;S:&nbsp;AsRef&lt;str&gt;&gt; AsRef&lt;str&gt; for Ascii&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;AsRef&lt;str&gt;&gt; AsRef&lt;str&gt; for UniCase&lt;S&gt;","synthetic":false,"types":[]}];
implementors["url"] = [{"text":"impl AsRef&lt;str&gt; for Url","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()