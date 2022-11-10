import { useState } from "react";

import css from "./CourseDescriptionComp.module.css";

import downArrowImg from "/icons/down-arrow.png";

const CourseDescriptionComp = (props) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  const { ttl, desc } = props;
  return (
    <div className={css.outerDiv}>
      <div className={css.ttl}>{ttl}</div>
      <div className={css.bdy} style={{ height: toggle ? "auto" : "200px" }}>
        {desc}
        {toggle ? "" : <div className={css.coverup}></div>}
      </div>
      <button className={css.btn} onClick={toggleHandler}>
        Show more
        <img
          style={{ transform: toggle ? "rotate(180deg)" : "none" }}
          src={downArrowImg}
          alt="down arrow"
          className={css.icon}
        />
      </button>
    </div>
  );
};

export default CourseDescriptionComp;
