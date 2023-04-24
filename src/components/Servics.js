import React from 'react'
import servics from './servics.css'
import land from './land.css'

export default function Servics() {
  return (
    <>
    <section className="section-services">
		<div className="container">
			<div className="row justify-content-center text-center">
				<div className="col-md-10 col-lg-8">
					<div className="header-section">
						<h2 className="title">Exclusive <span>Services</span></h2>
						<p className="description">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected humour</p>
					</div>
				</div>
			</div>
			<div className="row">
				{/* <!-- Start Single Service --> */}
				<div  className="a col-md-6 col-lg-4">
					<div className="single-service">
						<div className="part-1">
							<i className="fab fa-500px"></i>
							<h3 className="title">Express delivery innovative Design service</h3>
						</div>
						<div className="part-2">
							<p className="description">Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
							<a href="#"><i className="fas fa-arrow-circle-right"></i>Read More</a>
						</div>
					</div>
				</div>
				{/* <!-- / End Single Service --> */}
				{/* <!-- Start Single Service --> */}
				<div className="col-md-6 col-lg-4">
					<div className="single-service">
						<div className="part-1">
							<i className="fab fa-angellist"></i>
							<h3 className="title">Online chat may refer to any kind communication</h3>
						</div>
						<div className="part-2">
							<p className="description">Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
							<a href="#"><i className="fas fa-arrow-circle-right"></i>Read More</a>
						</div>
					</div>
				</div>
				{/* <!-- / End Single Service --> */}
				{/* <!-- Start Single Service --> */}
				<div className="col-md-6 col-lg-4">
					<div className="single-service">
						<div className="part-1">
							<i className="fas fa-award"></i>
							<h3 className="title">Service provider provide organizations consulting</h3>
						</div>
						<div className="part-2">
							<p className="description">Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
							<a href="#"><i className="fas fa-arrow-circle-right"></i>Read More</a>
						</div>
					</div>
				</div>
				{/* <!-- / End Single Service --> */}
				{/* <!-- Start Single Service --> */}
				<div className="col-md-6 col-lg-4">
					<div className="single-service">
						<div className="part-1">
							<i className="fab fa-asymmetrik"></i>
							<h3 className="title">Express delivery innovative Design service</h3>
						</div>
						<div className="part-2">
							<p className="description">Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
							<a href="#"><i className="fas fa-arrow-circle-right"></i>Read More</a>
						</div>
					</div>
				</div>
				{/* <!-- / End Single Service --> */}
				{/* <!-- Start Single Service --> */}
				<div className="col-md-6 col-lg-4">
					<div className="single-service">
						<div className="part-1">
							<i className="fas fa-broadcast-tower"></i>
							<h3 className="title">Provide solutions and services to end users</h3>
						</div>
						<div className="part-2">
							<p className="description">Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
							<a href="#"><i className="fas fa-arrow-circle-right"></i>Read More</a>
						</div>
					</div>
				</div>
				{/* <!-- / End Single Service --> */}
				{/* <!-- Start Single Service --> */}
				<div className="col-md-6 col-lg-4">
					<div className="single-service">
						<div className="part-1">
							<i className="fab fa-canadian-maple-leaf"></i>
							<h3 className="title">This broad term incorporates all IT businesses</h3>
						</div>
						<div className="part-2">
							<p className="description">Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
							<a href="#"><i className="fas fa-arrow-circle-right"></i>Read More</a>
						</div>
					</div>
				</div>
				{/* <!-- / End Single Service --> */}
			</div>
		</div>
	</section>
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
        <input type="email" name="newsletter" placeholder="Your Email Address"/>
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
    </>
  )
}
