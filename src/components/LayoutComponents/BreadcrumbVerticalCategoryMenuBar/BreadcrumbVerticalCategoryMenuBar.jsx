import { useEffect, useState } from "react";

import { categorySubCategoriesData } from "../../../fakedata/fakedata";

import largeNextIcon from "/icons/large-next.svg";
import dotsIcon from "/icons/dots.png";

import css from "./BreadcrumbVerticalCategoryMenuBar.module.css";

const BreadcrumbVerticalCategoryMenuBar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [lastVisiableEle, setLastVisiableEle] = useState(null);

  function setRemainingElementsInDropDown() {
    const eles = document.getElementById("cats");
    const isVisible = function (ele, container) {
      const { bottom, height, top } = ele.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      return top <= containerRect.top
        ? containerRect.top - top <= height
        : bottom - containerRect.bottom <= height;
    };
    if (eles) {
      let obj = {};
      for (let i = 0; i < eles.children.length; i++) {
        const value = isVisible(eles.children[i], eles);
        obj[eles.children[i].id?.split("-")[1]] = value;
      }
      const values = Object.entries(obj).find((obj) => {
        return obj[1] === false;
      });
      if (values) {
        setLastVisiableEle(values[0]);
        return;
      }
    }
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      setRemainingElementsInDropDown();
    });
    window.addEventListener("click", (e) => {
      if (e?.target?.dataset?.id === "iconBox") {
        return;
      }
      setShowDropDown(false);
    });
    setRemainingElementsInDropDown();

    return () => {
      window.removeEventListener("resize", () => {
        setRemainingElementsInDropDown();
      });
      window.removeEventListener("click", () => {
        if (e?.target?.dataset?.id === "iconBox") {
          return;
        }
        setShowDropDown(false);
      });
    };
  }, []);

  return (
    <div className={css.outerDiv} id="vouterDiv">
      <div className={css.innerDiv}>
        <div className={css.cats} id="cats">
          <div className={css.cat}>{categorySubCategoriesData.ttl}</div>
          <img src={largeNextIcon} alt="right arrow" className={css.nextIcon} />

          {categorySubCategoriesData.sub?.map((cat) => (
            <div
              key={cat.id}
              className={[css.category, "categoryDiv"].join(" ")}
              id={`cat-${cat.id}`}
            >
              {cat.ttl}
            </div>
          ))}
        </div>
        <div
          className={css.iconBox}
          onClick={() => setShowDropDown((prev) => !prev)}
        >
          <img
            src={dotsIcon}
            alt="right arrow"
            className={css.icon}
            data-id="iconBox"
          />
          {showDropDown ? (
            <div className={css.dropDown} data-id="iconBox">
              {categorySubCategoriesData.sub?.map((cat) => {
                if (+lastVisiableEle > cat.id || lastVisiableEle === null) {
                  return;
                }
                return (
                  <div
                    data-id="iconBox"
                    key={cat.id}
                    className={[css.category, "categoryDiv"].join(" ")}
                    id={`cat-${cat.id}`}
                  >
                    {cat.ttl}
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbVerticalCategoryMenuBar;
