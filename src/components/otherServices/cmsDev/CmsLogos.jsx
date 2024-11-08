
import Image from "next/image";
import logo1 from "../../../../public/images/hubspotimages/newImages/buddyins-logo.webp";
import logo2 from "../../../../public/images/hubspotimages/newImages/drive-insight.webp";
import logo3 from "../../../../public/images/hubspotimages/newImages/fintalker.webp";
import logo4 from "../../../../public/images/hubspotimages/newImages/inclusio_.webp";
import logo5 from "../../../../public/images/hubspotimages/newImages/NewsDirect_logo.webp";
import logo6 from "../../../../public/images/hubspotimages/newImages/RR_Logo_Helping_make_hospitals_safer__1_-removebg-preview.png";
import logo7 from "../../../../public/images/hubspotimages/newImages/StratXSims_logo.webp";
import logo8 from "../../../../public/images/hubspotimages/newImages/skin_consult_logo.svg";


// import logo1 from "/public/images/HomeTechExpert/techexpert5.svg";
// import logo2 from "/public/images/HomeTechExpert/techexpert6.svg";
// import logo3 from "/public/images/HomeTechExpert/techexpert7.svg";
// import logo4 from "/public/images/HomeTechExpert/techexpert8.svg";


const logos = [
  { src: logo1, alt: "logo1" },
  { src: logo2, alt: "logo2" },
  { src: logo3, alt: "logo3" },
  { src: logo4, alt: "logo4" },
  { src: logo5, alt: "logo5" },
  { src: logo6, alt: "logo6" },
  { src: logo7, alt: "logo7" },
  { src: logo8, alt: "logo8" }
];




const CmsLogos = () => {
  return (
    <section className="contact-logo py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-3">
            <h2>
              Our <span>Clients</span>
            </h2>
            <p>
              Clients of immense value guide our commitment to exceptional
              service
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

export default CmsLogos;
