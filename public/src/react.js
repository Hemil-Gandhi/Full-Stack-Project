import React from "react";
import "./style.css";

const SignatureSpice = () => {
  return (
    <div>
      <header>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="shortcut icon" href="main-logo.jpg" type="image/x-icon" />
        <title>Signature Spice</title>
      </header>
      <div className="imageSlider">
        <nav className="navbar">
          <div className="logo">
            <a href="index.html">
              <img
                src="images/footer_banner_4.png"
                alt="Logo"
                style={{ width: "80%" }}
              />
            </a>
          </div>
          <ul className="nav-links">
            <li>
              <a href="orderNow.html" className="header_a">
                Order Now
              </a>
            </li>
            <li>
              <a href="location.html" className="header_a">
                Location
              </a>
            </li>
            <li>
              <a href="table_booking.html" className="header_a">
                Table Booking
              </a>
            </li>
            <li>
              <a href="about.html" className="header_a">
                About Us
              </a>
            </li>
            <li>
              <a href="feedback.html" className="header_a">
                Feedback
              </a>
            </li>
            <li>
              <a href="contact.html" className="header_a">
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <section>
        <table className="section1" style={{ padding: "80px" }}>
          <tbody>
            <tr>
              <td>
                <div className="header-content">
                  <h2>
                    ABOUT <span>US</span>
                  </h2>
                  <h6> Making People Happy through Food</h6>
                </div>
                <div className="text-content">
                  <div className="story-section">
                    <h2>Our Story</h2>
                    <p>
                      At Signature Spice, our story began with a deep passion
                      for authentic flavors and a vision to bring the magic of
                      spices to the world...
                    </p>
                    <p>
                      The inspiration for Signature Spice comes from the vibrant
                      street markets of India, where spices are more than just
                      ingredients—they’re an essential part of life...
                    </p>
                    <p>
                      More than just a restaurant, Signature Spice is a
                      celebration of culture, history, and the connection
                      between people through food...
                    </p>
                    <p>
                      Welcome to Signature Spice—a place where flavor,
                      creativity, and passion come together in perfect harmony.
                    </p>
                    <p>— The Signature Spice Team</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="section1-image">
                  <img
                    src="images/about.jpg"
                    style={{
                      display: "flex",
                      paddingRight: "150px",
                      perspective: "600px",
                      transform:
                        "translate(0%, 12.9102%) translate3d(0px, 0px, 0px)",
                    }}
                    alt="About"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="header-content1">
          <h2>
            OUR <span>LOCATIONS</span>
          </h2>
          <h6>Making People Happy through Food</h6>
          <div className="services-carousel-two owl-carousel owl-theme-1">
            <div className="scroll-container">
              <div className="scroll-item">
                <img src="images/vadodara.jpg" alt="Vadodara Branch" />
                <h3>Vadodara Branch</h3>
              </div>
              <div className="scroll-item">
                <img src="images/Aanad.jpg" alt="Anand Branch" />
                <h3>Anand Branch</h3>
              </div>
              <div className="scroll-item">
                <img src="images/prahladnagar.jpg" alt="Ahmedabad Branch" />
                <h3>Ahmedabad Branch</h3>
              </div>
              <div className="scroll-item">
                <img src="images/Rajkot.jpg" alt="Rajkot Branch" />
                <h3>Rajkot Branch</h3>
              </div>
              <div className="scroll-item">
                <img src="images/surat.jpg" alt="Surat Branch" />
                <h3>Surat Branch</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="header-content3">
          <h2>
            DELICIOUS <span>MENU</span>
          </h2>
          <h6>Making People Happy through Food</h6>
          <br />
          <br />
          <img src="images/menu.jpg" alt="Menu" />
        </div>

        <div className="header-content4">
          <h2>
            SS 's <span>BESTSELLERS</span>
          </h2>
          <h6>Our Must Try Dishes</h6>
          <br />
          <br />
          <div className="services-carousel-two owl-carousel owl-theme-1"></div>
        </div>
      </section>

      <footer className="footer">
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
      </footer>
    </div>
  );
};

export default SignatureSpice;
