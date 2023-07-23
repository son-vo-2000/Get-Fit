import React from "react";
import { Link } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'

function Header(props) {
  return (
    <div className="header-container">
      <header>
        <Navbar/>
      </header>
    </div>
  );
}

export default Header;
