import { useState } from "react";
import { useSearchParams, useParams, useMatch } from "react-router-dom";

import FiltersComp from "../CourseComponents/FiltersComp/FiltersComp";
import MedVerticalCourseCard from "../Cards/MedVerticalCourseCard/MedVerticalCourseCard";
import Button1 from "../../utils/Buttons/Button1/Button1";
import SelectBtnUtil from "../../utils/FormUtils/SelectBtnUtil/SelectBtnUtil";

import { courseDetData, filtersData } from "../../fakedata/fakedata.js";

import filterIcon from "/icons/filter.png";

import css from "./CourseSearchResultsComponent.module.css";

const CourseSearchResultsComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { catId } = useParams();
  const match = useMatch("/courses/search");
  const options = ["Higest Rated", "Most Popular", "Newest"];
  const [selectedOption, setSelectedOption] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const selectFunctionHandler = (value) => {
    console.log("selected option", value);
    setSelectedOption(value);
  };

  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.TtlBox}>
          {!match ? (
            <div className={css.ttl}>
              All <span>{catId}</span> courses
            </div>
          ) : (
            <div className={css.ttl}>
              <span>
                {new Intl.NumberFormat("en-IN", {
                  maximumSignificantDigits: 3,
                }).format("10000")}
              </span>
              <span>results for</span>
              <span>{searchParams.get("q") || null}</span>
            </div>
          )}
        </div>
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
              selectedOption={selectedOption}
              options={options}
              onChange={selectFunctionHandler}
              extraCss={{ maxHeight: "55px" }}
            />
            <div onClick={() => setSearchParams({})} className={css.clAllTxt}>
              Clear filters
            </div>
          </div>
          <div className={css.rightTopBar}>
            {new Intl.NumberFormat("en-IN", {
              maximumSignificantDigits: 3,
            }).format("10000")}
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
