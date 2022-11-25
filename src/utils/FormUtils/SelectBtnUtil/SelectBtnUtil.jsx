import { useState } from "react";

import css from "./SelectBtnUtil.module.css";

const SelectBtnUtil = (props) => {
  const {
    label = "",
    bck = "white",
    color = "#1c1d1f",
    hovBck = "rgba(0, 0, 0, 0.04)",
    options = [],
    extraCss = {},
    disableBtn = false,
  } = props;

  return (
    <div
      className={css.outerDiv}
      style={{
        extraCss,
        ...{ cursor: disableBtn ? "not-allowed" : "pointer" },
      }}
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <label htmlFor="selectButtonUtil" className={css.label}>
        {label}
      </label>
      <select className={css.select} id="selectButtonUtil">
        {options?.map((option, id) => {
          return (
            <option
              className={css.option}
              value={option.vlaue}
              key={`option-${id}`}
            >
              {option.key}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectBtnUtil;
