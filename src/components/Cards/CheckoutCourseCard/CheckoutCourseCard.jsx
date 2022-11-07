import React from "react";

import TagUtil from "../../../utils/Tags/TAG1/TAG1";
import Button2 from "../../../utils/Buttons/Button2/Button2";

import css from "./CheckoutCourseCard.module.css";

const CheckoutCourseCard = (props) => {
  const { data } = props;
  const {
    id = 1,
    img = "",
    link = "/",
    ttl = "xxx",
    authors = ["xxx"],
    ratings = { totalratings: 0, count: 0 },
    duration = 0,
    lectures = 0,
    level = "All",
    price = 0,
    discount = 0,
    couponApplied = "xxx",
    bestSeller = false,
  } = data;
  return (
    <div className={css.outerDiv}>
      <div className={css.box1}>
        <div className={css.imgBox}>
          <img src={img} alt="course thumbnail" className={css.img} />
        </div>
        <div className={css.det}>
          <div className={css.ttl}>{ttl}</div>
          <div className={css.authors}>By {authors.toString()}</div>
          <div className={css.ratings}>
            <TagUtil />
            <div className={css.rats}>
              <span className={css.num}>{ratings.totalratings}</span>
              <span className={css.count}>{ratings.count}</span>
            </div>
          </div>
          <div className={css.ttl}>
            <span className={css.crsDet}>{duration} total hours</span>
            <span className={[css.crsDet, css.mid].join(" ")}>
              {lectures} lectures
            </span>
            <span className={css.crsDet}>{level} Levels</span>
          </div>
        </div>
      </div>
      <div className={css.box2}>
        <Button2
          txt="Remove"
          hovBck=""
          extraCss={{
            fontWeight: "400",
            fontSize: "0.9rem",
            color: "var(--purple)",
          }}
        />
        <Button2
          txt="Save for Later"
          hovBck=""
          extraCss={{
            fontWeight: "400",
            fontSize: "0.9rem",
            color: "var(--purple)",
          }}
        />
      </div>
      <div className={css.box3}>
        <div>
          <div>{price}</div>
          <img src="" />
        </div>
        <div>{discount}</div>
      </div>
    </div>
  );
};

export default CheckoutCourseCard;
