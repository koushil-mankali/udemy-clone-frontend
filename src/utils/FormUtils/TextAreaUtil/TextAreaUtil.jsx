import { useState } from "react";

import css from "./TextAreaUtil.module.css";

import Button1 from "../../Buttons/Button1/Button1";

const TextAreaUtil = (props) => {
  const [countNumber, setCountNumber] = useState(0);
  const {
    label = null,
    inptTxt = null,
    name = "",
    icon = "",
    iconPosition = "left",
    placeholderTxt = "",
    state = "",
    btnTxt = "",
    btnClick = () => {},
    onChange = () => {},
    inptBoxCss = {},
    imgCss = {},
    extraCss = {},
    btnCss = {},
    count = false,
    countLimit = null,
    showCount = true,
    disabledInpt = false,
    disabledBtn = false,
  } = props;

  const changeHandler = (e) => {
    onChange(e);
    if (countLimit && e.currentTarget.value.length > countLimit) {
      return;
    }
    setCountNumber(e.currentTarget.value.length || 0);
  };

  return (
    <div className={css.outerDiv}>
      {label ? <label className={css.label}>{label}</label> : null}
      <div className={css.inptBoxDiv}>
        <div className={css.inptBox} style={inptBoxCss}>
          {inptTxt ? <div className={css.inptTxt}>{inptTxt}</div> : null}
          {icon && iconPosition === "left" ? (
            <img src={icon} className={css.icon} style={imgCss} />
          ) : (
            ""
          )}
          <textarea
            name={name}
            placeholder={placeholderTxt}
            className={css.inpt}
            style={extraCss}
            onChange={changeHandler}
            maxLength={countLimit}
            disabled={disabledInpt}
          >
            {state}
          </textarea>
          {count ? (
            <div className={css.count}>
              {showCount ? countNumber : countLimit - state?.length}
            </div>
          ) : null}
          {icon && iconPosition === "right" ? (
            <img src={icon} className={css.icon} style={imgCss} />
          ) : (
            ""
          )}
        </div>
        {btnTxt ? (
          <Button1
            txt={btnTxt}
            onClick={btnClick}
            bck="var(--purple)"
            hovBck="var(--purple-dark)"
            color="var(--white)"
            disableBtn={disabledBtn}
            extraCss={{
              margin: "0",
              padding: "1.3rem",
              width: "30%",
              height: "100%",
              borderLeft: "none",
              ...btnCss,
            }}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TextAreaUtil;
