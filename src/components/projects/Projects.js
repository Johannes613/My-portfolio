import React, { useState } from "react";
import "./Projects.css";
import Card from "react-bootstrap/Card";
import { projectList } from "./ProjectsList";
import { FaLink } from "react-icons/fa";
import { TbSourceCode } from "react-icons/tb";

export default function Projects() {
  const [currCat, setCurrCat] = useState("all");

  const handleCategory = (val) => {
    setCurrCat(val);
  };

  return (
    <div id="projects" className="projects">
      <div className="container px-5">
        <h1 data-aos="fade-up" className="about-head my- text-center">My Projects</h1>
        <p data-aos="fade-up" className="text-center resume-desc my-4">
          A passionate software engineering student with a strong interest in
          full-stack development and AI.
        </p>

        <div data-aos="fade-up" className="filters mt-5 px-5">
          <button onClick={() => handleCategory("all")} className="each-filter">
            All
          </button>
          <button
            onClick={() => handleCategory("popular")}
            className="each-filter"
          >
            Popular
          </button>
          <button
            onClick={() => handleCategory("latest")}
            className="each-filter"
          >
            Latest
          </button>
          <button
            onClick={() => handleCategory("upcoming")}
            className="each-filter"
          >
            Upcoming
          </button>
        </div>
        <div className="row px-5 ">
          {projectList
            .filter(
              (each_proj) => currCat === "all" || currCat === each_proj.category
            )
            .map((each_proj) => {
              return (
                <div 
                data-aos="fade-up"
                  className={`${
                    each_proj.id % 2 === 0 ? "col-lg-7" : "col-lg-5"
                  } col-md-6 mt-4 pt-3 proj-tit `}
                  key={each_proj.id}
                >
                  <Card className="each-proj d-flex flex-column gap-1 mx-auto">
                    <Card.Img
                      variant="top"
                      src={each_proj.img_url}
                      className="project-img"
                    />
                    <Card.Body className="d-flex proj-overlay flex-column gap-1">
                      <Card.Title className="serv-title text-uppercase">
                        {each_proj.project_name}
                      </Card.Title>
                      {/* <Card.Text className="proj-desc">
                        {each_proj.category} Project
                      </Card.Text> */}
                      <Card.Text>
                        <div className="links-pro mb-1">
                        <FaLink className="fs-5 fw-normal me-2" /> <a href={each_proj.demo_link} target="_blank">Project Demo</a>
                        </div>
                        <div className="links-pro">
                        <TbSourceCode className="fs-5 fw-bold me-2" /> <a href={each_proj.source_code} target="_blank">GitHub Repo</a>
                        </div>
                       
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
