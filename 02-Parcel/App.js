import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <h2>Dummy App</h2>
      <input type="text" placeholder="Search..." />
      <h4>Soham Nesarikar</h4>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
