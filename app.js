import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h3", { id: "heading" }, "Hello World From Rahul!");

const heading1 = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" }, React.createElement("h3", { id: "heading" }, "I am H1 Tag!"))
);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(heading);