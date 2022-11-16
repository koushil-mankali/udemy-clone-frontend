import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import backIcon from "/icons/back.png";
import nextIcon from "/icons/next.png";

import CourseCard from "../../Cards/CourseCard/CourseCard";

import ArrowsComp from "../ArrowComp/ArrowsComp";

import css from "./TabbedCourseCarouselComp.module.css";

const TabbedCourseCarouselComp = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const { ttl, link = null, linkTxt = "", coursesData } = props;
  const tabs = ["Most Popular", "New", "Intermediate & Advanced"];
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
      <div className={css.tabbedBox}>
        <div className={css.tabs}>
          {tabs?.map((tab, id) => {
            return (
              <div
                onClick={() => setActiveTab(id)}
                className={[
                  css.tab,
                  activeTab === id ? css.activeTab : "",
                ].join(" ")}
                key={`tab-${id}`}
                id={id}
              >
                {tab}
              </div>
            );
          })}
        </div>
        <hr className={css.hr} />
      </div>
      <Slider {...settings}>
        {coursesData?.map((item, id) => {
          return <CourseCard key={id} data={item} />;
        })}
      </Slider>
    </div>
  );
};

export default TabbedCourseCarouselComp;
