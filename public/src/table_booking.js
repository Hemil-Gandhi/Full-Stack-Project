import React from "react";
import "./table_booking.css";

const TableBooking = () => {
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
      <section>
        <div className="section1">
          <div className="main">
            <img
              src="images/Punjabiyat.jpg"
              alt=""
              style={{
                width: "100%",
                height: "25%",
                borderRadius: "10px 10px 0px 0px",
              }}
            />
            <div className="text-section1">
              <div className="part1">
                <h1>SIGNATURE SPICE</h1>
                <br />
                <p>
                  ₹1500 for 2 | Gujarati, Punjabi, Chinese, Italian, Desserts
                </p>
                <p>
                  Alkapuri Vadodara | Gujarat |{" "}
                  <span className="blue-text">
                    <a href="/">Get Direction</a>
                  </span>
                </p>
                <p>
                  Time : 11:00am to 11:00pm{" "}
                  <span className="blue-text">
                    <a href="/">Open Now</a>
                  </span>
                </p>
              </div>
              <div
                className="part2 "
                style={{
                  textAlign: "right",
                  marginLeft: "auto",
                  paddingRight: "20px",
                  paddingTop: "15px",
                }}
              >
                <h1>4</h1>
              </div>
            </div>
            {/* Add other sections like menu, offers, etc. */}
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

export default TableBooking;
