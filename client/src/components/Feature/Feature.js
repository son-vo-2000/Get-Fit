import React from "react";
import "./Feature.css";
import discipline from "../../images/dis.png";
import focus from "../../images/focus.png";
import motivation from "../../images/motivation.png";
import inspire from "../../images/inspire.png";

function Feature(props) {
  return (
    <div className="feature">
      <h1 className="feature__title">Our Feature</h1>

      <div className="feature__cards">
        <div className="card">
          <div className="card__content">
            <div className="card__front">
              <img src={focus} alt="feature" />
            </div>
            <div className="card__back">Focus</div>
          </div>
        </div>
        <div className="card">
          <div className="card__content">
            <div className="card__front">
              <img src={motivation} alt="feature" />
            </div>
            <div className="card__back">Motivation</div>
          </div>
        </div>
        <div className="card">
          <div className="card__content">
            <div className="card__front">
              <img src={discipline} alt="feature" />
            </div>
            <div className="card__back">Discipline</div>
          </div>
        </div>
        <div className="card">
          <div className="card__content">
            <div className="card__front">
              <img src={inspire} alt="feature" />
            </div>
            <div className="card__back">Inspiration</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
