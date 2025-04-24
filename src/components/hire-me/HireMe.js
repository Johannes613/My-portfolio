import React, { useEffect, useRef, useState } from "react";
import "./HireMe.css";
import CountUp from "react-countup";

export default function HireMe() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // Only once
        }
      },
      {
        threshold: 0.6, // Trigger when 60% visible
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
    <div className="hire-me">
      <div className="contact-head d-flex flex-column gap-4 align-items-center justify-content-center">
        <h1 data-aos="fade-up" className="text-center hire-me-tag fw-bold mt-5">
          I'm <span className="color-me"> Available</span> for freelancing
        </h1>
        <p data-aos="fade-up" className="hire-me-desc">
          A passionate software engineering student with a strong interest in
          full-stack development and AI.
        </p>
        <div data-aos="fade-up" className="text-center">
          <button className="my-3 text-center  get-started  text-uppercase">
            <a href="https://drive.google.com/uc?export=download&id=11pO9yZ0AzMsEik5V_VEOQhICiMQp7x0d">
              Download CV
            </a>
          </button>
        </div>

        <div className="ad-cards row">
          <div data-aos="fade-up" className="col-md-6 col-lg-3">
            <div ref={ref} className="each-card d-flex align-items-center justify-content-center flex-column">
              <h1 className="card-stat"> {isVisible && <CountUp start={0} end={5} duration={2} />}</h1>
              <p className="card-name">Awards</p>
            </div>
          </div>
          <div data-aos="fade-up" className="col-md-6 col-lg-3">
            <div className="each-card d-flex align-items-center justify-content-center flex-column">
              <h1 className="card-stat"> {isVisible && <CountUp start={0} end={20} duration={2} />}+</h1>
              <p className="card-name">Projects</p>
            </div>
          </div>
          <div data-aos="fade-up" className="col-md-6 col-lg-3">
            <div className="each-card d-flex align-items-center justify-content-center flex-column">
              <h1 className="card-stat"> {isVisible && <CountUp start={0} end={100} duration={2} />}k+</h1>
              <p className="card-name">Lines of code</p>
            </div>
          </div>
          <div data-aos="fade-up" className="col-md-6 col-lg-3">
            <div className="each-card d-flex align-items-center justify-content-center flex-column">
              <h1 className="card-stat"> {isVisible && <CountUp start={0} end={200} duration={2} />}</h1>
              <p className="card-name">Cups of coffee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
