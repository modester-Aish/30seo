import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import ToolWorkProcess from "@/components/ToolWorkProcess";
import { FaCheckCircle } from "react-icons/fa";

export const metadata = {
  title: "Semrush Group Buy | SEO GROUP BUY TOOLS",
  description: "Affordable Semrush group buy – Rank higher, grow faster with unlimited access and instant activation.",
};

const page = () => {
  return (
    <>
      <NavBar />
      <div
        className="banner-area bg-relative banner-area-2 bg-cover"
        style={{ backgroundImage: 'url("/assets/img/banner-5/5.png")' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div className="banner-inner pb-5">
                <h2 className="title text-white">Semrush Group Buy</h2>
                <p className="content text-white mx-auto" style={{maxWidth:'720px'}}>Affordable Semrush group buy – Rank higher, grow faster!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-area pd-top-60 pd-bottom-120">
        <div className="container">
          <div className="box-shadow bg-white z-index-2 border-radius-5 p-xl-5 p-4">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="about-thumb-inner pe-xl-4">
                  <img className="main-img w-100 border-radius-5" src="/assets/img/sem.png" alt="Semrush group buy" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-title mb-3">
                  <h6 className="sub-title-sky-blue">Semrush Group Buy</h6>
                  <h2 className="title">Grab the #1 SEO tool at an unbeatable cost</h2>
                </div>
                <p className="content mb-2">Affordable Semrush group buy – Rank higher, grow faster!</p>
                <ul className="single-list-inner style-check style-heading style-check mb-3">
                  <li>Unlimited Access</li>
                  <li>Instant Access with one click</li>
                  <li>100% Money Back Guarantee</li>
                </ul>
                <h3 className="mb-2">$9.99 <sub>/ Month</sub></h3>
                <Link className="btn btn-base border-radius-0 w-100 mb-3" href="https://members.seotoolsgroupbuy.us/signup">Buy Now</Link>
                <ul className="list-unstyled mb-0">
                  <li className="feature-badge hover-hero-sweep"><FaCheckCircle /> Unlimited Access</li>
                  <li className="feature-badge hover-hero-sweep"><FaCheckCircle /> Instant Access with one click</li>
                  <li className="feature-badge hover-hero-sweep"><FaCheckCircle /> 100% Money Back Guarantee</li>
                  <li className="feature-badge hover-hero-sweep"><FaCheckCircle /> 99.99% Uptime Guarantee!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Work Process section */}
      <ToolWorkProcess
        toolTitle={"Semrush Group Buy"}
        points={[
          'Semrush Group Buy at Cheap Prices With Bounce Tools Unlimited',
          'Get Unlimited credits per day.',
          'Instant Access',
          '99.99% Uptime Guarantee!',
        ]}
      />
      <div className="pd-top-60"></div>
      <FooterOne />
    </>
  );
};

export default page;


