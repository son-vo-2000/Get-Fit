import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";
import logo from "./images/logo.png";

function Header(props) {
  return (
    <div className="header-container">
      <header>
        <Link to="/" className="logo">
          <img src={logo} />
          GetFit
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link className="start" to="/main">
            Start Now
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
