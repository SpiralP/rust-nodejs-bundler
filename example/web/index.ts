let message: string;
if (process.env.NODE_ENV === "production") {
  message = "HELLO RELEASE!";
} else if (process.env.NODE_ENV === "development") {
  message = "HELLO DEBUG!";
} else {
  message = "HELLO UNKNOWN!";
}

const el = document.createElement("h1");
el.innerText = message;
document.body.appendChild(el);
