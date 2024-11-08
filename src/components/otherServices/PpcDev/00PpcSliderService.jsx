"use client";
import Image from "next/image";
import Slider from "react-slick";
import Arrowleft from "../../../../public/images/serviceImages/arrow-left.png";
import ArrowRight from "../../../../public/images/serviceImages/arrow-right.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import ppcserviceOne from "../../../../public/images/ppcimages/newImages/education.webp";
import ppcservice2 from "../../../../public/images/ppcimages/newImages/finance.webp";
import ppcservice3 from "../../../../public/images/ppcimages/newImages/entertainment.webp";
import ppcservice4 from "../../../../public/images/ppcimages/newImages/media.webp";

const portfolioItems = [
  {
    src: ppcserviceOne,
    title: "Education",
    link: "#",
  },
  {
    src: ppcservice2,
    title: "Finance",
    link: "#",
  },
  {
    src: ppcservice3,
    title: "Entertainment",
    link: "#",
  },
  {
    src: ppcservice4,
    title: "Media",
    link: "#",
  },
];

// Custom arrow components
const SamplePrevArrow = ({ onClick }) => (
  <div className="slick-arrow slick-prev" onClick={onClick}>
    <Image src={Arrowleft} alt="Previous" />
  </div>
);

const SampleNextArrow = ({ onClick }) => (
  <div className="slick-arrow slick-next" onClick={onClick}>
    <Image src={ArrowRight} alt="Next" />
  </div>
);

const CreativePortfolio = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="row">
        <Slider {...settings}>
          {portfolioItems.map((item, index) => (
            <div className="ppc-slideing" key={index}>
              <div className="card-name">
                <Link href={item.link}>
                  <Image src={item.src} alt="Image" />
                  <h4>{item.title}</h4>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CreativePortfolio;
