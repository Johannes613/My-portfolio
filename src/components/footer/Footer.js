import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row pt-2 px-0 g-0 ">
          <div className="col-sm-6 col-md-4 col-lg-3 text-center text-sm-start d-flex flex-column gap-2 mt-3 justify-content-center ">
            <div className="cont align-self-center mx-auto">
              <h4 className="mb-2 fw-semibold footer-head">About</h4>
              <p className="lower-text">
                A passionate software engineering student with a strong interest
                in full-stack development and AI.
              </p>
              <div className="social-media d-flex justify-content-center justify-content-md-start  m-0 p-0 gap-1">
                <button className="btn">
                  <a href="https://github.com/Johannes613" target="_blank">
                    <FiGithub className="icons" />
                  </a>
                </button>
                <button className="btn">
                  <a href="https://www.linkedin.com/in/yohannis-adamu-1837832b9" target="_blank">
                    <SlSocialLinkedin className="icons" />
                  </a>
                </button>
                <button className="btn">
                  <a href="https://www.facebook.com/share/162Qps5sq2/?mibextid=wwXIfr" target="_blank">
                    <FaFacebookF className="icons" />
                  </a>
                </button>
                <button className="btn">
                  <a href="https://x.com/john40336738581?s=21" target="_blank">
                    <CiTwitter className="icons" />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 text-center text-sm-start mt-3 align-items-center text-start d-flex flex-column gap-1  justify-content-center ">
            <div className="cont  align-self-center">
              <h4 className="mb-2 fw-semibold footer-head">Links</h4>
              <p className="fw-medium">Home</p>
              <p className="fw-medium">About</p>
              <p className="fw-medium">Services</p>
              <p className="fw-medium">Resume</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 text-center text-sm-start align-items-center text-start d-flex flex-column gap-1 mt-3  justify-content-center ">
            <div className="cont  align-self-center">
              <h4 className="mb-2 fw-semibold footer-head">Services</h4>
              <p className="fw-medium">Web Development</p>
              <p className="fw-medium">App Development</p>
              <p className="fw-medium">Data Analysis</p>
              <p className="fw-medium">Web Design</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 text-center text-sm-start align-items-center text-start d-flex flex-column gap-1 mt-3 ">
            <div className="cont ps-2 align-self-center mt-0 mt-lg-0">
              <h4 className="mb-3 fw-semibold footer-head">Get In Touch</h4>
              <p className="m-0 mb-2 p-0 fw-medium">+971 543948653</p>
              <p className="m-0 p-0 fw-medium">yohannisadmasu05@gmail.com</p>
              <p className="m-0 p-0 mt-2 fw-medium">Al Ain Rd, Abu Dhabi, UAE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
