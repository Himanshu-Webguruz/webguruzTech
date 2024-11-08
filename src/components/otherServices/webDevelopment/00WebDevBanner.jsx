import Image from "next/image";
import serviceright from "/public/images/webimages/webbanner.svg";
import Link from "next/link";

const WebDevBanner = () => {
  return (
    <>
      <section className="service-banner web-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1 className="mb-3">
              Website Development Services<span> Your Vision, Our Expertise.</span>
              </h1>
              <p className="fw-bold">
              Work with a client-focused and customer-centric website development company.
              </p>
              <p>
              Your website is your online storefront. At WebGuruz, we understand the importance of a visually appealing, user-friendly, and functional website. Our team of skilled developers is dedicated to crafting custom web solutions that not only captivate your audience but also drive business growth.
              </p>
              <Link className="explore-btn" href="/contact-us">
                Get Started!
              </Link>
            </div>
            <div className="col-sm-6 col-xs-12 service-right-banner text-center">
              <Image src={serviceright} alt="Website Development Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevBanner;
