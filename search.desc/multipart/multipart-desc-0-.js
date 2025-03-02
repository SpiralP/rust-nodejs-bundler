searchState.loadedDescShard("multipart", 0, "Client- and server-side abstractions for HTTP …\nChain a series of results together, with or without …\nThe server-side abstraction for multipart requests. …\nThe body of this request.\nNo  more entries could be read.\nThe next entry was found.\nAn error occurred.\nThe headers that (may) appear before a <code>multipart/form-data</code> …\nA server-side HTTP request that may or may not be …\nThe server-side implementation of <code>multipart/form-data</code> …\nThe data of a field in a <code>multipart/form-data</code> request.\nA field in a multipart request with its associated headers …\nCommon trait for <code>Multipart</code> and <code>&amp;mut Multipart</code>\nTernary result type returned by <code>ReadEntry::next_entry()</code>, …\nReturn the request body for reading.\nThe MIME type (<code>Content-Type</code> value) of this file, if …\nThe field’s data.\nAttempt to unwrap <code>Entry</code>, panicking if this is <code>End</code> or <code>Error</code> …\nAttempt to unwrap <code>Entry</code>, panicking if this is <code>End</code> or <code>Error</code>.\nAttempt to unwrap as <code>Option&lt;Entry&gt;</code>, panicking in the <code>Error</code> …\nThe filename of this entry, if supplied. This is not …\nCall <code>f</code> for each entry in the multipart request.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nIf the given <code>HttpRequest</code> is a multipart/form-data POST …\nThe headers for this field, including the name, filename, …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRead the next entry from this multipart request, returning …\nTake the inner <code>Multipart</code> or <code>&amp;mut Multipart</code>\nConvert <code>self</code> into <code>Result&lt;Option&lt;Entry&gt;&gt;</code> as follows:\nReturns <code>true</code> if this field has no content-type or the …\nGet the boundary string of this request if it is a POST …\nThe field’s name from the form.\nRead the next entry in the request.\nUpdate <code>self</code> as the next entry.\nAttempt to read the next entry in the multipart stream.\nAttempt to read the next entry in the multipart stream.\nRead the next entry from this multipart request, returning …\nEquivalent to <code>read_entry()</code> but takes <code>&amp;mut self</code>\nEquivalent to <code>read_entry()</code> but takes <code>&amp;mut self</code>\nUtilities for saving request entries to the filesystem.\nGet a builder type for saving the files in this request to …\nGet a builder type which can save the field with or …\nSet the minimum buffer size that <code>BufRead::fill_buf(self)</code> …\nAttempt to unwrap <code>Entry</code>, panicking if this is <code>End</code> or <code>Error</code>.\nAttempt to unwrap as <code>Option&lt;Entry&gt;</code>, panicking in the <code>Error</code> …\nConstruct a new <code>Multipart</code> with the given body reader and …\nA drop-in replacement for <code>std::io::BufReader</code> with more …\nIn-memory data source (<code>SavedData::Bytes | Text</code>)\nBinary data.\nThe count limit for files in the request was hit.\nA <code>Read</code> (and <code>BufRead</code>) adapter for <code>SavedData</code>\nA result of <code>Multipart::save()</code>.\nShorthand result for methods that return <code>Entries</code>\nAn error occurred at the start of the operation, before …\nAn error occurred at the start of the operation, before …\nAn error occurred at the start of the operation, before …\nShorthand result for methods that return <code>FieldData</code>s.\nOn-disk data source (<code>SavedData::File</code>)\nA path to a file on the filesystem and its size as written …\nThe operation was a total success. Contained is the …\nThe operation was a total success. Contained is the …\nThe operation was a total success. Contained is the …\nAn error occurred during the operation.\nThe operation quit partway through. Included is the partial\nThe operation quit partway through. Included is the partial\nThe operation quit partway through. Included is the partial\nThe partial result type for <code>Multipart::save*()</code>.\nThe reason the save operation quit partway through.\nThe field that was being read when the save operation quit.\nThis directory is permanent and will be left on the …\nA builder for saving a file or files to the local …\nThe save directory for <code>Entries</code>. May be temporary …\nThe ternary result type used for the <code>SaveBuilder&lt;_&gt;</code> API.\nA saved field’s data container (in memory or on disk)\nA field that has been saved (to memory or disk) from a …\nThe size limit for an individual file was hit.\nThis directory is temporary and will be deleted, along …\nA directory in the filesystem that is automatically …\nValidated UTF-8 text data.\nAn error returned from validating a field as UTF-8 due to …\nGet the path of this directory, either temporary or …\nBox the inner reader without losing data.\nGet the current number of bytes available in the buffer.\nGet the section of the buffer containing valid data; may …\nGet the total buffer capacity.\nCloses and removes the temporary directory, returning a …\nSet the maximum number of fields to process.\nThe data of the field which may reside in memory or on …\nDelete this directory and its contents, regardless of its …\nThe data from the saving operation, if it got that far.\nThe entries that were saved successfully.\nReturn <code>io::Error</code> in the <code>IoError</code> case or panic with the …\nThe fields of the multipart request, mapped by field name …\nThe number of actual fields contained within this <code>Entries</code>.\nWhen encountering a field that is apparently text, read it …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the underlying reader.\nGet an immutable reference to the underlying reader.\nThe headers of the field that was saved.\nDon’t try to read or validate any field data as UTF-8.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTake the <code>Entries</code> from <code>self</code>, if applicable, and discarding …\nTake the <code>Entries</code> from <code>self</code>, if applicable, and discarding …\nConsume <code>self</code> and return the inner reader only.\nConsume <code>self</code> and return both the underlying reader and the …\nDecompose <code>self</code> to <code>(Option&lt;S&gt;, Option&lt;io::Error&gt;)</code>\nPersist the temporary directory to disk, returning the …\nUnwrap the <code>PathBuf</code> from <code>self</code>; if this is a temporary …\nMap <code>self</code> to an <code>io::Result</code>, discarding the error in the …\nPessimistic version of <code>into_result()</code> which will return an …\nReturns <code>true</code> if <code>fields</code> is empty, <code>false</code> otherwise.\nReturns <code>true</code> if the data is known to be in memory (…\nReturns <code>true</code> if this is a temporary directory which will …\nIf this <code>SaveDir</code> is temporary, convert it to permanent. …\nIf <code>partial</code> is present and contains a <code>SavedFile</code> then just …\nMove data to the start of the buffer, making room at the …\nMap the <code>Full</code> or <code>Partial</code> values to a new type, retaining …\nSet the threshold at which to switch from copying a field …\nModify the <code>OpenOptions</code> used to open any files for writing.\nAttempts to make a temporary directory inside of …\nCreate a new <code>BufReader</code> wrapping <code>inner</code>, utilizing a buffer …\nCreate a new <code>Entries</code> with the given <code>SaveDir</code>\nAttempts to make a temporary directory inside of <code>dir</code>. The …\nConvert <code>self</code> to <code>Option&lt;S&gt;</code>; there may still have been an …\nThe field that was in the process of being read. <code>None</code> if …\nAccesses the <code>Path</code> to the temporary directory.\nInspect the current <code>ReaderPolicy</code>.\nMutate the current <code>ReaderPolicy</code> in-place.\nPrint all fields and their contents to stdout. Mostly for …\nUnconditionally perform a read into the buffer.\nGet an adapter for this data which implements <code>Read</code>.\nSum the number of fields in this <code>Entries</code> and then return …\nEnsure room in the buffer for <em>at least</em> <code>additional</code> bytes. …\nThe directory that the entries in <code>fields</code> were saved into.\nSeek to an ofPet, in bytes, in the underlying reader.\nApply a new <code>ReaderPolicy</code> to this <code>BufReader</code>, returning the …\nGet the size of the data, in memory or on disk.\nSet the maximum number of bytes to write out <em>per file</em>.\nThe field that was being read.\nSave the field data, potentially using a file with a …\nSave all fields in the request using a new temporary …\nSave all fields in the request using a new temporary …\nWhen encountering a field that is apparently text, try to …\nConsume <code>self</code> and return an adapter which implements <code>Read</code> …\nReturn <code>io::Error</code> in the <code>IoError</code> case or panic otherwise.\nWrap <code>inner</code> with an existing <code>Buffer</code> instance and the …\nCreate a new <code>BufReader</code> wrapping <code>inner</code>, utilizing a buffer …\nSave the field data, potentially using a file with a …\nSave the file fields in the request to a new permanent …\nCommence the save operation using the existing <code>Entries</code> …\nSave the field data, potentially using a file with the …\nSave the field data, potentially using a file with the …\nAttempts to make a temporary directory with the specified …\nAttempts to make a temporary directory with the specified …\nAttempts to make a temporary directory with the specified …\nAttempts to make a temporary directory with the specified …\nSave all fields in the request using the given <code>TempDir</code>.\nWrite all fields and their contents to the given output. …\nWrite out the field data to <code>dest</code>, truncating if a limit …")