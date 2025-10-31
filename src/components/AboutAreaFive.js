import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const AboutAreaFive = () => {
  return (
    <>
      {/* =============== About Area Five End ===============*/}
      <div className="about-area about-area_5 pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="about-thumb-inner">
                <img
                  className="animate-img-3 z-index-2 top_image_bounce"
                  src="assets/img/about/20.png"
                  alt="img"
                />
                <img
                  className="main-img"
                  src="assets/img/about/21.png"
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0 ps-xl-5">
                <h6 className="sub-title-sky-blue">Group buy seo tools</h6>
                <h2 className="title">Who Can Benefit</h2>
                <p className="content mb-4">
                  Our group buy is perfect for those who are searching for:
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="single-list-inner style-check style-heading style-check mb-3">
                      <li><FaCheckCircle className="sky" /> SEO group buy</li>
                      <li><FaCheckCircle className="sky" /> Individual free SEO tools</li>
                      <li><FaCheckCircle className="sky" /> Group buy SEO Tools share</li>
                      <li><FaCheckCircle className="sky" /> Ahrefs group buy</li>
                      <li><FaCheckCircle className="sky" /> SEMrush group buy</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="single-list-inner style-check style-heading style-check mb-3">
                      <li><FaCheckCircle className="sky" /> Cost-Effective</li>
                      <li><FaCheckCircle className="sky" /> Comprehensive Tool Selection</li>
                      <li><FaCheckCircle className="sky" /> User-Friendly</li>
                      <li><FaCheckCircle className="sky" /> Real-Time Data</li>
                    </ul>
                  </div>
                </div>
                <Link
                  className="btn btn-base-color border-radius-5"
                  href="/about"
                >
                  Discover More <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============== About Area Five End ===============*/}
    </>
  );
};

export default AboutAreaFive;
