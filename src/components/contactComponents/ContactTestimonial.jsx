"use client";
import React, { useRef, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Quotes from "/public/images/quote-left.png";
import { CntctTestimonial } from "@/utils/07utilhomtestim";

const ContactTestimonial = () => {
  const slider1Ref = useRef(null); 
  const slider2Ref = useRef(null); 

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
  }, []);

  const settingsMain = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: nav2, // Sync with navigation slider
    Infinity:true
  };

  const settingsNav = {
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: nav1, // Sync with main slider
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 4, 
          arrows: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 991, 
        settings: {
          slidesToShow: 3, 
          arrows: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 3, 
          arrows: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 668, 
        settings: {
          slidesToShow: 2, 
          arrows: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 375, 
        settings: {
          slidesToShow: 2,
          arrows: true,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <section className="testimonial-main cntct-test py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <div className="heading-main text-center pb-5">
              <h2>
              Here&apos;s What <span>They Have to Say</span>
              </h2>
              <p>
              Hear from Satisfied Clients about their Experience Working with WebGuruz.
              </p>
            </div>
            <Slider
              {...settingsMain}
              ref={slider1Ref}
              className="testimonial-top"
            >
              {CntctTestimonial.map((testimonial) => (
                <div key={testimonial.id}>
                  <div className="row align-items-center">
                    <div className="col-sm-6 col-xs-12">
                      <div className="image-left">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={500}
                          height={340}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                      <div className="content-right">
                        <Image
                          src={Quotes}
                          alt="quotes"
                          className="quote-main"
                        />
                        <h4>{testimonial.name}</h4>
                        <span>{testimonial.title}</span>
                        <p>{testimonial.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="navtestimonial">
              <Slider
                {...settingsNav}
                ref={slider2Ref}
                className="slider-thumbnail"
              >
                {CntctTestimonial.map((testimonial) => (
                  <div key={testimonial.id}>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={340}
                      height={340}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTestimonial;
