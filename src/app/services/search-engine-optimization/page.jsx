import SeoBanner from "@/components/otherServices/seoManagement/01SeoBanner";
import PpcServiceForm from "@/components/otherServices/PpcDev/02PpcServiceForm";
import "../pay-per-click-management/style.css";
import SeoCounter from "@/components/otherServices/seoManagement/02SeoCounter";
import SeoProfessional from "@/components/otherServices/seoManagement/03SeoProfessional";
import SeoStation from "@/components/otherServices/seoManagement/04SeoStation";
import SeoIndustry from "@/components/otherServices/seoManagement/05SeoIndustry";
import SeoAdvertising from "@/components/otherServices/seoManagement/06SeoAdvertising";
import SeoDisplayCards from "@/components/otherServices/seoManagement/07SeoDisplayCards";
import OurTeamhubspot from "@/components/otherServices/hubspotDev/06Ourteam";
import AddsPartner from "@/components/serviceComponent/11AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import SeoSliderContent from "@/components/otherServices/seoManagement/SeoSliderContent";
import {seodata} from "@/utils/accordionData";
import HiringForm from "@/components/PopUpForms/hiringform";
// export const dynamic = 'force-dynamic'

const page = () => {
  return (
    <>
      <SeoBanner />
      <PpcServiceForm/>
      <SeoCounter />
      <SeoProfessional />
      <SeoSliderContent/>
      <SeoStation />
      <SeoIndustry />
      <SeoAdvertising />
      <SeoDisplayCards />
      <OurTeamhubspot />
      <ServiceFaq  accordionData={seodata} />
      <AddsPartner />
      <Featuredblog />
      <HiringForm/>
    </>
  );
};

export default page;

export const metadata = {
  title: "Professional SEO Services and Marketing Agency | WebGuruz",
  description:
    "Looking for a top SEO marketing agency? WebGuruz offers professional SEO services that enhance your online presence, drive traffic, and grow your business.",
};
