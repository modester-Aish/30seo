import Link from 'next/link';
import React from 'react';
import {
  FaArrowRight,
  FaCalendarAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const FooterOne = () => {
  return (
    <>
      {/* ================== Footer One Start ==================*/}
      <footer className="footer-area bg-black bg-cover">
        
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                  <span>SEO GROUP BUY TOOLS</span>
                </div>
                <div className="details">
                  <p className="mt-3">
                    <FaPhoneAlt /> +1 (520) 563‑6362
                  </p>
                  <p className="mt-2">
                    <FaEnvelope /> admin@groupbuyseotool.us
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Quick Links</h4>
                <ul>
                  <li><Link href="/"><FaArrowRight /> Home</Link></li>
                  <li><Link href="/tools-pricing"><FaArrowRight /> Pricing</Link></li>
                  <li><Link href="/contact"><FaArrowRight /> Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>© AglieTech 2024 | All Rights Reserved</p>
              </div>
              <div className="col-md-6 text-lg-end">
                <Link href="#">Trams &amp; Condition</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ================== Footer One  end ==================*/}
    </>
  );
};

export default FooterOne;
