import Link from "next/link";
import { Fragment, useState } from "react";
import SearchModal from "./SearchModal";

const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};
export default Menu;

const DeskTopMenu = () => {
  const [searchModal, setSearchModal] = useState(false);
  return (
    <Fragment>
      <SearchModal
        show={searchModal}
        handleClose={() => setSearchModal(false)}
      />
      <nav className="main-menu d-none d-xl-block">
        <ul>
          <li className="menu-item">
            <a href="#">Andaman Islands</a>

            <ul className="sub-menu">
              <li>
                <Link href="/andaman-islands/top10">
                  Top 10 Things to do in the Andaman Islands
                </Link>
              </li>
              <li>
                <a href="#">Adventure Sports in Andaman Islands</a>
              </li>
              <li>
                <a href="detail-working-contact-form.html">
                  Andaman Island Tourism
                  <strong className="badge badge-danger">New!</strong>
                </a>
              </li>
              <li>
                <a href="#">History of Andaman</a>
              </li>
              <li>
                <a href="#">How to Reach Andaman</a>
              </li>
              <li>
                <a href="#">Overview of Andaman Islands</a>
              </li>
              <li>
                <a href="#">Important Places of Andaman Islands</a>
              </li>
              <li>
                <a href="#">Quick Facts of Andaman Islands</a>
              </li>
              <li>
                <a href="#">Quick Facts of Andaman Islands</a>
              </li>
              <li>
                <a href="#">Speciality of Andaman Islands</a>
              </li>
              <li>
                <a href="#">Travel guide to Andaman Islands</a>
              </li>
              <li>
                <a href="#">Trekking in Andaman Island</a>
              </li>
              <li>
                <a href="#">Frequently Asked Questions</a>
              </li>
              <li>
                <a href="#">Do's & Don'ts</a>
              </li>
            </ul>
          </li>
          <li className="menu-item has-children">
            <a href="#">Tours</a>
            <ul className="sub-menu">
              <li>
                <Link href="tour">Tours</Link>
              </li>
              <li>
                <Link href="tour-details">Tours Details</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item has-children">
            <a href="#">Water Sports in Andaman</a>
            <ul className="sub-menu">
              <li>
                <Link href="destination">Destination</Link>
              </li>
              <li>
                <Link href="destination-details">Destination Details</Link>
              </li>
            </ul>
          </li>

          <li className="menu-item has-children">
            <a href="#">Destination</a>
            <ul className="sub-menu">
              <li>
                <Link href="blog-list">Blog List</Link>
              </li>
              <li>
                <Link href="blog-details">Blog Details</Link>
              </li>
            </ul>
          </li>

          <li className="menu-item has-children">
            <a href="#">Hotels and Resorts</a>
            <ul className="sub-menu">
              <li>
                <Link href="about">About Us</Link>
              </li>
              <li>
                <Link href="gallery">Our Gallery</Link>
              </li>
              <li>
                <Link href="events">Our Events</Link>
              </li>
              <li>
                <Link href="shop">Our Shop</Link>
              </li>
              <li>
                <Link href="product-details">Product Details</Link>
              </li>
              <li>
                <Link href="contact">Contact</Link>
              </li>
            </ul>
          </li>

          <li className="menu-item has-children">
            <a href="#">Destination Wedding</a>
            <ul className="sub-menu">
              <li>
                <Link href="about">About Us</Link>
              </li>
              <li>
                <Link href="gallery">Our Gallery</Link>
              </li>
              <li>
                <Link href="events">Our Events</Link>
              </li>
              <li>
                <Link href="shop">Our Shop</Link>
              </li>
              <li>
                <Link href="product-details">Product Details</Link>
              </li>
              <li>
                <Link href="contact">Contact</Link>
              </li>
            </ul>
          </li>

          <li className="menu-item has-children">
            <a href="#">Transportation</a>
            <ul className="sub-menu">
              <li>
                <Link href="about">About Us</Link>
              </li>
              <li>
                <Link href="gallery">Our Gallery</Link>
              </li>
              <li>
                <Link href="events">Our Events</Link>
              </li>
              <li>
                <Link href="shop">Our Shop</Link>
              </li>
              <li>
                <Link href="product-details">Product Details</Link>
              </li>
              <li>
                <Link href="contact">Contact</Link>
              </li>
            </ul>
          </li>

          <li className="menu-item search-item">
            <div
              className="search-btn"
              data-bs-toggle="modal"
              data-bs-target="#search-modal"
              onClick={() => setSearchModal(true)}
            >
              <i className="far fa-search" />
            </div>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu d-block d-xl-none">
      <ul>
        <li className="menu-item has-children">
          <a href="/">
            Andaman Islands
            <span className="dd-trigger" onClick={() => activeMenuSet("home")}>
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu" style={activeLi("home")}>
            <li>
              <Link href="/">Andaman Islands</Link>
            </li>
            <li>
              <Link href="#">Home 02</Link>
            </li>
            <li>
              <Link href="#">Home 03</Link>
            </li>
            <li>
              <Link href="#">Home 04</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">
            Tours
            <span className="dd-trigger" onClick={() => activeMenuSet("Tours")}>
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu" style={activeLi("Tours")}>
            <li>
              <Link href="tour">Tours</Link>
            </li>
            <li>
              <Link href="#">Tours Details</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">
            Water Sports
            <span
              className="dd-trigger"
              onClick={() => activeMenuSet("Destination")}
            >
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu" style={activeLi("Destination")}>
            <li>
              <Link href="#">Destination</Link>
            </li>
            <li>
              <Link href="#">Destination Details</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">
            Destination
            <span className="dd-trigger" onClick={() => activeMenuSet("Blog")}>
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu" style={activeLi("Blog")}>
            <li>
              <Link href="#">Blog List</Link>
            </li>
            <li>
              <Link href="#">Blog Details</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">
            Hotels and Resorts
            <span className="dd-trigger" onClick={() => activeMenuSet("Pages")}>
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu" style={activeLi("Pages")}>
            <li>
              <Link href="#">About Us</Link>
            </li>
          </ul>
        </li>

        <li className="menu-item has-children">
          <a href="#">
            Destination Wedding{" "}
            <span className="dd-trigger" onClick={() => activeMenuSet("Pages")}>
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu" style={activeLi("Pages")}>
            <li>
              <Link href="#">About Us</Link>
            </li>
          </ul>
        </li>

        <li className="menu-item has-children">
          <a href="#">
            Transportation{" "}
            <span className="dd-trigger" onClick={() => activeMenuSet("Pages")}>
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu" style={activeLi("Pages")}>
            <li>
              <Link href="#">About Us</Link>
            </li>
          </ul>
        </li>

        <li className="menu-item search-item">
          <div
            className="search-btn"
            data-bs-toggle="modal"
            data-bs-target="#search-modal"
          >
            <i className="far fa-search" />
          </div>
        </li>
      </ul>
    </nav>
  );
};
