import React from "react";

import Navbar from "../../components/Navbar1/Navbar";
import Footer from "../../components//Footer/Footer";
import TextPointsNoter from "../../components/TextPointsNoter/TextPointsNoter";
import CourseIncludesCard from "../../components/Cards/CourseIncludesCard/CourseIncludesCard";

import playIcon from "/icons/play-button.png";
import articleIcon from "/icons/application.png";
import certificateIcon from "/icons/certificate.png";

import css from "./CoursePage.module.css";

const CoursePage = () => {
  const Learnings = {
    ttl: "What you'll learn",
    points: [
      "Create their own Python Programs",
      "Become an experienced Python Programmer",
      "Parse the Web and Create their own Games",
    ],
    // prefix: "✅",
  };

  const courseIncludes = [
    {
      id: 1,
      img: playIcon,
      txt: "14 hours of video",
    },
    {
      id: 2,
      img: articleIcon,
      txt: "4 articles + resources",
    },
    {
      id: 3,
      img: certificateIcon,
      txt: "Certificate of completion",
    },
    {
      id: 4,
      img: articleIcon,
      txt: "4 articles + resources",
    },
    {
      id: 5,
      img: certificateIcon,
      txt: "Certificate of completion",
    },
  ];

  const courseDetails = {
    secs: "15",
    lects: "146",
    duration: "14h 42m",
  };

  const courseData = [
    {
      ttl: "Getting Started",
      lects: "10",
      dur: "41min",
      list: [
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: true,
          type: "video",
          desc: "",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: true,
          type: "video",
          desc: "",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: true,
          type: "video",
          desc: "",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: true,
          type: "doc",
          desc: "This is a sample document description.",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: false,
          type: "doc",
          desc: "This is a sample document description.",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: true,
          type: "video",
          desc: "",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: false,
          type: "video",
          desc: "",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: false,
          type: "query",
          desc: "This is a sample document description.",
        },
      ],
    },
    {
      ttl: "Javascript Refresher",
      lects: "10",
      dur: "41min",
      list: [
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: true,
          type: "video",
          desc: "",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: true,
          type: "video",
          desc: "",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: true,
          type: "video",
          desc: "",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: true,
          type: "doc",
          desc: "This is a sample document description.",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: false,
          type: "doc",
          desc: "This is a sample document description.",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: true,
          type: "video",
          desc: "",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: false,
          type: "video",
          desc: "",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: false,
          type: "query",
          desc: "This is a sample document description.",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className={css.outerDiv}>
        <div className={css.innerDiv}>
          <div className={css.bodySec}>
            <TextPointsNoter data={Learnings} />
            <div className={css.boxSection}>
              <div className={css.secTtl}>This course includes:</div>
              <div className={css.secBdy}>
                {courseIncludes?.map((item) => {
                  return <CourseIncludesCard key={item.id} data={item} />;
                })}
              </div>
            </div>
            <div className={css.boxSection}>
              <div className={css.secTtl}>Course content:</div>
              <div className={css.secBdy}></div>
            </div>
          </div>
          <div className={css.rightSidebar}></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursePage;
