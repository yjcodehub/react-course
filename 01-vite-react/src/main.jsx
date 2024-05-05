import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return <h1>Hello from my app</h1>;
}

/* const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },-+
  children: "Click me to visit Google",
}; */

const AnotherElement = (
  <a href="https://www.google.com" target="_blank">
    Visit to Google
  </a>
);

const reactElement = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "Click me to visit Google"
);
ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
