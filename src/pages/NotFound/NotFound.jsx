import React from "react";

import css from "./NotFound.module.css";

import Navbar from "../../components/Navbar1/Navbar";
import Button2 from "../../utils/Buttons/Button2/Button2";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className={css.outerDiv}>
        <div className={css.nfTxt}>Page not found!</div>
        <Button2
          txt="Go to Home Page"
          bck="transparent"
          hovBck="none"
          link="/"
          color="#fff"
        />
      </div>
    </>
  );
};

export default NotFound;
