import React from "react";
import ReactDOM from "react-dom/client";
import { RestroData } from "./data.js";
import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTx5yXl6YJtm61mz5Tsc4EbDYyjvr4ifgvHUcJZ-mOFwNEqrD47lT1LLSxyFYiiKbqU5c&usqp=CAU"
          alt="hot and cold"
          width={80}
        />
        <h1>
          <span style={{ color: "orange" }}>Hot</span> &{" "}
          <span style={{ color: "blue" }}>Cold</span>
        </h1>
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestroCard = ({ img, name, dsc, price, rate }) => {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <div className="content">
        <h2 className="dish-name">{name}</h2>
        <p className="desc">{dsc}</p>
        <p className="rate">⭐ {rate}</p>
        <p className="price">
          Price - <b>₹{price}</b>
        </p>
      </div>
    </div>
  );
};

const RestroList = () => {
  return (
    <div className="restro-list">
      {RestroData?.map((item) => {
        return <RestroCard {...item} />;
      })}
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>Created by ❤, &copy;copyright 2023</p>
    </footer>
  );
};

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
