import React from "react";

import css from "./CourseReqComp.module.css";

const CourseReqComp = (props) => {
  const { ttl, reqs } = props.data;
  return (
    <div className={css.outerDiv}>
      <div className={css.ttl}>{ttl}</div>
      <ul className={css.ul}>
        {reqs?.map((item, id) => {
          return (
            <li className={css.li} key={id}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CourseReqComp;
