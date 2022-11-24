import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import arrowIcon from "/icons/down-arrow.svg";
import downArrowIcon from "/icons/down-arrow.png";

import css from "./FiltersComp.module.css";

const FiltersComp = (props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { dropdownState, data } = props;
  const { title = "", slug = "", type = "checkbox", filtersData = [] } = data;

  const [inptState, setInptState] = useState({
    name: "",
    value: [],
    event: "",
  });
  const [toggleDropdown, setToggleDropdown] = useState(dropdownState);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const urlValues = searchParams.getAll(slug);
    setInptState({
      value: urlValues,
      name: slug,
      event: "",
    });
  }, []);

  const onChangeFunc = (e) => {
    if (e.target.checked && type === "radio") {
      searchParams.set(slug, e.target.value);
    } else if (e.target.checked) {
      searchParams.append(slug, e.target.value);
    } else {
      const values = searchParams.getAll(slug);
      if (values.length > 0) {
        const index = values.indexOf(e.target.value);
        values.splice(index, 1);
        searchParams.set(slug, values);
      }
    }

    setSearchParams(searchParams);
    setInptState((prev) => {
      return {
        value: [...prev.value, e.target.value],
        name: prev.name,
        event: e,
      };
    });
  };

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
        <div className={css.inpts}>
          {filtersData?.map((filterItem, id) => {
            if (!showMore && id >= 4) {
              return;
            }
            return (
              <div className={css.bdyItem} key={"fdm" + id}>
                <input
                  className={[type === "radio" ? css.radio : css.checkbox]}
                  type={type}
                  name={type === "radio" ? "radio" : filterItem?.ttl}
                  id={filterItem?.txt}
                  value={filterItem.value}
                  checked={inptState.value?.includes(filterItem.value)}
                  onChange={(e) => onChangeFunc(e)}
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
          {!showMore && filtersData?.length >= 5 ? (
            <div className={css.whiteScreen}></div>
          ) : null}
        </div>
        {filtersData?.length >= 5 ? (
          <div
            className={css.showMoreBox}
            onClick={() => setShowMore((prev) => !prev)}
          >
            <span className={css.showMore}>Show More</span>
            <img
              className={[
                css.arrowIcon2,
                showMore ? css.arrowIcon2Rotate : null,
              ].join(" ")}
              src={downArrowIcon}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FiltersComp;
