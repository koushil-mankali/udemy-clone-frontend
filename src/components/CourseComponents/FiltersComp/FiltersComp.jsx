import { useState } from "react";

import arrowIcon from "/icons/down-arrow.svg";

import css from "./FiltersComp.module.css";

const FiltersComp = (props) => {
  const {
    title = "",
    dropdownState = false,
    type = "checkbox",
    filtersData = [],
  } = props.data;

  const [toggleDropdown, setToggleDropdown] = useState(dropdownState);

  return (
    <div
      className={[css.outerDiv, toggleDropdown ? css.heightMax : null].join(
        " "
      )}
    >
      <div
        className={css.topBar}
        onClick={() => setToggleDropdown((prev) => !prev)}
      >
        <div className={css.ttl}>{title}</div>
        <div className={css.arrowBox}>
          <img
            className={[
              css.arrowIcon,
              toggleDropdown ? css.arrowIconRotate : null,
            ].join(" ")}
            src={arrowIcon}
            alt="arrow icon"
          />
        </div>
      </div>
      <div className={css.bdy}>
        {filtersData?.map((filterItem, id) => {
          if (id >= 4) {
            return;
          }
          return (
            <div className={css.bdyItem} key={"fdm" + id}>
              <input
                className={css.inpt}
                type={type}
                name={type === "radio" ? "radio" : filterItem?.ttl}
                id={filterItem?.txt}
                value={""}
                onChange={() => {}}
              />
              <label htmlFor={filterItem?.txt} className={css.label}>
                {filterItem?.stars ? (
                  <span className={css.stars}>stars</span>
                ) : null}
                <span className={css.txt}>{filterItem?.txt}</span>
                <span className={css.count}>({filterItem?.count})</span>
              </label>
            </div>
          );
        })}
        {filtersData?.length >= 5 ? (
          <div className={css.showMoreBox}>
            <span className={css.showMore}>Show More</span>
            <img className={css.arrowIcon2} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FiltersComp;
