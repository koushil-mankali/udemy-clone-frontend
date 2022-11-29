import { useState } from "react";
import { Link } from "react-router-dom";

import smallLogoIcon from "/images/udemy-icon.svg";
import logoIcon from "/images/logo-udemy.svg";
import queryIcon from "/icons/query-question-mark.png";
import captionIcon from "/icons/caption.png";
import playTvIcon from "/icons/tv-set.png";
import analyticsIcon from "/icons/data-analytics.png";
import settingsIcon from "/icons/settings.png";

import css from "./InstructorMenuBar.module.css";

const InstructorMenuBar = () => {
  return (
    <div className={css.outerDiv}>
      <div className={css.iconBox}>
        <img className={css.icon} src={smallLogoIcon} alt="icon" />
      </div>
      <div className={css.menuBox}>
        <div className={css.menuItem}>
          <img className={css.icon} src={queryIcon} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default InstructorMenuBar;
