import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import backIcon from "/icons/back.png";
import nextIcon from "/icons/next.png";

import ArrowsComp from "../ArrowComp/ArrowsComp";

import css from "./CarouselLayout.module.css";

const CarouselLayout = (props) => {
  const {
    ttl,
    link = null,
    linkTxt = "",
    children,
    autoplay = false,
    slidesToShow = 1,
    slidesToScroll = 1,
  } = props;

  const settings = {
    autoplay: autoplay,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    lazyLoad: true,
    nextArrow: <ArrowsComp img={nextIcon} />,
    prevArrow: <ArrowsComp img={backIcon} />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
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
    <div className={css.scrollBox}>
      {ttl ? (
        <h2 className={css.ttl}>
          {ttl}
          <Link className={css.linkTxt} to={link}>
            {linkTxt}
          </Link>
        </h2>
      ) : null}
      <Slider {...settings} className={css.slider}>
        {children}
      </Slider>
    </div>
  );
};

export default CarouselLayout;
