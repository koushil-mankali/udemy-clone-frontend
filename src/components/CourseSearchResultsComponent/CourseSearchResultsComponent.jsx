import React from "react";

import FiltersComp from "../CourseComponents/FiltersComp/FiltersComp";

import css from "./CourseSearchResultsComponent.module.css";

const CourseSearchResultsComponent = () => {
  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.topBar}>Filters buttons</div>
        <div className={css.bdy}>
          <div className={css.leftBox}>
            <FiltersComp />
          </div>
          <div className={css.rightBox}>right Box</div>
        </div>
      </div>
    </div>
  );
};

export default CourseSearchResultsComponent;
