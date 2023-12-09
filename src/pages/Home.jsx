import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";


const Home = ({ }) => {

    return (
        <>
            <section class="hero-area hero-area-lg position-relative">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 text-center text-lg-left mb-4 mb-lg-0">
                            <h1 class="text-dark position-relative" data-aos="zoom-in-up" data-aos-delay="1000">Build Your Business Together<span class="watermark">Build</span></h1>
                            <p class="mb-4 text-dark" data-aos="zoom-in-up" data-aos-delay="1200">Cupidatat non proident sunt culpa qui officia deserunt mollit <br /> anim idest
                                laborum sed ut perspiciatis.</p>
                            <ul class="list-inline">
                                <li class="list-inline-item mx-1 my-2">
                                    <a href="#" class="btn btn-primary" data-aos="zoom-in" data-aos-delay="1500">
                                        <img src="images/icon/google-play-white.png" class="img-fluid mr-2" alt="play-store" /> Google Play</a>
                                </li>
                                <li class="list-inline-item mx-1 my-2">
                                    <a href="#" class="btn btn-outline-primary" data-aos="zoom-in" data-aos-delay="1600"><i class="fa fa-apple text-secondary mr-3 transition"></i>App
                                        Store</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-6 position-relative">
                            <img src="images/banner/banner-2.png" class="img-fluid w-100" alt="banner-image" data-aos="fade-left" data-aos-delay="1500" />
                            <img src="images/dot/dot-1.png" class="img-fluid bg-shape-3" alt="bg-shape" data-aos="zoom-in" data-aos-delay="1600" />
                        </div>
                    </div>
                </div>

                <img src="images/shape/banner.png" class="img-fluid bg-shape-1" alt="bg-shape" />
                <img src="images/dot/dot-2.png" class="img-fluid bg-shape-2" alt="bg-shape" />
            </section>

            <section class="position-relative">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <p class="subtitle" data-aos="fade-up">Features</p>
                            <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">exclusive features</h2>
                        </div>
                        <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0" data-aos="fade-up">
                            <div class="text-center shadow card py-3 border-0 rounded-sm">
                                <div class="card-body">
                                    <i class="fa fa-desktop icon-lg icon-bg-square mb-5 icon-primary"></i>
                                    <h4 class="mb-3">Exclusive Design</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore
                                        magna.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
                            <div class="text-center shadow card py-3 border-0 rounded-sm">
                                <div class="card-body">
                                    <i class="fa fa-gears icon-lg icon-bg-square mb-5 icon-primary"></i>
                                    <h4 class="mb-3">Easy Customize</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore
                                        magna.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="400">
                            <div class="text-center shadow card py-3 border-0 rounded-sm">
                                <div class="card-body">
                                    <i class="fa fa-shield icon-lg icon-bg-square mb-5 icon-primary"></i>
                                    <h4 class="mb-3">Extreme Security</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore
                                        magna.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="images/shape/curve-shape.png" class="img-fluid feature-bg-shape" alt="background-shape" data-aos="fade-right" data-aos-delay="400" />
            </section>

            <section class="section pb-0">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 pr-lg-4 mb-4 mb-md-0">
                            <div class="position-relative" data-aos="fade-right">
                                <img src="images/about/about-3.jpg" class="img-fluid rounded-sm" alt="video-bg" />
                                <div class="floating-video overlay rounded-sm">
                                    <img src="images/about/about-4.jpg" class="img-fluid rounded-sm" alt="video-thumb" />
                                    <a class="venobox play-icon icon-center" data-autoplay="true" data-vbtype="video" href="https://www.youtube.com/watch?v=jrkvirglgaQ">
                                        <i class="fa fa-play text-secondary bg-white rounded-circle"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 align-self-center pl-lg-4">
                            <p class="subtitle" data-aos="fade-up">About Agico</p>
                            <h2 class="section-title" data-aos="fade-up" data-aos-delay="200">Eausmod tempor magna nostrud exercitation</h2>
                            <p data-aos="fade-up" data-aos-delay="400">Lorem ipsum dolor sit amet consectetur adipicing elit sed do usmod tempor
                                incididunt.enim ad minim veniam, quis nostrud exer citation ulla mco laboris nisi ut aliquip commodo.</p>
                            <p data-aos="fade-up" data-aos-delay="500">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium
                                doloreque laudantum.</p>
                            <a class="btn btn-primary" href="#" data-aos="fade-up" data-aos-delay="600">Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section position-relative overflow-hidden">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 align-self-center pr-lg-4 mb-4 mb-md-0">
                            <p class="subtitle" data-aos="fade-up">Work Process</p>
                            <h2 class="section-title" data-aos="fade-up" data-aos-delay="200">Rehenderit volupate velit proident sunt culpa</h2>
                            <p data-aos="fade-up" data-aos-delay="400">Lorem ipsum dolor sit amet consectetur adipicing elit sed do usmod tempor
                                incididunt.enim ad
                                minim veniam, quis nostrud exer citation ulla mco laboris nisi ut aliquip commodo.</p>
                            <p data-aos="fade-up" data-aos-delay="500">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium
                                doloreque laudantum.</p>
                        </div>
                        <div class="col-md-6 pl-lg-4">
                            <ul class="list-unstyled process-steps">
                                <li class="bg-white d-inline-flex shadow rounded-xs p-4" data-aos="fade-right" data-aos-delay="200">
                                    <div class="mr-3">
                                        <span class="text-secondary step-number bg-gray-light rounded-circle">01</span>
                                    </div>
                                    <div class="align-self-center">
                                        <h5>Extreme Security</h5>
                                        <p class="mb-0">Lorem ipsum dolor sit amet consect.</p>
                                    </div>
                                </li>
                                <li class="bg-white d-inline-flex shadow rounded-xs p-4" data-aos="fade-left" data-aos-delay="400">
                                    <div class="mr-3">
                                        <span class="text-secondary step-number bg-gray-light rounded-circle">02</span>
                                    </div>
                                    <div class="align-self-center">
                                        <h5>Extreme Security</h5>
                                        <p class="mb-0">Lorem ipsum dolor sit amet consect.</p>
                                    </div>
                                </li>
                                <li class="bg-white d-inline-flex shadow rounded-xs p-4" data-aos="fade-right" data-aos-delay="600">
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
                <img src="images/shape/curve-shape-2.png" class="img-fluid process-bg-shape" alt="bg-shape" />
            </section>

            <section>
                <div class="bg-gradient-primary section bg-triangles">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 text-center mb-5">
                                <p class="subtitle text-white" data-aos="fade-up">testimonial</p>
                                <h2 class="section-title text-white" data-aos="fade-up" data-aos-delay="100">What Our Clients Says?</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="translate-top">
                    <div class="container">
                        <div class="row testimonial-slider px-5" data-aos="fade-up">
                            <div class="col-lg-4">
                                <div class="card border-0 text-center shadow rounded-sm mb-5">
                                    <img src="images/testimonial/client-1.jpg" class="rounded-circle card-img-top card-img-sm mx-auto mb-4 mt-5" alt="client-img" />
                                    <div class="card-body pb-4">
                                        <p class="text-dark bg-quote mb-4">Lorem ipsum dolor amet constur adipi
                                            sicing elit sed eiusmtempor incid dolore magna aliqu. enim minim veniam quis nostrud
                                            exercittion.ullamco laboris nisi ut aliquip excepteur.</p>
                                        <h4 class="text-dark">Liam Hughes</h4>
                                        <p class="h6">Happy client</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card border-0 text-center shadow rounded-sm mb-5">
                                    <img src="images/testimonial/client-1.jpg" class="rounded-circle card-img-top card-img-sm mx-auto mb-4 mt-5"
                                        alt="client-img" />
                                    <div class="card-body pb-4">
                                        <p class="text-dark bg-quote mb-4">Lorem ipsum dolor amet constur adipi
                                            sicing elit sed eiusmtempor incid dolore magna aliqu. enim minim veniam quis nostrud
                                            exercittion.ullamco laboris nisi ut aliquip excepteur.</p>
                                        <h4 class="text-dark">Liam Hughes</h4>
                                        <p class="h6">Happy client</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card border-0 text-center shadow rounded-sm mb-5">
                                    <img src="images/testimonial/client-1.jpg" class="rounded-circle card-img-top card-img-sm mx-auto mb-4 mt-5"
                                        alt="client-img" />
                                    <div class="card-body pb-4">
                                        <p class="text-dark bg-quote mb-4">Lorem ipsum dolor amet constur adipi
                                            sicing elit sed eiusmtempor incid dolore magna aliqu. enim minim veniam quis nostrud
                                            exercittion.ullamco laboris nisi ut aliquip excepteur.</p>
                                        <h4 class="text-dark">Liam Hughes</h4>
                                        <p class="h6">Happy client</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card border-0 text-center shadow rounded-sm mb-5">
                                    <img src="images/testimonial/client-1.jpg" class="rounded-circle card-img-top card-img-sm mx-auto mb-4 mt-5"
                                        alt="client-img" />
                                    <div class="card-body pb-4">
                                        <p class="text-dark bg-quote mb-4">Lorem ipsum dolor amet constur adipi
                                            sicing elit sed eiusmtempor incid dolore magna aliqu. enim minim veniam quis nostrud
                                            exercittion.ullamco laboris nisi ut aliquip excepteur.</p>
                                        <h4 class="text-dark">Liam Hughes</h4>
                                        <p class="h6">Happy client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section pt-0">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6 pr-lg-5 mb-4 mb-md-0">
                            <img src="images/integration/integration-1.png" class="img-fluid" alt="illustration" data-aos="zoom-in" data-aos-delay="500" />
                        </div>
                        <div class="col-md-6 pl-lg-5">
                            <p class="subtitle" data-aos="fade-up">Services</p>
                            <h2 class="section-title" data-aos="fade-up" data-aos-delay="200">Aspernatur aut odit fugit sed quia consetur.</h2>
                            <p class="mb-4" data-aos="fade-up" data-aos-delay="400">Lorem ipsum dolor sit amet consectetur adipicing elit sed do usmod tempor incididunt.enim ad
                                minim
                                veniam, quis nostrud exer citation ulla mco laboris nisi ut aliquip commodo.</p>
                            <ul class="list-unstyled">
                                <li class="d-flex mb-4" data-aos="fade-up" data-aos-delay="400">
                                    <div class="pr-3 pr-lg-5">
                                        <i class="fa fa-check text-secondary bg-white shadow icon-sm"></i>
                                    </div>
                                    <div>
                                        <h5>Extreme Security</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore
                                            magna.</p>
                                    </div>
                                </li>
                                <li class="d-flex" data-aos="fade-up" data-aos-delay="450">
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
            </section>

            <section class="section bg-cover" data-background="images/background/testimonial-3.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h4 class="subtitle" data-aos="fade-up">Pricing table</h4>
                            <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">choose your plan</h2>
                        </div>
                        <div class="col-lg-4 col-sm-6 mb-lg-0 mb-4" data-aos="fade-up">
                            <div class="pricing-table position-relative text-center px-4 py-5 rounded-lg shadow transition bg-white">
                                <span class="badge badge-pill badge-light font-weight-medium mb-3 py-2 px-4 text-primary">Basic</span>
                                <div class="h1 text-dark">$49<span class="paragraph text-lowercase"> / mo</span></div>
                                <h5 class="mb-4 font-weight-normal text-color">Best for small individuals</h5>
                                <hr />
                                <ul class="list-unstyled my-4">
                                    <li class="my-3">Express Service</li>
                                    <li class="my-3">Customs Clearance</li>
                                    <li class="my-3">Time-Critical Services</li>
                                </ul>
                                <a href="#" class="btn btn-outline-primary">select plan</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 mb-lg-0 mb-4" data-aos="fade-up" data-aos-delay="200">
                            <div class="pricing-table position-relative text-center px-4 py-5 rounded-lg shadow transition bg-white">
                                <span class="badge badge-pill badge-light font-weight-medium mb-3 py-2 px-4 text-primary">Professional</span>
                                <div class="h1 text-dark">$79<span class="paragraph text-lowercase"> / mo</span></div>
                                <h5 class="mb-4 font-weight-normal text-color">Best for standard individuals</h5>
                                <hr />
                                <ul class="list-unstyled my-4">
                                    <li class="my-3">Express Service</li>
                                    <li class="my-3">Customs Clearance</li>
                                    <li class="my-3">Time-Critical Services</li>
                                </ul>
                                <a href="#" class="btn btn-outline-primary">select plan</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 mb-lg-0 mb-4" data-aos="fade-up" data-aos-delay="400">
                            <div class="pricing-table position-relative text-center px-4 py-5 rounded-lg shadow transition bg-white">
                                <span class="badge badge-pill badge-light font-weight-medium mb-3 py-2 px-4 text-primary">Business</span>
                                <div class="h1 text-dark">$129<span class="paragraph text-lowercase"> / mo</span></div>
                                <h5 class="mb-4 font-weight-normal text-color">Best for large individuals</h5>
                                <hr />
                                <ul class="list-unstyled my-4">
                                    <li class="my-3">Express Service</li>
                                    <li class="my-3">Customs Clearance</li>
                                    <li class="my-3">Time-Critical Services</li>
                                </ul>
                                <a href="#" class="btn btn-outline-primary">select plan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="section">

                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <p class="subtitle">latest news</p>
                            <h2 class="section-title">Learn Form Agico</h2>
                        </div>
                        <div class="col-12">
                            <div class="blog-slider">
                                <div class="px-3 mb-5">
                                    <div class="card border-0 shadow rounded-xs">
                                        <img src="images/blog/blog-post-1.jpg" class="img-fluid card-img-top" alt="post-thumb" />
                                        <div class="card-body">
                                            <p class="card-date">Dec 30, 2018</p>
                                            <h5><a class="text-dark" href="blog-details.html">Cupidat non proident sunt officia deserunt mollit
                                                anim.</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-3 mb-5">
                                    <div class="card border-0 shadow rounded-xs">
                                        <img src="images/blog/blog-post-2.jpg" class="img-fluid card-img-top" alt="post-thumb" />
                                        <div class="card-body">
                                            <p class="card-date">Dec 30, 2018</p>
                                            <h5><a class="text-dark" href="blog-details.html">Cupidat non proident sunt officia deserunt mollit
                                                anim.</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-3 mb-5">
                                    <div class="card border-0 shadow rounded-xs">
                                        <img src="images/blog/blog-post-3.jpg" class="img-fluid card-img-top" alt="post-thumb" />
                                        <div class="card-body">
                                            <p class="card-date">Dec 30, 2018</p>
                                            <h5><a class="text-dark" href="blog-details.html">Cupidat non proident sunt officia deserunt mollit
                                                anim.</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-3 mb-5">
                                    <div class="card border-0 shadow rounded-xs">
                                        <img src="images/blog/blog-post-1.jpg" class="img-fluid card-img-top" alt="post-thumb" />
                                        <div class="card-body">
                                            <p class="card-date">Dec 30, 2018</p>
                                            <h5><a class="text-dark" href="blog-details.html">Cupidat non proident sunt officia deserunt mollit
                                                anim.</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section class="section section-lg-bottom bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <p class="subtitle" data-aos="fade-up">our clients</p>
                            <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Trusted Over 2245+ Companies</h2>
                        </div>
                        <div class="col-12" data-aos="fade-up" data-aos-delay="200">
                            <ul class="list-inline d-flex justify-content-between align-items-center">
                                <li class="list-inline-item"><a href="#"><img class="img-fluid p-2" src="images/partner/client-logo-1.png"
                                    alt="partner-1" /></a></li>
                                <li class="list-inline-item"><a href="#"><img class="img-fluid p-2" src="images/partner/client-logo-2.png"
                                    alt="partner-2" /></a></li>
                                <li class="list-inline-item"><a href="#"><img class="img-fluid p-2" src="images/partner/client-logo-3.png"
                                    alt="partner-3" /></a></li>
                                <li class="list-inline-item"><a href="#"><img class="img-fluid p-2" src="images/partner/client-logo-4.png"
                                    alt="partner-4" /></a></li>
                                <li class="list-inline-item"><a href="#"><img class="img-fluid p-2" src="images/partner/client-logo-5.png"
                                    alt="partner-5" /></a></li>
                            </ul>
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
