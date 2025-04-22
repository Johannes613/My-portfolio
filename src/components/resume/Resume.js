import React from "react";
import "./Resume.css";
import { experienceAndEducation } from "./ResumeList";

export default function Resume() {
  return (
    <div className="resume" id="resume">
      <div className="container px-5">
        <h1 data-aos="fade-up"  className="about-head my- text-center">Resume</h1>
        <p data-aos="fade-up" className="text-center resume-desc mt-4">
        A passionate software engineering student with a strong interest in full-stack development and AI.

        </p>
        <div className="row g-5 px-lg-4 px-sm-2">
          {experienceAndEducation.map((item, index) => (
            <div data-aos="fade-up" className="col-lg-6" key={index}>
              <div className="each-exp d-flex flex-column justify-content-center gap-1">
                <h1 className="exp-year">{item.year}</h1>
                <h1 className="exp-name">{item.name}</h1>
                <p className="exp-place">{item.place}</p>
                <p className="exp-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div data-aos="fade-up" className="text-center">
          <button className="my-5 text-center  get-started  text-uppercase">
            <a href="">Download CV</a>
          </button>
        </div>
      </div>
    </div>
  );
}
