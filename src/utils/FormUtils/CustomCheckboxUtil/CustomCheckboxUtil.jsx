import React from "react";
import css from "./CustomCheckboxUtil.module.css";

const CustomCheckboxUtil = (props) => {
  const {
    label,
    name = "",
    id = "",
    state = false,
    onChange,
    ...extraProps
  } = props;
  return (
    <div className={css.inptBox}>
      <input
        type="checkbox"
        name={name}
        id={id}
        onChange={(e) => onChange(e.currentTarget)}
        defaultChecked={state}
        className={css.checkbox}
        {...extraProps}
      />
      <label htmlFor={id} className={css.label}>
        {label}
      </label>
    </div>
  );
};

export default CustomCheckboxUtil;
