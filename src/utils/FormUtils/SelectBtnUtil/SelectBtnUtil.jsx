import { useState } from "react";

import css from "./SelectBtnUtil.module.css";

const SelectBtnUtil = (props) => {
  const {
    label = "",
    bck = "white",
    color = "#1c1d1f",
    hovBck = "rgba(0, 0, 0, 0.04)",
    selectedOption,
    options = [],
    onChange = () => {},
    extraCss = {},
    disableBtn = false,
  } = props;

  let [style, setStyle] = useState({ backgroundColor: bck, color: color });
  let [dropdownState, setDropdwonState] = useState(false);

  let mouseOverHandler = () => {
    setDropdwonState(true);
    return setStyle({ backgroundColor: hovBck, color: color });
  };
  let mouseLeaveHandler = () => {
    setDropdwonState(false);
    return setStyle({ backgroundColor: bck, color: color });
  };

  const optionClickHandler = (value) => {
    setDropdwonState(false);
    onChange(value);
  };

  return (
    <div
      id="selectBox"
      className={css.outerDiv}
      style={{
        ...style,
        extraCss,
        ...{ cursor: disableBtn ? "not-allowed" : "pointer" },
      }}
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
      disabled={disableBtn}
    >
      <div htmlFor="selectButtonUtil" className={css.label}>
        <div className={css.label}>{label}</div>
        <div className={css.selectedValue}>{selectedOption || options[0]}</div>
        <div
          className={css.select}
          id="selectButtonUtil"
          style={{ display: dropdownState ? "block" : "none" }}
        >
          {options?.map((value, id) => {
            return (
              <div
                className={css.option}
                key={`option-${id}`}
                onClick={() => optionClickHandler(value)}
              >
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectBtnUtil;
