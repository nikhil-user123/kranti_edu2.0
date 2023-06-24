import Link from "next/link";
import styles from "@/styles/footer.module.css";

const Footer = () => {
    return (
        <>
            <div className={styles.container}>
                <footer className={styles.footer}>
                    <section className={styles.link_sec}>
                        <h3>Kranti</h3>
                        <p>83, CRK Niwas<br />
                            Chhitorghar, Rajasthan 312001
                            India
                        </p>

                        <p><b>Phone</b>+91 7878806370</p>
                        <p><b>Email</b> krantieducation1@gmail.com</p>
                    </section>
                    <section className={styles.link_sec}>
                        <h3>Quick Links</h3>
                        <Link href="/"><i className="fa-solid fa-chevron-right" style={{ color: "#622bbb" }}></i> Home</Link>
                        <Link href="/about"><i className="fa-solid fa-chevron-right" style={{ color: "#622bbb" }}></i> About us</Link>
                        <Link href="#"><i className="fa-solid fa-chevron-right" style={{ color: "#622bbb" }}></i> Terms of Service</Link>
                        <Link href="#"><i className="fa-solid fa-chevron-right" style={{ color: "#622bbb" }}></i> Privacy policy</Link>
                    </section>
                    <section className={styles.link_sec}>
                        <h3>Our Courses</h3>
                        <Link href="/">
                           <i className="fa-solid fa-chevron-right" style={{ color: "#622bbb" }}></i> Class 6</Link><br />
                        <Link href="/about"><i className="fa-solid fa-chevron-right" style={{ color: "#622bbb" }}></i> Class 7</Link><br />
                        <Link href="#"><i className="fa-solid fa-chevron-right" style={{ color: "#622bbb" }}></i> Class 8</Link><br />
                    </section>
                    <section className={styles.link_sec}>
                        <h3>Get in Touch !</h3>
                        <p>You can trust us. we only send promo offers,</p>
                        <fieldset className={styles.subscribe_sec}>
                            <input type="email" name="newsletter" placeholder="Your Email Address" />
                            <input type="email" name="newsletter" placeholder="Your Mobile no." />
                            <button className="btn btn_2">Subscribe</button>
                        </fieldset>
                    </section>
                </footer>
            </div>
            <div className={styles.botton_footer}>
                <div className={styles.container2}>
                    <div className={styles.Copyright}>
                        © Copyright
                        <strong> Kranti</strong>. All Rights Reserved
                    </div>
                    <div className={styles.Credits}>
                        Designed by Nikhil Prajapat
                    </div>
                </div>
                <div className={styles.link}>
                    <a href="https://www.instagram.com/karansenzk1/?__coig_restricted=1" target="_blank">
                        <i className="fa-brands fa-twitter" style={{ color: "#9141ac" }}></i>
                    </a>
                    <a href="https://www.instagram.com/karansenzk1/?__coig_restricted=1" target="_blank">
                        <i className="fa-brands fa-instagram" style={{ color: "#9141ac" }}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kranti-education-03a1b2269/" target="_blank">
                        <i className="fa-brands fa-linkedin" style={{ color: "#9141ac" }}></i>
                    </a>
                </div>
            </div>
        </>
    );
}
export default Footer;