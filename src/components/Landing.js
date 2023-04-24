import React from 'react'
import './land.css'
export default function Landing() {
    return (
        <div>
            <section className="home" id="hero">
                {/* <img src="https://thehubbackend.com/media/Learning-development-jobs.jpg" alt="" /> */}
                <div className="container">
                    <h1>Learning Today,</h1>
                    <h1>Leading Tomorrow</h1>
                    <p>On the way of making school and classes smart.</p>
                    {/* <!-- <button>start</button> --> */}
                    <button className="bottom">get started
                        <span className="bg" />
                    </button>
                </div>
            </section>


            <section id="about" class="about">
                <div class="container" data-aos="fade-up">

                    <div class="row">
                        <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                            {/* <!-- <img src="assets/img/about.jpg" class="img-fluid" alt=""/> */}
                            <img
                                src="https://img.freepik.com/premium-photo/kids-science-concept-cute-indian-little-kid-student-scientist-studying-science-experimenting-with-microscope-chemicals-with-diagrams-doodles-drawn-green-chalkboard_466689-17297.jpg"
                                class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <h3>Kranti is an innovative organization that is dedicated to transforming education through:</h3>
                            <p class="fst-italic">

                            </p>
                            <ul>
                                <li><i class="bi bi-check-circle"></i> <b>Smart classrooms:</b> Kranti introduces cutting-edge
                                    technological solutions in classrooms, including interactive whiteboards, projectors, and smart devices,
                                    to create engaging and interactive learning environments.</li>
                                <li><i class="bi bi-check-circle"></i> <b>Inclusive learning:</b> Kranti is committed to providing equal
                                    educational opportunities to all students, including those with special needs, through an inclusive
                                    learning environment.</li>
                                <li><i class="bi bi-check-circle"></i> <b>Comprehensive training and support:</b> Kranti provides
                                    latest technological tools and equipment, and
                                    assists educational institutions in planning and implementing technological infrastructure.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            <section id="footer">

                <footer className="padding_4x">
                    <div className="flex">
                        <section className="flex-content padding_1x">
                            <h3>Top Products</h3>
                            <a href="#">Managed Website</a>
                            <a href="#">Manage Reputation</a>
                            <a href="#">Power Tools</a>
                            <a href="#">Marketing Service</a>
                        </section>
                        <section className="flex-content padding_1x">
                            <h3>Quick Links</h3>
                            <a href="#">Jobs</a>
                            <a href="#">Brand Assets</a>
                            <a href="#">Investor Relations</a>
                            <a href="#">Terms of Service</a>
                        </section>
                        <section className="flex-content padding_1x">
                            <h3>Features</h3>
                            <a href="#">Jobs</a>
                            <a href="#">Brand Assets</a>
                            <a href="#">Investor Relations</a>
                            <a href="#">Terms of Service</a>
                        </section>
                        <section className="flex-content padding_1x">
                            <h3>Resources</h3>
                            <a href="#">Guides</a>
                            <a href="#">Research</a>
                            <a href="#">Experts</a>
                            <a href="#">Agencies</a>
                        </section>
                        <section className="flex-content padding_1x">
                            <h3>Newsletter</h3>
                            <p>You can trust us. we only send promo offers,</p>
                            <fieldset className="fixed_flex">
                                <input type="email" name="newsletter" placeholder="Your Email Address" />
                                <button className="btn btn_2">Subscribe</button>
                            </fieldset>
                        </section>
                    </div>
                    <div className="flex">
                        <section className="flex-content padding_1x">
                            {/* <p>Copyright ©2023 All rights reserved || website name</p> */}
                        </section>
                        <section className="flex-content padding_1x">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-dribbble"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                        </section>
                    </div>
                </footer>
            </section>

        </div>
    )
}
