import React from "react";
import banner from "../../images/fitness.png";
import "./Header.css";

function Header(props) {
  return (
    <div className="hero">
      <div className="header__content">
        <h1>Lorem ipsum odor amet, consectetuer.</h1>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa
          egestas mollis varius; dignissim elementum. consectetuer adipiscing
          elit. Ac purus in massa egestas mollis varius; dignissim elementum.
        </p>
        <button>Try for free</button>
        <div className="header__bottom">
          <div className="header__bottom-container">
            <h3>195k+ Users</h3>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius.
            </p>
          </div>
          <div className="header__bottom-container">
            <h3>195k+ Users</h3>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius.
            </p>
          </div>
        </div>
      </div>
      <div className="header__banner">
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
}

export default Header;
