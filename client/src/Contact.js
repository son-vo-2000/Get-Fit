import React, { useState } from "react";
import "./styles/Contact.css";
import contact from "./images/contact.png";
import Footer from "./components/Footer/Footer";

function Contact(props) {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactDescription, setContactDescription] = useState("");

  return (
    <>
      <div className={`contact`}>
        <div className="contact__card">
          <form className="contact__card-left">
            <h1>Get In Touch</h1>
            <p>We are here for you! How can we help?</p>
            <input
              placeholder="Enter your name"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
            />
            <input
              placeholder="Enter your email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
            <textarea
              placeholder="Go ahead, we are listening..."
              value={contactDescription}
              onChange={(e) => setContactDescription(e.target.value)}
            />
            <button>Submit</button>
          </form>
          <div className="contact__card-right">
            <div className="contact__banner">
              <img src={contact} />
            </div>
            <div className="contact__infors">
              <div className="contact__infors-item">
                <i class="fa-solid fa-location-dot"></i>
                <p>258 Washington Avenue</p>
              </div>
              <div className="contact__infors-item">
                <i class="fa-solid fa-phone"></i>
                <p>(123) 456 - 7892</p>
              </div>
              <div className="contact__infors-item">
                <i class="fa-solid fa-envelope"></i>
                <p>jam2022@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact__social">
          <div className="contact__social-social">
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
      <Footer />
    </>
  );
}

export default Contact;
