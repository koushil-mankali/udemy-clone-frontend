import { categoriesSubCategoriesData } from "../../../fakedata/fakedata";

import rightArrowIcon from "/icons/down-arrow.svg";

import css from "./VerticalCategoryMenuBar.module.css";

const VerticalCategoryMenuBar = () => {
  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.cats}>
          {categoriesSubCategoriesData?.map((cat) => {
            return (
              <div key={cat.id} className={css.category}>
                {cat.ttl}
              </div>
            );
          })}
        </div>
        <div className={css.iconBox}>
          <span>Scroll</span>
          <img src={rightArrowIcon} alt="right arrow" className={css.icon} />
        </div>
      </div>
    </div>
  );
};

export default VerticalCategoryMenuBar;
