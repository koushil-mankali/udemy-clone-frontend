import { useState } from "react";

import { categoriesSubCategoriesData } from "../../../fakedata/fakedata";

import rightArrowIcon from "/icons/down-arrow.svg";

import css from "./BreadcrumbVerticalCategoryMenuBar.module.css";

const BreadcrumbVerticalCategoryMenuBar = () => {
  return (
    <div className={css.outerDiv} id="vouterDiv">
      <div className={css.innerDiv}>
        <div className={css.cats} id="cats">
          {categoriesSubCategoriesData?.map((cat) => (
            <div
              key={cat.id}
              className={[css.category, "categoryDiv"].join(" ")}
              id={`cat-${cat.id}`}
            >
              {cat.ttl}
            </div>
          ))}
        </div>

        <div className={css.iconBox}>
          <span>Scroll</span>
          <img src={rightArrowIcon} alt="right arrow" className={css.icon} />
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbVerticalCategoryMenuBar;
