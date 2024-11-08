import CreativePortfolio from "./00PpcSliderService";

const PpcServicesOffer = () => {
  return (
    <>
      <section className="ppc-cater pt-5 position-relative">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-3 col-xs-12 heading-main">
              <h2>
                Industries We Cater to With Our <span>PPC Services</span>
              </h2>
              <p>
              Our PPC services are designed to benefit a wide range of industries. Irrespective of the industry you belong to, our tailored strategies can help you reach your goals and connect with your audience effectively.
              </p>
              <button className="explore-btn">View All</button>
            </div>
            <div className="col-sm-9 col-xs-12 ppc-slider">
              <CreativePortfolio />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PpcServicesOffer;
