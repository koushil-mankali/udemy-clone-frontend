import React from "react";

import Button2 from "../../../../utils/Buttons/Button2/Button2";

import css from "./ParaCard.module.css";

const ParaCard = (props) => {
  const {
    ttl = "",
    cnt = "",
    imgSrc = "/",
    btnTxt = "",
    btnLink = "/",
  } = props;
  return (
    <div className={css.outerDiv}>
      <div className={css.left}>
        <img src={imgSrc} alt="showcase image" className={css.img} />
      </div>
      <div className={css.right}>
        <div className={css.ttl}>{ttl}</div>
        <div className={css.cnt}>{cnt}</div>
        <Button2
          txt={btnTxt}
          link={btnLink}
          color="var(--purple)"
          bck="none"
          hovBck="none"
          extraCss={{
            border: "none",
            outline: "none",
            padding: "0",
            margin: "0",
            textUnderlineOffset: "5px",
          }}
        />
      </div>
    </div>
  );
};

export default ParaCard;
