import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="header">
        {/* <div>
          <h2>CookIT</h2>
        </div>*/}
        <Nav />
      </div>
    </header>
  );
};

export default Header;
