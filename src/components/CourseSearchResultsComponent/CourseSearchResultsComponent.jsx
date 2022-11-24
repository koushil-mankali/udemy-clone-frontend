import React from "react";

import FiltersComp from "../CourseComponents/FiltersComp/FiltersComp";
import MedVerticalCourseCard from "../Cards/MedVerticalCourseCard/MedVerticalCourseCard";

import css from "./CourseSearchResultsComponent.module.css";

import { courseDetData, filtersData } from "../../fakedata/fakedata.js";

const CourseSearchResultsComponent = () => {
  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.topBar}>Filters buttons</div>
        <div className={css.bdy}>
          <div className={css.leftBox}>
            {filtersData?.map((item) => (
              <div key={item.id}>
                <hr />
                <FiltersComp data={item} />
              </div>
            ))}
            <hr />
          </div>
          <div className={css.rightBox}>
            <MedVerticalCourseCard data={courseDetData} />
            <hr />
            <MedVerticalCourseCard data={courseDetData} />
            <hr />
            <MedVerticalCourseCard data={courseDetData} />
            <hr />
            <MedVerticalCourseCard data={courseDetData} />
            <hr />
            <MedVerticalCourseCard data={courseDetData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSearchResultsComponent;
