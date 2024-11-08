import Image from "next/image";
import serviceright from "../../../public/images/digital-marketing.svg";
import Link from "next/link";

const Service = () => {
  return (
    <>
      <section className="service-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <span className="dot">Attract More Leads and Grow Your Business</span>
              <h1>
              Best <span>Digital Marketing Services</span>
              </h1>
              <p>
              WebGuruz can help you realize the power of digital marketing for business growth. We&apos;ve successfully implemented the best marketing strategies for our clients and can effectively put them to work for you as well.
              </p>
              <Link className="explore-btn" href="/contact-us">
                Get Started Now!
              </Link>
            </div>
            <div className="col-sm-6 col-xs-12 service-right-banner text-center">
              <Image src={serviceright} alt="Digital Marketing Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
