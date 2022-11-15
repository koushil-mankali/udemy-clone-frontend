import React from "react";
import Slider from "react-slick";

import backIcon from "/icons/back.png";
import nextIcon from "/icons/next.png";

import CourseCard from "../Cards/CourseCard/CourseCard";

import ArrowsComp from "./ArrowsComp";

const CourseCarouselComp = (props) => {
  const { ttl, coursesData } = props;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 6,
    initialSlide: 0,
    lazyLoad: true,
    nextArrow: <ArrowsComp img={nextIcon} />,
    prevArrow: <ArrowsComp img={backIcon} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <>
      {ttl ? <h2>{ttl}</h2> : null}
      <Slider {...settings}>
        {coursesData?.map((item, id) => {
          return <CourseCard key={id} data={item} />;
        })}
      </Slider>
    </>
  );
};

export default CourseCarouselComp;
