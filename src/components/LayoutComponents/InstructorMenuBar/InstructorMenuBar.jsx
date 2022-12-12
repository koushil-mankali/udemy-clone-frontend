import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import smallLogoIcon from "/images/udemy-icon.svg";
import queryIcon from "/icons/query-question-mark.png";
import captionIcon from "/icons/caption.png";
import playTvIcon from "/icons/tv-monitor.png";
import analyticsIcon from "/icons/data-analytics.png";
import settingsIcon from "/icons/settings.png";

import css from "./InstructorMenuBar.module.css";

const InstructorMenuBar = () => {
  return (
    <div className={css.outerDiv}>
      <div className={css.menuItem}>
        <Link to="/" className={css.iconBox}>
          <img className={css.icon} src={smallLogoIcon} alt="icon" />
        </Link>
      </div>
      <div className={css.menuBox}>
        <NavLink
          to="/user/profile/courses"
          className={({ isActive }) =>
            isActive ? [css.menuItem, css.activeLink].join(" ") : css.menuItem
          }
        >
          <div className={css.iconBox}>
            <img className={css.icon} src={playTvIcon} alt="icon" />
          </div>
          <div className={css.menuTxt}>Courses</div>
        </NavLink>
        <NavLink
          to="/user/profile/communication"
          className={({ isActive }) =>
            isActive ? [css.menuItem, css.activeLink].join(" ") : css.menuItem
          }
        >
          <div className={css.iconBox}>
            <img className={css.icon} src={captionIcon} alt="icon" />
          </div>
          <div className={css.menuTxt}>Communication</div>
        </NavLink>
        <NavLink
          to="/user/profile/performance"
          className={({ isActive }) =>
            isActive ? [css.menuItem, css.activeLink].join(" ") : css.menuItem
          }
        >
          <div className={css.iconBox}>
            <img className={css.icon} src={analyticsIcon} alt="icon" />
          </div>
          <div className={css.menuTxt}>Performance</div>
        </NavLink>
        <NavLink
          to="/user/profile/tools"
          className={({ isActive }) =>
            isActive ? [css.menuItem, css.activeLink].join(" ") : css.menuItem
          }
        >
          <div className={css.iconBox}>
            <img className={css.icon} src={settingsIcon} alt="icon" />
          </div>
          <div className={css.menuTxt}>Settings</div>
        </NavLink>
        <NavLink
          to="/user/profile/resources"
          className={({ isActive }) =>
            isActive ? [css.menuItem, css.activeLink].join(" ") : css.menuItem
          }
        >
          <div className={css.iconBox}>
            <img className={css.icon} src={queryIcon} alt="icon" />
          </div>
          <div className={css.menuTxt}>Resources</div>
        </NavLink>
      </div>
    </div>
  );
};

export default InstructorMenuBar;
