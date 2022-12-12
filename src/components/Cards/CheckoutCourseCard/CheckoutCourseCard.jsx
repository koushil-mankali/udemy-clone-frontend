import React from "react";

import { Link } from "react-router-dom";

import TagUtil from "../../../utils/Tags/TAG1/TAG1";
import Button2 from "../../../utils/Buttons/Button2/Button2";

import css from "./CheckoutCourseCard.module.css";

import labelIcon from "/icons/label.png";

const CheckoutCourseCard = (props) => {
  const { data, extraCss, } = props;
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
    <Link className={css.outerDiv} to={link} style={extraCss}>
      <div className={css.box1}>
        <div className={css.imgBox}>
          <img src={img} alt="course thumbnail" className={css.img} />
        </div>
        <div className={css.det}>
          <div className={css.ttl}>{ttl}</div>
          <div className={css.authors}>
            By {authors?.join(", ")?.toString()}
          </div>
          <div className={css.ratings}>
            {bestSeller ? <TagUtil /> : ""}
            <div className={css.rats}>
              <span className={css.num}>{ratings.totalratings}</span>
              <span className={css.count}>({ratings.count} ratings)</span>
            </div>
          </div>
          <div className={css.crsDet}>
            <span className={css.crsDet}>{duration} total hours</span>
            <span className={[css.crsDet, css.mid].join(" ")}>
              {lectures} lectures
            </span>
            <span className={css.crsDet}>{level} Levels</span>
          </div>
        </div>
      </div>
      <div className={css.box23}>
        <div
          className={css.box2}
          onClickCapture={(e) => {
            e.preventDefault();
          }}
        >
          <Button2
            txt="Remove"
            hovBck=""
            extraCss={{
              fontWeight: "400",
              fontSize: "0.9rem",
              color: "var(--purple)",
              margin: "0.2rem",
              padding: "0",
            }}
          />
          <Button2
            txt="Save for Later"
            hovBck=""
            extraCss={{
              fontWeight: "400",
              fontSize: "0.9rem",
              color: "var(--purple)",
              margin: "0.2rem",
              padding: "0",
            }}
          />
        </div>
        <div className={css.box3}>
          <div className={css.priceDet}>
            <div className={css.price}>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(price)}
            </div>
            <img src={labelIcon} alt="price tag" className={css.icon} />
          </div>
          <div className={css.dis}>
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(discount)}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CheckoutCourseCard;
