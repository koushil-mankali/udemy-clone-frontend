// import { useEffect } from "react";

import Button1 from "../../../utils/Buttons/Button1/Button1";

import logoIcon from "/images/logo-udemy.svg";
import trophyIcon from "/icons/trophy.png";
import starIcon from "/icons/star.png";
import dotsIcon from "/icons/dots.png";
import shareIcon from "/icons/share.png";
import downArrowIcon from "/icons/down-arrow.svg";

import css from "./CourseVideoNavbar.module.css";

const CourseVideoNavbar = (props) => {
  const { data = {} } = props;
  const { title = "" } = data;

  return (
    <div className={css.outerDiv}>
      <div className={css.left}>
        <div className={css.logoBox}>
          <img src={logoIcon} alt="logo" className={css.logo} />
        </div>
        <hr className={css.vhr} />
        <div className={css.ttl}>
          React - The Complete Guide (incl Hooks, React Router, Redux)
        </div>
      </div>
      <div className={css.right}>
        <div className={css.item}>
          <img src={starIcon} alt="star" className={css.icon} />
          <span className={css.txt}>Leave a rating</span>
        </div>
        <div className={css.item}>
          <img src={trophyIcon} alt="progress" className={css.icon} />
          <span className={css.txt}>Your Progress</span>
          <img
            src={downArrowIcon}
            alt="down arrow"
            className={[css.icon, css.arrowIcon].join(" ")}
          />
        </div>
        <Button1
          txt="Share"
          color="var(--white)"
          img={shareIcon}
          imgDir="right"
          bck="var(--gray)"
          hovBck="var(--blackish2)"
          extraCss={{ border: "1px solid var(--white)" }}
          imageCss={{
            width: "10px",
            height: "10px",
            filter: "invert(1)",
          }}
        />
        <Button1
          img={dotsIcon}
          color="var(--white)"
          bck="var(--gray)"
          hovBck="var(--blackish2)"
          extraCss={{
            border: "1px solid var(--white",
          }}
          txtBoxCss={{ filter: "invert(1)" }}
        />
      </div>
    </div>
  );
};

export default CourseVideoNavbar;
