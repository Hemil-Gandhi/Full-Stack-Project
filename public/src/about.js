import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <a href="/">
            <img
              src="images/footer_banner_4.png"
              alt=""
              className="logo-image"
            />
          </a>
        </div>
        <ul className="links">
          <li>
            <a href="/orderNow" className="header_a">
              Order Now
            </a>
          </li>
          <li>
            <a href="/location" className="header_a">
              Location
            </a>
          </li>
          <li>
            <a href="/tableBooking" className="header_a">
              Table Booking
            </a>
          </li>
          <li>
            <a href="/about" className="header_a">
              About Us
            </a>
          </li>
          <li>
            <a href="/feedback" className="header_a">
              Feedback
            </a>
          </li>
          <li>
            <a href="/contact" className="header_a">
              Contact us
            </a>
          </li>
        </ul>
      </header>
      <div className="image">
        <div className="content"></div>
        <button id="feedb">ABOUT US</button>
        <img
          src="images/about-us.jpg"
          className="about-us-image"
          alt="About Us"
        />
      </div>
      <section>
        <div className="main">
          <div className="left">
            <h2>
              ABOUT <span>US</span>
            </h2>
            <h5>Making happy people through food</h5>
          </div>
          <div className="right">
            <h4>
              Authentic Punjabi Recipes from Punjab to Gujarat <b>since 2003</b>
              .
            </h4>
            <p>
              Jassi De Parathe has established itself as the authentic Punjabi
              food restaurant in Ahmedabad...
            </p>
          </div>
        </div>
      </section>
      <footer className="footer">
        {
          <>
            <div id="main_1">
              <img
                id="img_3"
                src="images/footer_banner_4.png"
                alt="Footer Banner"
              />
              <ul id="one">
                <br />
                <h3>Contact Details</h3>
                <li>
                  19-A, MSU,
                  <br />
                  Opp. Rajwadi Cha,
                  <br />
                  Alkapuri-390045
                  <br />
                  Gujarat, India.
                </li>
              </ul>
              <ul>
                <h3>Call US</h3>
                <li>T: +91 123456780</li>
                <li>E: info@signaturespice.com</li>
              </ul>
              <br />
              <br />
              <ul>
                <h3>Social</h3>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div className="bottom-header">
              <a href="about.html">ABOUT</a>
              <a href="feedback.html">FEEDBACK</a>
              <a href="contact.html">CONTACT</a>
            </div>
            <b>© 2024 Signature Spice. All Rights Reserved.</b>
          </>
        }
      </footer>
    </div>
  );
};

export default About;
