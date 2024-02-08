import BackgroundVideo from "@/src/components/destination/BackgroundVideo";
import Home3Slider from "@/src/components/sliders/Home3";
import Layout from "@/src/layout/Layout";
import {
  sliderActive3Item,
  sliderActive4Item,
  sliderBlog,
} from "@/src/sliderProps";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

function India() {
  const placesData = [
    {
      imageUrl: "https://classicescapes.in/img/new-india-banner_1/shimla.jpg",
      title: "Scenic Shimla Manali",
      location: "India",
      price: 56000,
      days: 5,
      numberOfPeople: 25,
    },

    {
      imageUrl: "https://classicescapes.in/img/new-india-banner_1/assam.jpg",
      title: "Best of North East",
      location: "India",
      price: 50000,
      days: 5,
      numberOfPeople: 25,
    },

    {
      imageUrl: "https://classicescapes.in/img/new-india-banner_1/andaman.jpg",
      title: "Andaman Unlimited",
      location: "India",
      price: 61000,
      days: 5,
      numberOfPeople: 25,
    },

    {
      imageUrl: "https://classicescapes.in/img/new-india-banner_1/sikkim.jpg",
      title: "Hills of The East",
      location: "India",
      price: 51000,
      days: 5,
      numberOfPeople: 25,
    },

    {
      imageUrl: "https://classicescapes.in/img/new-india-banner_1/delhi.jpg",
      title: "The Golden Triangle",
      location: "India",
      price: 51000,
      days: 5,
      numberOfPeople: 25,
    },
    // Add more place items here if needed
  ];

  const WaterPlaces = [
    {
      id: 1,
      name: "Carmelia Heaven",
      image: "https://classicescapes.in/img/exclusive-india/carmelia.webp",
      tourCount: 5,
      price: 6000,
    },
    {
      id: 2,
      name: "Hills and Huge",
      image: "https://classicescapes.in/img/exclusive-india/hills-huge.webp",
      tourCount: 5,
      price: 5500,
    },
    {
      id: 3,
      name: "Spice Village",
      image: "https://classicescapes.in/img/exclusive-india/spice-village.webp",
      tourCount: 5,
      price: 5000,
    },
    {
      id: 4,
      name: "Drizzle Drops",
      image: "https://classicescapes.in/img/exclusive-india/drizzle-drops.webp",
      tourCount: 5,
      price: 5000,
    },
  ];

  const luxury = [
    {
      id: 1,
      name: "Lemon Tree Hotel",
      image: "https://classicescapes.in/img/india-2/hotel-jammu.jpeg",
      tourCount: 5,
      price: 6000,
    },
    {
      id: 2,
      name: "Taj Club House",
      image:
        "https://classicescapes.in/img/india-2/Taj-club-house-chennai.jpeg",
      tourCount: 5,
      price: 5500,
    },
    {
      id: 3,
      name: "Taj Deccan",
      image: "https://classicescapes.in/img/india-2/hyd.jpeg",
      tourCount: 5,
      price: 5000,
    },
    {
      id: 4,
      name: "The Westin Chennai",
      image: "https://classicescapes.in/img/india-2/chennai.jpeg",
      tourCount: 5,
      price: 5000,
    },
  ];

  const villas = [
    {
      id: 1,
      name: "Alappuzha",
      image: "https://classicescapes.in/img/india-4/kerla/india/alappuzha.jpeg",
      description:
        "A land of misty hills, lush forests, acres and acres of coffee plantations, and breathtaking landscapes - Coorg is the quintessential holiday destination. The postcard-perfect Coorg",
    },
    {
      id: 2,
      name: "Coorg",
      image: "https://classicescapes.in/img/india-4/kerla/india/coorg.jpeg",
      description:
        "A land of misty hills, lush forests, acres and acres of coffee plantations, and breathtaking landscapes - Coorg is the quintessential holiday destination. The postcard-perfect Coorg",
    },
    {
      id: 3,
      name: "Goa",
      image: "https://classicescapes.in/img/india-4/kerla/india/goa.jpeg",
      description:
        "A land of misty hills, lush forests, acres and acres of coffee plantations, and breathtaking landscapes - Coorg is the quintessential holiday destination. The postcard-perfect Coorg",
    },
    {
      id: 4,
      name: "Kodaikanal",
      image:
        "https://classicescapes.in/img/india-4/kerla/india/kodaikanal.jpeg",
      description:
        "A land of misty hills, lush forests, acres and acres of coffee plantations, and breathtaking landscapes - Coorg is the quintessential holiday destination. The postcard-perfect Coorg",
    },
  ];

  return (
    <Layout header={3} noFooter>
      <section className="hero-section">
        {/*=== Hero Wrapper ===*/}

        {/*=== Hero Slider ===*/}
        <BackgroundVideo
          videoSource="https://classicescapes.in/img/video/india-14mb.mp4"
          text="India"
        />
      </section>

      {/*====== Start Services Section ======*/}
      <section
        className="services-seciton pt-30"
        style={{ marginBottom: "50px" }}
      >
        <div className="container">
          <h3
            style={{
              fontSize: "1.875rem ",
              marginTop: "30px",
              marginBottom: "60px",
              color: "#405C85",
              textAlign: "center",
            }}
            className="home_titles"
          >
            Trending India Tour Packages
          </h3>

          <Slider
            {...sliderActive3Item}
            className="slider-active-3-item wow fadeInUp"
          >
            {placesData.map((place, index) => (
              <div key={index} className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img src={place.imageUrl} alt="Place Image" />
                </div>
                <div className="place-content">
                  <div className="info">
                    <ul className="ratings">
                      {/* Ratings icons here */}
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <li key={i}>
                          <i className="fas fa-star" />
                        </li>
                      ))}
                      <li>
                        <a href="#">(4.9)</a>
                      </li>
                    </ul>
                    <h4 className="title luxury_package_title">
                      {/* Link to tour details */}
                      <a href="/tour-details">{place.title}</a>
                    </h4>
                    <p className="location luxury_package_location">
                      <i className="far fa-map-marker-alt" />
                      {place.location}
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price<span className="currency">₹</span>
                      {place.price.toFixed(2)}
                    </p>
                    <div className="meta luxury_package_meta">
                      <span>
                        <i className="far fa-clock" />
                        {place.days} Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        {place.numberOfPeople}
                      </span>
                      <span className="luxury_package_details">
                        {/* Link to tour details */}
                        <a href="/tour-details">
                          Details
                          <i className="far fa-long-arrow-right" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/*====== End Services Section ======*/}

      {/*====== Start What We Section ======*/}
      <section className="we-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-6">
              <div className="we-content-box mb-10 wow fadeInLeft">
                <div className="section-title mb-30">
                  <h2>How It Works...</h2>
                </div>
                <div className="features-list_one">
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-helmet" />
                      </div>
                    </div>
                    <div className="content">
                      <h4 className="destination_title">Choose your holiday destination</h4>
                      <p>
                        Our sales experts can assist you to choose the best
                        destination based on your expectations
                      </p>
                    </div>
                  </div>
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-best-price" />
                      </div>
                    </div>
                    <div className="content">
                      <h4 className="destination_title">
                        Customise your itinerary with the help of our first-hand
                        destination experts
                      </h4>
                      <p>Contact Sales + 999 999 99 99</p>
                    </div>
                  </div>
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-travel" />
                      </div>
                    </div>
                    <div className="content">
                      <h4 className="destination_title">Get the best deal!! Confirm your holiday</h4>
                      <p>
                        Easy EMI options available- Contact sales for more
                        information
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 destination_hidden">
              <div className="we-two_image-box mb-20">
                <div className="row align-items-end">
                  <div className="col-md-6">
                    <div className="we-image mb-30 wow fadeInLeft">
                      <img
                        style={{ height: "320px" }}
                        src="https://classicescapes.in/img/new-india-banner_1/kashmir.jpg"
                        alt="we Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="we-image mb-30 wow fadeInRight">
                      <img
                        style={{ height: "300px" }}
                        src="https://classicescapes.in/img/new-india-banner_1/kerala.jpg"
                        alt="we Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="we-image mb-30 pr-lg-30 text-md-end wow fadeInDown">
                      <img
                        style={{
                          height: "280px",
                          width: "80%",
                          objectFit: "cover",
                        }}
                        src="https://classicescapes.in/img/new-india-banner_1/agra.jpg"
                        alt="we Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End What We Section ======*/}

      {/*====== Start Services Section ======*/}
      <section
        className="destination-section  "
        style={{ marginBottom: "50px" }}
      >
        <div className="container">
          <h3
            style={{
              fontSize: "1.875rem ",
              marginTop: "30px",
              marginBottom: "60px",
              color: "#405C85",
              textAlign: "center",
            }}
            className="home_titles"
          >
            Exclusive South India Collections
          </h3>

          <Slider
            {...sliderActive3Item}
            className="slider-active-3-item wow fadeInUp"
          >
            {WaterPlaces.map((place, index) => (
              <div className="single-place-item-two mb-30">
                <div className="place-img">
                  <img
                    src={place.image}
                    alt="Place Image"
                    className="home_popular_image"
                    style={{ height: "450px", objectFit: "cover" }}
                  />
                  <span className="tour-count">{place.tourCount} Ratings</span>
                  <div className="place-content">
                    <div className="info text-white">
                      <h3
                        className="title mb-10 home_popular_title"
                        style={{ fontSize: "18px" }}
                      >
                        {place.name}
                      </h3>
                      <p className="price">
                        <span className="currency">₹</span>
                        {place.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/*====== End Services Section ======*/}

      {/*====== Luxury Services Section ======*/}
      <section
        className="destination-section  "
        style={{ marginBottom: "50px" }}
      >
        <div className="container">
          <h3
            style={{
              fontSize: "1.875rem ",
              marginTop: "30px",
              marginBottom: "60px",
              color: "#405C85",
              textAlign: "center",
            }}
            className="home_titles"
          >
            Top Luxury Experiences in India
          </h3>

          <Slider
            {...sliderActive3Item}
            className="slider-active-3-item wow fadeInUp"
          >
            {luxury.map((place, index) => (
              <div className="single-place-item-two mb-30">
                <div className="place-img">
                  <img
                    src={place.image}
                    alt="Place Image"
                    className="home_popular_image"
                    style={{ height: "450px", objectFit: "cover" }}
                  />
                  <span className="tour-count">{place.tourCount} Ratings</span>
                  <div className="place-content">
                    <div className="info text-white">
                      <h3
                        className="title mb-10 home_popular_title"
                        style={{ fontSize: "18px" }}
                      >
                        {place.name}
                      </h3>
                      <p className="price">
                        <span className="currency">₹</span>
                        {place.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/*====== End Services Section ======*/}

      {/*====== Exclusive  Services Section ======*/}
      <section
        className="destination-section  "
        style={{ marginBottom: "50px" }}
      >
        <div className="container">
          <h3
            style={{
              fontSize: "1.875rem ",
              marginTop: "30px",
              marginBottom: "60px",
              color: "#405C85",
              textAlign: "center",
            }}
            className="home_titles"
          >
            Luxury Villa Stays in India
          </h3>

          <Slider {...sliderBlog} className="slider-active-3-item wow fadeInUp">
            {villas.map((villa, index) => (
              <div key={villa.id} className="blog-list-wrapper">
                <div className="single-blog-post-four mb-30 wow fadeInDown">
                  <div className="post-thumbnail">
                    <img src={villa.image} alt="Post Image" />
                  </div>
                  <div className="entry-content">
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>{villa.name}</a>
                      </Link>
                    </h3>
                    <h6 className="author">
                      <p className="destination_description">{villa.description}</p>
                    </h6>
                    <Link legacyBehavior href="/blog-details">
                      <a className="main-btn filled-btn">
                        Read More
                        <i className="fas fa-paper-plane" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/*====== End Services Section ======*/}

      <footer className="main-footer black-bg pt-230">
        <div className="container">
          {/*=== Footer Top ===*/}
          <div className="footer-top pt-40 wow fadeInUp">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                {/*=== Single Info Item ===*/}
                <div className="single-info-item mb-40">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="info">
                    <span className="title">Location</span>
                    <p>
                      Address 57 Main Street, 2nd Block 3rd Floor, TamilNadu
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Single Info Item ===*/}
                <div className="single-info-item mb-40">
                  <div className="icon">
                    <i className="far fa-envelope-open" />
                  </div>
                  <div className="info">
                    <span className="title">Email</span>
                    <p>
                      <a href="mailto:support@gmail.com">Contact@info.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Single Info Item ===*/}
                <div className="single-info-item mb-40">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="info">
                    <span className="title">Hotline</span>
                    <p>
                      <a href="tel:+000(123)456898">+999 999 99 99</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Social Box ===*/}
                <div className="social-box mb-40 float-lg-end">
                  <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*=== Footer Widget ===*/}
          <div className="footer-widget-area pt-75 pb-30">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                {/*=== Footer Widget ===*/}
                <div className="footer-widget about-company-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">About</h4>
                  <div className="footer-content">
                    <p>
                      To take trivial example which us ever undertakes laborious
                      physica exercise except obsome
                    </p>
                    <a href="#" className="footer-logo">
                      <img
                        src="/assets/images/logo/logo-white.png"
                        alt="Site Logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                {/*=== Footer Widget ===*/}
                <div className="footer-widget service-nav-widget mb-40 pl-lg-70 wow fadeInDown">
                  <h4 className="widget-title">Services</h4>
                  <div className="footer-content">
                    <ul className="footer-widget-nav">
                      <li>
                        <a href="#">Caravan Soler Tent</a>
                      </li>
                      <li>
                        <a href="#">Family Tent Camping</a>
                      </li>
                      <li>
                        <a href="#">Classic Tent Camping</a>
                      </li>
                      <li>
                        <a href="#">Wild Tent Camping</a>
                      </li>
                      <li>
                        <a href="#">Small Cabin Wood</a>
                      </li>
                    </ul>
                    <ul className="footer-widget-nav">
                      <li>
                        <a href="#">Need a Career ?</a>
                      </li>
                      <li>
                        <a href="#">Latest News &amp; Blog</a>
                      </li>
                      <li>
                        <a href="#">Core Features</a>
                      </li>
                      <li>
                        <a href="#">Meet Our teams</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                {/*=== Footer Widget ===*/}
                <div className="footer-widget footer-newsletter-widget mb-40 pl-lg-100 wow fadeInUp">
                  <h4 className="widget-title">Newsletter</h4>
                  <div className="footer-content">
                    <p>
                      Which of us ever undertake laborious physical exercise
                      except obtain
                    </p>
                    <form>
                      <div className="form_group">
                        <label>
                          <i className="far fa-paper-plane" />
                        </label>
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email"
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Footer Copyright ===*/}
          <div className="footer-copyright">
            <div className="row">
              <div className="col-lg-6">
                {/*=== Footer Text ===*/}
                <div className="footer-text">
                  <p>
                    Copy@ 2023{" "}
                    <span style={{ color: "#F7921E" }}>TourDeal Andaman</span>,
                    All Right Reserved
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                {/*=== Footer Nav ===*/}
                <div className="footer-nav float-lg-end">
                  <ul>
                    <li>
                      <a href="#">Setting &amp; privacy</a>
                    </li>
                    <li>
                      <a href="#">Faqs</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
}

export default India;
