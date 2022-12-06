import { useState } from "react";

import InputUtil from "../../../../utils/FormUtils/InputUtil/InputUtil";
import SelectDropdownUtil from "../../../../utils/FormUtils/SelectDropdownUtil/SelectDropdownUtil";

import searchIcon from "/icons/search.png";

import css from "./AllCoursesComponent.module.css";
import { useEffect } from "react";

const AllCoursesComponent = () => {
  const [filters, setFilers] = useState({
    sortBy: {},
    filterByCategory: {},
    filterByState: {},
    filterByInstructor: {},
  });

  const [resetBtn, setRestBtn] = useState(false);

  const sortByOptions = [
    {
      key: "Recently Accessed",
      value: "recently accessed",
    },
    {
      key: "Recently Enrolled",
      value: "recently enrolled",
    },
    {
      key: "Title: A-to-Z",
      value: "a-z",
    },
    {
      key: "Title: Z-to-A",
      value: "z-a",
    },
  ];

  const filterByCategoryOptions = [
    [
      {
        key: "Favourites",
        value: "favorites",
      },
    ],
    [
      {
        key: "All Categories",
        value: "all categories",
      },
      {
        key: "Development",
        value: "development",
      },
      {
        key: "IT & Software",
        value: "it software",
      },
      {
        key: "Business",
        value: "business",
      },
      {
        key: "Marketing",
        value: "marketing",
      },
    ],
    [
      {
        key: "Archived",
        value: "archived",
      },
    ],
  ];

  const filterByStateOptions = [
    {
      key: "Completed",
      value: "completed",
    },
    {
      key: "In Progress",
      value: "in progress",
    },
    {
      key: "Not Started",
      value: "not started",
    },
  ];

  const filterByInstructorOptions = [
    {
      key: "Aaron Wheeler",
      value: "aaron wheeler",
    },
    {
      key: "Koushil Mankali",
      value: "koushil",
    },
  ];

  useEffect(() => {
    if (
      Object.keys(filters.sortBy).length ||
      Object.keys(filters.filterByCategory).length ||
      Object.keys(filters.filterByState).length ||
      Object.keys(filters.filterByInstructor).length
    ) {
      return setRestBtn(true);
    }
    setRestBtn(false);
  }, [filters]);

  const resetFiltersHandler = () => {
    setFilers({
      sortBy: {},
      filterByCategory: {},
      filterByState: {},
      filterByInstructor: {},
    });
  };

  return (
    <div className={css.outerDiv}>
      <div className={css.topBar}>
        <div className={css.filters}>
          <SelectDropdownUtil
            id="filter1"
            label="Sort by"
            filterType="sortBy"
            defaultValue={sortByOptions[0]}
            value={filters.sortBy}
            setValue={setFilers}
            multipleOptions={false}
            options={sortByOptions}
          />
          <SelectDropdownUtil
            id="filter2"
            label="Filter by"
            filterType="filterByCategory"
            defaultValue={filterByCategoryOptions[0][0]}
            value={filters.filterByCategory}
            setValue={setFilers}
            multipleOptions={true}
            options={filterByCategoryOptions}
          />
          <SelectDropdownUtil
            id="filter3"
            filterType="filterByState"
            defaultValue={filterByStateOptions[0]}
            value={filters.filterByState}
            setValue={setFilers}
            multipleOptions={false}
            options={filterByStateOptions}
          />
          <SelectDropdownUtil
            id="filter4"
            filterType="filterByInstructor"
            defaultValue={filterByInstructorOptions[0]}
            value={filters.filterByInstructor}
            setValue={setFilers}
            multipleOptions={false}
            options={filterByInstructorOptions}
          />
          <div
            className={[css.rstBtn, resetBtn ? css.activeRstBtn : ""].join(" ")}
            onClick={resetFiltersHandler}
          >
            Reset
          </div>
        </div>

        <div className={css.searchBar}>
          <InputUtil
            icon={searchIcon}
            iconPosition="right"
            placeholderTxt="Search my courses"
            extraCss={{ padding: "0.3rem", fontSize: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AllCoursesComponent;
