import React from "react";
import "./feedback.css";

const Feedback = () => {
  return (
    <div
      className="container"
      style={{ background: "url(images/bg-pattern.jpg)" }}
    >
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
        <button id="feedb">FEEDBACK</button>
        <img
          src="images/feedback-bg-jdp.jpg"
          className="feedback-image"
          alt="Feedback"
        />
      </div>
      <section>
        <div className="main-form">
          <div className="form-text">
            <h2>
              FEEDBACK <span>FORM</span>
            </h2>
            <h5>Making happy people through food</h5>
          </div>
          <div className="form-content">
            <form action="/submit" method="post">
              <input
                type="text"
                placeholder="Name *"
                name="name"
                className="name"
                id="name"
              />
              <input
                type="number"
                placeholder="Contact-Number *"
                className="contact"
                name="contact"
                id="contact"
              />
              <br />
              <input
                type="date"
                placeholder="Date of Visit *"
                className="date"
                name="date"
                id="date"
              />
              <label className="branch">Select Your reason *</label>
              <select className="reason" id="reason" name="reason">
                <option value="Food">Food</option>
                <option value="Services">Service</option>
                <option value="Ambience">Ambience</option>
                <option value="Other">Others</option>
              </select>
              <div className="ratings">{/* Add ratings */}</div>
              <div className="form-group">
                <label id="comments">
                  Do you have any feedback/suggestions for us:
                </label>
                <br />
                <input id="comment" name="comment" />
              </div>
              <button type="submit" style={{ borderRadius: "10px" }}>
                Send Message <span className="dot"></span>
              </button>
            </form>
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

export default Feedback;
