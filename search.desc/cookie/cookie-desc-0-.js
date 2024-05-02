searchState.loadedDescShard("cookie", 0, "HTTP cookie parsing and cookie jar management.\nRepresentation of an HTTP cookie.\nStructure that follows the builder pattern for building …\nA collection of cookies that tracks its modifications.\nExpiration for a “permanent” cookie at a specific …\nIterator over the changes to a cookie jar.\nWrapper around <code>Cookie</code> whose <code>Display</code> implementation either …\nThe cookie’s name was empty.\nA cookie’s expiration: either a date-time or session.\nIterator over all of the cookies in a jar.\nThe “Lax” <code>SameSite</code> attribute.\nThe cookie did not contain a name/value pair.\nThe “None” <code>SameSite</code> attribute.\nEnum corresponding to a parsing error.\nThe <code>SameSite</code> cookie attribute.\nExpiration for a “session” cookie. Browsers define the …\nAn iterator over cookie parse <code>Result</code>s: …\nThe “Strict” <code>SameSite</code> attribute.\nDecoding the cookie’s name or value resulted in invalid …\nAdds <code>cookie</code> to this jar. If a cookie with the same name …\nAdds an “original” <code>cookie</code> to this jar. If an original …\nReturns a description of this error as a string\nFinishes building and returns the built <code>Cookie</code>.\nCreates a new <code>CookieBuilder</code> starting from a <code>base</code> cookie.\nReturns the inner <code>OffsetDateTime</code> if <code>self</code> is a <code>DateTime</code>.\nReturns an iterator over cookies that represent the …\nSets the <code>domain</code> field in the cookie being built.\nReturns the <code>Domain</code> of the cookie if one was specified.\nReturns the <code>Domain</code> of <code>self</code> as a string slice of the raw …\nPercent-encode the name and value pair.\nWraps <code>self</code> in an encoded <code>Display</code>: a cost-free wrapper …\nSets the <code>expires</code> field in the cookie being built.\nReturns the <code>Expiration</code> of the cookie if one was specified.\nReturns the expiration date-time of the cookie if one was …\nDeprecated. Convert <code>self</code> into a <code>Cookie</code>.\nFormats the cookie <code>self</code> as a <code>Set-Cookie</code> header value.\nRemoves <code>cookie</code> from this jar completely.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns a reference to the <code>Cookie</code> inside this jar with the …\nSets the <code>http_only</code> field in the cookie being built.\nReturns whether this cookie was marked <code>HttpOnly</code> or not. …\nReturns a borrow to the cookie currently being built.\nReturns a mutable borrow to the cookie currently being …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts <code>self</code> into a <code>Cookie</code> with a static lifetime with as …\nReturns <code>true</code> if <code>self</code> is an <code>Expiration::DateTime</code>.\nReturns <code>true</code> if <code>self</code> is <code>SameSite::Lax</code> and <code>false</code> otherwise.\nReturns <code>true</code> if <code>self</code> is <code>SameSite::None</code> and <code>false</code> otherwise.\nReturns <code>true</code> if <code>self</code> is an <code>Expiration::Session</code>.\nReturns <code>true</code> if <code>self</code> is <code>SameSite::Strict</code> and <code>false</code> …\nReturns an iterator over all of the cookies present in …\nMakes <code>self</code> a “permanent” cookie by extending its …\nMake <code>self</code> a “removal” cookie by clearing its value, …\nApplied <code>f</code> to the inner <code>OffsetDateTime</code> if <code>self</code> is a <code>DateTime</code>…\nSets the <code>max_age</code> field in the cookie being built.\nReturns the specified max-age of the cookie if one was …\nReturns the name of <code>self</code>.\nReturns the name of <code>self</code> as a string slice of the raw …\nReturns the name and value of <code>self</code> as a tuple of …\nReturns the name and trimmed value of <code>self</code> as a tuple of …\nCreates a new <code>Cookie</code> with the given name and an empty …\nCreates a new <code>CookieBuilder</code> instance from the given name …\nCreates an empty cookie jar.\nCreates a new <code>Cookie</code> with the given name and value.\nParses a <code>Cookie</code> from the given HTTP cookie header value …\nParses a <code>Cookie</code> from the given HTTP cookie header value …\nSets the <code>partitioned</code> field in the cookie being built.\nReturns whether this cookie was marked <code>Partitioned</code> or not. …\nSets the <code>path</code> field in the cookie being built.\nReturns the <code>Path</code> of the cookie if one was specified.\nReturns the <code>Path</code> of <code>self</code> as a string slice of the raw …\nMakes the cookie being built ‘permanent’ by extending …\nImplementation of HTTP RFC6265 draft cookie prefixes.\nReturns a read-only <code>PrefixedJar</code> with <code>self</code> as its parent …\nReturns a read/write <code>PrefixedJar</code> with <code>self</code> as its parent …\nMakes the cookie being built ‘removal’ by clearing its …\nRemoves <code>cookie</code> from this jar. If an <em>original</em> cookie with …\nRemoves all delta cookies, i.e. all cookies not added via …\nSets the <code>same_site</code> field in the cookie being built.\nReturns the <code>SameSite</code> attribute of this cookie if one was …\nSets the <code>secure</code> field in the cookie being built.\nReturns whether this cookie was marked <code>Secure</code> or not. …\nSets the <code>domain</code> of <code>self</code> to <code>domain</code>.\nSets the expires field of <code>self</code> to <code>time</code>. If <code>time</code> is <code>None</code>, an\nSets the value of <code>http_only</code> in <code>self</code> to <code>value</code>.  If <code>value</code> is …\nSets the value of <code>max_age</code> in <code>self</code> to <code>value</code>. If <code>value</code> is …\nSets the name of <code>self</code> to <code>name</code>.\nSets the value of <code>partitioned</code> in <code>self</code> to <code>value</code>. If <code>value</code> is\nSets the <code>path</code> of <code>self</code> to <code>path</code>.\nSets the value of <code>same_site</code> in <code>self</code> to <code>value</code>. If <code>value</code> is …\nSets the value of <code>secure</code> in <code>self</code> to <code>value</code>. If <code>value</code> is <code>None</code>…\nSets the value of <code>self</code> to <code>value</code>.\nParses the HTTP <code>Cookie</code> header, a series of cookie names …\nParses the HTTP <code>Cookie</code> header, a series of cookie names …\nOnly display the name and value.\nWraps <code>self</code> in a stripped <code>Display</code>]: a cost-free wrapper …\nUnsets the <code>domain</code> of <code>self</code>.\nUnsets the <code>expires</code> of <code>self</code>.\nUnsets the <code>path</code> of <code>self</code>.\nReturns the value of <code>self</code>.\nReturns the value of <code>self</code> as a string slice of the raw …\nReturns the value of <code>self</code> with surrounding double-quotes …\nThe <code>&quot;__Host-&quot;</code> cookie <code>Prefix</code>.\nAlias to <code>Host</code>.\nThe prefix string to prepend.\nTrait identifying HTTP RFC6265 draft cookie prefixes.\nA child jar that automatically prefixes cookies.\nThe <code>&quot;__Secure-&quot;</code> cookie <code>Prefix</code>.\nAlias to <code>Secure</code>.\nAdds <code>cookie</code> to the parent jar. The cookie’s name is …\nAdds <code>cookie</code> to the parent jar. The cookie’s name is …\nModify <code>cookie</code> so it conforms to the requirements of <code>self</code>.\nModify <code>cookie</code> so it conforms to the prefix’s …\nModify <code>cookie</code> so it conforms to the prefix’s …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nFetches the <code>Cookie</code> inside this jar with the prefix <code>P</code> and …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRemoves <code>cookie</code> from the parent jar.")