import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <section className='home'>
                <div className='overlay'></div>
                <div id='hero'></div>
                <div className="container2" data-aos="fade-up">
                    <h1>Learning Today,</h1>
                    <h1>Leading Tomorrow</h1>
                    <p>On the way of making school and classes smart.</p>
                    {/* <!-- <button>start</button> --> */}
                    <button className="bottom">get started
                        <span className="bg"></span>
                    </button>
                </div>
            </section>
            <main className={`${inter.className}`}>

                <section className="about">
                    <div className="container_about">
                        <div className="row">
                            <div className="content_home">
                                <h3>Kranti is an innovative organization that is dedicated to transforming education through:</h3>
                                <ul>
                                    <li><i className="fa-regular fa-circle-check" style={{ color: "#9141ac", }}></i> <b>Smart classrooms:</b> Kranti introduces cutting-edge
                                        technological solutions in classrooms, including interactive whiteboards, projectors, and smart devices,
                                        to create engaging and interactive learning environments.</li>
                                    <li><i className="fa-regular fa-circle-check" style={{ color: "#9141ac", }}></i> <b>Inclusive learning:</b> Kranti is committed to providing equal
                                        educational opportunities to all students, including those with special needs, through an inclusive
                                        learning environment.</li>
                                    <li><i className="fa-regular fa-circle-check" style={{ color: "#9141ac", }}></i> <b>Comprehensive training and support:</b> Kranti provides
                                        latest technological tools and equipment, and
                                        assists educational institutions in planning and implementing technological infrastructure.</li>
                                </ul>
                            </div>
                            <div className="mg2_container">
                                <Image
                                    src="/kids.jpg"
                                    className="img2" alt="" width="100" height="200" />
                            </div>
                        </div>
                    </div>
                </section>
                <div className='why_us'>
                    <div className='whyus_container' >
                        <h3>Why Choose Kranti?</h3>
                        <p>
                            Kranti is a pioneering organization in the education sector that is dedicated to making classrooms
                            smarter and more accessible. They believe in the transformative power of technology and are committed to
                            providing equal educational opportunities to all students. {"Kranti\'s"} comprehensive training and support
                            helps educational institutions create engaging and inclusive learning environments.
                        </p>
                        <div className="text-center">
                            <Link href="/about" className="more-btn">Learn More <i className="fa-solid fa-chevron-right"></i></Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
