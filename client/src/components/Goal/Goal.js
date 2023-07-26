import React from "react";
import "./Goal.css";
import { Link } from "react-router-dom";
import icon from "../../images/hand.png";
import banner from "../../images/gym.png";

function Goal(props) {
  return (
    <div className="goal">
      <div className="goal__banner">
        <img src={banner} alt="banner" />
      </div>

      <div className="goal__content">
        <h1 className="goal__content-title">
          Lorem ipsum odor amet, consectetuer adipiscing elit.
        </h1>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa
          egestas mollis varius; dignissim elementum. consectetuer adipiscing
          elit. Ac purus in massa egestas mollis varius; dignissim elementum.
        </p>
        <div className="goal__content-features">
          <div className="goal__content-feature-card">
            <img src={icon} alt="icon" />
            <h5>Lorem ipsum odor amet</h5>
          </div>
          <div className="goal__content-feature-card">
            <img src={icon} alt="icon" />
            <h5>Lorem ipsum odor amet</h5>
          </div>
          <div className="goal__content-feature-card">
            <img src={icon} alt="icon" />
            <h5>Lorem ipsum odor amet</h5>
          </div>
          <div className="goal__content-feature-card">
            <img src={icon} alt="icon" />
            <h5>Lorem ipsum odor amet</h5>
          </div>
        </div>
        <Link to="/about" className="goal__content-btn">Read More</Link>
      </div>
    </div>
  );
}

export default Goal;
