import { useState } from "react";

import FiltersComp from "../CourseComponents/FiltersComp/FiltersComp";
import MedVerticalCourseCard from "../Cards/MedVerticalCourseCard/MedVerticalCourseCard";
import Button1 from "../../utils/Buttons/Button1/Button1";
import SelectBtnUtil from "../../utils/FormUtils/SelectBtnUtil/SelectBtnUtil";

import { courseDetData, filtersData } from "../../fakedata/fakedata.js";

import filterIcon from "/icons/filter.png";

import css from "./CourseSearchResultsComponent.module.css";

const CourseSearchResultsComponent = () => {
  const options = [
    { key: "Higest Rated", value: "higest rated" },
    { key: "Most Popular", value: "most popular" },
    { key: "Newest", value: "newest" },
  ];
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.topBar}>
          <div className={css.leftTopBar}>
            <Button1
              txt="Filters"
              img={filterIcon}
              onClick={() => setShowFilters((prev) => !prev)}
              extraCss={{
                padding: "1rem",
                display: "flex",
                justtifyContent: "center",
                alignItems: "center",
              }}
            />
            <SelectBtnUtil
              label="Sort by"
              options={options}
              extraCss={{ maxHeight: "55px" }}
            />
            <div className={css.clAllTxt}>Clear filters</div>
          </div>
          <div className={css.rightTopBar}>
            {new Intl.NumberFormat("en-IN", {
              maximumSignificantDigits: 3,
            }).format("10000")}{" "}
            results
          </div>
        </div>
        <div className={css.bdy} style={{ gap: !showFilters ? "2rem" : "0" }}>
          <div
            className={[css.leftBox, showFilters ? css.leftBoxW : null].join(
              " "
            )}
          >
            {filtersData?.map((item, id) => (
              <div key={item.id}>
                <hr />
                <FiltersComp data={item} dropdownState={[0, 1].includes(id)} />
              </div>
            ))}
            <hr />
          </div>
          <div
            className={[css.rightBox, showFilters ? css.rightBoxW : null].join(
              " "
            )}
          >
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
