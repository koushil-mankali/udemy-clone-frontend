import React from "react";

import css from "./TextPointsNoter.module.css";

const TextPointsNoter = (props) => {
  const { ttl, points, prefix = "✓" } = props;
  return (
    <div className={css.box}>
      <div className={css.ttl}>{ttl}</div>
      <div className={css.bdy}>
        <ul className={css.ul}>
          {points?.map((point) => {
            return (
              <li className={css.li} data-content={prefix}>
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
