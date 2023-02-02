import { useState } from "react";
import { Link } from "react-router-dom";

import Button1 from "../../../utils/Buttons/Button1/Button1";
import ShareCourseCard from "../../Cards/ShareCourseCard/ShareCourseCard";
import CourseRatingsCard from "../../Cards/CourseRatingsCard/CourseRatingsCard";

import logoIcon from "/images/logo-udemy.svg";
import trophyIcon from "/icons/trophy.png";
import starIcon from "/icons/star.png";
import shareIcon from "/icons/share.png";
import downArrowIcon from "/icons/down-arrow.svg";

import css from "./CourseVideoNavbar.module.css";

const CourseVideoNavbar = (props) => {
  const [leaveRatingModal, setLeaveRatingModal] = useState(false);
  const [showShareCourseDialog, setShowShareCourseDialog] = useState(false);
  const { data = {} } = props;
  const { title = "" } = data;

  const shareCourseDialogHandler = () => {
    setShowShareCourseDialog((p) => !p);
  };

  return (
    <div className={css.outerDiv}>
      <div className={css.left}>
        <Link to="/" className={css.logoBox}>
          <img src={logoIcon} alt="logo" className={css.logo} />
        </Link>
        <hr className={css.vhr} />
        <div className={css.ttl}>{title}</div>
      </div>
      <div className={css.right}>
        <div className={css.item}>
          <img src={starIcon} alt="star" className={css.icon} />
          <span className={css.txt} onClick={() => setLeaveRatingModal(true)}>
            Leave a rating
          </span>
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
          onClick={shareCourseDialogHandler}
          bck="var(--gray)"
          hovBck="var(--blackish2)"
          extraCss={{ border: "1px solid var(--white)" }}
          imageCss={{
            width: "10px",
            height: "10px",
            filter: "invert(1)",
          }}
        />
      </div>
      {showShareCourseDialog ? (
        <ShareCourseCard
          ttl="Share this course"
          txt=""
          btnTxt="Copy"
          btnClick={shareCourseDialogHandler}
          closeModal={shareCourseDialogHandler}
        />
      ) : null}
      {leaveRatingModal ? (
        <CourseRatingsCard
          ttl="How would you rate this course?"
          closeModal={() => setLeaveRatingModal(false)}
        />
      ) : null}
    </div>
  );
};

export default CourseVideoNavbar;
