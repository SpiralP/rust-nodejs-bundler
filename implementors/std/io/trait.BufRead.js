(function() {var implementors = {};
implementors["buf_redux"] = [{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>, P:&nbsp;<a class=\"trait\" href=\"buf_redux/policy/trait.ReaderPolicy.html\" title=\"trait buf_redux::policy::ReaderPolicy\">ReaderPolicy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a> for <a class=\"struct\" href=\"buf_redux/struct.BufReader.html\" title=\"struct buf_redux::BufReader\">BufReader</a>&lt;R, P&gt;","synthetic":false,"types":["buf_redux::BufReader"]}];
implementors["bytes"] = [{"text":"impl&lt;B:&nbsp;<a class=\"trait\" href=\"bytes/buf/trait.Buf.html\" title=\"trait bytes::buf::Buf\">Buf</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a> for <a class=\"struct\" href=\"bytes/buf/struct.Reader.html\" title=\"struct bytes::buf::Reader\">Reader</a>&lt;B&gt;","synthetic":false,"types":["bytes::buf::reader::Reader"]}];
implementors["flate2"] = [{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a> for <a class=\"struct\" href=\"flate2/struct.CrcReader.html\" title=\"struct flate2::CrcReader\">CrcReader</a>&lt;R&gt;","synthetic":false,"types":["flate2::crc::CrcReader"]}];
implementors["futures_util"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.AllowStdIo.html\" title=\"struct futures_util::io::AllowStdIo\">AllowStdIo</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>,&nbsp;</span>","synthetic":false,"types":["futures_util::io::allow_std::AllowStdIo"]}];
implementors["multipart"] = [{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"multipart/server/trait.ReadEntry.html\" title=\"trait multipart::server::ReadEntry\">ReadEntry</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a> for <a class=\"struct\" href=\"multipart/server/struct.MultipartData.html\" title=\"struct multipart::server::MultipartData\">MultipartData</a>&lt;M&gt;","synthetic":false,"types":["multipart::server::field::MultipartData"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a> for <a class=\"enum\" href=\"multipart/server/save/enum.DataReader.html\" title=\"enum multipart::server::save::DataReader\">DataReader</a>&lt;'a&gt;","synthetic":false,"types":["multipart::server::save::DataReader"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()