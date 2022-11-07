import React from "react";

import css from "./InputUtil.module.css";

const InputUtil = (props) => {
  const {
    type = "text",
    name = "",
    icon = "",
    placeholderTxt = "",
    state = "",
    onChange = {},
    inptBoxCss = {},
    imgCss = {},
    extraCss = {},
  } = props;
  return (
    <div className={css.inptBox} style={inptBoxCss}>
      {icon ? <img src={icon} className={css.icon} style={imgCss} /> : ""}
      <input
        type={type}
        name={name}
        placeholder={placeholderTxt}
        className={css.inpt}
        style={extraCss}
        defaultValue={state}
        onChange={onChange}
      />
    </div>
  );
};

export default InputUtil;
