import React from "react";

import css from "./CourseIncludesCard.module.css";

const CourseIncludesCard = (props) => {
  const { id = null, img = "", txt = "" } = props.data;
  return (
    <div className={css.outerDiv}>
      <div className={css.imgBox}>
        <img src={img} alt="icon" className={css.img} />
      </div>
      <div className={css.txt}>{txt}</div>
    </div>
  );
};

export default CourseIncludesCard;
