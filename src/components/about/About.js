import React from "react";
import "./About.css";
import left_img from "../../images/about_img.PNG";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function About() {
  const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(ref.current); 
          }
        },
        {
          threshold: 0.6, 
        }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, []);

  return (
    <div  className="about" id="about">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-md-5 left-section text-center">
            <img
              className="w-100 about-img mx-auto text-center"
              data-aos="zoom-in"
              src={left_img}
              alt="Medical Team"

            />
          </div>
          <div data-aos="fade-up" className=" right-section col-md-7 text-center text-md-start ps-2">
            <h1 className="about-head my-2 mt-5 mt-md-0">About Me</h1>
            <p className="mt-2  lh-lg text-desc  w-75 mx-auto mx-md-0">
              A passionate software engineering student with a strong interest
              in full-stack development and AI.
            </p>
            <div className="tick-list mb-4">
              <div className="each-info row  d-flex align-items-center">
                <p className="key-info col-6">Name:</p>
                <p className="value-info col-6">Yohannis Adamu</p>
              </div>
              <div className="each-info row  d-flex align-items-center">
                <p className="key-info col-6">Date of birth:</p>
                <p className="value-info col-6">February 24, 2005</p>
              </div>
              <div className="each-info row  d-flex align-items-center">
                <p className="key-info col-6">Address:</p>
                <p className="value-info col-6">Abu Dhabi, UAE</p>
              </div>
              <div className="each-info row  d-flex align-items-center">
                <p className="key-info col-6">Zip Code:</p>
                <p className="value-info col-6">WC2941</p>
              </div>
              <div className="each-info row  d-flex align-items-center">
                <p className="key-info col-6">Email:</p>
                <p className="value-info col-6">yohannisadmasu05@gmail.com</p>
              </div>
              <div className="each-info row  d-flex align-items-center">
                <p className="key-info col-6">Phone:</p>
                <p className="value-info col-6">+971 54 394 8653</p>
              </div>
            </div>
            <h5 ref={ref} className="pro">
              <span className="projects-completed mb-3"> {isVisible && <CountUp start={0} end={23} duration={3} />}</span> Projects
              completed
            </h5>
            <button className="my-5 text-center  get-started  text-uppercase">
              <a href="https://drive.google.com/uc?export=download&id=11pO9yZ0AzMsEik5V_VEOQhICiMQp7x0d">
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
