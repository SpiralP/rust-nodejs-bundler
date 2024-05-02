searchState.loadedDescShard("futures_channel", 0, "Asynchronous channels.\nA multi-producer, single-consumer queue for sending values …\nA channel for sending a single message between …\nThe receiving end of a bounded mpsc channel.\nThe error type for <code>Sender</code>s used as <code>Sink</code>s.\nThe transmission end of a bounded mpsc channel.\nThe error type returned from <code>try_next</code>.\nThe error type returned from <code>try_send</code>.\nThe receiving end of an unbounded mpsc channel.\nThe transmission end of an unbounded mpsc channel.\nCreates a bounded mpsc channel for communicating between …\nCloses the receiving half of a channel, without dropping …\nCloses the receiving half of a channel, without dropping …\nCloses this channel from the sender side, preventing any …\nCloses this channel from the sender side, preventing any …\nDisconnects this sender from the channel, closing it if …\nDisconnects this sender from the channel, closing it if …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nHashes the receiver into the provided hasher\nHashes the receiver into the provided hasher\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the message that was attempted to be sent but …\nDrops the message and converts into a <code>SendError</code>.\nReturns whether this channel is closed without needing a …\nReturns whether this channel is closed without needing a …\nReturns whether the sender send to this receiver.\nReturns whether the sender send to this receiver.\nReturns <code>true</code> if this error is a result of the receiver …\nReturns <code>true</code> if this error is a result of the receiver …\nReturn false is channel has no queued messages, true …\nReturns <code>true</code> if this error is a result of the channel …\nReturns <code>true</code> if this error is a result of the channel …\nReturn the number of messages in the queue or 0 if channel …\nPolls the channel to determine if there is guaranteed …\nCheck if the channel is ready to receive a message.\nReturns whether the senders send to the same receiver.\nReturns whether the senders send to the same receiver.\nSend a message on the channel.\nSend a message on the channel.\nTries to receive the next message without notifying a …\nTries to receive the next message without notifying a …\nAttempts to send a message on this <code>Sender</code>, returning the …\nCreates an unbounded mpsc channel for communicating …\nSends a message along this channel.\nError returned from a <code>Receiver</code> when the corresponding …\nA future that resolves when the receiving end of a channel …\nA future for a value that will be provided by another …\nA means of transmitting a single value to another task.\nCreates a future that resolves when this <code>Sender</code>’s …\nCreates a new one-shot channel for sending a single value …\nGracefully close this receiver, preventing any subsequent …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTests to see whether this <code>Sender</code>’s corresponding <code>Receiver</code>\nTests to see whether this <code>Sender</code> is connected to the given …\nPolls this <code>Sender</code> half to detect whether its associated …\nCompletes this oneshot with a successful result.\nAttempts to receive a message outside of the context of a …")