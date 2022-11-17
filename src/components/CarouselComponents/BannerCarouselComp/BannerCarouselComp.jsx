import Slider from "react-slick";

import BannerComp from "../../HomePageComponents/BannerComp/BannerComp";
import ArrowsComp from "../ArrowComp/ArrowsComp";
import { bannerData } from "../../../fakedata/fakedata";

import css from "./BannerCarouselComp.module.css";

import backIcon from "/icons/back.png";
import nextIcon from "/icons/next.png";

const BannerCarouselComp = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    nextArrow: <ArrowsComp img={nextIcon} />,
    prevArrow: <ArrowsComp img={backIcon} />,
  };
  return (
    <Slider {...settings}>
      {bannerData?.map((item, id) => {
        return <BannerComp bannerData={item} key={id} />;
      })}
    </Slider>
  );
};

export default BannerCarouselComp;
