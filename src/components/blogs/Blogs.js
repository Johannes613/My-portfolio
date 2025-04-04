import React from "react";
import "./Blogs.css";
import Card from "react-bootstrap/Card";
import { blogs } from "./BlogsList";

export default function Blogs() {
  return (
    <div className="blogs">
      <div className="container">
      <h1 data-aos="fade-up" className="about-head my- text-center">My Blog</h1>
        <p data-aos="fade-up" className="text-center resume-desc mt-4">
        A passionate software engineering student with a strong interest in full-stack development and AI.
        </p>
        <div className="row g-4 mt-4">
          {blogs.map((blog) => (
            <div data-aos="fade-up" key={blog.id} className="col-lg-4 col-md-6 mb-5">
              <div>
              <Card className=" each-blog text-start d-flex flex-column gap-3">
                <Card.Img
                  variant="top"
                  src={blog.image}
                  className="m-0 blog-img"
                />
                <Card.Body className="ps-4">
                  <p className="blog-date">June 21, 2024 Admin 3</p>
                  <Card.Title className="fs-4 fw-semibold blog-title mb-3">
                    {blog.title}
                  </Card.Title>
                  <Card.Text className="blog-content">{blog.content}</Card.Text>
                </Card.Body>
                <p className="text-uppercase read-more-text mt-0 ps-4 pb-2">
                  Read More +
                </p>
              </Card>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
