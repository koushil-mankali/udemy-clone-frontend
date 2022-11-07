import React from "react";

import css from "./HomeShowcaseCard.module.css";

import Button1 from "../../../utils/Buttons/Button1/Button1";

const HomeShowcaseCard = (props) => {
  const {
    ttl = "",
    desc = "",
    btnTxt = "",
    btnLink = "",
    img = "",
    dir = "right",
  } = props.det;
  return (
    <div className={css.outerDiv}>
      <div
        className={css.innerDiv}
        style={{ flexDirection: dir === "right" ? "none" : "row-reverse" }}
      >
        <div className={css.box1}>
          <div className={css.ttl}>{ttl}</div>
          <div className={css.desc}>{desc}</div>
          <Button1
            txt={btnTxt}
            link={btnLink}
            extraCss={{
              margin: "0px",
              padding: "0.5rem",
              color: "var(--white)",
              backgroundColor: "var(--gray)",
            }}
          />
        </div>
        <div className={css.box2}>
          <img src={img} alt="show case image" className={css.img} />
        </div>
      </div>
    </div>
  );
};

export default HomeShowcaseCard;
