import React from 'react';
import ReactDOM from 'react-dom/client';

// const head = document.createElement("h1");
// head.innerHTML = "Rey React from js";

// const root = document.getElementById("root");
// root.appendChild(head);

// const parent = React.createElement("div", { id: "parent" },
//     [React.createElement("div", { id: "child" }, [
//         React.createElement("h1", {}, "This is babloo from rey-react"),
//         React.createElement("h2", {}, "h2 tag in child")
//     ]),
//     React.createElement("div", { id: "child2" }, [
//         React.createElement("h1", {}, "h1 tag in child2"),
//         React.createElement("h2", {}, "h2 tag in child2")
//     ])]
// );

// JSX (transpiled before it reaches the JS) -> Parcel -> Babel
// JSX -> Babel transpiles it to React.createElement() -> React Element (JS Object) -> HTMLElement(render)

function Title() {
    return (
        <h1 className='head' tabIndex='5'>Rey React using JSX</h1>
    )
}

const JSXHeading = () => (
    <div id="container">
        <h1 className="heading">Rey React Functional Component</h1>
        <Title />
    </div>
);


console.log(JSXHeading)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<JSXHeading />);
