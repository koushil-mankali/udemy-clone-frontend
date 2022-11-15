import { useState } from "react";

import Layout1 from "../Layout1/Layout1";
import CategoryTabsBox from "../../components/CategoryTabsBox/CategoryTabsBox";
import FeaturedTopics from "../../components/FeaturedTopics/FeaturedTopics";
import TrustedByBest from "../../components/TrustedByBest/TrustedByBest";
import HomeShowcaseCard from "../../components/Cards/HomeShowcaseCard/HomeShowcaseCard";
import CourseCarouselComp from "../../components/CourseCarouselComp/CourseCarouselComp";

import showcaseImg from "/images/showcase.jpg";

import { coursesData } from "../../fakedata/fakedata";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home1 = () => {
  const det = {
    ttl: "Become an instructor",
    desc: "Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.",
    btnTxt: "Start teaching today",
    btnLink: "/start-teaching",
    img: showcaseImg,
    dir: "right",
  };

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
        <h1>Home</h1>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
          }}
        >
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
        <HomeShowcaseCard det={det} />
        <TrustedByBest />
        <FeaturedTopics />
      </Layout1>
    </>
  );
};

export default Home1;
