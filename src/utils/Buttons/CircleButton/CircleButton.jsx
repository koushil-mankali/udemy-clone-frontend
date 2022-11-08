import React, { useState } from "react";
import { Link } from "react-router-dom";

import css from "./CircleButton.module.css";

const CircleButton = ({
  img = "",
  bck = "white",
  color = "#1c1d1f",
  hovBck = "rgba(0, 0, 0, 0.04)",
  onClick = () => {},
  imageCss = {},
  extraCss = {},
  classNames = {},
  link = false,
}) => {
  let [style, setStyle] = useState({ backgroundColor: bck, color: color });

  let mouseOverHandler = () => {
    return setStyle({ backgroundColor: hovBck, color: color });
  };
  let mouseLeaveHandler = () => {
    return setStyle({ backgroundColor: bck, color: color });
  };
  let btn = (
    <div
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
      style={{ ...style, ...extraCss }}
      className={[css.btn, classNames]?.join(" ")}
      onClick={onClick}
    >
      <img src={img} className={css.btnImg} style={imageCss} />
    </div>
  );

  if (link) {
    btn = (
      <Link
        to={link}
        onMouseOver={mouseOverHandler}
        onMouseLeave={mouseLeaveHandler}
        style={{ ...style, ...extraCss }}
        className={css.btn}
        onClick={onClick}
      >
        <img src={img} className={css.btnImg} style={imageCss} />
      </Link>
    );
  }

  return btn;
};

export default CircleButton;
