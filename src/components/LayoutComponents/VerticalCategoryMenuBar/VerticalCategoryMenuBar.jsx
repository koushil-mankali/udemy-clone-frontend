import { useEffect } from "react";

import { categoriesSubCategoriesData } from "../../../fakedata/fakedata";

import rightArrowIcon from "/icons/down-arrow.svg";

import css from "./VerticalCategoryMenuBar.module.css";

const VerticalCategoryMenuBar = () => {
  // Adding event listener to toggle VerticalCategoryMenuBar on hover
  useEffect(() => {
    const cats = document.getElementById("cats");
    const catDivs = document.getElementsByClassName("categoryDiv");
    const subCatDivs = document.getElementsByClassName("subCatDiv");
    cats.addEventListener("mouseover", (e) => {
      const catId = e.target.id?.split("-")[1] || 0;
      const subCatId = "subCat-" + catId;

      const subCats = document.getElementsByClassName(subCatId);

      for (let i = 0; i < subCats.length; i++) {
        subCats[i].style = "display: flex";
      }
    });

    for (let i = 0; i < catDivs.length; i++) {
      catDivs[i].addEventListener("mouseleave", () => {
        subCatDivs[i].style = "display: none";
      });
    }

    for (let i = 0; i < subCatDivs.length; i++) {
      subCatDivs[i].addEventListener("mouseover", () => {
        subCatDivs[i].style = "display: flex";
      });
      subCatDivs[i].addEventListener("mouseleave", () => {
        subCatDivs[i].style = "display: none";
      });
    }

    return () => {
      cats.removeEventListener("mouseover", (e) => {
        const catId = e.target.id?.split("-")[1] || 0;
        const subCatId = "subCat-" + catId;

        const subCats = document.getElementsByClassName(subCatId);

        for (let i = 0; i < subCats.length; i++) {
          subCats[i].style = "display: none";
        }
      });

      for (let i = 0; i < catDivs.length; i++) {
        catDivs[i].removeEventListener("mouseleave", () => {
          subCatDivs[i].style = "display: none";
        });
      }
      for (let i = 0; i < subCatDivs.length; i++) {
        subCatDivs[i].removeEventListener("mouseover", () => {
          subCatDivs[i].style = "display: flex";
        });
        subCatDivs[i].addEventListener("mouseleave", () => {
          subCatDivs[i].style = "display: none";
        });
      }
    };
  }, []);

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
      {categoriesSubCategoriesData?.map((cat) => (
        <div
          className={[css.subCat, `subCat-${cat.id}`, "subCatDiv"].join(" ")}
          key={`subcatCat-${cat.id}`}
          id="{`subCat-${cat.id}`}"
        >
          {cat.sub?.map((item) => (
            <div
              key={`subcat-${item.id}`}
              id={`subcat-${item.id}`}
              className={css.subCategory}
            >
              {item.ttl}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default VerticalCategoryMenuBar;
