import React from "react";
import css from "./CustomCheckboxUtil.module.css";

const CustomCheckboxUtil = (props) => {
  const {
    label,
    name = "",
    id = "",
    state = false,
    onChange = () => {},
    extraCss = {},
    inputCss = {},
    ...extraProps
  } = props;

  return (
    <div className={css.inptBox} style={extraCss}>
      <input
        type="checkbox"
        name={name}
        id={id}
        onChange={(e) => onChange(e)}
        checked={state}
        className={css.checkbox}
        {...extraProps}
        style={inputCss}
      />
      <label htmlFor={id} className={css.label}>
        {label}
      </label>
    </div>
  );
};

export default CustomCheckboxUtil;
