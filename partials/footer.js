import Link from "next/link";

const Footer = () => {
    return (
        <div className="center_of_page">
            <footer className="padding_4x">
                <div className="flex">
                    <section className="flex-content padding_1x">
                        <h3>Kranti</h3>
                        <p>83, CRK Niwas<br />
                            Chhitorghar, Rajasthan 312001
                            India
                        </p>
                        <br />
                        <p><b>Phone</b>+91 7878806370</p>
                        <p><b>Email</b> krantieducation1@gmail.com</p>
                    </section>
                    <section className="flex-content padding_1x">
                        <h3>Quick Links</h3>
                        <Link href="/"><i className="fa-solid fa-chevron-right" style={{ color: "#622bbb" }}></i>Home</Link><br />
                        <Link href="/about"><i className="fa-solid fa-chevron-right" style={{ color: "#622bbb" }}></i>About us</Link><br />
                        <Link href="#"><i className="fa-solid fa-chevron-right" style={{ color: "#622bbb" }}></i>Terms of Service</Link><br />
                        <Link href="#"><i className="fa-solid fa-chevron-right" style={{ color: "#622bbb" }}></i>Privacy policy</Link><br />
                    </section>
                    <section className="flex-content padding_1x">
                        <h3>Our Courses</h3>
                        <Link href="/">
                            <i className="fa-solid fa-chevron-right" style={{ color: "#622bbb" }}></i>
                            Class 6</Link><br />
                        <Link href="/about"><i className="fa-solid fa-chevron-right" style={{ color: "#622bbb" }}></i>Class 7</Link><br />
                        <Link href="#"><i className="fa-solid fa-chevron-right" style={{ color: "#622bbb" }}></i>Class 8</Link><br />
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
                <div>

                </div>
            </footer>
        </div>
    );
}
export default Footer;