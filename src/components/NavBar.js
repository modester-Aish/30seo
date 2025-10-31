'use client'
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const NavBar = () => {
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
      {/* navbar start */}
      <nav className="navbar navbar-area navbar-area_1 navbar-expand-lg">
        <div className="container nav-container navbar-bg">
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
            <a className="navbar-phone" href="tel:+15205636362">
              <span className="icon">
                <img src="/assets/img/icon/1.png" alt="img" />
              </span>
              <span>Need help?</span>
              <h5>+1 (520) 563‑6362</h5>
            </a>
          </div>
        </div>
      </nav>
      {/* navbar end */}
    </>
  );
};

export default NavBar;
