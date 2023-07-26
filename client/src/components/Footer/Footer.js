import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";


function Footer(props) {
    return (
      <footer className="footer">
        <div className="footer__banner">
          <h2>Ready to join?</h2>
          <Link to="/main">Explore</Link>
        </div>
        <div className="footer__content">
          <div className="footer__logo">
            <img src={logo} />
          </div>
          <div className="footer__info">
            <h1>About the website</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer__contact">
            <h1>Get in touch</h1>
            <div className="footer__contact-social">
              <a
                href="https://www.freecodecamp.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://www.freecodecamp.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.freecodecamp.org/ "
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;