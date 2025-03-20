import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="main-footer">
        <div className="container">
          <div className="footer-wrap" data-aos="fade-up" data-aos-duration="1500">
            <div className="footer">
              <div className="footer-widget">
                  <h3 className="widget-header">About us</h3>
                  <p>
                    orporate clients and leisure travelers has been relying on
                    Groundlink for dependable safe, and professional chauffeured
                    car end service in major cities across World.
                  </p>
              </div>
            </div>

            <div className="footer">
              <div className="footer-widget widget-2">
                  <h3 className="widget-header">Quick Links</h3>
                <ul className="footer-list">
                  <li>Home</li>
                  <li>Program</li>
                  <li>About us</li>
                  <li>Campus</li>
                  <li>Testimonial</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>

            <div className="footer">
              <div className="footer-widget">
                <div className="footer-widget widget-2">
                    <h3 className="widget-header">Courses</h3>
                  <ul className="footer-list">
                    <li>Ui Ux Design</li>
                    <li>Web Development</li>
                    <li>Business Strategy</li>
                    <li>ReactJs</li>
                    <li>Softwere Development</li>
                    <li>Business English</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer">
              <div className="footer-widget">
                  <h3 className="widget-header">Contact</h3>
                  <p className="cont">
                    Fusce varius, dolor tempor interdum tristiquei bibendum.
                  </p>
                <div className="footer-contact">
                  <span className="number">
                    <a href="tel:(702) 123-1478">(702) 123-1478</a>
                  </span>
                  <a href="mailto:info@company.com" className="mail">info@company.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-content">
            <p>Copyright © 2024 Edusity. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
