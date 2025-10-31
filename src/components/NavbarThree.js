'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';

const NavbarThree = () => {
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const menuActive = () => {
    setActive(!active);
  };
  const searchActive = () => {
    setSearchShow(!searchShow);
    console.log('hell');
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
        <form action="/" className="search-form">
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
      {/* ==================== Navbar Two Start ====================*/}
      <nav className="navbar navbar-area navbar-area_3 navbar-area-2 navbar-expand-lg bg-white">
        <div className="container nav-container custom-container">
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
            <Link href="/">SEO GROUP BUY TOOLS</Link>
          </div>
          <div className="nav-right-part nav-right-part-mobile">
            <span className="search-bar-btn" onClick={searchActive}>
              <FaSearch />
            </span>
          </div>
          <div
            className={
              active
                ? 'collapse navbar-collapse sopen'
                : 'collapse navbar-collapse'
            }
            id="itech_main_menu"
          >
            <ul className="navbar-nav menu-open text-lg-end">
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
                <Link href="#">Pages</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/team">Team 01</Link>
                  </li>
                  <li>
                    <Link href="/team-2">Team 02</Link>
                  </li>
                  <li>
                    <Link href="/team-3">Team 03</Link>
                  </li>
                  <li>
                    <Link href="/team-details">Team Details</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing 01</Link>
                  </li>
                  <li>
                    <Link href="/pricing-2">Pricing 02</Link>
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
          <div className="nav-right-part nav-right-part-desktop d-lg-inline-flex align-item-center">
            <a className="navbar-phone d-xxl-inline-block d-none" href="tel:+15205636362">
              <span className="icon">
                <img src="/assets/img/icon/1.png" alt="img" />
              </span>
              <span>Need help?</span>
              <h5>+1 (520) 563‑6362</h5>
            </a>
            <Link className="btn btn-border-base" href="/about">
              Discover More <FaPlus />
            </Link>
          </div>
        </div>
      </nav>
      {/* ==================== Navbar Two end ====================*/}
    </>
  );
};

export default NavbarThree;
