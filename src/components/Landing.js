import React from 'react'
import './land.css'
export default function Landing() {
    return (
        <div>
            <section className='home' >
                <div id="hero"></div>
                {/* <img alt='img' src="/public/educational-theme-close-up-student-writing-classroom-min.jpg"/> */}
                <div className='overlay'></div>
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

            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="content">
                            <h3>Kranti is an innovative organization that is dedicated to transforming education through:</h3>
                            <ul>
                                <li><i class="fa-regular fa-circle-check" style={{color: "#9141ac",}}></i> <b>Smart classrooms:</b> Kranti introduces cutting-edge
                                    technological solutions in classrooms, including interactive whiteboards, projectors, and smart devices,
                                    to create engaging and interactive learning environments.</li>
                                <li><i class="fa-regular fa-circle-check" style={{color: "#9141ac",}}></i> <b>Inclusive learning:</b> Kranti is committed to providing equal
                                    educational opportunities to all students, including those with special needs, through an inclusive
                                    learning environment.</li>
                                <li><i class="fa-regular fa-circle-check" style={{color: "#9141ac",}}></i> <b>Comprehensive training and support:</b> Kranti provides
                                    latest technological tools and equipment, and
                                    assists educational institutions in planning and implementing technological infrastructure.</li>
                            </ul>
                        </div>
                        <div className="img2_container" data-aos="fade-left" data-aos-delay="100">
                            <img
                                src="https://img.freepik.com/premium-photo/kids-science-concept-cute-indian-little-kid-student-scientist-studying-science-experimenting-with-microscope-chemicals-with-diagrams-doodles-drawn-green-chalkboard_466689-17297.jpg"
                                className="img2" alt="" />
                        </div>
                    </div>

                </div>
            </section>

            <section id="footer">

                <footer className="footer_content">
                    <div className='container'>
                        <div className='row_footer'>

                            <div className='footer_contact'>
                                <h3>Kranti</h3>
                                <p>83, CRK Nivas<br />
                                Chittorghar, Rajasthan 312001<br />
                                India<br /><br />
                                <strong>Phone:</strong>1234567890<br />
                                <strong>Email:</strong>krnatieducation@gmail.com<br />
                                </p>
                            </div>

                            <div className='footer_links'>
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i class="fa-solid fa-chevron-right" style={{color: "#813d9c"}}></i><a href="/">Home</a></li>
                                    <li><i class="fa-solid fa-chevron-right" style={{color: "#813d9c"}}></i><a href="/">About us</a></li>
                                    <li><i class="fa-solid fa-chevron-right" style={{color: "#813d9c"}}></i>Terms of Servises</li>
                                    <li><i class="fa-solid fa-chevron-right" style={{color: "#813d9c"}}></i>Privacy policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                
            </section>

        </div>
    )
}
