import React from "react";
import "./Contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { Form } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import img from  "../../images/my-image-latest.PNG";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <h1 data-aos="fade-up" className="about-head my- text-center mt-5">Contact Me</h1>
        <p data-aos="fade-up" className="text-center resume-desc mt-4">
        A passionate software engineering student with a strong interest in full-stack development and AI.

        </p>
        <div className="row mt-5">
          <div data-aos="fade-up" className="col-lg-3 div-md-6">
            <div className="each-add text-center d-flex gap-2 flex-column align-items-center">
              <FaLocationDot className="add-icon" />
              <p className="text-uppercase add-name">Address</p>
              <p className="add-desc">Al Ain Rd, Abu Dhabi, UAE</p>
            </div>
          </div>
          <div data-aos="fade-up" className="col-lg-3 div-md-6">
            <div className="each-add text-center d-flex gap-2 flex-column align-items-center">
              <FaPhoneAlt className="add-icon" />
              <p className="text-uppercase add-name">Phone</p>
              <p className="add-desc">+971 54 394 8653</p>
            </div>
          </div>
          <div data-aos="fade-up" className="col-lg-3 div-md-6">
            <div className="each-add text-center d-flex gap-2 flex-column align-items-center">
              <IoMdMail className="add-icon" />
              <p className="text-uppercase add-name">Mail</p>
              <p className="add-desc">yohannisadmasu05@gmail.com</p>
            </div>
          </div>
          <div data-aos="fade-up" className="col-lg-3 div-md-6">
            <div className="each-add text-center d-flex gap-2 flex-column align-items-center">
              <FaTelegramPlane className="add-icon" />
              <p className="text-uppercase add-name">Message</p>
              <p className="add-desc">@John_ad_ad</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row g-3 pt-5 mt-5 contact-cont px-5">
          <div className="col-12 col-lg-6 contact-left  d-flex flex-column justify-content-center">
            <img src={img} alt="" />
          </div>
          <div className="col-12  col-lg-6  contact-form   ">
            <form className="  d-flex flex-column justify-content-center gap-3 px-3 for">
              <div className="form-sections d-flex gap-3 mb-2 mt-2 ">
                <Form.Control
                  className="inputs "
                  size="lg"
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="form-sections d-flex gap-3 mb-3">
                <Form.Control
                  className="inputs "
                  size="lg"
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <Form.Control
                className="inputs "
                size="lg"
                type="tel"
                placeholder="Phone number"
                required
              />

              <Form.Control
                className="inputs"
                placeholder="Message"
                as="textarea"
                rows={5}
              />

              <div className="text-start">
                <button
                  type="submit"
                  data-aos="fade-up"
                  className="my-3 text-center modify-btn   get-started  text-uppercase"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
