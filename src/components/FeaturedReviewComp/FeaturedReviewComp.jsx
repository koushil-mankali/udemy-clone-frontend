import React from "react";

import css from "./FeaturedReviewComp.module.css";

import Button1 from "../../utils/Buttons/Button1/Button1";

import TimeSinceFunc from "../../helpers/TimeSinceFunc.js";

import userprofileIcon from "/icons/userprofile.png";
import thumbsdownIcon from "/icons/dislike.png";
import thumbsupIcon from "/icons/like.png";

const FeaturedReviewComp = (props) => {
  const {
    profileImg = userprofileIcon,
    name = "",
    courses = 0,
    reviews = 0,
    rated = 0,
    date = "",
    cmmt = "",
  } = props.data;
  return (
    <div className={css.outerDiv}>
      <div className={css.ttl}>Featured review</div>
      <div className={css.topSec}>
        <div className={css.imgBox}>
          <img src={profileImg} alt="profile picture" className={css.img} />
        </div>
        <div className={css.det}>
          <div className={css.name}>{name}</div>
          <div className={css.udet}>{courses} courses</div>
          <div className={css.udet}>{reviews} reviews</div>
        </div>
      </div>
      <div className={css.rats}>
        <span className={css.stars}>{rated}</span>
        <span className={css.tme}>{TimeSinceFunc(date)}</span>
      </div>
      <div className={css.cmmt}>{cmmt}</div>
      <div className={css.feedback}>
        <div className={css.fbkTxt}>Was this review helpful?</div>
        <div className={css.fbkBox}>
          <div className={css.btns}>
            <Button1
              txt={null}
              img={thumbsupIcon}
              extraCss={{
                borderRadius: "50%",
              }}
              imageCss={{ width: "16px", height: "16px" }}
            />
            <Button1
              txt={null}
              img={thumbsdownIcon}
              extraCss={{
                borderRadius: "50%",
              }}
              imageCss={{ width: "16px", height: "16px" }}
            />
          </div>
          <div className={css.rpt}>Report</div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedReviewComp;
