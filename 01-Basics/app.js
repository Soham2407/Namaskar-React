// create react element
const h1 = React.createElement("h1", { id: "title", key: 1 }, "Namaste World");
const p = React.createElement("p", { key: 2 }, "This is my react basic");

const container = React.createElement("div", { id: "container" }, [h1, p]);

// create root
const root = ReactDOM.createRoot(document.getElementById("root"));

// render react element inside root in the DOM
root.render(container);
