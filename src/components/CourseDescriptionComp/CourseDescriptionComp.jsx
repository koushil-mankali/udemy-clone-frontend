import React from "react";

import css from "./CourseDescriptionComp.module.css";

const CourseDescriptionComp = (props) => {
  const { ttl, desc } = props;
  return (
    <div className={css.outerDiv}>
      <div className={css.ttl}>{ttl}</div>
      <div className={css.bdy}>{desc}</div>
    </div>
  );
};

export default CourseDescriptionComp;
