import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import GooglePlayWhite from "../images/icon/google-play-white.png";
import banner2 from "../images/banner/banner-2.png"
import dot1 from "../images/dot/dot-1.png"
import banner from "../images/shape/banner.png"
import dot2 from "../images/dot/dot-2.png"
import About_3 from "../images/about/about-3.jpg"
import About_4 from "../images/about/about-4.jpg"
import curveShape_2 from "../images/shape/curve-shape-2.png"
// import client_1 from "../images/testimonial/client-1.jpg"
import integration_1 from "../images/integration/integration-1.png"
import blogPost_1 from "../images/blog/blog-post-1.jpg"
import blogPost_2 from "../images/blog/blog-post-2.jpg"
import blogPost_3 from "../images/blog/blog-post-3.jpg"
import clientLogo_1 from "../images/partner/client-logo-1.png"
import clientLogo_2 from "../images/partner/client-logo-2.png"
import clientLogo_3 from "../images/partner/client-logo-3.png"
import clientLogo_4 from "../images/partner/client-logo-4.png"
import clientLogo_5 from "../images/partner/client-logo-5.png"
import whyUs from "../images/why-us.png"
import skills from "../images/skills.png"
import google from "../images/Google.png"
import meta from "../images/meta.png"
import amazon from "../images/Amazon-Logo.jpg"
import microsoft from "../images/microsoft.png"
import client_1 from "../images/client-1.png"
import client_2 from "../images/client-2.png"
import client_3 from "../images/client-3.png"
import client_4 from "../images/client-4.png"
import client_5 from "../images/client-5.png"
import client_6 from "../images/client-6.png"
import mainImage from "../images/mainImage.png"

