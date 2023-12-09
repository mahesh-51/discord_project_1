import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";


const Header = ({}) => {
  
  return (
    <>   
      <div class="container-fluid">
        <div class="naviagtion naviagtion-white fixed-top transition">
          <nav class="navbar navbar-expand-lg navbar-light p-2 bg-primary opacity-75">
            <h3>Elite Teams - Hire Teams</h3>
            <div class="collapse navbar-collapse text-center" id="navigation">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                  <a class="nav-link text-dark text-capitalize" href="about.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark text-capitalize" href="about.html">about</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark text-capitalize" href="services.html">services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark text-capitalize" href="contact.html">contact</a>
                </li>
              </ul>
              <a href="#" class="btn btn-outline-dark text-dark ml-3">Book Call</a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
