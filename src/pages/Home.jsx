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
import client_1 from "../images/testimonial/client-1.jpg"
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




const Home = ({ }) => {

    return (
        <>
            <section class="hero-area hero-area-lg position-relative">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 text-center text-lg-left mb-4 mb-lg-0">
                            <h1 class="text-dark position-relative">A Revolution in Jobs <br /> "Hire Superhumans"</h1>
                            <p class="mb-4 text-dark">Hire Teams for any remote jobs varying from Ai to Sales for jobs or projects. Collaborated with 50+ businesses and have 100+ teams</p>
                            {/* <ul class="list-inline">
                                <li class="list-inline-item mx-1 my-2">
                                    <a href="#" class="btn btn-primary">
                                        <img src={GooglePlayWhite} class="img-fluid mr-2" alt="play-store" /> Google Play</a>
                                </li>
                                <li class="list-inline-item mx-1 my-2">
                                    <a href="#" class="btn btn-outline-primary"><i class="fa fa-apple text-secondary mr-3 transition"></i>App
                                        Store</a>
                                </li>
                            </ul> */}
                        </div>
                        <div class="col-lg-6 position-relative">
                            <img src={banner2} class="img-fluid w-100" alt="banner-image"/>
                            <img src={dot1} class="img-fluid bg-shape-3" alt="bg-shape"/>
                        </div>
                    </div>
                </div>

                {/* <img src={banner} class="img-fluid bg-shape-1" alt="bg-shape" />
                <img src={dot2} class="img-fluid bg-shape-2" alt="bg-shape" /> */}
            </section>

            <section class="section section-lg-bottom bg-light my-4">
                <div class="container">
                    <div class="row">
                        <div class="col-12 my-3">
                            <ul class="list-inline d-flex justify-content-between align-items-center">
                                <li class="list-inline-item"><a href="#"><img class="img-fluid p-2" src={clientLogo_1}
                                    alt="partner-1" /></a></li>
                                <li class="list-inline-item"><a href="#"><img class="img-fluid p-2" src={clientLogo_2}
                                    alt="partner-2" /></a></li>
                                <li class="list-inline-item"><a href="#"><img class="img-fluid p-2" src={clientLogo_3}
                                    alt="partner-3" /></a></li>
                                <li class="list-inline-item"><a href="#"><img class="img-fluid p-2" src={clientLogo_4}
                                    alt="partner-4" /></a></li>
                                <li class="list-inline-item"><a href="#"><img class="img-fluid p-2" src={clientLogo_5}
                                    alt="partner-5" /></a></li>
                            </ul>
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
                                <div class="card-body">
                                    <p className="d-flex">Our company assign teams to companies for any remote work varying from software to sales. Each team have a dedicated team manager who contact with the company. We also hire teams on orders. This whole process saves companies important time and effort hiring, bringing them together and managing people. Our company structure allows us to work and hire people from anywhere in the world which allows us to bring top- tier services to you.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="text-center shadow card py-3 border-0 rounded-sm">
                                <div class="card-body">
                                    <p className="d-flex">It is like getting a superhuman for your company because the team manager is like a employee who can do work of hundreds of people. We have collaborated with 50+ businesses and companies and have 100+ teams</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <img src={curveShape_2} class="img-fluid feature-bg-shape" alt="background-shape"/> */}
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
                                    {/* <p class="mb-0">Lorem ipsum dolor sit amet consect.</p> */}
                                    </div>
                                </li>
                                <li class="bg-white d-inline-flex shadow rounded-xs p-4 my-2">
                                    <div class="mr-3">
                                        <span class="text-secondary step-number bg-gray-light rounded-circle">02</span>
                                    </div>
                                    <div class="align-self-center">
                                        <h5>What fields are available? And what about location</h5>
                                        {/* <p class="mb-0">Lorem ipsum dolor sit amet consect.</p> */}
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
                        <p className="italic">This process have a lot of advantages, some are listed below-</p>
                        <h6>SAVING TIME AND EFFORT</h6>
                            
                        </div>
                    </div>
                </div>
            </section>

            {/* <section class="section position-relative overflow-hidden">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 align-self-center pr-lg-4 mb-4 mb-md-0">
                            <p class="subtitle" >Work Process</p>
                            <h2 class="section-title" >Rehenderit volupate velit proident sunt culpa</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipicing elit sed do usmod tempor
                                incididunt.enim ad
                                minim veniam, quis nostrud exer citation ulla mco laboris nisi ut aliquip commodo.</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium
                                doloreque laudantum.</p>
                        </div>
                        <div class="col-md-6 pl-lg-4">
                        <h2 class="section-title">It is like getting a superhuman for your company becauzm,cvmcse the communication is only with one person.n</h2>
                            <ul class="list-unstyled process-steps">
                                <li class="bg-white d-inline-flex shadow rounded-xs p-4">
                                    <div class="mr-3">
                                        <span class="text-secondary step-number bg-gray-light rounded-circle">01</span>
                                    </div>
                                    <div class="align-self-center">
                                        <h5>Extreme Security</h5>
                                        <p class="mb-0">Lorem ipsum dolor sit amet consect.</p>
                                    </div>
                                </li>
                                <li class="bg-white d-inline-flex shadow rounded-xs p-4">
                                    <div class="mr-3">
                                        <span class="text-secondary step-number bg-gray-light rounded-circle">02</span>
                                    </div>
                                    <div class="align-self-center">
                                        <h5>Extreme Security</h5>
                                        <p class="mb-0">Lorem ipsum dolor sit amet consect.</p>
                                    </div>
                                </li>
                                <li class="bg-white d-inline-flex shadow rounded-xs p-4">
                                    <div class="mr-3">
                                        <span class="text-secondary step-number bg-gray-light rounded-circle">02</span>
                                    </div>
                                    <div class="align-self-center">
                                        <h5>Extreme Security</h5>
                                        <p class="mb-0">Lorem ipsum dolor sit amet consect.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <img src={curveShape_2} class="img-fluid process-bg-shape" alt="bg-shape" />
            </section> */}

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

            {/* <section class="section pt-0">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6 pr-lg-5 mb-4 mb-md-0">
                            <img src={integration_1} class="img-fluid" alt="illustration" />
                        </div>
                        <div class="col-md-6 pl-lg-5">
                            <p class="subtitle">Services</p>
                            <h2 class="section-title">Aspernatur aut odit fugit sed quia consetur.</h2>
                            <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipicing elit sed do usmod tempor incididunt.enim ad
                                minim
                                veniam, quis nostrud exer citation ulla mco laboris nisi ut aliquip commodo.</p>
                            <ul class="list-unstyled">
                                <li class="d-flex mb-4">
                                    <div class="pr-3 pr-lg-5">
                                        <i class="fa fa-check text-secondary bg-white shadow icon-sm"></i>
                                    </div>
                                    <div>
                                        <h5>Extreme Security</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore
                                            magna.</p>
                                    </div>
                                </li>
                                <li class="d-flex">
                                    <div class="pr-3 pr-lg-5">
                                        <i class="fa fa-check text-secondary bg-white shadow icon-sm"></i>
                                    </div>
                                    <div>
                                        <h5>Extreme Security</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore
                                            magna.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section> */}

            <section class="section bg-cover" data-background="images/background/testimonial-3.jpg">
                <div class="container">
                    <div class="row">
                        <div className="col-3 px-3">
                            <div class="card my-3" style={{height: "125px"}}>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Fill Form</h5>
                                    <button type="button" class="btn btn-outline-primary"><span className="">Form</span></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 px-3">
                            <div class="card my-3" style={{height: "125px"}}>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Hire <br /> a Super Human !</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 px-3">
                            <div class="card my-3" style={{height: "125px"}}>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Get <br /> The Best Team !</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 px-3">
                            <div class="card my-3" style={{height: "125px"}}>
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
                            <div class="col-3 d-flex justify-content-center">
                                <button type="button" class="btn btn-outline-primary my-5"><span className="">Book Call</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            <section class="subscription bg-white">
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
            </section>
        </>
    );
};

export default Home;
