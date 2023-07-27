import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Navbar.css";
import { useState } from "react";

function Navbar(props) {
  const [toggle, setToggle] = useState(false);
  const [activePage, setActivePage] = useState('')

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleActivePage = (page) => {
    setActivePage(page);
    setToggle(!toggle);
  }

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/" alt="logo" onClick={() => handleActivePage("home")}>
          <img src={logo} />
          GetFit
        </Link>
      </div>
      <ul id={toggle ? "active" : ""} className="app__navbar-menu">
        <li>
          <Link
            className={activePage === "home" ? "pageActive" : ""}
            onClick={() => handleActivePage("home")}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={activePage === "about" ? "pageActive" : ""}
            onClick={() => handleActivePage("about")}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={activePage === "contact" ? "pageActive" : ""}
            onClick={() => handleActivePage("contact")}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="app__navbar-start">
        <Link to="/main">Start Now</Link>
      </div>
      <div className="app__navbar-icon" onClick={handleToggle}>
        <i className={toggle ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
    </nav>
  );
}

export default Navbar;
