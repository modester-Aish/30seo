'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaSearch } from 'react-icons/fa';
const NavbarFour = () => {
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
      <nav className="navbar navbar-area navbar-area-3 navbar-expand-lg">
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
            <Link href="/">
              <span className="d-none d-md-inline-block ms-2">SEO GROUP BUY TOOLS</span>
            </Link>
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
            <ul className="navbar-nav menu-open text-lg-center ps-lg-5 navbarFive">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/tools-pricing">Pricing</Link>
              </li>
              <li className="menu-item-has-children">
                <Link href="/single-seo-tools">SINGLE SEO TOOLS</Link>
                <ul className="sub-menu">
                  <li><Link href="/single-seo-tools/ahrefs-group-buy">Ahrefs</Link></li>
                  <li><Link href="/single-seo-tools/semrush-group-buy">Semrush</Link></li>
                  <li><Link href="/single-seo-tools/envato-elements-group-buy">Envato Elements</Link></li>
                  <li><Link href="/single-seo-tools/grammarly-group-buy">Grammarly</Link></li>
                  <li><Link href="/single-seo-tools/kwfinder-group-buy">KWFinder</Link></li>
                  <li><Link href="/single-seo-tools/majestic-group-buy">Majestic</Link></li>
                  <li><Link href="/single-seo-tools/frase-group-buy">Frase</Link></li>
                  <li><Link href="/single-seo-tools/netflix-group-buy">Netflix</Link></li>
                  <li><Link href="/single-seo-tools/prime-video-group-buy">Prime Video</Link></li>
                  <li><Link href="/single-seo-tools/canva-group-buy">Canva Pro</Link></li>
                  <li><Link href="/single-seo-tools/adobe-stock-group-buy">Adobe Stock</Link></li>
                  <li><Link href="/single-seo-tools/udemy-group-buy">Udemy</Link></li>
                  <li><Link href="/single-seo-tools/coursera-group-buy">Coursera</Link></li>
                  <li><Link href="/single-seo-tools/claude-ai-group-buy">Claude AI</Link></li>
                  <li><Link href="https://seotoolsgroupbuy.us/single-tools-list/">+more</Link></li>
                </ul>
              </li>
              
              
              

              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right-part nav-right-part-desktop align-self-center">
            <Link
              className="btn btn-base-color border-radius-5 d-flex align-items-center"
              href="/about"
            >
              Get a quote <FaArrowRight className="mt-0" />
            </Link>
          </div>
        </div>
      </nav>
      {/* ==================== Navbar Two end ====================*/}
    </>
  );
};

export default NavbarFour;
