import React from "react";
import { Link } from "react-router-dom";

import css from "./SmallNaviCard.module.css";

const SmallNaviCard = (props) => {
  const { icon = "", ttl = "", desc = "", link = "#" } = props;
  return (
    <Link to={link} className={css.outerDiv}>
      <img src={icon} alt="icon" className={css.icon} />
      <div className={css.ttl}>{ttl}</div>
      <div className={css.desc}>{desc}</div>
    </Link>
  );
};

export default SmallNaviCard;
