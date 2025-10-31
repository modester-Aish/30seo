import Link from 'next/link';
import React from 'react';
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegCalendarAlt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const FooterFour = () => {
  return (
    <>
      {/* ================== Footer Four Start ==================*/}
      <footer
        className="footer-area  footer-area_4 bg-cover mt-0 pd-top-120"
        style={{ backgroundImage: 'url("assets/img/bg/14.png")' }}
      >
        
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Contact us</h4>
                <div className="widget widget_contact">
                  <ul className="details text-white">
                    <li>
                      <FaMapMarkerAlt className="sky" />
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </li>
                    <li className="mt-3">
                      <FaPhoneAlt className="sky" /> +1 (520) 563‑6362
                    </li>
                    <li className="mt-2">
                      <FaEnvelope className="sky" /> admin@groupbuyseotool.us
                    </li>
                  </ul>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ps-xl-5">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Quick Links</h4>
                <ul>
                  <li className="sky"><Link href="/"><FaChevronRight /> Home</Link></li>
                  <li className="sky"><Link href="/tools-pricing"><FaChevronRight /> Pricing</Link></li>
                  <li className="sky"><Link href="/contact"><FaChevronRight /> Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6"></div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>© SEO GROUP BUY TOOLS 2024 | All Rights Reserved</p>
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

      {/* ================== Footer Two  end ==================*/}
    </>
  );
};

export default FooterFour;
