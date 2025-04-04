import React from "react";
import "./Hero.css";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage2 from "../../images/10003.webp";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Hero() {
  return (
    <div className="hero w-100" id="home">
      <div className="container check p-0">
        <Carousel fade className="p-0 ">
          <Carousel.Item
            interval={2500}
            className="check-2 p-0"
            ride="carousel"
          >
            <div className="container-fluid">
              <div className="row align-items-center gx-5 hero-contain">
                <div className="col-md-6">
                  <Carousel.Caption data-aos="fade-up" className="text-left  left-side d-flex flex-column align-items-center align-items-md-start justify-content-center gap-2 mt-3">
                    <h5 className="hello-msg">Hello!</h5>
                    <h1 className="hero-name">I'm Yohannis Adamu</h1>
                    <h3 className="mb-3 text-md-start text-center">
                      A Freelance Full-Stack Developer
                    </h3>
                    <div className="buttons">
                      <button className="get-started">
                        <a
                          href="mailto:yohannisadmasu05@gmail.com"
                          className="hire-me"
                        >
                          Hire Me
                        </a>
                      </button>
                      <button className="watch-video">
                        {" "}
                        <AnchorLink
                          href="/projects"
                          offset="90"
                          duration={400}
                          className="my-works "
                        >
                          <span>My Works</span>
                        </AnchorLink>
                      </button>
                    </div>
                  </Carousel.Caption>
                </div>

                <div className="col-md-6 text-center cont-img">
                  <img
                    src={ExampleCarouselImage2}
                    className="hero-img img-fluid "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={2500} ride="carousel">
            <div className="container-fluid">
              <div className="row hero-contain">
                <div className="col-md-6">
                  <Carousel.Caption data-aos="fade-up" className="text-left  left-side d-flex flex-column align-items-center align-items-md-start justify-content-center gap-2">
                    <h5 className="hello-msg">Hello!</h5>
                    <h3 className="mb-4 work-name text-md-start text-center">
                      A <span className="color-me">Full-Stack Developer</span>{" "}
                      Based in Abu Dhabi
                    </h3>
                    <div className="buttons">
                    <button className="get-started">
                        <a
                          href="mailto:yohannisadmasu05@gmail.com"
                          className="hire-me"
                        >
                          Hire Me
                        </a>
                      </button>
                      <button className="watch-video">
                        {" "}
                        <AnchorLink
                          href="/projects"
                          offset="90"
                          duration={400}
                          className="my-works "
                        >
                          <span>My Works</span>
                        </AnchorLink>
                      </button>
                    </div>
                  </Carousel.Caption>
                </div>

                <div className="col-md-6 text-center cont-img mt-0 h-50">
                  <img
                    src={ExampleCarouselImage2}
                    className="hero-img img-fluid "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
