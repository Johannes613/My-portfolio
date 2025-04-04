import React from "react";
import "./Skills.css";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="container">
        <h1 data-aos="fade-up" className="about-head my- text-center">My Skills</h1>
        <p data-aos="fade-up" className="text-center resume-desc mt-4">
        A passionate software engineering student with a strong interest in full-stack development and AI.

        </p>
        <div className="row px-5">
          <div data-aos="fade-up" className="col-md-6 mb-4">
            <div className="each-skill pe-5">
              <div className="skill-label skill-1 d-flex justify-content-between">
                <p className="label">React JS</p>
                <p className="label">90%</p>
              </div>
              <ProgressBar variant="warning" className="progress-ba" now={90} />
            </div>
          </div>
          <div data-aos="fade-up" className="col-md-6 mb-4">
            <div className="each-skill pe-5">
              <div className="skill-label skill-2 d-flex justify-content-between">
                <p className="label">HTML</p>
                <p className="label">95%</p>
              </div>
              <ProgressBar variant="warning" className="progress-ba" now={95} />
            </div>
          </div>
          <div data-aos="fade-up" className="col-md-6 mb-4">
            <div className="each-skill pe-5">
              <div className="skill-label skill-3 d-flex justify-content-between">
                <p className="label">Firebase</p>
                <p className="label">85%</p>
              </div>
              <ProgressBar variant="warning" className="progress-ba" now={85} />
            </div>
          </div>
          <div data-aos="fade-up" className="col-md-6 mb-4">
            <div className="each-skill pe-5">
              <div className="skill-label skill-6 d-flex justify-content-between">
                <p className="label">Express JS</p>
                <p className="label">85%</p>
              </div>
              <ProgressBar variant="warning" className="progress-ba" now={85} />
            </div>
          </div>
          <div data-aos="fade-up" className="col-md-6 mb-4">
            <div className="each-skill pe-5">
              <div className="skill-label skill-4  d-flex justify-content-between">
                <p className="label">Node JS</p>
                <p className="label">90%</p>
              </div>
              <ProgressBar variant="warning" className="progress-ba" now={90} />
            </div>
          </div>

          <div data-aos="fade-up" className="col-md-6 mb-4">
            <div className="each-skill pe-5">
              <div className="skill-label skill-5 d-flex justify-content-between">
                <p className="label">JavaScript</p>
                <p className="label">90%</p>
              </div>
              <ProgressBar variant="warning" className="progress-ba" now={90} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
