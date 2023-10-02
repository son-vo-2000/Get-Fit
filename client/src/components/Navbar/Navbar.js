import React, { useContext, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Navbar.css";
import { useState } from "react";
import { AuthContext } from "../../authContextApi/AuthContext";

function Navbar(props) {
  const [toggle, setToggle] = useState(false);
  const [activePage, setActivePage] = useState('');
  const {currentUser, logout} = useContext(AuthContext);
  const [toggleUser, setToggleUser] = useState(false);
  const closeDropdownRef = useRef(null);
  const closeNavbarRef = useRef(null);
  const navigate = useNavigate();

  const userLogout = () => {
    logout();
    navigate("/")
  }
  const userClients = () => {
    navigate("/main")
  }
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleActivePage = (page) => {
    setActivePage(page);
    setToggle(!toggle);
  }



  // For toggle user
  const toggleUserFunction = () => {
    setToggleUser(!toggleUser);
  }

  const closeDropdown = (event) => {
    if (closeDropdownRef.current && !closeDropdownRef.current.contains(event.target)) {
      setToggleUser(false);
    }
  }

  // for toggle menu navbar on mobile mode
  const closeNavbarFunction = (event) => {
    if (closeNavbarRef.current && !closeNavbarRef.current.contains(event.target)) {
      setToggle(false);
    }
  }
  useEffect(() => {
    setToggle(false)
    // Add a click event listener to the document
    document.addEventListener("click", closeDropdown);
    document.addEventListener("click", closeNavbarFunction)

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", closeDropdown);
      document.removeEventListener("click", closeNavbarFunction)
    };
  }, []);

  return (
    <header className="header">
      <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/" alt="logo" onClick={() => handleActivePage("home")}>
          <img src={logo} />
          GetFit
        </Link>
      </div>
      <ul id={toggle ? "active" : ""} className="app__navbar-menu">
        <div className="navbar__items">
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
        </div>
        {
          !currentUser &&
          <div className="no__user">
            <li>
              <Link to="/login" className="user-wrapper">
                <i className="fa-solid fa-user"/>
                <span>Login</span>
              </Link>
            </li>
            <li>
              <Link to="/register" className="user-wrapper">
                <i className="fa-solid fa-right-to-bracket"/>
                <span>Register</span>
              </Link>
            </li>
          </div>
        }
      </ul>
      {currentUser && 
      <div className="user">
        <div className="user__infor" onClick={toggleUserFunction} ref={closeDropdownRef}> 
          <h3>{currentUser.username}</h3>
          {
            toggleUser ? <i className="fa-solid fa-caret-right"/> : <i className="fa-solid fa-caret-down"/>
          }
        </div>
        <div className={`user__functions ${toggleUser ? "user__funcitons-show" : ""}`} >
          <div className="user__functions-container">
          <div className="user-wrapper" onClick={userClients}>
            <i className="fa-solid fa-file"/>
            <span>My Clients</span>
          </div>
          <div className="user-wrapper" onClick={userLogout}>
            <i className="fa-solid fa-right-to-bracket"/>
            <span >Logout</span>
          </div>
          </div>
        </div>
      </div>
      }
      <div className="app__navbar-icon" onClick={handleToggle} ref={closeNavbarRef}>
        <i className={toggle ? "fa fa-times" : "fa fa-bars"}/>
      </div>
    </nav>
    </header>
  );
}

export default Navbar;
