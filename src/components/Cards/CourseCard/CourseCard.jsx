import React from "react";

import css from "./CourseCard.module.css";

import cardImg from "/images/card.jpg";

const CourseCard = (props) => {
  //   const {img, ttl="", authDet="", prc=0, oldprc=0, rats=0, stars={}, noOfRats=0} = props;

  let img = cardImg;
  let ttl =
    "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53675 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹649Original price: ₹3,399";
  let authDet = "Koushil Mankali, Nani";
  let prc = 649;
  let oldprc = 1300.2;
  let rats = 4.3;
  let stars = { a: 5, b: 1, c: 1, d: 1, e: 1 };
  let noOfRats = 9;
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
      <div className={css.imgBox}>
        <img src={img} alt="course thumbnail" className={css.courseImg} />
      </div>
      <div className={css.cardBdy}>
        <div className={css.ttl}>{ttl}</div>
        <div className={css.authDet}>{authDet}</div>
        <div className={css.stats}>
          <div className={css.rat1}>{rats}</div>
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
  );
};

export default CourseCard;
