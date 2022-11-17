import { useEffect } from "react";

import { categoriesSubCategoriesData } from "../../../fakedata/fakedata";

import rightArrowIcon from "/icons/down-arrow.svg";

import css from "./VerticalCategoryMenuBar.module.css";

const VerticalCategoryMenuBar = () => {
  useEffect(() => {
    document.getElementById("cats").addEventListener("mouseover", (e) => {
      let subId = "subCat-" + e.target.id?.split("-")[1];
      let elem = document.getElementById(subId);
      if (elem) {
        elem.style = "display:flex";
        elem.addEventListener("mouseleave", () => {
          elem.style = "display:none";
        });
        document
          .getElementById("vouterDiv")
          ?.addEventListener("mouseleave", () => {
            elem.style = "display:none";
          });
      }
    });

    return () => {
      document.getElementById("cats").removeEventListener("mouseover", (e) => {
        let subId = "subCat-" + e.target.id?.split("-")[1];
        let elem = document.getElementById(subId);
        if (elem) {
          elem.style = "display:flex";
          elem.removeEventListener("mouseleave", () => {
            elem.style = "display:none";
          });
          document
            .getElementById("vouterDiv")
            ?.removeEventListener("mouseleave", () => {
              elem.style = "display:none";
            });
        }
      });
    };
  }, []);

  return (
    <div className={css.outerDiv} id="vouterDiv">
      <div className={css.innerDiv}>
        <div className={css.cats} id="cats">
          {categoriesSubCategoriesData?.map((cat) => {
            return (
              <div key={cat.id}>
                <div
                  data-id="cat"
                  className={css.category}
                  id={`cat-${cat.id}`}
                >
                  {cat.ttl}
                </div>
                <div className={css.subCat} id={cat.subCatId}>
                  {cat.sub?.map((item) => {
                    return (
                      <div
                        data-id="subCat"
                        key={`subcat-${item.id}`}
                        className={css.subCategory}
                      >
                        {item.ttl}
                      </div>
                    );
                  })}
                </div>
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
