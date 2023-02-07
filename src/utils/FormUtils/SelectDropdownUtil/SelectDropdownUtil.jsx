import { useState } from "react";

import arrowIcon from "/icons/down-arrow.svg";

import css from "./SelectDropdownUtil.module.css";

const SelectDropdownUtil = (props) => {
  const [dpToggle, setDPToggle] = useState(false);
  const {
    id = "",
    label = null,
    filterType = "",
    defaultValue = "",
    value = null,
    setValue = () => {},
    multipleOptions = false,
    options = "",
    selectBoxCss = {},
    extraCss = {},
  } = props;

  const optionHandler = (option) => {
    setValue((prev) => {
      return {
        ...prev,
        [filterType]: { key: option.key, value: option.value },
      };
    });
  };

  // On click of any where else except filter dropdown will be closed
  window.addEventListener("click", (e) => {
    if (e.target.dataset.id !== id) {
      setDPToggle(false);
    }
  });

  return (
    <div className={css.outerDiv} style={extraCss}>
      <div className={css.selectBox} style={selectBoxCss}>
        {label ? <label className={css.label}>{label}</label> : null}
        <div
          data-id={id}
          className={css.selectedDP}
          onClickCapture={() => setDPToggle((prev) => !prev)}
        >
          <span data-id={id}>{!!value.key ? value.key : defaultValue.key}</span>
          <img
            data-id={id}
            src={arrowIcon}
            alt="arrow icon"
            className={css.icon}
          />
        </div>
        {multipleOptions ? (
          <div
            className={css.options}
            style={{ display: dpToggle ? "block" : "none" }}
          >
            {options?.map((optionArr) => {
              return optionArr?.map((option) => {
                return (
                  <div
                    className={css.option}
                    key={option.value}
                    val={option.value}
                    onClick={() => optionHandler(option)}
                  >
                    {option.key}
                  </div>
                );
              });
            })}
          </div>
        ) : (
          <div
            className={css.options}
            style={{ display: dpToggle ? "block" : "none" }}
          >
            {options?.map((option) => {
              return (
                <div
                  className={css.option}
                  key={option.value}
                  val={option.value}
                  onClick={() => optionHandler(option)}
                >
                  {option.key}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectDropdownUtil;
