import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";


const Footer = ({}) => {
  
  return (
    <>   
      <footer class="bg-primary pt-lg-5">
        <section class="section border-bottom border-color">
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-md-3 mb-4 mb-md-0 my-4">
                <h2 className="text-white">ELITE TEAMS</h2>
                  <p class="text-light mb-4"><a class="text-light" href="mailto:mail@eliteteams.online">email - mail@eliteteams.online</a></p>
              </div>
              <div class="col-md-4 col-sm-6">
                <h4 class="text-white mb-4">Services</h4>
                <ul class="list-styled list-hover-underline">
                  <li class="mb-3 text-light"><a href="#" class="text-light">Business Development Strategy Making</a></li>
                  <li class="mb-3 text-light"><a href="#" class="text-light">Research and Analytics </a></li>
                  <li class="mb-3 text-light"><a href="#" class="text-light">Full Stack Development  </a></li>
                  <li class="mb-3 text-light"><a href="#" class="text-light">Software Engineer  </a></li>
                  <li class="mb-3 text-light"><a href="#" class="text-light">Social Media Management  </a></li>
                  <li class="mb-3 text-light"><a href="#" class="text-light">Digital Marketing </a></li>
                  <li class="mb-3 text-light"><a href="#" class="text-light">Sales </a></li>
                  <li class="mb-3 text-light"><a href="#" class="text-light">AI Animation  </a></li>
                  <li class="mb-3 text-light"><a href="#" class="text-light">Designing  </a></li>
                  <li class="mb-3 text-light"><a href="#" class="text-light">Video editing  </a></li>
                </ul>
              </div>
              <div class="col-md-3 col-sm-6">
                <ul class="list-styled list-hover-underline mt-5">
                  <li class="mb-3 text-light"><a href="#" class="text-light">Graphic Design </a></li>
                  <li class="mb-3 text-light"><a href="#" class="text-light">Writing</a></li>
                  <li class="mb-3 text-light"><a href="#" class="text-light">Crypto </a></li>
                  <li class="mb-3 text-light"><a href="#" class="text-light">Full Stack Development  </a></li>
                  <li class="mb-3 text-light"><a href="#" class="text-light">Finance  </a></li>
                  <li class="mb-3 text-light"><a href="#" class="text-light">Trading  </a></li>
                  <li class="mb-3 text-light"><a href="#" class="text-light">Content Creation </a></li>
                  <li class="mb-3 text-light"><a href="#" class="text-light">Advertisement </a></li>
                  <li class="mb-3 text-light"><a href="#" class="text-light">Data Management  </a></li>
                  <li class="mb-3 text-light"><a href="#" class="text-light">Virtual Assistance and Administration  </a></li>
                  <li class="mb-3 text-light"><a href="#" class="text-light">Much more  </a></li>
                </ul>
              </div>
              {/* <div class="col-lg-3 col-md-4 col-sm-6">
                <h4 class="text-white mb-4">Contact Info</h4>
                <ul class="list-unstyled">
                  <li class="mb-3"><a class="text-light" href="mailto:mail@eliteteams.online">email - mail@eliteteams.online</a></li>
                </ul>
              </div> */}
            </div>
          </div>
        </section>

        <section class="py-4">
          <div class="container">
            <div class="row">
              <div class="col-md-6 text-center text-md-left mb-3 mb-md-0">
                <p class="mb-0 text-light">Copyright &copy;
                  <script>
                    var CurrentYear = new Date().getFullYear()
                    document.write(CurrentYear)
                  </script>
                  <span>2023</span>
                </p>
              </div>
              <div class="col-md-6 text-md-right text-center">
                <ul class="list-inline">
                  <li class="list-inline-item"><a href="#" class="text-light">Terms of Service</a></li>
                  <li class="list-inline-item">| &nbsp;<a href="#" class="text-light">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
