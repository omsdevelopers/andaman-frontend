import GallerySection from "@/src/components/GallerySection";
import Home3Slider from "@/src/components/sliders/Home3";
import Layout from "@/src/layout/Layout";
import {
  home1Slider,
  sliderActive3Item,
  sliderActive4Item,
  testimonialSliderOne,
} from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Index = () => {
  const slidesData = [
    {
      imageUrl:
        "https://www.andamanisland.in/storage/destinations/602bbed745c47134_mayabunder-island.jpg",
      title: "Havelock Island",
      description: "Set unde omnis estenatus voluptatem aperiae.",
    },
    {
      imageUrl:
        "https://www.andamanisland.in/storage/destinations/63e2530e4f474189_air-1024x683.jpg",
      title: "Port Blair",
      description: "Set unde omnis estenatus voluptatem aperiae.",
    },
    {
      imageUrl:
        "https://andamanisland.in/storage/destinations/602bbec7107c8107_5f8027c85113b101_destination01.jpg",
      title: "Neil Island",
      description: "Set unde omnis estenatus voluptatem aperiae.",
    },
    {
      imageUrl:
        "https://www.andamanisland.in/storage/destinations/602bbe8e58fb0189_rangat-island.jpg",
      title: "Mayabunder Island",
      description: "Set unde omnis estenatus voluptatem aperiae.",
    },
  ];

  const placesData = [
    {
      imageUrl:
        "https://www.andamanisland.in/storage/packages/thumb/612a099294b12130_9.jpg",
      title: "Pristine Andaman Tour Package for 5 Nights & 6 Days",
      location: "Havelock Island, Andaman",
      price: 93.65,
      days: 5,
      numberOfPeople: 25,
    },

    {
      imageUrl:
        "https://www.andamanisland.in/storage/packages/thumb/612a0bb864606161_4.jpg",
      title: "Cocktail of History & Natural Wonder Tour Package",
      location: "Port Plair, Andaman",
      price: 93.65,
      days: 5,
      numberOfPeople: 25,
    },

    {
      imageUrl:
        "https://www.andamanisland.in/storage/packages/thumb/612a0a42bf0e7106_148.jpg",
      title: "Soulmate Special Tour Package for 4 Nights & 5 Days",
      location: "Neil Island, Andaman",
      price: 93.65,
      days: 5,
      numberOfPeople: 25,
    },

    {
      imageUrl:
        "https://www.andamanisland.in/storage/packages/thumb/612a0b220d463118_153.jpg",
      title: "Best of Capital Town Tour Package for 4 Nights & 5 Days",
      location: "Port Blair, Andaman",
      price: 93.65,
      days: 5,
      numberOfPeople: 25,
    },

    {
      imageUrl:
        "https://www.andamanisland.in/storage/packages/thumb/612a082c22bba141_87.jpg",
      title: "Luxury Andaman Islands Leisure Trip for 4 Nights & 5 Days ",
      location: "Neil Island, Andaman",
      price: 93.65,
      days: 5,
      numberOfPeople: 25,
    },
    // Add more place items here if needed
  ];

  const specialPlaces = [
    {
      id: 1,
      name: "On the Beach Special Romantic Candlelight Dinner with Private Decorated Canopy",
      image:
        "https://www.andamanisland.in/storage/packages/thumb/62d6668081899163_romantic-beachside-candlelight-dinner-with-decorated-canopy.png",
      tourCount: 5,
      price: 6000,
    },
    {
      id: 2,
      name: "Romantic Beachside Candlelight Dinner With Decorated Canopy",
      image:
        "https://www.andamanisland.in/storage/packages/thumb/091023062402-62d79163d42b6107-6k-packages.jpg",
      tourCount: 5,
      price: 5500,
    },
    {
      id: 3,
      name: "Romantic Beachside Candlelight Dinner With Decorated Canopy",
      image:
        "https://www.andamanisland.in/storage/packages/thumb/62d5113d787a2156_18k-packages.jpg",
      tourCount: 5,
      price: 5000,
    },
    {
      id: 4,
      name: "Romantic Beachside Candlelight Dinner - Premium Sea Side",
      image:
        "https://www.andamanisland.in/storage/packages/thumb/62d910354f935187_9k-package1s.jpg",
      tourCount: 5,
      price: 5000,
    },
  ];

  const EconomicalData = [
    {
      imageUrl:
        "https://www.andamanisland.in/storage/packages/thumb/612a1710e3ad2196_119.jpg",
      title: "Port Blair, Havelock & Neil Island for 5 Nights & 6 Days",
      location: "Havelock Island, Andaman",
      price: 93.65,
      days: 5,
      numberOfPeople: 25,
    },

    {
      imageUrl:
        "https://www.andamanisland.in/storage/packages/thumb/612a0f2fa33dc155_10.jpg",
      title: "Andaman Super Saver Tour Package for 5 Nights & 6 Days",
      location: "Port Plair, Andaman",
      price: 93.65,
      days: 5,
      numberOfPeople: 25,
    },

    {
      imageUrl:
        "https://www.andamanisland.in/storage/packages/thumb/612a17733a30e156_81.jpg",
      title: "Soulmate Special Tour Package for 4 Nights & 5 Days",
      location: "Neil Island, Andaman",
      price: 93.65,
      days: 5,
      numberOfPeople: 25,
    },

    {
      imageUrl:
        "https://www.andamanisland.in/storage/packages/thumb/612a0b220d463118_153.jpg",
      title: "Long Weekend in Port Blair and Havelock for 4 Nights & 5 Days",
      location: "Port Blair, Andaman",
      price: 93.65,
      days: 5,
      numberOfPeople: 25,
    },

    {
      imageUrl:
        "https://www.andamanisland.in/storage/packages/thumb/612a10b60a346124_17.jpg",
      title: "Andaman Best Seller Tour Package for 6 Nights & 7 Days",
      location: "Neil Island, Andaman",
      price: 93.65,
      days: 5,
      numberOfPeople: 25,
    },
    // Add more place items here if needed
  ];

  const WaterPlaces = [
    {
      id: 1,
      name: "Parasailing in Havelock Island",
      image:
        "https://www.andamanisland.in/storage/packages/0146f7b7e00686571d317aa9fef72a58_parasailing_at_havelock_with_hibr.jpg",
      tourCount: 5,
      price: 6000,
    },
    {
      id: 2,
      name: "Kayaking in Havelock Island",
      image:
        "https://www.andamanisland.in/storage/packages/091023062643-5f9f0cfa67822158-kayaking-in-andaman4.jpg",
      tourCount: 5,
      price: 5500,
    },
    {
      id: 3,
      name: "Jet Ski in Havelock Island",
      image:
        "https://www.andamanisland.in/storage/packages/thumb/5f9f1603d08b7152_jet_ski_in_andaman8.jpg",
      tourCount: 5,
      price: 5000,
    },
    {
      id: 4,
      name: "Glass Bottom Boat Ride in Havelock Island",
      image:
        "https://www.andamanisland.in/storage/packages/091023062931-5f9f1bc213a1e114-glass-bottom-boat-in-andaman.jpg",
      tourCount: 5,
      price: 5000,
    },
  ];

  return (
    <Layout header={3} noFooter>
      {/*====== Start Hero Section ======*/}
      <section className="hero-section">
        {/*=== Hero Wrapper ===*/}
        <div className="hero-wrapper black-bg">
          {/*=== Hero Slider ===*/}
          <Home3Slider />
        </div>
      </section>

      {/*====== Start Booking Section ======*/}
      {/* <section className="booking-form-section">
        <div className="container-fluid">
          <div className="booking-form-wrapper">
            <form className="booking-form-two">
              <div className="form_group">
                <span>Check In</span>
                <label>
                  <i className="far fa-calendar-alt" />
                </label>
                <input
                  type="text"
                  className="form_control datepicker"
                  placeholder="Check In"
                />
              </div>
              <div className="form_group">
                <span>Check Out</span>
                <label>
                  <i className="far fa-calendar-alt" />
                </label>
                <input
                  type="text"
                  className="form_control datepicker"
                  placeholder="Check Out"
                />
              </div>
              <div className="form_group">
                <span>Guest</span>
                <label>
                  <i className="far fa-user-alt" />
                </label>
                <input
                  type="text"
                  className="form_control"
                  placeholder="Guest"
                  name="text"
                />
              </div>
              
              <div className="form_group">
                <button className="booking-btn">
                  Check Availability <i className="far fa-angle-double-right" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section> */}
      {/*====== End Booking Section ======*/}
      {/*====== End Hero Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-section pt-100">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-9">
            {/*=== About Content Box ===*/}
            <div className="about-content-box text-center mb-55 wow fadeInDown">
              <div className="section-title mb-30">
                <span className="sub-title">About Us</span>
                <h2
                  style={{ color: "#405C85", fontSize: "2rem" }}
                  className="home_titles"
                >
                  Explore Andaman With Our Exclusive Tour Packages
                </h2>
              </div>
              <p style={{ textAlign: "justify" }}>
                A one-stop destination for people wishing to book holidays,
                packages and hotels for family holidays, business trips and
                honeymoon tour packages in Andaman Islands. We offer a wide
                range of services to our customers, including discounted hotel
                bookings, holiday packages and honeymoon tour packages in
                Andaman and Nicobar Islands.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <h3
            style={{
              fontSize: "1.875rem ",
              marginTop: "30px",
              marginBottom: "60px",
              color: "#405C85",
            }}
            className="home_titles"
          >
            Top Islands in Andaman & Nicobar
          </h3>
          <Slider
            {...sliderActive4Item}
            className="slider-active-4-item wow fadeInUp"
          >
            {slidesData.map((slide, index) => (
              <div key={index} className="single-features-item mb-40">
                <div className="img-holder">
                  <img
                    src={slide.imageUrl}
                    alt="Features Image"
                    style={{ height: "50vh", objectFit: "cover" }}
                  />
                  <div className="content">
                    <div className="text">
                      <h4 className="title">{slide.title}</h4>
                      <a href="#" className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </div>
                    <p>{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/*====== End Hero Section ======*/}

      {/*====== Start Services Section ======*/}
      <section
        className="services-seciton pt-100"
        style={{ marginBottom: "50px" }}
      >
        <div className="container">
          <span className="sub-title">Packages</span>
          <h3
            style={{
              fontSize: "1.875rem ",
              marginTop: "30px",
              marginBottom: "60px",
              color: "#405C85",
            }}
            className="home_titles"
          >
            Andaman Luxury Packages
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

      {/*====== Start Services Section ======*/}
      <section className="services-seciton " style={{ marginBottom: "50px" }}>
        <div className="container">
          <h3
            style={{
              fontSize: "1.875rem ",
              marginTop: "30px",
              marginBottom: "60px",
              color: "#405C85",
            }}
            className="home_titles"
          >
            Economical Andaman Tour Packages
          </h3>

          <Slider
            {...sliderActive3Item}
            className="slider-active-3-item wow fadeInUp"
          >
            {EconomicalData.map((place, index) => (
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

      {/*====== Start Services Section ======*/}
      <section className="services-seciton " style={{ marginBottom: "50px" }}>
        <div className="container">
          <h3
            style={{
              fontSize: "1.875rem ",
              marginTop: "30px",
              marginBottom: "60px",
              color: "#405C85",
            }}
            className="home_titles"
          >
            Andaman Honeymoon Packages
          </h3>

          <Slider
            {...sliderActive3Item}
            className="slider-active-3-item wow fadeInUp"
          >
            {EconomicalData.map((place, index) => (
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

      {/*====== Start Activity Section ======*/}
      <section className="activity-section">
        <div
          className="activity-wrapper-bgc  text-black"
          style={{ backgroundColor: "#F3FAFF" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7">
                <div className="section-title text-center mb-50 wow fadeInDown">
                  <span className="sub-title">Popular Packages</span>
                  <h2>Feel Real Adventure and Very Colse to Nature</h2>
                </div>
              </div>
            </div>

            {/*====== Start Services Section ======*/}
            <section
              className="destination-section "
              style={{ marginBottom: "50px" }}
            >
              <div className="container">
                <h3
                  style={{
                    fontSize: "1.875rem ",
                    marginTop: "30px",
                    marginBottom: "60px",
                    color: "#405C85",
                  }}
                  className="home_titles"
                >
                  Romantic Candle Light Dinner In Andaman Islands
                </h3>

                <Slider
                  {...sliderActive3Item}
                  className="slider-active-3-item wow fadeInUp"
                >
                  {specialPlaces.map((place, index) => (
                    <div className="single-place-item-two mb-30">
                      <div className="place-img">
                        <img
                          src={place.image}
                          alt="Place Image"
                          className="home_popular_image"
                          style={{ height: "450px", objectFit: "cover" }}
                        />
                        <span className="tour-count">
                          {place.tourCount} Ratings
                        </span>
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
                  }}
                  className="home_titles"
                >
                  Andaman Water Activities Tour Packages
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
                        <span className="tour-count">
                          {place.tourCount} Ratings
                        </span>
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
          </div>
        </div>
      </section>
      {/*====== End Activity Section ======*/}

      {/*====== End Hero Section ======*/}

      {/*====== Start Features Section ======*/}
      <section className="features-section pb-60" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-rabbit" />
                </div>
                <div className="text">
                  <h4 className="title">Best Security</h4>
                  <p>
                    we denounce with righteous indignation and dislike men who
                    are so beguiled
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-wifi-router" />
                </div>
                <div className="text">
                  <h4 className="title">Free Internet</h4>
                  <p>
                    we denounce with righteous indignation and dislike men who
                    are so beguiled
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-solar-energy" />
                </div>
                <div className="text">
                  <h4 className="title">Solar Energy</h4>
                  <p>
                    we denounce with righteous indignation and dislike men who
                    are so beguiled
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-cycling" />
                </div>
                <div className="text">
                  <h4 className="title">Mountain Biking</h4>
                  <p>
                    we denounce with righteous indignation and dislike men who
                    are so beguiled
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-fishing" />
                </div>
                <div className="text">
                  <h4 className="title">Swimming &amp; Fishing </h4>
                  <p>
                    we denounce with righteous indignation and dislike men who
                    are so beguiled
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-gym" />
                </div>
                <div className="text">
                  <h4 className="title">GYM and Yoga</h4>
                  <p>
                    we denounce with righteous indignation and dislike men who
                    are so beguiled
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}

      {/*====== Start CTA Section ======*/}
      <section
        className="cta-bg overlay bg_cover pt-150 pb-150"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg2.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-8">
              {/*=== CTA Content Box ===*/}
              <div className="cta-content-box text-white wow fadeInLeft">
                <h2 className="mb-35">
                  Ready to Travel With Real Adventure and Enjoy Natural
                </h2>
                <Link legacyBehavior href="/about">
                  <a className="main-btn secondary-btn">
                    Check Availability
                    <i className="far fa-paper-plane" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4">
              {/*=== Play Box ===*/}
              <div className="play-box text-lg-end text-center wow fadeInRight">
                <a
                  href="https://www.youtube.com/watch?v=8l9q6lq-o_Y"
                  className="video-popup"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}

      {/*====== Start We Section ======*/}
      <section className="who-we-section" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6 order-1 order-lg-1">
              {/*=== We Content Box ===*/}
              <div className="we-one_content-box">
                <div className="section-title mb-30 wow fadeInUp">
                  <span className="sub-title">Destinations Beach</span>
                  <h2 style={{fontSize:"1.875rem"}} className="beach_title">WEDDINGS AT ANDAMAN ISLANDS</h2>
                </div>
                <p className="wow fadeInDown">
                Whether you're looking for a romantic getaway, a family-friendly adventure, or a solo journey to explore the world, a travel agency can provide you with a custom-tailored itinerary that exceeds your expectations.
                </p>
              </div>
            </div>

            <div className="col-lg-6 order-2 order-lg-2">
              {/*=== We Image Box ===*/}
              <div className="we-image-box text-center text-lg-left wow fadeInDown">
                <img
                  src="https://www.andamanisland.in/assets/andamanisland/images/circle-logo.png?8edc579a27b5f07fcd38e9a9e3522ec4"
                  className="beach_image"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End We Section ======*/}

      {/*====== Start Fact Section ======*/}
      <section className="fact-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item text-center mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-journey" />
                </div>
                <h2 className="number">
                  <Counter end={8453} />+
                </h2>
                <p>Happy Traveler</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item text-center mb-40 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-tent-1" />
                </div>
                <h2 className="number">
                  <Counter end={3568} />+
                </h2>
                <p>Tent Sites</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item text-center mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-reviews" />
                </div>
                <h2 className="number">
                  <Counter end={99.3} decimals={1} />%
                </h2>
                <p>Positive Reviews</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item text-center mb-40 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-award" />
                </div>
                <h2 className="number">
                  <Counter end={63} />K
                </h2>
                <p>Awards Winning</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fact Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      <section className="testimonial-section pt-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Testimonials</span>
                <h2>What Our Traveler Say About Our Tour Services</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-xl-center">
            <div className="col-xl-5 col-lg-12 order-2 order-xl-1">
              {/*=== Testimonial Image ===*/}
              <div className="testimonial-one_image-box mb-40 wow fadeInLeft">
                <img
                  src="assets/images/testimonial/testimonial-1.jpg"
                  alt="Testimonial Image"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-12 order-1 order-xl-2">
              {/*=== Testimonial Slider ===*/}
              <Slider
                {...testimonialSliderOne}
                className="testimonial-slider-one pl-lg-55 mb-40 wow fadeInRight"
              >
                {/*=== Testimonial Item ===*/}
                <div className="gw-testimonial-item">
                  <div className="testimonial-inner-content">
                    <div className="quote-rating-box">
                      <div className="icon">
                        <img
                          src="assets/images/testimonial/quote.png"
                          alt="quote icon"
                        />
                      </div>
                      <div className="ratings-box">
                        <h4>Quality Services</h4>
                        <ul className="ratings">
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="home_testinomial">
                      To take a trivial example which of usev undertakes
                      laborious physical exercise excepto obtain advantage from
                      has any right to find fault with man who chooses to enjoy
                    </p>
                    <div className="author-thumb-title">
                      <div className="author-thumb">
                        <img
                          src="assets/images/testimonial/author-1.jpg"
                          alt="Author Image"
                        />
                      </div>
                      <div className="author-title">
                        <h3 className="title">Douglas D. Hall</h3>
                        <p className="position">CEO &amp; Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*=== Testimonial Item ===*/}
                <div className="gw-testimonial-item">
                  <div className="testimonial-inner-content">
                    <div className="quote-rating-box">
                      <div className="icon">
                        <img
                          src="assets/images/testimonial/quote.png"
                          alt="quote icon"
                        />
                      </div>
                      <div className="ratings-box">
                        <h4>Quality Services</h4>
                        <ul className="ratings">
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="home_testinomial">
                      To take a trivial example which of usev undertakes
                      laborious physical exercise excepto obtain advantage from
                      has any right to find fault with man who chooses to enjoy
                    </p>
                    <div className="author-thumb-title">
                      <div className="author-thumb">
                        <img
                          src="assets/images/testimonial/author-1.jpg"
                          alt="Author Image"
                        />
                      </div>
                      <div className="author-title">
                        <h3 className="title">Douglas D. Hall</h3>
                        <p className="position">CEO &amp; Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*=== Testimonial Item ===*/}
                <div className="gw-testimonial-item">
                  <div className="testimonial-inner-content">
                    <div className="quote-rating-box">
                      <div className="icon">
                        <img
                          src="assets/images/testimonial/quote.png"
                          alt="quote icon"
                        />
                      </div>
                      <div className="ratings-box">
                        <h4>Quality Services</h4>
                        <ul className="ratings">
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="home_testinomial">
                      To take a trivial example which of usev undertakes
                      laborious physical exercise excepto obtain advantage from
                      has any right to find fault with man who chooses to enjoy
                    </p>
                    <div className="author-thumb-title">
                      <div className="author-thumb">
                        <img
                          src="assets/images/testimonial/author-1.jpg"
                          alt="Author Image"
                        />
                      </div>
                      <div className="author-title">
                        <h3 className="title">Douglas D. Hall</h3>
                        <p className="position">CEO &amp; Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial Section ======*/}

      {/*====== End Gallery Section ======*/}
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
                        src="assets/images/logo/logo-white.png"
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
};
export default Index;
