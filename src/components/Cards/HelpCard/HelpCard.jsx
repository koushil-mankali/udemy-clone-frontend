import { Link } from "react-router-dom";

import css from "./HelpCard.module.css";

const HelpCard = (props) => {
  const { id = "", link = "", icon = "", ttl = "", txt = "" } = props.item;
  return (
    <Link to={link} className={css.card} id={id}>
      <div className={css.iconBox}>
        <img src={icon} className={css.icon} alt="icon" />
      </div>
      <div className={css.ttl}>{ttl}</div>
      <div className={css.txt}>{txt}</div>
    </Link>
  );
};

export default HelpCard;
