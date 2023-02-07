import React from "react";
import { Link } from "react-router-dom";

import placeHolderImg from "/images/placeholderImage.jpg";

import css from "./VerticalCourseDraftCard.module.css";

const VerticalCourseDraftCard = (props) => {
  const {
    courseName = "xxxxx",
    courseType = "xxxxx",
    courseVisible = "public",
    courseFillP = 0.6,
    link = "#",
  } = props;
  return (
    <Link to={link} className={css.outerDiv}>
      <div className={css.left}>
        <img src={placeHolderImg} className={css.img} />
      </div>
      <div className={css.right}>
        <div className={css.hoveredBox}>Edit / Manage Course</div>
        <div className={css.rLeftBox}>
          <div className={css.txt}>{courseName}</div>
          <div className={css.txt}>
            {courseType} <span className={css.lightTxt}>{courseVisible}</span>
          </div>
        </div>
        <div className={css.rrightBox}>
          <span className={css.txt}>Finish your course</span>
          <progress value={courseFillP} className={css.progressBar} />
        </div>
      </div>
    </Link>
  );
};

export default VerticalCourseDraftCard;
