import AboutAreaFive from "@/components/AboutAreaFive";
import AboutAreaSix from "@/components/AboutAreaSix";
import BannerFive from "@/components/BannerFive";
import FooterFour from "@/components/FooterFour";
import NavbarFour from "@/components/NavbarFour";
import ServiceAreaFive from "@/components/ServiceAreaFive";
import TeamAreaThree from "@/components/TeamAreaThree";
import WorkProcessFour from "@/components/WorkProcessFour";
import PlansPreview from "@/components/PlansPreview";
import BenefitArea from "@/components/BenefitArea";


export const metadata = {
  title: "SEO GROUP BUY TOOLS",
  description:
    "Boost your rankings with SEO GROUP BUY TOOLS: keyword research, backlink checker, site audit, meta tag generator, and more — 100% free and fast.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarFour />

      {/* Banner Five */}
      <BannerFive />

      {/* About Area Five */}
      <AboutAreaFive />

      {/* Plans Preview (added after Free SEO Tools section) */}
      <PlansPreview />

      {/* Service Area Five */}
      <ServiceAreaFive />

      {/* About Area Six */}
      <AboutAreaSix />

      {/* Benefit Area */}
      <BenefitArea />

      {/* Team Area Three */}
      <TeamAreaThree />

      {/* Work Process Four */}
      <WorkProcessFour />

      {/* Footer Four */}
      <FooterFour />


    </>
  );
};

export default page;
