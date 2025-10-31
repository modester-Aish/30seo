import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import ToolWorkProcess from "@/components/ToolWorkProcess";
import { singleTools, SIGNUP_URL } from "@/components/singleToolsData";

export const generateMetadata = ({ params }) => {
  const item = singleTools.find((i) => i.slug === params.slug);
  return {
    title: item ? `${item.shortTitle} | SEO GROUP BUY TOOLS` : 'Tool | SEO GROUP BUY TOOLS',
    description: item ? item.blurb : 'Single SEO tool.',
    alternates: {
      canonical: item ? `/single-seo-tools/${params.slug}` : '/single-seo-tools',
    },
  };
};

const page = ({ params }) => {
  const item = singleTools.find((i) => i.slug === params.slug);
  if (!item) {
    return (
      <>
        <NavBar />
        <Breadcrumb title={"Tool not found"} />
        <FooterOne />
      </>
    );
  }
  return (
    <>
      <NavBar />
      {/* Hero section (tool-specific) */}
      <div
        className="banner-area bg-relative banner-area-2 bg-cover"
        style={{ backgroundImage: 'url("/assets/img/banner-5/5.png")' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div className="banner-inner pb-5">
                <h2 className="title text-white">{item.shortTitle}</h2>
                <p className="content text-white mx-auto" style={{maxWidth:'720px'}}>{item.blurb}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small detail box */}
      <div className="about-area pd-top-60 pd-bottom-120">
        <div className="container">
          <div className="box-shadow bg-white z-index-2 border-radius-5 p-xl-5 p-4">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="about-thumb-inner pe-xl-4">
                  <img className="main-img w-100 border-radius-5" src={item.image} alt={item.shortTitle} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-title mb-3">
                  <h6 className="sub-title-sky-blue">{item.shortTitle}</h6>
                  <h2 className="title">{item.title}</h2>
                </div>
                <p className="content mb-2">{item.blurb}</p>
                {Array.isArray(item.details) && item.details.length > 0 ? (
                  <ul className="single-list-inner style-check style-heading style-check mb-3">
                    {item.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                ) : null}
                <h3 className="mb-2">{item.price} <sub>/ Month</sub></h3>
                <Link className="btn btn-base border-radius-0 w-100 mb-3" href={SIGNUP_URL}>Buy Now</Link>
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
      {/* Work Process section with tool-specific copy */}
      <ToolWorkProcess
        toolTitle={`${item.shortTitle}`}
        points={[
          `${item.shortTitle} Group Buy at Cheap Prices With Bounce Tools Unlimited`,
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


