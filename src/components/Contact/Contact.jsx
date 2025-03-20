import React from "react";
import "./Contact.css";
import phone from '../../assets/phone-icon.png'
import mail from '../../assets/mail-icon.png'
import location from '../../assets/location-icon.png'

const Contact = () => {
  return (
    <div className="main-contact">
      <div className="container">
        <div className="testi-heading" data-aos="fade-up" data-aos-duration="1500">
          <h2>Contact Us</h2>
        </div>

        <div className="contact">
          <div className="contact-form" data-aos="fade-right" data-aos-duration="1500">
            <h2>Leave A Reply</h2>
            <p>Fill-up The Form and Message us of your amazing question</p>
            <div className="request-form">
              <form action="" method="post">
                <div className="form-group1">
                  <div className="form-item">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="form-item">
                    <input type="text" placeholder="Your Email" />
                  </div>
                </div>

                <div className="form-group">
                    <div className="form-item">
                        <input type="number" placeholder="Phone Number"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="form-item">
                        <textarea name="" id="" cols="30" rows="5" placeholder="Message"></textarea>
                    </div>
                </div>

                <div className="submit-btn">
                    <button type="submit">Submit Message</button>
                </div>
              </form>
            </div>
          </div>

          <div className="contact-details" data-aos="fade-left" data-aos-duration="1500">
            <div className="contact-top">
                <h3 className="title">Office Information</h3>
                <p>Completely recapitalize 24/7 communities via standards compliant metrics whereas.</p>
            </div>

            <div className="contact-list">
                <div className="list-item">
                    <div className="icon">
                      <img src={phone} alt="" />
                    </div>
                    <div className="content">
                        <h4 className="title">Phone Number</h4>
                        <span>+91 9876543210</span>
                    </div>
                </div>

                <div className="list-item">
                    <div className="icon">
                    <img src={mail} alt="" />
                    </div>
                    <div className="content">
                        <h4 className="title">Email</h4>
                        <span>abc@gmail.com</span>
                    </div>
                </div>

                <div className="list-item">
                    <div className="icon">
                    <img src={location} alt="" />
                    </div>
                    <div className="content">
                        <h4 className="title">Our Office Address</h4>
                        <p>2690 Hilton Street Victoria Road,
                        New York, Canada</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
