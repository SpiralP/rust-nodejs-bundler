window.SIDEBAR_ITEMS = {"attr":[["async_test","Retrofits supports for `async fn` in unit tests."],["async_trait","Retrofits support for `async fn` in trait impls and declarations."],["catch","Attribute to generate a `Catcher` and associated metadata."],["delete","Attribute to generate a `Route` and associated metadata."],["get","Attribute to generate a `Route` and associated metadata."],["head","Attribute to generate a `Route` and associated metadata."],["launch","Generates a `main` function that launches a returned `Rocket<Build>`."],["main","Retrofits `async fn` support in `main` functions."],["options","Attribute to generate a `Route` and associated metadata."],["patch","Attribute to generate a `Route` and associated metadata."],["post","Attribute to generate a `Route` and associated metadata."],["put","Attribute to generate a `Route` and associated metadata."],["route","Attribute to generate a `Route` and associated metadata."]],"derive":[["FromForm","Derive for the `FromForm` trait."],["FromFormField","Derive for the `FromFormField` trait."],["Responder","Derive for the `Responder` trait."],["UriDisplayPath","Derive for the `UriDisplay<Path>` trait."],["UriDisplayQuery","Derive for the `UriDisplay<Query>` trait."]],"enum":[["Build","The initial launch [`Phase`]. See Rocket#build for phase details."],["Ignite","The second launch [`Phase`]: post-build but pre-orbit. See Rocket#ignite for details."],["Orbit","The final launch [`Phase`]. See Rocket#orbit for details."]],"fn":[["build","Creates a [`Rocket`] instance with the default config provider: aliases [`Rocket::build()`]."],["custom","Creates a [`Rocket`] instance with a custom config provider: aliases [`Rocket::custom()`]."],["execute","Executes a `future` to completion on a new tokio-based Rocket async runtime."]],"macro":[["catchers","Generates a [`Vec`] of `Catcher`s from a set of catcher paths."],["routes","Generates a [`Vec`] of `Route`s from a set of route paths."],["uri","Type-safe, encoding-safe route and non-route URI generation."]],"mod":[["catcher","Types and traits for error catchers and their handlers and return types."],["config","Server and application configuration."],["data","Types and traits for handling incoming body data."],["error","Types representing various errors that can occur in a Rocket application."],["fairing","Fairings: callbacks at launch, liftoff, request, and response time."],["form","Parsing and validation of HTTP forms and fields."],["fs","File serving, file accepting, and file metadata types."],["http","Types that map to concepts in HTTP."],["local","Structures for local dispatching of requests, primarily for testing."],["outcome","Success, failure, and forward handling."],["request","Types and traits for request parsing and handling."],["response","Types and traits to build and send responses."],["route","Types and traits for routes and their request handlers and return types."],["serde","Serialization and deserialization support."],["shield","Security and privacy headers for all outgoing responses."]],"struct":[["Catcher","An error catching route."],["Config","Rocket server configuration."],["Data","Type representing the body data of a request."],["Error","An error that occurs during launch."],["Request","The type of an incoming web request."],["Response","A response, as returned by types implementing `Responder`."],["Rocket","The application server itself."],["Route","A request handling route."],["Shutdown","A request guard and future for graceful shutdown."],["State","Request guard to retrieve managed state."]],"trait":[["Phase","A marker trait for Rocket’s launch phases."],["Sentinel","An automatic last line of defense against launching an invalid [`Rocket`]."]]};