import { useState } from "react";

import css from "./StepCard.module.css";

const StepCard = (props) => {
  const {
    box = 0,
    icon = "",
    ttl = "",
    desc = "",
    active = false,
    setActive = () => {},
  } = props;
  return (
    <div
      onClick={() =>
        setActive((p) => {
          return { [box]: true };
        })
      }
      className={css.outerDiv}
      style={{
        border: active[box] ? "4px solid black" : "2px solid var(--gray86)",
      }}
    >
      <div className={css.iconBox}>
        <img src={icon} className={css.icon} />
      </div>
      <div className={css.ttl}>{ttl}</div>
      <div className={css.desc}>{desc}</div>
    </div>
  );
};

export default StepCard;
