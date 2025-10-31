import Link from 'next/link';
import React from 'react';
import {
  FaArrowRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const FooterEight = () => {
  return (
    <>
      {/* footer area start */}
      <footer className="footer-area footer-area_8 bg-black-2-ico bg-cover mt-0">
        
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                  <img src="assets/img/home-9/1.png" alt="img" />
                </div>
                <div className="details">
                  <p>
                    Melbourne is simply is dumiomy is text Lorem Ipsum is simply
                  </p>
                  <p className="mt-3">
                    <FaPhoneAlt /> +1 (520) 563‑6362
                  </p>
                  <p className="mt-2">
                    <FaEnvelope /> admin@groupbuyseotool.us
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Usefull links</h4>
                <ul>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Credit industrys
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Reasearch sector
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Finance Sector{' '}
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Credit industrys
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Reasearch sector
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Finance Sector
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Contact us</h4>
                <div className="widget widget_contact">
                  <ul className="details text-white">
                    <li>
                      <FaMapMarkerAlt />
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </li>
                    <li className="mt-3">
                      <FaPhoneAlt /> +1 (520) 563‑6362
                    </li>
                    <li className="mt-2">
                      <FaEnvelope /> admin@groupbuyseotool.us
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>© agiletech 2024 | All Rights Reserved</p>
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
      {/* footer area end */}
    </>
  );
};

export default FooterEight;
