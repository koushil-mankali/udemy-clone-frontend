import React from "react";
import css from "./CheckboxUtil.module.css";

const CheckboxUtil = (props) => {
  const {
    label = "",
    name = "",
    id = "",
    state = false,
    onChange = () => {},
  } = props;
  return (
    <div className={css.inptBox}>
      <input
        type="checkbox"
        name={name}
        id={id}
        onChange={onChange}
        defaultChecked={state}
        className={css.inpt}
      />
      <label htmlFor={id} className={css.label}>
        {label}
      </label>
    </div>
  );
};

export default CheckboxUtil;
