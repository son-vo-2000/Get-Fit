import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Feature from "./components/Feature/Feature";
import Goal from "./components/Goal/Goal";
import { useState, useEffect } from "react";
import "./styles/App.css";

function Home(props) {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    setIsVisible(scrollTop > windowHeight);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="home__body">
        <Header />
        <Feature />
        <Goal />
      </div>
      <Footer />
      <span
        className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <i className="fa-solid fa-up-long"></i>
      </span>
    </div>
  );
}

export default Home;
