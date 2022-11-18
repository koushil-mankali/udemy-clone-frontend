import { useEffect, useState } from "react";

import { categorySubCategoriesData } from "../../../fakedata/fakedata";

import largeNextIcon from "/icons/large-next.svg";
import dotsIcon from "/icons/dots.png";

import css from "./BreadcrumbVerticalCategoryMenuBar.module.css";

const BreadcrumbVerticalCategoryMenuBar = () => {
  const [lastVisiableEle, setLastVisiableEle] = useState(null);
  const { width, height } = window.screen;

  addEventListener("resize", () => {
    const eles = document.getElementById("cats");
    const isVisible = function (ele, container) {
      const { bottom, height, top } = ele.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      return top <= containerRect.top
        ? containerRect.top - top <= height
        : bottom - containerRect.bottom <= height;
    };

    if (eles) {
      for (let i = 0; i < eles.children.length; i++) {
        if (!isVisible(eles.children[i], eles)) {
          setLastVisiableEle(eles.children[i].id);
        }
      }
    }
  });

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
        <div className={css.iconBox}>
          <img src={dotsIcon} alt="right arrow" className={css.icon} />
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbVerticalCategoryMenuBar;
