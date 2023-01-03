import { useState } from "react";

import css from "./ReviewsTabComponent.module.css";

import imgC from "/images/showcase.jpg";
import searchIcon from "/icons/search.png";

import CommentViewUtil from "../../../../utils/CommentViewUtil/CommentViewUtil";
import InputUtil from "../../../../utils/FormUtils/InputUtil/InputUtil";
import SelectDropdownUtil from "../../../../utils/FormUtils/SelectDropdownUtil/SelectDropdownUtil";

const ReviewsTabComponent = () => {
  const [filter, setFilter] = useState({
    searchFilter: "",
    drpFilter: {
      key: "All Ratings",
      value: "All Ratings",
    },
  });
  const comments = [
    {
      id: "c1",
      img: imgC,
      name: "koushil",
      rating: "1",
      date: "12-12-2022",
      comment: "This is a comment!",
      like: false,
    },
    {
      id: "c2",
      img: imgC,
      name: "nani",
      rating: "5",
      date: "02-02-2022",
      comment: "This is a comment too!",
      like: true,
    },
  ];

  const drpFilterOptions = [
    {
      key: "All Ratings",
      value: "All Ratings",
    },
    {
      key: "Five Stars",
      value: "Five Stars",
    },
  ];

  const filterHandler = (e) => {
    setFilter((p) => {
      return { ...p, drpFilter: e.target?.value };
    });
  };

  return (
    <div className={css.outerDiv}>
      <div className={css.reviewBox}>
        <div className={css.ttl}>Reviews</div>
        <div className={css.filters}>
          <span className={css.inptFilter}>
            <InputUtil
              state={filter.searchFilter}
              onChange={filterHandler}
              placeholderTxt="Search reviews"
              icon={searchIcon}
              iconPosition="right"
            />
          </span>
          <span className={css.drpFilter}>
            <SelectDropdownUtil
              id="drpFilter"
              label="Filter ratings"
              filterType="drpFilter"
              defaultValue={filter.drpFilter}
              value={filter.drpFilter}
              setValue={setFilter}
              options={drpFilterOptions}
            />
          </span>
        </div>
        {comments?.map((comment) => {
          return <CommentViewUtil key={comment.id} data={comment} />;
        })}
      </div>
    </div>
  );
};

export default ReviewsTabComponent;
