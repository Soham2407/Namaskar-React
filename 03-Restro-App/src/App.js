import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import RestroList from "./components/RestroList.js";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <RestroList />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
