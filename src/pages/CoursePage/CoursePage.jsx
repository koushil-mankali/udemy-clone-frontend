import React from "react";

import Navbar from "../../components/Navbar1/Navbar";
import Footer from "../../components//Footer/Footer";
import TextPointsNoter from "../../components/TextPointsNoter/TextPointsNoter";

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
  return (
    <>
      <Navbar />
      <div className={css.outerDiv}>
        <div className={css.innerDiv}>
          <div className={css.bodySec}>
            <TextPointsNoter data={Learnings} />
          </div>
          <div className={css.rightSidebar}></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursePage;
