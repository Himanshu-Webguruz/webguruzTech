import "./style.css";
import "../../contact-us/contact.css";
import PpcBanner from "@/components/otherServices/PpcDev/01PpcBanner";
import PpcServiceForm from "@/components/otherServices/PpcDev/02PpcServiceForm";
import PpcAdvertising from "@/components/otherServices/PpcDev/03PpcAdvertising";
import PpcProcess from "@/components/otherServices/PpcDev/04PpcProcess";
import PpcServicesOffer from "@/components/otherServices/PpcDev/05PpcServicesOffer";
import PpcManagement from "@/components/otherServices/PpcDev/06PpcManagement";
import PpcLeads from "@/components/otherServices/PpcDev/07PpcLeads";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import PpcLogos from "@/components/otherServices/PpcDev/PpcLogos";
import { ppcdata } from "@/utils/accordionData";
import OurTeamPpc from "@/components/otherServices/PpcDev/08OurTeamPpc";
import HiringForm from "@/components/PopUpForms/hiringform";
// export const dynamic = "force-dynamic";

const page = () => {
  return (
    <>
      <PpcBanner />
      <PpcServiceForm
        heading={"Amplifying Your Reach with Expert"}
        subHeading={"PPC Services"}
      />
      <PpcAdvertising />
      <PpcProcess />
      <PpcServicesOffer />
      <PpcManagement />
      <PpcLeads />
      <PpcLogos />
      <OurTeamPpc />
      <ServiceFaq accordionData={ppcdata} />
      <AddsPartner
        heading="Reach the Right Audience at the Right Time with PPC Management Services"
        paragraph="Take the first step towards maximizing your ad performance. Contact us today to discuss how our PPC Management Services can help you achieve your business goals!"
        linkHref="/contact-us"
        linkText="Connect Now!"
      />
      <Featuredblog />
      <HiringForm/>
    </>
  );
};

export default page;

export const metadata = {
  title: "Top PPC Services in India: Drive Growth and Conversions",
  description:
    "Boost your business with expert PPC services in India. Maximize ROI, drive growth & dominate online advertising. Contact us now to ignite your PPC success!",
};
