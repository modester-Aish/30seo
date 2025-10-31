import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import WorkProcessFour from "@/components/WorkProcessFour";
import Link from "next/link";
import { singleTools, SIGNUP_URL } from "@/components/singleToolsData";

export const metadata = {
  title: "Single SEO Tools | SEO GROUP BUY TOOLS",
  description: "All single SEO and creative tools in one place: Ahrefs, Semrush, Grammarly, Envato Elements, Netflix, Prime Video, and more.",
};

const page = () => {
  return (
    <>
      <NavBar />
      <Breadcrumb title={"Single SEO Tools"} />
      <div className="pricing-area pd-top-90 pd-bottom-90">
        <div className="container">
          <div className="row">
            {singleTools.map((t) => (
              <div key={t.slug} className="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div className="single-pricing-inner h-100">
                  <div className="thumb text-center p-3">
                    <img className="w-100 border-radius-5" src={t.image} alt={t.shortTitle} />
                  </div>
                  <div className="details p-3 pt-0">
                    <h6 className="mb-1">{t.category}</h6>
                    <h5 className="mb-2">
                      <Link href={`/single-seo-tools/${t.slug}`}>{t.title}</Link>
                    </h5>
                    <div className="d-flex align-items-baseline gap-2 mb-3">
                      <span className="text-decoration-line-through opacity-75">{t.original}</span>
                      <h5 className="mb-0">{t.price}</h5>
                    </div>
                    <div className="d-flex gap-2">
                      <Link className="btn btn-border-base-2 border-radius-0 w-50" href={`/single-seo-tools/${t.slug}`}>Learn More</Link>
                      <Link className="btn btn-base border-radius-0 w-50" href={SIGNUP_URL}>Buy Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div className="single-pricing-inner h-100 text-center d-flex flex-column justify-content-between p-4">
                <div>
                  <h3 className="mb-2">+more</h3>
                  <p className="content">Explore the full list of tools.</p>
                </div>
                <Link className="btn btn-border-base-2 border-radius-0 w-100" href="https://seotoolsgroupbuy.us/single-tools-list/">View All Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WorkProcessFour />
      <div className="pd-top-60"></div>
      <FooterOne />
    </>
  );
};

export default page;


