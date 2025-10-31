import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export const metadata = {
  title: "Full Tools Pricing | SEO GROUP BUY TOOLS",
  description:
    "Compare Lite, Small, Ahref$ Combo, and Mega plans with full tool lists and monthly pricing.",
  alternates: { canonical: '/tools-pricing' },
};

const PlanCard = ({ title, price, items }) => (
  <div className="col-lg-3 col-md-6 mb-4">
    <div className="single-pricing-inner h-100">
      <div className="price-header text-center mb-3">
        <h5>{title}</h5>
        <h2 className="mb-2">{price}<sub>/Month</sub></h2>
      </div>
      <ul>
        {items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
      <Link className="btn btn-base border-radius-0 w-100" href="https://members.seotoolsgroupbuy.us/signup">Buy Now</Link>
    </div>
  </div>
);

const page = () => {
  const lite = [
    "SEMrush",
    "Canva",
    "Grammarly",
    "Woorank",
    "Spin Rewriter",
    "Ubersuggest",
    "Ispionage",
    "StockUnlimited",
    "CBEngine",
    "Buzzstream",
    "Unbounce",
    "Quillbot AI",
  ];

  const small = [
    "SEMrush",
    "Moz Pro",
    "Majestic",
    "Ubersuggest",
    "Spyfu",
    "Ispionage",
    "KwFinder",
    "Pexda",
    "SaleHoo",
    "StockUnlimited",
    "Spin Rewriter",
    "Grammarly",
    "Buzzsumo",
    "Indexifications",
    "Lynda",
    "Woorank",
    "Envato Elements",
    "Skills Share",
    "Spamzilla",
    "Cognitive SEO",
    "Canva Pro",
    "Crello",
    "CBEngine",
    "Buzzstream",
    "Vyond",
    "LongTailPro",
    "Article Builder",
    "WordAi",
    "Seo Profiler",
    "SE Ranking",
    "Themes/Plugin WordPress",
    "Spinner Português",
    "Fotojet",
    "Audioblocks",
    "Storyblocks",
    "Videoblocks",
    "Unbounce",
    "Quillbot",
    "Chat GPT",
  ];

  const combo = [
    "AHREF$",
    "SEMR$H guru",
    "M0Z PR0",
    "Majestic",
    "Kwfinder",
    "Keywordtool i0",
    "Grammarly",
    "Helium 10",
    "Jungle Scout",
    "Chat GPT",
    "Spyfu",
    "EcomHunt",
    "Ispionage",
    "Pexda",
    "SaleHoo",
    "StockUnlimited",
    "Spin Rewriter",
    "Buzzsumo",
    "Netflix",
    "Indexifications",
    "Lynda",
    "Woorank",
    "Envato Elements",
    "Skills Share",
    "Freepik",
    "Spamzilla",
    "Cognitive SEO",
    "Canva Pro",
    "Crello",
    "CBEngine",
    "Buzzstream",
    "Sellthetrend",
    "Vyond",
    "LongTailPro",
    "Article Builder",
    "WordAi",
    "Seo Profiler",
    "SE Ranking",
    "Themes/Plugin WordPress",
    "Spinner Português",
    "Fotojet",
    "Audioblocks",
    "Storyblocks",
    "Videoblocks",
    "Unbounce",
    "Jasper Ai",
    "Quillbot",
    "Chat GPT",
  ];

  const mega = [
    "Ahrefs",
    "SEMrush",
    "Moz Pro",
    "Ubersuggest",
    "Majestic",
    "keywordtool.io",
    "KwFinder",
    "Grammarly",
    "Helium 10",
    "Jungle Scout",
    "Chat GPT",
    "Spyfu",
    "EcomHunt",
    "Ispionage",
    "Pexda",
    "SaleHoo",
    "StockUnlimited",
    "Spin Rewriter",
    "Buzzsumo",
    "Netflix",
    "Indexifications",
    "Lynda",
    "Woorank",
    "Envato Elements",
    "Skills Share",
    "Freepik",
    "Spamzilla",
    "Cognitive SEO",
    "Canva Pro",
    "Crello",
    "CBEngine",
    "Buzzstream",
    "Sellthetrend",
    "Vyond",
    "LongTailPro",
    "Article Builder",
    "WordAi",
    "Seo Profiler",
    "SE Ranking",
    "Themes/Plugin WordPress",
    "Spinner Português",
    "Fotojet",
    "Audioblocks",
    "Storyblocks",
    "Videoblocks",
    "Unbounce",
    "Jasper Ai",
    "Quillbot",
    "Chat GPT",
  ];

  return (
    <>
      <NavBar />
      <Breadcrumb title={"Full Tools Pricing"} />
      <div className="pricing-area pd-top-90 pd-bottom-90">
        <div className="container">
          <div className="row">
            <PlanCard title="Lite Plan" price="$10" items={lite} />
            <PlanCard title="Small Plan" price="$15" items={small} />
            <PlanCard title="Ahref$ Combo" price="$25" items={combo} />
            <PlanCard title="Mega Plan" price="$50" items={mega} />
          </div>
        </div>
      </div>
      <FooterOne />
    </>
  );
};

export default page;


