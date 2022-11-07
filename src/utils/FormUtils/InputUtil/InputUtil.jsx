import React from "react";

import css from "./InputUtil.module.css";

import Button1 from "../../Buttons/Button1/Button1";

const InputUtil = (props) => {
  const {
    type = "text",
    name = "",
    icon = "",
    placeholderTxt = "",
    state = "",
    btnTxt = "",
    btnClick = {},
    onChange = {},
    inptBoxCss = {},
    imgCss = {},
    extraCss = {},
  } = props;
  return (
    <div className={css.outerDiv}>
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
      {btnTxt ? (
        <Button1
          txt={btnTxt}
          onClick={btnClick}
          bck="var(--purple)"
          hovBck="var(--purple-dark)"
          color="var(--white)"
          extraCss={{
            margin: "0",
            padding: "10px",
            width: "30%",
            borderLeft: "none",
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default InputUtil;