const Home = ({ }) => {

    return (
        <>
            <section class="hero-area hero-area-lg position-relative my-5">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 text-center text-lg-left mb-4 mb-lg-0">
                            <h1 class="text-dark position-relative">A Revolution in Jobs <br /> "Hire Superhumans"</h1>
                            <p class="mb-4 text-dark">Hire Teams for any remote jobs varying from Ai to Sales for jobs or projects. Collaborated with 50+ businesses and have 100+ teams</p>
                        </div>
                        <div class="col-lg-6 position-relative">
                            <img src={mainImage} class="img-fluid w-100" alt="banner-image" />
                        </div>
                    </div>
                </div>
            </section>

            <section class="section section-lg-bottom bg-light my-4">
                <div class="container my-3">
                    <div class="row">
                        <div className="col-2">
                            <a href="#"><img class="img-fluid p-2" src={client_1}
                                alt="partner-1" /></a>
                        </div>
                        <div className="col-2">
                            <a href="#"><img class="img-fluid p-2" src={client_2}
                                alt="partner-2" /></a>
                        </div>
                        <div className="col-2">
                            <a href="#"><img class="img-fluid p-2"src={client_3}
                                alt="partner-3" /></a>
                        </div>
                        <div className="col-2">
                            <a href="#"><img class="img-fluid p-2" src={client_4}
                                alt="partner-4" /></a>
                        </div>
                        <div className="col-2">
                            <a href="#"><img class="img-fluid p-2" src={client_5}
                                alt="partner-5" /></a>
                        </div>
                        <div className="col-2">
                            <a href="#"><img class="img-fluid p-2" src={client_6}
                                alt="partner-4" /></a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="position-relative">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h2 class="section-title">WHY CHOOSE US - COLLABORATED WITH 50+COMPANIES AND HAVE 100+ TEAMS</h2>
                            <p class="subtitle">WHAT WE DO?</p>
                        </div>
                        <div className="col-md-6">
                            <div class="text-center shadow card py-3 border-0 rounded-sm">
                                <div class="card-body" style={{ height: "180px" }}>
                                    <p className="d-flex">Our company assign teams to companies for any remote work varying from software to sales. Each team have a dedicated team manager who contact with the company. We also hire teams on orders. This whole process saves companies important time and effort hiring, bringing them together and managing people. Our company structure allows us to work and hire people from anywhere in the world which allows us to bring top- tier services to you.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="text-center shadow card py-3 border-0 rounded-sm">
                                <div class="card-body" style={{ height: "180px" }}>
                                    <p className="d-flex">It is like getting a superhuman for your company because the team manager is like a employee who can do work of hundreds of people. We have collaborated with 50+ businesses and companies and have 100+ teams</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section pb-0 my-4">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 pr-lg-4 mb-4 mb-md-0">
                            <div class="position-relative">
                                <img src={whyUs} class="img-fluid rounded-sm" alt="video-bg" />
                            </div>
                        </div>
                        <div class="col-md-6 pl-lg-4">
                            <h2 class="section-title">It is like getting a superhuman for your company becauzm,cvmcse the communication is only with one person.n</h2>
                            <ul class="list-unstyled process-steps">
                                <li class="bg-white d-inline-flex shadow rounded-xs p-4 my-2">
                                    <div class="mr-3">
                                        <span class="text-secondary step-number bg-gray-light rounded-circle">01</span>
                                    </div>
                                    <div class="align-self-center">
                                        <h5>How do I get started with my company?</h5>
                                    </div>
                                </li>
                                <li class="bg-white d-inline-flex shadow rounded-xs p-4 my-2">
                                    <div class="mr-3">
                                        <span class="text-secondary step-number bg-gray-light rounded-circle">02</span>
                                    </div>
                                    <div class="align-self-center">
                                        <h5>What fields are available? And what about location</h5>
                                    </div>
                                </li>
                                <li class="bg-white d-inline-flex shadow rounded-xs p-4 my-2">
                                    <div class="mr-3">
                                        <span class="text-secondary step-number bg-gray-light rounded-circle">03</span>
                                    </div>
                                    <div class="align-self-center">
                                        <h5>What is the process?</h5>
                                        <p class="mb-0">Just like hiring an employee, we sign a contract .Then you start giving work to the team manager and revolution begins.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section pb-0 my-4">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 pr-lg-4 mb-4 mb-md-0">
                            <div class="position-relative">
                                <img src={skills} class="img-fluid rounded-sm" alt="video-bg" />
                            </div>
                        </div>
                        <div class="col-md-6 pl-lg-4">
                            <h2 class="section-title">Advantages of this process</h2>
                            <p className="fst-italic">This process have a lot of advantages, some are listed below-</p>
                            <div className="row">
                                <div className="col">
                                    <h6>SAVING TIME AND EFFORT</h6>
                                </div>
                                <div className="col d-flex justify-content-end">
                                    100%
                                </div>

                            </div>
                            <div className="row">
                                <p class="placeholder-glow">
                                    <span class="placeholder col-12 placeholder-sm bg-primary"></span>
                                </p>
                            </div>
                            <div className="row">
                                <div className="col">
                                <h6>TOP TIER TALENT</h6>
                                </div>
                                <div className="col d-flex justify-content-end">
                                    75%
                                </div>

                            </div>
                            <div className="row">
                                <p class="placeholder-glow">
                                    <span class="placeholder col-12 placeholder-sm bg-primary"></span>
                                </p>
                            </div>
                            
                            <div className="row">
                                <div className="col">
                                <h6>COST</h6>
                                </div>
                                <div className="col d-flex justify-content-end">
                                    50%
                                </div>
                            </div>
                            <div className="row">
                                <p class="placeholder-glow">
                                    <span class="placeholder col-12 placeholder-sm bg-primary"></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="">
                    <div class="container my-3">
                        <div class="row">
                            <div class="col-12 text-center">
                                <h2 class="section-title text-dark">JOBS</h2>
                            </div>
                        </div>
                    </div>
                    <div class="container my-3">
                        <p className="text-center">
                            Our company assign teams to companies for any remote work varying from software to sales. Each team have a dedicated team manager who contact with the company.
                        </p>
                        <p className="text-center">
                            We also hire teams on orders. This whole process saves companies important time and effort hiring, bringing them together and managing people.
                        </p>
                        <p className="text-center">
                            Our company structure allows us to work and hire people from anywhere in the world which allows us to bring top- tier services to you.
                        </p>
                    </div>
                </div>
            </section>

            <section class="section bg-cover" data-background="images/background/testimonial-3.jpg">
                <div class="container">
                    <div class="row">
                        <div className="col-3 px-3">
                            <div class="card shadow border-0 my-3" style={{ height: "125px" }}>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Fill Form</h5>
                                    <button type="button" class="btn btn-outline-primary"><span className="">Form</span></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 px-3">
                            <div class="card shadow border-0 my-3" style={{ height: "125px" }}>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Hire <br /> a Super Human !</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 px-3">
                            <div class="card shadow border-0 my-3" style={{ height: "125px" }}>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Get <br /> The Best Team !</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 px-3">
                            <div class="card shadow border-0 my-3" style={{ height: "125px" }}>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Book a Call</h5>
                                    <button type="button" class="btn btn-outline-primary"><span className="">Book call</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="">
                <div class="my-4">
                    <div className="container">
                        <div class="row">
                            <div class="col-9 d-flex justify-content-start">
                                <div className="row">
                                    <div className="col-12">
                                        <h2 class="section-title text-dark">Call To Action</h2>
                                    </div>
                                    <div className="col-12">
                                        <p className="d-flex justify-content-start justify-text">
                                            Our company assign teams to companies for any remote work varying from software to sales. Each team have a dedicated team <br />
                                            manager who contact with the company. We also hire teams on orders. This whole process saves companies important time and effort <br />
                                            hiring, bringing them together and managing people. Our company structure allows us to work and hire people from anywhere in the <br />
                                            world which allows us to bring top- tier services to you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 d-flex justify-content-center my-3">
                                <button type="button" class="btn btn-outline-primary my-5"><span className="">Book Call</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="">
                    <div class="container my-3">
                        <div class="row">
                            <div class="col-12 text-center">
                                <h2 class="section-title text-dark">PORTFOLIO</h2>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div class="col-12 my-md-2 my-2">
                                <button type="submit" class="btn btn-primary btn-lg border-0 w-100">Previous Companies</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section bg-cover" data-background="images/background/testimonial-3.jpg">
                <div class="container">
                    <div class="row">
                        <div className="col-3 px-3">
                            <div class="card shadow border-0 my-3" style={{ height: "140px" }}>
                                <div class="card-body text-center">
                                    <div class="position-relative">
                                        <img src={amazon} style={{ height: "115px" }} class="img-fluid rounded-sm" alt="video-bg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 px-3">
                            <div class="card shadow border-0 my-3" style={{ height: "140px" }}>
                                <div class="card-body text-center">
                                    <div class="position-relative">
                                        <img src={google} style={{ height: "115px" }} class="img-fluid rounded-sm" alt="video-bg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 px-3">
                            <div class="card shadow border-0 my-3" style={{ height: "140px" }}>
                                <div class="card-body text-center">
                                    <div class="position-relative">
                                        <img src={meta} style={{ height: "115px" }} class="img-fluid rounded-sm" alt="video-bg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 px-3">
                            <div class="card shadow border-0 my-3" style={{ height: "140px" }}>
                                <div class="card-body text-center">
                                    <div class="position-relative">
                                        <img src={microsoft} style={{ height: "115px" }} class="img-fluid rounded-sm" alt="video-bg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="">
                    <div class="container my-3">
                        <div class="row">
                            <div class="col-12 text-center">
                                <h2 class="section-title text-dark">TEAMS</h2>
                                <p className="italic">This process have a lot of advantages, some are listed below-</p>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-6 px-3">
                                <div class="card shadow border-0 my-3" style={{ height: "300px" }}>
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-primary"><h2>AI</h2></h5>
                                        <div className="row">
                                            <div className="col-12">
                                                <p>People with experience for over a decade</p>
                                            </div>
                                            <div className="col-12">
                                                <p>Microsoft LEAD ENGINEER </p>
                                            </div>
                                            <div className="col-12">
                                                <p>Apple HEAD CONSULTANT</p>
                                            </div>
                                            <div className="col-12">
                                                <p> A decade of  experience working with all languages Professional </p>
                                            </div>
                                            <div className="col-12">
                                                <p>9x Google Code Jam Champion</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 px-3">
                                <div class="card shadow border-0 my-3" style={{ height: "300px" }}>
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-primary"><h2>SALES</h2></h5>
                                        <div className="row">
                                            <div className="col-12">
                                                <p>Have scaled companies to 500k$ per month in just 3 month !!!</p>
                                            </div>
                                            <div className="col-12">
                                                <p>Outreaching through multiple sources.</p>
                                            </div>
                                            <div className="col-12">
                                                <p>Have account with 500k+ followers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-6 px-3">
                                <div class="card shadow border-0 my-3" style={{ height: "300px" }}>
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-primary"><h2>SOFTWARE DEVELOPMENT</h2></h5>
                                        <div className="row">
                                            <div className="col-12">
                                                <p>Head Developers from companies like Google, Microsoft etc.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 px-3">
                                <div class="card shadow border-0 my-3" style={{ height: "300px" }}>
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-primary"><h2>GAME DEVELOPMENT</h2></h5>
                                        <div className="row">
                                            <div className="col-12">
                                                <p>Developers from company like Krafton and Rockstar.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="">
                    <div class="container my-3">
                        <div class="row">
                            <div class="col-12 text-center">
                                <h2 class="section-title text-dark">PROJECTS</h2>
                                <p className="italic">Assign us projects regarding any remote field and we will complete it in the best way possible. Ex- A full game ,agency etc.</p>
                            </div>
                        </div>
                        <div class="row text-center">
                            <div className="col-6 px-3">
                                <div class="card shadow border-0 my-3" style={{ height: "125px" }}>
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-primary"><h2>Book Call</h2></h5>
                                        <button type="button" class="btn btn-outline-primary"><span className="">Book Call</span></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 px-3">
                                <div class="card shadow border-0 my-3" style={{ height: "125px" }}>
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-primary"><h2>Fill A Form</h2></h5>
                                        <button type="button" class="btn btn-outline-primary"><span className="">Form</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* <section class="subscription bg-white">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="subscription-wrapper">
                                <div class="d-flex position-relative mx-5 justify-content-between align-items-center flex-column flex-md-row text-center text-md-left">
                                    <h3 class="flex-fill">Subscribe <br /> to our newsletter</h3>
                                    <form action="#" class="row flex-fill">
                                        <div class="col-lg-7 my-md-2 my-2">
                                            <input type="email" class="form-control px-4 border-0 w-100 text-center text-md-left" id="email" placeholder="Your Email" name="email" />
                                        </div>
                                        <div class="col-lg-5 my-md-2 my-2">
                                            <button type="submit" class="btn btn-primary btn-lg border-0 w-100">Subscribe Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default Home;
