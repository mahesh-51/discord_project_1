import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";


const Header = ({}) => {
  
  return (
    <>   
      <div class="naviagtion naviagtion-white fixed-top transition">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light p-0">
            <a class="navbar-brand p-0" href="index.html"><img src="images/logo/logo-dark.png" alt="Agico" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
              aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse text-center" id="navigation">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle text-dark active text-capitalize" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item text-color" href="index.html">Homepage 1</a>
                    <a class="dropdown-item text-color" href="homepage2.html">Homepage 2</a>
                    <a class="dropdown-item text-color" href="homepage3.html">Homepage 3</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark text-capitalize" href="about.html">about</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark text-capitalize" href="services.html">services</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link text-dark text-capitalize dropdown-toggle" href="#" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">pages</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item text-color" href="team.html">Our Team</a>
                    <a class="dropdown-item text-color" href="pricing.html">Our Pricing</a>
                    <a class="dropdown-item text-color" href="career.html">Our Career</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark text-capitalize" href="blog.html">blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark text-capitalize" href="contact.html">contact</a>
                </li>
              </ul>
              <a href="#" class="btn btn-outline-primary ml-3">sign up</a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
