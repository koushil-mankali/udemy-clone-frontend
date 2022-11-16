import React from "react";

import css from "./ArrowsComp.module.css";

const ArrowsComp = (props) => {
  const { className, style, onClick, img } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={img} className={css.carosuel} />
    </div>
  );
};

export default ArrowsComp;
