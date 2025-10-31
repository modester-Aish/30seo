'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaSearch,
  FaArrowRight,
} from 'react-icons/fa';

const NavbarSix = () => {
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const menuActive = () => {
    setActive(!active);
  };
  const searchActive = () => {
    setSearchShow(!searchShow);
  };

  // Control sidebar navigation
  useEffect(() => {
    const items = document.querySelectorAll('.menu-item-has-children > a');

    const handleClick = (event) => {
      event.preventDefault(); // Prevent default link behavior
      const subMenu = event.currentTarget.parentElement.querySelector('.sub-menu');
      if (subMenu) {
        subMenu.classList.toggle('active');
        event.currentTarget.classList.toggle('open');
      }
    };

    items.forEach(item => {
      item.addEventListener('click', handleClick);
    });

    // Cleanup function to remove event listeners
    return () => {
      items.forEach(item => {
        item.removeEventListener('click', handleClick);
      });
    };
  }, []);
  return (
    <>
      {/* search popup start*/}
      <div
        className={searchShow ? 'td-search-popup active' : 'td-search-popup '}
        id="td-search-popup"
      >
        <form className="search-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search....."
            />
          </div>
          <button type="submit" className="submit-btn">
            <FaSearch />
          </button>
        </form>
      </div>
      {/* search popup end*/}
      <div
        onClick={searchActive}
        className={searchShow ? 'body-overlay active' : 'body-overlay'}
        id="body-overlay"
      ></div>
      <>
        <div className="navbar-top pe-3 bg-white d-lg-block d-none">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <ul>
                  <li>
                    <FaPhoneAlt className="me-1 mb-1" /> (629) 555-0129
                  </li>
                  <li>
                    <FaEnvelope className="me-1 mb-1" /> info@example.com
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 text-lg-end">
                <ul className="topbar-right">
                  <li>
                    <FaMapMarkerAlt className="me-1 mb-1" /> 6391 Elgin St.
                    Celina, 10299
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* navbar start */}
        <nav className="navbar navbar-area navbar-area_6 navbar-area-2 navbar-area-6 navbar-expand-lg ">
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <button
                onClick={menuActive}
                className={
                  active
                    ? 'menu toggle-btn d-block d-lg-none open'
                    : 'menu toggle-btn d-block d-lg-none'
                }
                data-target="#itech_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-left" />
                <span className="icon-right" />
              </button>
            </div>
            <div className="logo">
              <Link href="/">
                <img src="assets/img/home-8/logo.png" alt="img" />
              </Link>
            </div>
            <div className="nav-right-part nav-right-part-mobile">
              <Link className="search-bar-btn" href="#" onClick={searchActive}>
                <FaSearch />
              </Link>
            </div>
            <div
              className={
                active
                  ? 'collapse navbar-collapse sopen'
                  : 'collapse navbar-collapse'
              }
              id="itech_main_menu"
            >
              <ul className="navbar-nav menu-open text-lg-center ps-lg-5">
                <li>
                  <Link href="/">Home</Link>
                </li>
                
                <li className="menu-item-has-children">
                  <Link href="#">Service</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/service">Service 01</Link>
                    </li>
                    <li>
                      <Link href="/service-2">Service 02</Link>
                    </li>
                    <li>
                      <Link href="/service-3">Service 03</Link>
                    </li>
                    <li>
                      <Link href="/service-4">Service 04</Link>
                    </li>
                    <li>
                      <Link href="/service-5">Service 05</Link>
                    </li>
                    <li>
                      <Link href="/service-details">Service Single</Link>
                    </li>
                  </ul>
                </li>
                
                

                <li className="menu-item-has-children">
                  <Link href="#">Blog</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/blog">Blog 01</Link>
                    </li>
                    <li>
                      <Link href="/blog-2">Blog 02</Link>
                    </li>
                    <li>
                      <Link href="/blog-3">Blog 03</Link>
                    </li>
                    <li>
                      <Link href="/blog-4">Blog 04</Link>
                    </li>
                    <li>
                      <Link href="/blog-details">Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="nav-right-part nav-right-part-desktop align-self-center">
              <Link className="btn btn-base-pink text-white" href="/about">
                Discover More <FaArrowRight className="mt-4" />
              </Link>
            </div>
          </div>
        </nav>
        {/* navbar end */}
      </>

      {/* ==================== Navbar Two end ====================*/}
    </>
  );
};

export default NavbarSix;
