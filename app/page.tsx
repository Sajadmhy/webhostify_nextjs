
export default function Home() {
  return (
  <main className="bg-white font-sans leading-normal tracking-normal">
    <header className="heading ">
        <div className="container mx-auto">
            <div className="top">
                <p className="text"><span>Welcome to Web Host Fly, Providing Reliable Hosting Solutions</span></p>
                <a className="login-btn" href="http://">Log in</a>
            </div>

            <div className="header grid grid-cols-5 gap-4">
                <div className="img-logo">
                    <img className="logo w-16 md:w-32 lg:w-48" src="./Logo/logo.png" alt=""/>
                </div>
                <div className="col-span-4">
                    <div className="all-icon grid grid-cols-5 gap-4">
                        <div className="social-contact-icon col-span-4">

                            <a href="#" className=""><i className="fas fa-envelope"></i> sales@10corp.com</a>
                            <a href="#" className=""><i className="fa fa-phone-square"></i> +1(762)
                                233-3344 </a>
                            <a href="#"><i className="far fa-clock"></i> 9.00 AM - 5.00 PM</a>

                        </div>
                        <div className="more-icon text-right">
                            <a href="http://"><i className="fab fa-facebook-f"></i></a>
                            <a href="http://"><i className="fab fa-linkedin-in"></i></a>
                            <a href="http://"><i className="fab fa-twitter"></i></a>
                            <a href="http://"><i className="fab fa-youtube"></i></a>
                        </div>

                    </div>
                    {/* <!--Nav Menu start --> */}
                    <div className="navbar">

                        <div className="dropdown">
                            <button className="dropbtn">Domain
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <a href="#">Register a Domain</a>
                                <a href="#">Transfer to 10Corp</a>
                                <a href="#">Private Registration</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn">Hosting
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <a href="#">Shared Hostig</a>
                                <a href="#">Wordpress Hosting</a>
                                <a href="#">Drupal Hosting</a>
                                <a href="#">VPS Hosting</a>
                                <a href="#">Dedicatd Hosting</a>

                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn">Website
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <a href="#">Web Design</a>
                                <a href="#">Web Development</a>
                                <a href="#">Ecommerce Service</a>
                                <a href="#">Drupal Development</a>
                                <a href="#">Wordpress Development</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn">Security
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <a href="#">SSL Certificates</a>
                                <a href="#">DV SSL Certificates</a>
                                <a href="#">OV SSL Certificates</a>
                                <a href="#">EV SSL Certificates</a>
                                <a href="#">Wildcard SSL Certificates</a>

                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn">Marketing
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <a href="#">PAY Per CLick MArketing</a>
                                <a href="#">Local Business</a>
                                <a href="#">FaceBook Marketing</a>
                                <a href="#">Premium Service</a>
                                <a href="#">Email Marketing</a>
                                <a href="#">SEO</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>

    <div>
        {/* <!-- Sliders --> */}
        <div className="carousel relative rounded overflow-hidden shadow-xl">
            <div className="carousel-inner relative overflow-hidden w-full">
                {/* <!--Slide 1--> */}
                <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true"
                    checked readOnly/>
                <div className="carousel-item absolute opacity-0 bg-center"
                    style={{height:"500px", backgroundImage: "url(https://mdbootstrap.com/img/new/slides/052.jpg)"}}>

                </div>
                <label htmlFor="carousel-3"
                    className="control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto flex justify-center content-center"><i
                        className="fas fa-angle-left mt-3"></i></label>
                <label htmlFor="carousel-2"
                    className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                        className="fas fa-angle-right mt-3"></i></label>

                {/* <!--Slide 2--> */}
                <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true"/>
                <div className="carousel-item absolute opacity-0 bg-center"
                    style={{height:"500px", backgroundImage: "url(https://mdbootstrap.com/img/new/slides/043.jpg)"}}>
                </div>
                <label htmlFor="carousel-1"
                    className=" control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                        className="fas fa-angle-left mt-3"></i></label>
                <label htmlFor="carousel-3"
                    className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                        className="fas fa-angle-right mt-3"></i></label>

                {/* <!--Slide 3--> */}
                <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" />
                <div className="carousel-item absolute opacity-0"
                    style={{height:"500px", backgroundImage: "url(https://mdbootstrap.com/img/new/slides/054.jpg)"}}>
                </div>
                <label htmlFor="carousel-2"
                    className="control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                        className="fas fa-angle-left mt-3"></i></label>
                <label htmlFor="carousel-1"
                    className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                        className="fas fa-angle-right mt-3"></i></label>

                {/* <!-- Add additional indicators for each slide--> */}
                <ol className="carousel-indicators">
                    <li className="inline-block mr-3">
                        <label htmlFor="carousel-1"
                            className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                    </li>
                    <li className="inline-block mr-3">
                        <label htmlFor="carousel-2"
                            className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                    </li>
                    <li className="inline-block mr-3">
                        <label htmlFor="carousel-3"
                            className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                    </li>
                </ol>

            </div>
        </div>
        <div className="grid container mx-auto service grid-cols-4 gap-4 mt-20">
            <div>
                <span><i className="fas fa-shopping-cart text-5xl"></i></span>
                <h4 className="grid-text">DOMAIN NAMES</h4>
                <p>Finding the best web address for your project is simple with our advanced search and a huge selection
                    of domain name extensions.</p>
            </div>

            <div>
                <span><i className="fab fa-google-wallet text-5xl"></i></span>
                <h4 className="grid-text">WEB HOSTING</h4>
                <p>High-performance, SSD-powered web hosting provides optimal performance and reliability at low cost.
                </p>
            </div>
            <div>
                <span><i className="fas fa-bullhorn text-5xl"></i></span>
                <h4 className="grid-text">WORDPRESS HOSTING</h4>
                <p>Install WordPress in a single click to unlock custom themes and tools and to run an amazing website.
                    High performance and reliability guaranteed!</p>
            </div>
            <div>
                <span><i className="fas fa-fire text-5xl"></i></span>
                <h4 className="grid-text">DEDICATED SERVERS</h4>
                <p>Fully managed and featuring Intel Xeon CPUs, SSD & Next-Gen firewall options. Designed for
                    high-performance applications.</p>
            </div>
        </div>
        <div className="grid container mx-auto grid-cols-5 gap-4 mt-20">
            <div className="col-span-2">
                <a href="https://vimeo.com/101373765"><img src="./images/Screenshot.png" alt=""/></a>
            </div>
            <div className="col-span-3">
                <h1 className="text-2xl font-black">MIGRATING FROM ANOTHER HOST?</h1>
                <br/>
                <p>We are here to help. Our migration service is free and, in most cases, we can have your website
                    migrated and live in under 24 hours. If you have multiple websites or a more complex solution you
                    need migrating, give our expert team a call on +1 ‪(762) 233-3344‬ or start a live chat. We&apos;ll be
                    happy to go over your requirements to ensure your transfer goes perfectly.</p>
                <br/>
                <div className="flex">
                    <div>
                        <ul>
                            <li><i className="fas fa-caret-right"></i>Celebrating 20+ Years</li>
                            <li><i className="fas fa-caret-right"></i>24x7 Technical Support</li>
                            <li><i className="fas fa-caret-right"></i>High Performance - Low Cost</li>
                            <li><i className="fas fa-caret-right"></i>30 Day Money Back Guarantee</li>

                        </ul>
                    </div>
                    <div className="ml-9">
                        <ol>
                            <li><i className="fas fa-caret-right"></i>Drupal Hosting</li>
                            <li><i className="fas fa-caret-right"></i>WordPress Hosting</li>
                            <li><i className="fas fa-caret-right"></i>Magento Hosting</li>
                            <li><i className="fas fa-caret-right"></i>Backdrop Hosting</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <section>
            <div className="container mx-auto">
                <div className="text-center mt-52">
                    <h1 className="text-3xl font-black">FEATURES THAT YOU ARE GONNA LOVE</h1>
                    <h1 className="text-2xl font-light">Hostika comes with 100+ Feature oriented Shortcodes that are easy to
                        use
                        too.</h1>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="feature-icon">
                        <span className="flex">
                            <i className="fas fa-phone-alt"></i>
                            <h4>Domain</h4>
                        </span>
                        <p>Register domains from many countries and make sure you control your brand online.</p>
                    </div>


                    <div className="feature-icon">
                        <span className="flex"><i className="fas fa-eye"></i>
                            <h4>DEDICATED HOSTING</h4>
                        </span>
                        <p>Offer hosting to your customers and let us handle the servers.</p>
                    </div>
                    <div className="feature-icon">
                        <span className="flex">
                            <i className="fas fa-eye"></i>
                            <h4>SSL CERTIFICATE</h4>
                        </span>
                        <p>Encrypt the communication between your website and your customers for maximum security and
                            privacy.</p>
                    </div>
                    <div className="feature-icon">
                        <span className="flex">
                            <i className="fas fa-heart"></i>
                            <h4>24/7 SUPPORT</h4>
                        </span>
                        <p>Run your projects smoothly with expert support. Our specialists are ready to help 24 hours a
                            day, seven days a week, online and over the phone.</p>
                    </div>
                    <div className="feature-icon">
                        <span className="flex">
                            <i className="fas fa-heart"></i>
                            <h4>CDN BANDWIDTH</h4>
                        </span>
                        <p>With CDN bandwidth and 1Gb/s connectivity, you can always rely on excellent performance.
                        </p>
                    </div>
                    <div className="feature-icon">
                        <span className="flex">
                            <i className="far fa-lightbulb"></i>
                            <h4>ECO-FRIENDLY DATA CENTRES</h4>
                        </span>
                        <p>Running on 100% renewable energy, our US/EU-based data centres give you reliable uptime and
                            higher levels of security.
                        </p>
                    </div>
                    <div className="feature-icon">
                        <span className="flex">
                            <i className="fas fa-sticky-note"></i>
                            <h4>SECURE & RELIABLE</h4>
                        </span>
                        <p>Webhostfly servers are using redundant storage and power supplies. Security updates are
                            always applied within 24 hours.</p>
                    </div>
                    <div className="feature-icon">
                        <span className="flex">
                            <i className="fas fa-fire"></i>
                            <h4>UPTIME GUARANTEE</h4>
                        </span>
                        <p>
                            99.95% uptime guarantee provided by reliable servers & networking redundancy.
                        </p>
                    </div>
                    <div className="feature-icon">
                        <span className="flex">
                            <i className="fas fa-fire"></i>
                            <h4>TECHNICAL SUPPORT</h4>
                        </span>
                        <p>Technical support team provides direct high-level support to assist you when needed.

                        </p>
                    </div>
                </div>
            </div>
        </section>
        <div className="mt-20 container mx-auto">
            <div>
                <h1 className="text-center text-3xl font-bold">SOME OF OUR <span className="feature-text">FEATURED</span> WORKS
                </h1>
                <h2 className="text-center text-xl font-normal mt-2.5">We have worked on some Awesome Projects that are
                    worth
                    boasting of.</h2>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-28">
                <div><img src="./images/1.jpg" alt="" /></div>
                <div><img src="./images/2.jpg" alt="" /></div>
                <div><img src="./images/3.jpg" alt="" /></div>
                <div><img src="./images/4.jpg" alt="" /></div>
            </div>
        </div>
        <section>
            <div className="container mx-auto mt-32">
                <h1 className="text-center text-5xl font-normal">Testimonial</h1>
                <p className="text-center mt-8 text-2xl font-light">Check out some of our Client Reviews</p>
                <span><i className="fab fa-twitter"></i></span>
            </div>
            <div>
                <h1 className="text-center text-2xl font-normal mt-2.5">
                    Retro has exploded back onto the scene bringing a landslide of trends,<br/>
                    techniques, and styles along for the ride.W… <a className="text-blue-600"
                        href="https://t.co/bejnHE5pOz">

                        https://t.co/bejnHE5pOz</a><br/>

                    <span className="text-xl font-thin">2 days ago</span>
                </h1>
            </div>
        </section>

        <div className="text-center p-6 help-text">
            <p className="mt-8 text-center text-3xl font-normal">Need Help Choosing a Hosting?<br/>
                Our Hosting experts are ready to get to know your needs and help you choose a <br/>
                Hosting that&apos;s right for
                you. +1 (762) 233-3344‬
                <br/>
            </p>
            <a className=" text-3xl font-bold" href="">Live chat</a>
        </div>
        <div className="footer">



        </div>

    </div>
  </main>
  )
}
