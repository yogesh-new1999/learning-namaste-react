import React from "react";
import ReactDOM from "react-dom/client";

const heading = [
  React.createElement("div", { id: "heading" }, [
    React.createElement("h3", {}, "h1 react"),
    React.createElement("h3", {}, "h3 react"),
  ]),
  React.createElement("h1", { id: "heading-2" }, "heading 2"),
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
