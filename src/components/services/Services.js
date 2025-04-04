import React from "react";
import "./Services.css";
import serv1 from "../../images/analysis.webp";

export default function Services() {
  return (
    <div className="services" id="services">
      <div className="container px-5">
        <h1 data-aos="fade-up" className="about-head my- text-center">Services</h1>
        <p data-aos="fade-up" className="text-center resume-desc mt-4">
        A passionate software engineering student with a strong interest in full-stack development and AI.

        </p>
        <div className="row gy-4 gx-4 px-5">
          <div data-aos="fade-up" className="col-lg-4 col-md-6">
            <div className="each-serv d-flex flex-column justify-content-center align-items-center text-center">
              <img src={serv1} className="serv-img" alt="" />
              <p className="serv-name">Web Development</p>
              <p className="bar"></p>
            </div>
          </div>
          <div data-aos="fade-up" className="col-lg-4 col-md-6">
            <div className="each-serv d-flex flex-column justify-content-center align-items-center text-center">
              <img src={serv1} className="serv-img" alt="" />
              <p className="serv-name">AI Integration</p>
              <p className="bar"></p>
            </div>
          </div>
          <div data-aos="fade-up" className="col-lg-4 col-md-6">
            <div className="each-serv d-flex flex-column justify-content-center align-items-center text-center">
              <img src={serv1} className="serv-img" alt="" />
              <p className="serv-name">Mobile App Development</p>
              <p className="bar"></p>
            </div>
          </div>
          <div data-aos="fade-up" className="col-lg-4 col-md-6">
            <div className="each-serv d-flex flex-column justify-content-center align-items-center text-center">
              <img src={serv1} className="serv-img" alt="" />
              <p className="serv-name">Data Analysis</p>
              <p className="bar"></p>
            </div>
          </div>
          <div data-aos="fade-up" className="col-lg-4 col-md-6">
            <div className="each-serv d-flex flex-column justify-content-center align-items-center text-center">
              <img src={serv1} className="serv-img" alt="" />
              <p className="serv-name">UI/UX Design</p>
              <p className="bar"></p>
            </div>
          </div>
          <div data-aos="fade-up" className="col-lg-4 col-md-6">
            <div className="each-serv d-flex flex-column justify-content-center align-items-center text-center">
              <img src={serv1} className="serv-img" alt="" />
              <p className="serv-name">SEO Optimization</p>
              <p className="bar"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
