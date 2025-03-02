searchState.loadedDescShard("zstd", 0, "Rust binding to the zstd library.\nDefault compression level.\nCompress and decompress data in bulk.\nThe accepted range of compression levels.\nTrain a dictionary from various sources.\nCompress and decompress Zstd streams.\nAllows to compress independently multiple chunks of data.\nAllows to decompress independently multiple blocks of data.\nCompresses a block of data and returns the compressed …\nCompresses a block of data and returns the compressed …\nCompresses a single block of data to the given destination …\nCompress a single block of data to the given destination …\nGives mutable access to the internal context.\nDecompresses a block of data and returns the decompressed …\nDecompress a block of data, and return the result in a …\nDeompress a single block of data to the given destination …\nDeompress a single block of data to the given destination …\nReturns the argument unchanged.\nReturns the argument unchanged.\nControls whether zstd should include a content checksum at …\nEnables or disabled storing of the contentsize.\nEnables or disables storing of the dict id.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nEnables or disables long-distance matching\nCreates a new zstd compressor\nCreates a new zstd decompressor.\nChanges the compression level used by this compressor.\nChanges the dictionary and compression level used by this …\nChanges the dictionary used by this decompressor.\nSets a compression parameter for this compressor.\nSets a decompression parameter for this decompressor.\nChanges the dictionary used by this compressor.\nChanges the dictionary used by this decompressor.\nSets the target size for compressed blocks.\nGet an upper bound on the decompressed size of data, if …\nSets the maximum back-reference distance.\nSets the maximum back-reference distance.\nCreates a new zstd compressor, using the given dictionary.\nCreates a new zstd decompressor, using the given …\nCreates a new compressor using an existing …\nCreates a new decompressor using an existing …\nCompression dictionary.\nA digested decompression dictionary.\nPrepared dictionary for decompression\nPrepared dictionary for compression\nReturns reference to <code>CDict</code> inner object\nReturns reference to <code>DDict</code> inner object\nCreates a prepared dictionary for compression.\nCreate a prepared dictionary for decompression.\nPrepare a dictionary to compress data.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nTrain a dictionary from a big continuous chunk of data, …\nTrain a dict from a list of files.\nTrain a dictionary from multiple samples.\nTrain a dictionary from multiple samples.\nReturns the dictionary ID for this dict.\nReturns the dictionary ID for this dict.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the <em>current</em> memory usage of this dictionary.\nPrepare a dictionary to compress data.\nDecompress from the given source as if using a <code>Decoder</code>.\nCompress all data from the given source as if using an …\nDecompress from the given source as if using a <code>Decoder</code>.\nCompress all data from the given source as if using an …\nRaw in-memory stream compression/decompression.\nImplement pull-based <code>Read</code> trait for both compressing and …\nImplement push-based <code>Write</code> trait for both compressing and …\nWrappers around raw operations implementing …\nA compression parameter.\nCompression level to use.\nA decompression parameter.\nAn in-memory decoder for streams of data.\nAn in-memory encoder for streams of data.\nWrapper around an input buffer.\nSize in bytes of a compression job.\nHow many threads will be spawned.\nDummy operation that just copies its input to the output.\nRepresents an abstract compression/decompression operation.\nWrapper around an output buffer.\nSpecifies how much overlap must be given to each worker.\nDescribes the result of an operation.\nTarget CBlock size.\nMaximum allowed back-reference distance.\nDescribe a bytes container, like <code>Vec&lt;u8&gt;</code>.\nReturns a new <code>InBuffer</code> around the given slice.\nReturns a new <code>OutBuffer</code> around the given slice.\nReturns a new <code>OutBuffer</code> around the given slice, starting …\nReturns a pointer to the start of the data.\nReturns a pointer to the start of this buffer.\nReturns the valid data part of this container. Should only …\nReturns the part of this buffer that was written to.\nNumber of bytes read from the input.\nNumber of bytes written to the output.\nReturns the full capacity of this container. May include …\nReturns the capacity of the underlying buffer.\nIndicates that the first <code>n</code> bytes of the container have …\nFinishes the operation, writing any footer if necessary.\nFlushes any internal buffer, if any.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a new decoder.\nCreates a new encoder.\nReturns the current cursor position.\nReturns the current cursor position.\nPrepares the operation for a new frame.\nNumber of bytes expected for next input.\nPerforms a single step of this operation.\nPerforms a single step of this operation.\nSets a decompression parameter for this decoder.\nSets a compression parameter for this encoder.\nSets the size of the input expected by zstd.\nSets the new cursor position.\nSets the new cursor position.\nCreates a new decoder which employs the provided context …\nCreates a new encoder that uses the provided context for …\nCreates a new decoder initialized with the given …\nCreates a new encoder initialized with the given …\nCreates a new decoder, using an existing <code>DecoderDictionary</code>.\nCreates a new encoder using an existing <code>EncoderDictionary</code>.\nCreates a new decoder, using a ref prefix\nCreates a new encoder initialized with the given ref …\nCall the given closure using the pointer and capacity from …\nA decoder that decompress input data from another <code>Read</code>.\nAn encoder that compress input data from another <code>Read</code>.\nReturn the inner <code>Read</code>.\nReturn the inner <code>Read</code>.\nFlush any internal buffer.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAcquire a mutable reference to the underlying reader.\nAcquire a mutable reference to the underlying reader.\nAcquire a reference to the underlying reader.\nAcquire a reference to the underlying reader.\nControls whether zstd should include a content checksum at …\nEnables or disabled storing of the contentsize.\nEnables or disables storing of the dict id.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nEnables or disables long-distance matching\nCreates a new decoder.\nCreates a new encoder.\nRecommendation for the size of the output buffer.\nRecommendation for the size of the output buffer.\nSets a decompression parameter on the decompression stream.\nSets the given zstd compression parameter.\nSets the expected size of the input.\nSets the target size for compressed blocks.\nSets this <code>Decoder</code> to stop after the first frame.\nSets the maximum back-reference distance.\nSets the maximum back-reference distance.\nCreates a new decoder around a <code>BufRead</code>.\nCreates a new encoder around a <code>BufRead</code>.\nCreates a new decoder which employs the provided context …\nCreates a new decoder, using an existing dictionary.\nCreates a new encoder, using an existing dictionary.\nCreates a new decoder, using an existing <code>DecoderDictionary</code>.\nCreates a new encoder, using an existing <code>EncoderDictionary</code>.\nCreates a new decoder, using a ref prefix.\nA wrapper around an <code>Encoder&lt;W&gt;</code> that finishes the stream on …\nA wrapper around a <code>Decoder&lt;W&gt;</code> that flushes the stream on …\nA decoder that decompress and forward data to another …\nAn encoder that compress and forward data to another …\nReturns a wrapper around <code>self</code> that will finish the stream …\nReturns a wrapper around <code>self</code> that will flush the stream …\nAttempts to finish the stream.\n<strong>Required</strong>: Finishes the stream.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAcquires a mutable reference to the underlying writer.\nAcquires a mutable reference to the underlying writer.\nAcquires a mutable reference to the underlying writer.\nAcquires a mutable reference to the underlying writer.\nAcquires a reference to the underlying writer.\nAcquires a reference to the underlying writer.\nAcquires a reference to the underlying writer.\nAcquires a reference to the underlying writer.\nControls whether zstd should include a content checksum at …\nEnables or disabled storing of the contentsize.\nEnables or disables storing of the dict id.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the inner <code>Write</code>.\nEnables or disables long-distance matching\nCreates a new encoder.\nCreates a new decoder.\nReturns an encoder that will finish the stream on drop.\nReturns a decoder that will flush the stream on drop.\nReturn a recommendation for the size of data to write at …\nReturn a recommendation for the size of data to write at …\nSets the given zstd compression parameter.\nSets a decompression parameter on the decompression stream.\nSets the expected size of the input.\nSets the target size for compressed blocks.\n<strong>Required</strong>: Attempts to finish the stream.\nSets the maximum back-reference distance.\nSets the maximum back-reference distance.\nCreates an encoder that uses the provided context to …\nCreates a new decoder around the given <code>Write</code> and raw …\nCreates a new encoder, using an existing dictionary.\nCreates a new decoder, using an existing dictionary.\nCreates a new encoder from the given <code>Write</code> and raw encoder.\nCreates a new encoder, using an existing prepared …\nCreates a new decoder, using an existing prepared …\nCreates a new encoder, using a ref prefix\nCreates a new encoder from a prepared zio writer.\nCreates a new decoder around the given prepared zio writer.\nImplements the <code>Read</code> API around an <code>Operation</code>.\nImplements the <code>Write</code> API around an <code>Operation</code>.\nEnds the stream.\nFlush any internal buffer.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the inner reader.\nReturn the wrapped <code>Writer</code> and <code>Operation</code>.\nCreates a new <code>Reader</code>.\nCreates a new <code>Writer</code> with a fixed buffer capacity of 32KB\nCreates a new <code>Writer</code> with user defined capacity.\nGives a reference to the inner operation.\nReturns a mutable reference to the underlying operation.\nGives a mutable reference to the inner operation.\nReturns a reference to the underlying reader.\nReturns a mutable reference to the underlying reader.\nSets <code>self</code> to stop after the first decoded frame.\nCreates a new <code>Writer</code> using the given output buffer.\nGives a reference to the inner writer.\nGives a mutable reference to the inner writer.")