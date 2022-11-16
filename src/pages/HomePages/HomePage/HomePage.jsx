import { useState } from "react";

import Layout1 from "../../Layout1/Layout1";
import CategoryTabsBox from "../../../components/HomePageComponents/CategoryTabsBox/CategoryTabsBox";
import FeaturedTopics from "../../../components/HomePageComponents/FeaturedTopics/FeaturedTopics";
import TrustedByBest from "../../../components/HomePageComponents/TrustedByBest/TrustedByBest";
import HomeShowcaseCard from "../../../components/Cards/HomeShowcaseCard/HomeShowcaseCard";
import CourseCarouselComp from "../../../components/CarouselComponents/CourseCarouselComp/CourseCarouselComp";
import BannerCarouselComp from "../../../components/CarouselComponents/BannerCarouselComp/BannerCarouselComp";

import { coursesData, det, det2, det3 } from "../../../fakedata/fakedata";

import css from "./HomePage.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const [categoryBoxData, setCategoryBoxData] = useState([
    {
      id: 1,
      tab: "Python",
      ttl: "Expand your career opportunities with Python",
      btnLink: "/topic/python",
      desc: "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to",
      btnTxt: "Python",
      active: true,
      courses: [],
    },
    {
      id: 2,
      tab: "Excel",
      ttl: "Analyze and visualize data with Excel",
      btnLink: "/topic/excel",
      desc: "Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex dynamic formulas. Both small businesses and large companies use Excel to",
      btnTxt: "Excel",
      active: false,
      courses: [],
    },
  ]);

  let clickHandler = (id) => {
    setCategoryBoxData((prevData) =>
      prevData?.map((item) => {
        if (item?.id === id) {
          item.active = true;
          return item;
        }
        item.active = false;
        return item;
      })
    );
  };
  return (
    <>
      <Layout1>
        <div className={css.ma}>
          <div className={css.banner}>
            <BannerCarouselComp />
          </div>
          <div className={css.m1}>
            <CategoryTabsBox
              clickHandler={clickHandler}
              title="A broad selection of courses"
              desc="Choose from 204,000 online video courses with new additions published every month"
              data={categoryBoxData}
              outerCss={{}}
            >
              <CourseCarouselComp coursesData={coursesData} />
            </CategoryTabsBox>
          </div>
          <div className={css.m1}>
            <CourseCarouselComp
              ttl="Students are viewing"
              coursesData={coursesData}
            />
          </div>
        </div>
        <FeaturedTopics />
        <HomeShowcaseCard det={det} />
        <TrustedByBest />
        <HomeShowcaseCard det={det2} />
        <HomeShowcaseCard det={det3} />
      </Layout1>
    </>
  );
};

export default HomePage;
