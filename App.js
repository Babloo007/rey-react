// const head = document.createElement("h1");
// head.innerHTML = "Rey React from js";

// const root = document.getElementById("root");
// root.appendChild(head);

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "h1 tag in child"),
        React.createElement("h2", {}, "h2 tag in child")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "h1 tag in child2"),
        React.createElement("h2", {}, "h2 tag in child2")
    ])]
);

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
