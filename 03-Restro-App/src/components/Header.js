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
          <span style={{ color: "orange" }}>Hot</span> &amp;&nbsp;
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

export default Header;
