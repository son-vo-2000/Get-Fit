import React, { useState } from "react";
import "./styles/About.css";
import banner from "./images/about_banner.png";
import Footer from "./components/Footer/Footer";

function About(props) {
  const [expand, setExpand] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);

  const [expand4, setExpand4] = useState(false);

  const toggleCard = (card) => {
    if (card === 1) {
      setExpand(!expand);
    } else if (card === 2) {
      setExpand2(!expand2);
    } else if (card === 3) {
      setExpand3(!expand3)
    } else {
      setExpand4(!expand4)
    }
  };

  return (
    <>
      <div className="about">
        <div className="about__goal">
          <div className="about__goal-content">
            <h1>Our Goal</h1>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius; dignissim elementum. consectetuer
              adipiscing elit. Ac purus in massa egestas mollis varius;
              dignissim elementum.
            </p>
            <div className="about__goal-check">
              <i class="fa-solid fa-check"></i>
              <p>Lorem ipsum odor amet, consectetuer adipiscing</p>
            </div>
            <div className="about__goal-check">
              <i class="fa-solid fa-check"></i>
              <p>Lorem ipsum odor amet, consectetuer </p>
            </div>
            <div className="about__goal-check">
              <i class="fa-solid fa-check"></i>
              <p>Lorem ipsum odor consectetuer adipiscing</p>
            </div>
          </div>

          <div className="about__goal-banner">
            <img src={banner} alt="banner" />
          </div>
        </div>

        <div className="about__member">
          <h1>Our Member</h1>
          <div className="about__member-container">
            <div className={`about__member-card`}>
              <div className="about__member-card-content">
                <div className="about__member-card-img">
                  <img src={banner} />
                </div>
                <div className={`about__member-card-infor`}>
                  <h2>Jame Bond</h2>
                  <span />
                  <p>CEO</p>
                </div>
                <div onClick={() => toggleCard(1)}>
                  {expand ? (
                    <i class="fa-solid fa-caret-right"></i>
                  ) : (
                    <i class="fa-solid fa-caret-down"></i>
                  )}
                </div>
              </div>
              <div className={`card__social ${expand ? "show" : ""} `}>
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
            <div className={`about__member-card`}>
              <div className="about__member-card-content">
                <div className="about__member-card-img">
                  <img src={banner} />
                </div>
                <div className={`about__member-card-infor`}>
                  <h2>Jame Bond</h2>
                  <span />
                  <p>CEO</p>
                </div>
                <div onClick={() => toggleCard(2)}>
                  {expand2 ? (
                    <i class="fa-solid fa-caret-right"></i>
                  ) : (
                    <i class="fa-solid fa-caret-down"></i>
                  )}
                </div>
              </div>
              <div className={`card__social ${expand2 ? "show" : ""} `}>
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
            <div className={`about__member-card`}>
              <div className="about__member-card-content">
                <div className="about__member-card-img">
                  <img src={banner} />
                </div>
                <div className={`about__member-card-infor`}>
                  <h2>Jame Bond</h2>
                  <span />
                  <p>CEO</p>
                </div>
                <div onClick={() => toggleCard(3)}>
                  {expand3 ? (
                    <i class="fa-solid fa-caret-right"></i>
                  ) : (
                    <i class="fa-solid fa-caret-down"></i>
                  )}
                </div>
              </div>
              <div className={`card__social ${expand3 ? "show" : ""} `}>
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
            <div className={`about__member-card`}>
              <div className="about__member-card-content">
                <div className="about__member-card-img">
                  <img src={banner} />
                </div>
                <div className={`about__member-card-infor`}>
                  <h2>Jame Bond</h2>
                  <span />
                  <p>CEO</p>
                </div>
                <div onClick={() => toggleCard(4)}>
                  {expand4 ? (
                    <i class="fa-solid fa-caret-right"></i>
                  ) : (
                    <i class="fa-solid fa-caret-down"></i>
                  )}
                </div>
              </div>
              <div className={`card__social ${expand4 ? "show" : ""} `}>
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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
