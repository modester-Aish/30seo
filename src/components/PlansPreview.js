import Link from 'next/link';
import React from 'react';

const PlansPreview = () => {
  return (
    <>
      {/* Pricing Preview Section */}
      <div className="pricing-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">Pricing Plans</h6>
            <h2 className="title">Choose the plan that fits you</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="single-pricing-inner h-100 hover-hero-sweep">
                <div className="price-header text-center mb-3">
                  <h5>Lite Plan</h5>
                  <h2 className="mb-2">$10<sub>/Month</sub></h2>
                </div>
                <ul>
                  <li>SEMrush</li>
                  <li>Canva</li>
                  <li>Grammarly</li>
                  <li>Woorank</li>
                  <li>Spin Rewriter</li>
                  <li>Ubersuggest</li>
                  <li>+more</li>
                </ul>
                <Link className="btn btn-base border-radius-0 w-100" href="https://members.seotoolsgroupbuy.us/signup">Buy Now</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="single-pricing-inner h-100 bg-base-2" style={{ color: '#fff' }}>
                <div className="price-header text-center mb-3">
                  <h5>Small Plan</h5>
                  <h2 className="mb-2">$15<sub>/Month</sub></h2>
                </div>
                <ul>
                  <li>SEMrush</li>
                  <li>Moz Pro</li>
                  <li>Majestic</li>
                  <li>Ubersuggest</li>
                  <li>Spyfu</li>
                  <li>Ispionage</li>
                  <li>+more</li>
                </ul>
                <Link className="btn btn-base border-radius-0 w-100" href="https://members.seotoolsgroupbuy.us/signup">Buy Now</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="single-pricing-inner h-100 bg-base-2" style={{ color: '#fff' }}>
                <div className="price-header text-center mb-3">
                  <h5>Ahref$ Combo</h5>
                  <h2 className="mb-2">$25<sub>/Month</sub></h2>
                </div>
                <ul>
                  <li>AHREF$</li>
                  <li>SEMR$H guru</li>
                  <li>M0Z PR0</li>
                  <li>Majestic</li>
                  <li>Kwfinder</li>
                  <li>Keywordtool i0</li>
                  <li>+more</li>
                </ul>
                <Link className="btn btn-base border-radius-0 w-100" href="https://members.seotoolsgroupbuy.us/signup">Buy Now</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="single-pricing-inner h-100 hover-hero-sweep">
                <div className="price-header text-center mb-3">
                  <h5>Mega Plan</h5>
                  <h2 className="mb-2">$50<sub>/Month</sub></h2>
                </div>
                <ul>
                  <li>Ahrefs</li>
                  <li>SEMrush</li>
                  <li>Moz Pro</li>
                  <li>Ubersuggest</li>
                  <li>Majestic</li>
                  <li>keywordtool.io</li>
                  <li>+more</li>
                </ul>
                <Link className="btn btn-base border-radius-0 w-100" href="https://members.seotoolsgroupbuy.us/signup">Buy Now</Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <Link className="btn btn-border-base-2 border-radius-0" href="/tools-pricing">View Full Tools List</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlansPreview;


