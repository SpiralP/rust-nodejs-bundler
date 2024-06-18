searchState.loadedDescShard("ahash", 0, "AHash is a high performance keyed hash function.\nA <code>HashMap</code> using <code>RandomState</code> to hash the items. (Requires …\nA <code>HashSet</code> using <code>RandomState</code> to hash the items. (Requires …\nA <code>Hasher</code> for hashing an arbitrary stream of bytes.\nType alias for HashMap&lt;K, V, ahash::RandomState&gt;\nA convenience trait that can be used together with the …\nType alias for HashSet&lt;K, ahash::RandomState&gt;\nA convenience trait that can be used together with the …\nReturns the intersection of <code>self</code> and <code>rhs</code> as a new …\nReturns the union of <code>self</code> and <code>rhs</code> as a new <code>AHashSet&lt;T, S&gt;</code>.\nReturns the symmetric difference of <code>self</code> and <code>rhs</code> as a new …\nConstructs a new AHasher with fixed keys. If <code>std</code> is …\nCreates an empty <code>AHashSet&lt;T, S&gt;</code> with the <code>Default</code> value for …\nReturns the argument unchanged.\nExamples\nReturns the argument unchanged.\nReturns the argument unchanged.\nExamples\nThis crates a hashmap from the provided iterator using …\nThis crates a hashset from the provided iterator using …\nReturns a reference to the value corresponding to the key.\nReturns the key-value pair corresponding to the supplied …\nReturns a mutable reference to the value corresponding to …\nReturns a reference to the value corresponding to the …\nInserts a key-value pair into the map.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a consuming iterator visiting all the keys in …\nCreates a consuming iterator visiting all the values in …\nConstructs a new HashMap\nConstructs a new HashSet\nThis crates a hashmap using RandomState::new which obtains …\nThis crates a hashset using RandomState::new. See the …\nRemoves a key from the map, returning the value at the key …\nReturns the difference of <code>self</code> and <code>rhs</code> as a new …\nConstructs a new HashMap with a given initial capacity\nConstructs a new HashSet with a given initial capacity\nThis crates a hashmap with the specified capacity using …\nThis crates a hashset with the specified capacity using …\nA supplier of Randomness used for different hashers. See …\nProvides a Hasher factory. This is typically used (e.g. by …\nConstructs a new AHasher with keys based on this …\nReturns the argument unchanged.\nCreate a new <code>RandomState</code> <code>BuildHasher</code> based on the provided …\nCalculates the hash of a single value. This provides a …\nCalculates the hash of a single value. This provides a …\nCalls <code>U::from(self)</code>.\nCreate a new <code>RandomState</code> <code>BuildHasher</code> using random keys.\nProvides an optional way to manually supply a source of …\nBuild a <code>RandomState</code> from a single key. The provided key …\nAllows for explicitly setting the seeds to used. All …")