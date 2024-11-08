import Image from "next/image";
import earnings from "../../../public/images/careerimages/careers-advantage-icon-1.png.png";
import conversion from "../../../public/images/careerimages/careers-advantage-icon-2.png.png";
import competitor from "../../../public/images/careerimages/careers-advantage-icon-3.png.png";
import businessaudit from "../../../public/images/careerimages/careers-advantage-icon-4.png.png";
import roi from "../../../public/images/careerimages/careers-advantage-icon-5.png.png";
import reatltime from "../../../public/images/careerimages/careers-advantage-icon-6.png.png";
import reatltime1 from "../../../public/images/careerimages/careers-advantage-icon-7.png.png";
import reatltime2 from "../../../public/images/careerimages/careers-advantage-icon-8.png.png";

// Array of sections
const sections = [
  {
    image: earnings,
    alt: "Learning Without Stopping",
    title: "Learning Without Stopping",
    
  },  
  {
    image: conversion,
    alt: "Bonus incentive for Referrals",
    title: "Bonus incentive for Referrals",
    
  },
  {
    image: competitor,
    alt: "Salary that Beats the Competition",
    title: "Salary that Beats the Competition",
    
  },
  {
    image: businessaudit,
    alt: "Assistance & Leadership training",
    title: "Assistance & Leadership training",
   
  },
  {
    image: roi,
    alt: "Versatile Remote Work",
    title: "Versatile Remote Work",
    
  },
  {
    image: reatltime,
    alt: "Individual Health Insurance Plans ",
    title: "Individual Health Insurance Plans ",
   
  },

  {
    image: reatltime1,
    alt: "Food Allowance",
    title: "Food Allowance",
   
  },

  {
    image: reatltime2,
    alt: "On Site Opportunity",
    title: "On Site Opportunity",
   
  },

];

const WhyChooseCareer = () => {
  return (
    <section className="whychoose career-choose py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <div className="heading-main text-center pb-2 heading-content">
              <h2 className="mb-5">
              Working with WebGuruz has <span>numerous advantages :</span>
              </h2>
            </div>

            <div className="earntraffic career-defining">
              {sections.map((section, index) => (
                <div key={index} className="earntrafficinr">
                  <div className="earntrfimg">
                    <Image
                      src={section.image}
                      className="img-fluid"
                      alt={section.alt}
                    />
                  </div>
                  <div className="earntrfcnt">
                    <h3 className="mt-3">{section.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCareer;
