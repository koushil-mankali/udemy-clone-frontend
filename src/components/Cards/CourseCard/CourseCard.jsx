import React from "react";

import TAG1 from "../../../utils/Tags/TAG1/TAG1";

import css from "./CourseCard.module.css";

const CourseCard = (props) => {
  const {
    img = "",
    ttl = "",
    authDet = "",
    prc = 0,
    oldprc = 0,
    stars = {},
    noOfRats = 0,
    updatedDate = new Intl.DateTimeFormat("en-IN", {
      dateStyle: "long",
    }).format(new Date()),
  } = props;

  let totalRating = (
    (1 * stars?.a + 2 * stars?.b + 3 * stars?.c + 4 * stars?.d + 5 * stars?.e) /
      stars?.a +
    stars?.b +
    stars?.c +
    stars?.d +
    stars?.e
  ).toFixed(2);

  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.imgBox}>
          <img src={img} alt="course thumbnail" className={css.courseImg} />
        </div>
        <div className={css.cardBdy}>
          <div className={css.ttl}>{ttl}</div>
          <div className={css.authDet}>{authDet}</div>
          <div className={css.stats}>
            <div className={css.rat1}>{totalRating}</div>
            <div className={css.rat2}>{totalRating}</div>
            <div className={css.noOfRats}>({noOfRats})</div>
          </div>
          <div className={css.prc}>
            <span className={css.newPrc}>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(prc)}
            </span>
            <span className={css.oldPrc}>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(oldprc)}
            </span>
          </div>
        </div>
      </div>
      <div className={css.hovCard}>
        <div className={css.innerBox}>
          <div className={css.ttl}>{ttl}</div>
          <div className={css.shrtDet}>
            <TAG1 />
            <div className={css.lstUpdt}>Updated {updatedDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
