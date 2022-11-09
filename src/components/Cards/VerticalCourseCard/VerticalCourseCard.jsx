import React from "react";

import css from "./VerticalCourseCard.module.css";

import CircleButton from "../../../utils/Buttons/CircleButton/CircleButton";

import starIcon from "/icons/star.png";
import peopleIcon from "/icons/people.png";
import heartIcon from "/icons/heart.png";

const VerticalCourseCard = (props) => {
  const {
    id = 0,
    img = "",
    title = "",
    duration = 0,
    lastUpdatedOn = new Date(),
    ratings = 0,
    enrolled = 0,
    price = 0,
    wishListed = false,
  } = props.data;

  const wishLishHandler = (e) => {
    e.preventDefault();
    console.log("wish list clicked");
  };

  return (
    <div className={css.outerDiv}>
      <div className={css.sec1}>
        <div className={css.imgBox}>
          <img src={img} alt="course image" className={css.img} />
        </div>
        <div className={css.det}>
          <div className={css.ttl}>{title}</div>
          <div className={css.crsDet}>
            <span>{duration} total hours</span>
            <span></span>
            <span>
              Updated {lastUpdatedOn.getDay()}/{lastUpdatedOn.getFullYear()}
            </span>
          </div>
        </div>
      </div>
      <div className={css.sec2}>
        <div className={css.rats}>
          <span>{ratings}</span> <img src={starIcon} className={css.starIcon} />
        </div>
        <div className={css.rats}>
          <img src={peopleIcon} className={css.pplIcon} />
          <span>{enrolled}</span>
        </div>
        <div className={css.prc}>
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
          }).format(price)}
        </div>
        <div className={css.btn} onClickCapture={wishLishHandler}>
          <CircleButton img={heartIcon} />
        </div>
      </div>
    </div>
  );
};

export default VerticalCourseCard;
