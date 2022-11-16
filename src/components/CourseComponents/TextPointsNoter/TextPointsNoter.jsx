import React from "react";

import css from "./TextPointsNoter.module.css";

const TextPointsNoter = (props) => {
  const { ttl = "", points = [], prefix = "✓" } = props.data;
  return (
    <div className={css.box}>
      <div className={css.ttl}>{ttl}</div>
      <div className={css.bdy}>
        <ul className={css.ul}>
          {points?.map((point, id) => {
            return (
              <li className={css.li} data-content={prefix} key={id}>
                {point}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TextPointsNoter;
