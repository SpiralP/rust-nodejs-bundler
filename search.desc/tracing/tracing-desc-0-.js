searchState.loadedDescShard("tracing", 0, "A scoped, structured logging and diagnostics system.\nThe “debug” level.\n<code>Dispatch</code> trace data to a <code>Subscriber</code>.\nThe “error” level.\n<code>Event</code>s represent single points in time where something …\nThe “info” level.\nAttaches spans to a <code>std::future::Future</code>.\nDescribes the level of verbosity of a span or event.\nMetadata describing a span or event.\nA handle representing a span, with the capability to enter …\nTrait representing the functions required to collect trace …\nThe “trace” level.\nA field value of an erased type.\nThe “warn” level.\nReturns the string representation of the <code>Level</code>.\nReturns an opaque <code>Identifier</code> that uniquely identifies the …\nConstructs a new <code>Event</code> with the specified metadata and set …\nNotifies the subscriber that a span ID has been cloned.\nNotifies the subscriber that a span ID has been cloned.\nReturns a type representing this subscriber’s view of …\nReturns a type representing this subscriber’s view of …\nConstructs an event at the debug level.\nConstructs a span at the debug level.\nReturns the current default dispatcher\nConstructs a new <code>Event</code> with the specified metadata and set …\nDispatches trace events to <code>Subscriber</code>s.\nIf <code>self</code> is the same type as the provided <code>TypeId</code>, returns …\nReturns some reference to this <code>Subscriber</code> value if it is …\nReturns some reference to this <code>Subscriber</code> value if it is …\nReturns some reference to this <code>[</code>Subscriber…\nReturns some reference to this <code>Subscriber</code> value if it is …\nReturns some reference to the <code>Subscriber</code> this <code>Dispatch</code> …\nCreates a <code>WeakDispatch</code> from this <code>Dispatch</code>.\n<strong>This method is deprecated.</strong>\nNotifies the subscriber that a span ID has been dropped.\nReturns true if a span or event with the specified metadata…\nReturns true if a span with the specified metadata would be\nChecks whether a span or event is enabled based on the …\nRecords that a span has been entered.\nRecords that a span has been can_enter.\nConstructs an event at the error level.\nConstructs a span at the error level.\nEvents represent single points in time during the …\nRecords that an <code>Event</code> has occurred.\nRecords that an <code>Event</code> has occurred.\nConstructs a new <code>Event</code>.\nDetermine if an <code>Event</code> should be recorded.\nTests whether an event with the specified level and target …\nRecords that a span has been exited.\nRecords that a span has been exited.\n<code>Span</code> and <code>Event</code> key-value data.\nReturns the names of the fields on the described span or …\nReturns an iterator over the set of values on this <code>Event</code>.\nReturns the name of the source code file where the span …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nInstruments this type with the current <code>Span</code>, returning an …\nConstructs an event at the info level.\nConstructs a span at the info level.\nAttach a span to a <code>std::future::Future</code>.\nInstruments this type with the provided <code>Span</code>, returning an …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if this <code>Subscriber</code> is the same type as <code>T</code>.\nReturns <code>true</code> if this <code>Subscriber</code> is the same type as <code>T</code>.\nReturns <code>true</code> if this <code>Subscriber</code> is the same type as <code>T</code>.\nReturns <code>true</code> if this <code>Subscriber</code> is the same type as <code>T</code>.\nReturns <code>true</code> if this <code>Dispatch</code> forwards to a <code>Subscriber</code> of …\nReturns true if the new event’s parent should be …\nReturns true if the callsite kind is <code>Event</code>.\nReturns true if the new event should be a root.\nReturn true if the callsite kind is <code>Span</code>.\nReturns the level of verbosity of the described span or …\nTrace verbosity level filtering.\nReturns the line number in the source code file where the …\nReturns the highest verbosity level that this <code>Subscriber</code> …\nReturns metadata describing this <code>Event</code>.\nReturns the path to the Rust module where the span …\nReturns the name of the span.\nConstruct new metadata for a span or event, with a name, …\nReturns a <code>Dispatch</code> that forwards to the given <code>Subscriber</code>.\nReturns a new <code>Event</code> in the current span, with the …\nReturns a new <code>Event</code> as a child of the specified span, with …\nVisit the construction of a new span, returning a new span …\nRecord the construction of a new span, returning a new ID …\nReturns a new <code>Dispatch</code> that discards events and spans.\nInvoked when this subscriber becomes a <code>Dispatch</code>.\nReturns the new event’s explicitly-specified parent, if …\nVisits this value with the given <code>Visitor</code>.\nRecord a set of values on a span.\nRecord a set of values on a span.\nVisits all the fields on this <code>Event</code> with the specified …\nAdds an indication that <code>span</code> follows from the span with …\nAdds an indication that <code>span</code> follows from the span with …\nRegisters a new callsite with this subscriber, returning …\nRegisters a new callsite with this subscriber, returning …\nSpans represent periods of time in which a program was …\nConstructs a new span.\nTests whether a span with the specified level and target …\nCollects and records trace data.\nReturns a string describing the part of the system where …\nConstructs an event at the trace level.\nConstructs a span at the trace level.\nNotifies the subscriber that a span ID has been dropped, …\nNotifies the subscriber that a span ID has been dropped, …\nConstructs an event at the warn level.\nConstructs a span at the warn level.\nA guard that resets the current default dispatcher to the …\n<code>Dispatch</code> trace data to a <code>Subscriber</code>.\nReturned if setting the global dispatcher fails.\n<code>WeakDispatch</code> is a version of <code>Dispatch</code> that holds a …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nExecutes a closure with a reference to this thread’s …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSets the dispatch as the default dispatch for the duration …\nSets this dispatch as the global default for the duration …\nAttempts to upgrade this <code>WeakDispatch</code> to a <code>Dispatch</code>.\nSets this dispatch as the default for the duration of a …\n<code>Event</code>s represent single points in time where something …\nTrait implemented to allow a type to be used as a field …\nA <code>Value</code> which serializes as a string using <code>fmt::Debug</code>.\nA <code>Value</code> which serializes using <code>fmt::Display</code>.\nAn empty field.\nAn opaque key allowing <em>O</em>(1) access to a field in a <code>Span</code>’…\nDescribes the fields present on a span.\nAn iterator over a set of fields.\nA field value of an erased type.\nA set of fields and values for a span.\nVisits typed values.\nAttempts to convert <code>&amp;self</code> into a <code>Field</code> with the specified …\nReturns an <code>Identifier</code> that uniquely identifies the <code>Callsite</code>\nReturns an <code>Identifier</code> that uniquely identifies the <code>Callsite</code>\nReturns <code>true</code> if <code>self</code> contains the given <code>field</code>.\nWraps a type implementing <code>fmt::Debug</code> as a <code>Value</code> that can be\nWraps a type implementing <code>fmt::Display</code> as a <code>Value</code> that can …\nReturns the <code>Field</code> named <code>name</code>, or <code>None</code> if no such field …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the index of this field in its <code>FieldSet</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns whether or not this <code>FieldSet</code> has fields.\nReturns true if this <code>ValueSet</code> contains <em>no</em> values.\nReturns an iterator over the <code>Field</code>s in this <code>FieldSet</code>.\nReturns the number of fields in this <code>FieldSet</code>.\nReturns the number of fields in this <code>ValueSet</code> that would …\nReturns a string representing the name of the field.\nConstructs a new <code>FieldSet</code> with the given array of field …\nVisits this value with the given <code>Visitor</code>.\nVisits all the fields in this <code>ValueSet</code> with the provided …\nVisit a boolean value.\nVisit a byte slice.\nVisit a value implementing <code>fmt::Debug</code>.\nRecords a type implementing <code>Error</code>.\nVisit a double-precision floating point value.\nVisit a signed 128-bit integer value.\nVisit a signed 64-bit integer value.\nVisit a string value.\nVisit an unsigned 128-bit integer value.\nVisit an unsigned 64-bit integer value.\nAttaches spans to a <code>std::future::Future</code>.\nA <code>Future</code> that has been instrumented with a <code>tracing</code> <code>Span</code>.\nA <code>Future</code> that has been instrumented with a <code>tracing</code> …\nExtension trait allowing futures to be instrumented with a …\nBorrows the <code>Dispatch</code> that is entered when this type is …\nReturns the argument unchanged.\nReturns the argument unchanged.\nInstruments this type with the current <code>Span</code>, returning an …\nBorrows the wrapped type.\nBorrows the wrapped type.\nMutably borrows the wrapped type.\nMutably borrows the wrapped type.\nGet a pinned mutable reference to the wrapped type.\nGet a pinned mutable reference to the wrapped type.\nGet a pinned reference to the wrapped type.\nGet a pinned reference to the wrapped type.\nInstruments this type with the provided <code>Span</code>, returning an …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsumes the <code>Instrumented</code>, returning the wrapped type.\nConsumes the <code>Instrumented</code>, returning the wrapped type.\nBorrows the <code>Span</code> that this type is instrumented by.\nMutably borrows the <code>Span</code> that this type is instrumented by.\nAttaches the current default <code>Subscriber</code> to this type, …\nAttaches the provided <code>Subscriber</code> to this type, returning a …\nThe “debug” level.\nThe “error” level.\nThe “info” level.\nA filter comparable to a verbosity <code>Level</code>.\nThe “off” level.\nIndicates that a string could not be parsed to a valid …\nThe statically configured maximum trace level.\nThe “trace” level.\nThe “warn” level.\nReturns a <code>LevelFilter</code> that matches the most verbose <code>Level</code> …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns a <code>LevelFilter</code> that enables spans and events with …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the most verbose <code>Level</code> that this filter accepts, …\nTrait implemented by types which have a span <code>Id</code>.\nAttributes provided to a <code>Subscriber</code> describing a new span …\nA guard representing a span which has been entered and is …\nAn owned version of <code>Entered</code>, a guard representing a span …\nIdentifies a span within the context of a subscriber.\nA set of fields recorded by a span.\nA handle representing a span, with the capability to enter …\nReturns the <code>Id</code> of the span that <code>self</code> corresponds to, or …\nConstructs a new <code>Span</code> as child of the given parent span, …\nReturns <code>Attributes</code> describing a new child span of the …\nReturns <code>true</code> if this set of <code>Attributes</code> contains a value …\nReturns <code>true</code> if this <code>Record</code> contains a value for the given …\nReturns a handle to the span considered by the <code>Subscriber</code> …\nEnters this span, returning a guard that will exit the …\nEnters this span, consuming it and returning a guard that …\nExits this span, returning the underlying <code>Span</code>.\nReturns a <code>Field</code> for the field with the given <code>name</code>, if one …\nReturns the set of all fields defined by this span’s …\nIndicates that the span with the given ID has an indirect …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs a new span ID from the given <code>NonZeroU64</code>.\nConstructs a new span ID from the given <code>u64</code>.\nReturns true if this <code>Span</code> has a field for the given <code>Field</code> …\nReturns this span’s <code>Id</code>, if it is enabled.\nReturns this span’s <code>Id</code>, if it is enabled.\nExecutes the given function in the context of this span.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the span’s ID as a <code>NonZeroU64</code>.\nReturns the span’s ID as a <code>u64</code>.\nReturns true if the new span’s parent should be …\nReturns <code>true</code> if this span was disabled by the subscriber …\nReturns true if this set of <code>Attributes</code> contains <em>no</em> values.\nReturns true if this <code>Record</code> contains <em>no</em> values.\nReturns <code>true</code> if this span was constructed by <code>Span::none</code> …\nReturns true if the new span should be a root.\nReturns the number of fields that would be visited from …\nReturns this span’s <code>Metadata</code>, if it is enabled.\nReturns a reference to the new span’s metadata.\nConstructs a new <code>Span</code> with the given metadata and set of …\nReturns <code>Attributes</code> describing a new child span of the …\nConstructs a new <code>Record</code> from a <code>ValueSet</code>.\nConstructs a new disabled span with the given <code>Metadata</code>.\nConstructs a new <code>Span</code> as the root of its own trace tree, …\nReturns <code>Attributes</code> describing a new span at the root of …\nConstructs a new span that is <em>completely disabled</em>.\nReturns this span, if it was enabled by the current …\nReturns the new span’s explicitly-specified parent, if …\nRecords that the field described by <code>field</code> has the value …\nRecords all the fields in this set of <code>Attributes</code> with the …\nRecords all the fields in this <code>Record</code> with the provided …\nRecords all the fields in the provided <code>ValueSet</code>.\nReturns a reference to a <code>ValueSet</code> containing any values …\nInvokes a function with a reference to this span’s ID …\nA guard that resets the current default dispatcher to the …\nIndicates a <code>Subscriber</code>’s interest in a particular …\nA no-op <code>Subscriber</code>.\nReturned if setting the global dispatcher fails.\nTrait representing the functions required to collect trace …\nReturns an <code>Interest</code> indicating the subscriber is always …\nNotifies the subscriber that a span ID has been cloned.\nReturns a type representing this subscriber’s view of …\nIf <code>self</code> is the same type as the provided <code>TypeId</code>, returns …\n<strong>This method is deprecated.</strong>\nReturns true if a span or event with the specified metadata…\nRecords that a span has been entered.\nRecords that an <code>Event</code> has occurred.\nDetermine if an <code>Event</code> should be recorded.\nRecords that a span has been exited.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if the subscriber is always interested in …\nReturns <code>true</code> if the subscriber is never interested in …\nReturns <code>true</code> if the subscriber is sometimes interested in …\nReturns the highest verbosity level that this <code>Subscriber</code> …\nReturns an <code>Interest</code> indicating that the subscriber is …\nReturns a new <code>NoSubscriber</code>.\nVisit the construction of a new span, returning a new span …\nInvoked when this subscriber becomes a <code>Dispatch</code>.\nRecord a set of values on a span.\nAdds an indication that <code>span</code> follows from the span with …\nRegisters a new callsite with this subscriber, returning …\nSets the <code>Subscriber</code> as the default for the current thread …\nSets this subscriber as the global default for the …\nReturns an <code>Interest</code> indicating the subscriber is sometimes …\nNotifies the subscriber that a span ID has been dropped, …\nSets this <code>Subscriber</code> as the default for the current thread …")