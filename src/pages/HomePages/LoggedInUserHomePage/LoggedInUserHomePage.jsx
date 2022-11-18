import { useState } from "react";

import Layout1 from "../../Layout1/Layout1";
import VerticalCategoryMenuBar from "../../../components/LayoutComponents/VerticalCategoryMenuBar/VerticalCategoryMenuBar";
import CategoryTabsBox from "../../../components/HomePageComponents/CategoryTabsBox/CategoryTabsBox";
import FeaturedTopics from "../../../components/HomePageComponents/FeaturedTopics/FeaturedTopics";
import TrustedByBest from "../../../components/HomePageComponents/TrustedByBest/TrustedByBest";
import HomeShowcaseCard from "../../../components/Cards/HomeShowcaseCard/HomeShowcaseCard";
import CourseCarouselComp from "../../../components/CarouselComponents/CourseCarouselComp/CourseCarouselComp";
import BannerComp from "../../../components/HomePageComponents/BannerComp/BannerComp";
import TabbedCourseCarouselComp from "../../../components/CarouselComponents/TabbedCourseCarouselComp/TabbedCourseCarouselComp";

import {
  coursesData,
  det,
  det2,
  det3,
  bannerData,
  categoriesData,
} from "../../../fakedata/fakedata";

import css from "./LoggedInUserHomePage.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LoggedInUserHomePage = () => {
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
        <VerticalCategoryMenuBar />
        <div className={css.ma}>
          <div className={css.banner}>
            <BannerComp bannerData={bannerData[2]} />
          </div>
          <div className={css.m1}>
            <h1 className={css.colTtl}>What to learn next</h1>
            <CourseCarouselComp
              ttl="Students are viewing"
              link="/"
              linkTxt="Txt for link"
              coursesData={coursesData}
            />
          </div>
          <div className={css.m1}>
            <CourseCarouselComp
              ttl="Recommended for you"
              coursesData={coursesData}
            />
          </div>
          <div className={css.m1}>
            <TabbedCourseCarouselComp
              ttl="Featured courses in"
              link="/"
              linkTxt=" React JS"
              coursesData={coursesData}
            />
          </div>
          <div className={css.m1}>
            <CourseCarouselComp
              ttl="New and noteworthy in Web Development"
              link="/"
              linkTxt="Web Development"
              coursesData={coursesData}
            />
          </div>
          <div className={css.m1}>
            <CourseCarouselComp
              ttl="Students are viewing"
              coursesData={coursesData}
            />
          </div>
        </div>
      </Layout1>
    </>
  );
};

export default LoggedInUserHomePage;
