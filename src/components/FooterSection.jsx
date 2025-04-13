import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-col">
            <div className="footer_contact">
              <h4>Contact Us</h4>
              <div className="contact_link_box">
                <a href="#">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>123 Tiffin Street, City, State</span>
                </a>
                <a href="tel:+011234567890">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>Call +01 1234567890</span>
                </a>
                <a href="mailto:info@tiffinservice.com">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>info@tiffinservice.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <div className="footer_detail">
              <Link to="/" className="footer-logo">
                TiffinBox
              </Link>
              <p>
                Enjoy the convenience of fresh, home-style meals delivered
                directly to your door. We are dedicated to providing healthy and
                delicious tiffin services with customizable options to suit your
                dietary preferences.
              </p>
              <div className="footer_social">
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-pinterest" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <h4>Delivery Hours</h4>
            <p>Monday - Saturday</p>
            <p>Lunch: 11:00 AM - 2:00 PM</p>
            <p>Dinner: 6:00 PM - 9:00 PM</p>
          </div>
        </div>
        <div className="footer-info">
          <p>© {currentYear} All Rights Reserved By TiffinBox</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
