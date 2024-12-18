const heading1 = React.createElement("h3", { id: "heading" }, "Hello World From React!");

const heading = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" }, React.createElement("h3", { id: "heading" }, "I am H1 Tag!"))
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);