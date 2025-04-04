import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <Navbar expand="lg" className="">
        <Container className="nav-boot">
          <Navbar.Brand>
            <AnchorLink
              href="/home"
              className="nav-lin home"
              offset="90"
              duration={400}
            >
              Portfolio
            </AnchorLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav text-center">
            <Nav className="gap-0 gap-md-3 gap-lg-4 mx-auto ">
              <AnchorLink
                href="/home"
                offset="90"
                duration={400}
                className="nav-link active"
              >
                <span> Home</span>
              </AnchorLink>
              <AnchorLink
                href="/about"
                offset="90"
                duration={400}
                className="nav-link "
              >
                <span>About</span>
              </AnchorLink>
              <AnchorLink
                href="/resume"
                offset="90"
                duration={400}
                className="nav-link "
              >
                <span>Resume</span>
              </AnchorLink>
              <AnchorLink
                href="/services"
                offset="90"
                duration={400}
                className="nav-link "
              >
                <span>Services</span>
              </AnchorLink>

              <AnchorLink
                href="/skills"
                offset="90"
                duration={400}
                className="nav-link "
              >
                <span>Skills</span>
              </AnchorLink>
              <AnchorLink
                href="/projects"
                offset="90"
                duration={400}
                className="nav-link "
              >
                <span>Projects</span>
              </AnchorLink>
              <AnchorLink
                href="/contact"
                offset="90"
                duration={400}
                className="nav-link"
              >
                <span>Contact</span>
              </AnchorLink>
            </Nav>
            {/* <button className="watch-video">Dashboard</button> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
