import React from "react";

import Navbar from "../../components/Navbar1/Navbar";
import Footer from "../../components//Footer/Footer";

import css from "./CoursePage.module.css";

const CoursePage = () => {
  return (
    <>
      <Navbar />
      <div className={css.outerDiv}></div>
      <Footer />
    </>
  );
};

export default CoursePage;
