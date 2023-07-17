import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          Logo
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/main">Get Fit</Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
