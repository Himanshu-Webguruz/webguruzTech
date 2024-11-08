import Image from "next/image";
import Hbstptimg from "../../../../public/images/hubspotimages/hubbanner.svg";
import Link from "next/link";

function Hubspotbanner() {
  return (
    <section className="hubsptbanner service-banner py-5 inner-page">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="heading-main">
              <h1>
                <span>Expert HubSpot Development</span>
                <br />
                Services
              </h1>
              <p className="unls">
                <strong>Leverage the Power of HubSpot to Drive Growth and Efficiency</strong>
              </p>
              <p>
              HubSpot, the leading CRM and marketing platform, offers a comprehensive suite of tools to help you attract, engage, and delight customers. At WebGuruz, we deliver top-notch HubSpot development services tailored to your unique needs. Our team of skilled Hubspot developers and marketers will work closely with you to create a customized HubSpot solution that drives results.
              </p>
              <div className="gtintchbtn">
                <Link className="explore-btn" href="/contact-us">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="banner-image-right">
              <Image src={Hbstptimg} className="img-fluid" alt="HubSpot Development Services" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hubspotbanner;
