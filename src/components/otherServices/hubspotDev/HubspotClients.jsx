
import Image from "next/image";
import logo1 from "../../../../public/images/hubspotimages/newImages/buddyins-logo.webp";
import logo2 from "../../../../public/images/hubspotimages/newImages/drive-insight.webp";
import logo3 from "../../../../public/images/hubspotimages/newImages/fintalker.webp";
import logo4 from "../../../../public/images/hubspotimages/newImages/inclusio_.webp";
import logo5 from "../../../../public/images/hubspotimages/newImages/NewsDirect_logo.webp";
import logo6 from "../../../../public/images/hubspotimages/newImages/RR_Logo_Helping_make_hospitals_safer__1_-removebg-preview.png";
import logo7 from "../../../../public/images/hubspotimages/newImages/StratXSims_logo.webp";
import logo8 from "../../../../public/images/hubspotimages/newImages/skin_consult_logo.svg";
// C:\Users\NEW\Desktop\wgzReady\public\images\hubspotimages\newImages\RR_Logo_Helping_make_hospitals_safer__1_-removebg-preview.png
const logos = [
  { src: logo1, alt: "Buddyins Logo" },
  { src: logo2, alt: "Drive Insight Logo" },
  { src: logo3, alt: "Fin Talker Logo" },
  { src: logo4, alt: "Inclusio Logo" },
  { src: logo5, alt: "New Directs Logo" },
  { src: logo6, alt: "logo6" },
  { src: logo7, alt: "StratXSims Logo" },
  { src: logo8, alt: "Skin Consult Logo" }
];

const HubspotClients = () => {
  return (
    <section className="contact-logo py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-3">
            <h2>
              Our <span>Clientele</span>
            </h2>
            <p>
            We have earned the trust of some of the leading organizations from across the globe with our results.
            </p>
          </div>
        </div>
        <div className="row">
          {logos.map((logo, index) => (
            <div className="col-sm-3 col-xs-12" key={index}>
              <div className="logo-card">
                <Image src={logo.src} alt={logo.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HubspotClients;
