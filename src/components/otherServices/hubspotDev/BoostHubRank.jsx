import Image from "next/image";
// import time from '../../../../public/images/hubspotimages/Time.svg'
// import usdollar from '../../../../public/images/hubspotimages/UsDollarCircled.svg'
// import CustomerInsight from '../../../../public/images/hubspotimages/CustomerInsight.svg'
// import devskill from '../../../../public/images/hubspotimages/devskill.svg'
import HubspotForm from "./clientHubForm/HubspotForm";
import WebdevForm from "@/utils/formsHubspot/Webdeveform";
import maintenance from '../../../../public/images/hubspotimages/newImages/maintenance.svg'
import solution from '../../../../public/images/hubspotimages/newImages/solution.svg'
import expertise from '../../../../public/images/hubspotimages/newImages/expertise.svg'
import technicalsupport from '../../../../public/images/hubspotimages/newImages/technicalsupport.svg'
const BoostHubRank = () => {
  return (
    <>
      <section className="scrfrm hub-ranking py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 content-left heading-main">
              <h2 className="text-white">
                <strong>Fast-Track Business Growth</strong> with Hubspot
              </h2>
              <p className="mt-3 mb-4 text-white">
              HubSpot offers a wide range of benefits for businesses of all sizes. By leveraging HubSpot&apos;s powerful features, you can streamline your sales and marketing processes, improve customer relationships, and drive growth. Some of the key benefits include:
              </p>
              <div className="py-4 hub-icons">
                <ul>
                  <li>
                    <Image src={maintenance} alt="Support and Maintenance Icon"  style={{height:"20px", width:"20px"}} />
                    <p>Expert Support and Maintenance</p>
                  </li>
                  <li>
                    <Image src={expertise} alt="Expertise Icon"  style={{height:"20px", width:"20px"}} />
                    <p>Extensive Experience and Expertise</p>
                  </li>
                  <li>
                    <Image src={solution} alt="Affordable Solutions icon"  style={{height:"20px", width:"20px"}} />
                    <p>Affordable and Scalable Solutions</p>
                  </li>
                  <li>
                    <Image src={technicalsupport} alt="Technical Experts Icon"  style={{height:"20px", width:"20px"}} />
                    <p>Dedicated Team of Technical Experts</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              {/* <HubspotForm /> */}
              <WebdevForm/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoostHubRank;
