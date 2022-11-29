import React from "react";

import css from "./NotFound.module.css";

import Layout1 from "../Layout1/Layout1";
import Button2 from "../../utils/Buttons/Button2/Button2";

const NotFound = () => {
  return (
    <Layout1>
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
    </Layout1>
  );
};

export default NotFound;
