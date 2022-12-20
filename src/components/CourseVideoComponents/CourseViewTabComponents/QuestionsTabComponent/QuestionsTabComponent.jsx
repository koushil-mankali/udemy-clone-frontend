import { useState } from "react";
import InputUtil from "../../../../utils/FormUtils/InputUtil/InputUtil";
import SelectDropdownUtil from "../../../../utils/FormUtils/SelectDropdownUtil/SelectDropdownUtil";
import CommentBoxUtil from "../../../../utils/CommentBoxUtil/CommentBoxUtil";

import css from "./QuestionsTabComponent.module.css";

import searchIcon from "/icons/search.png";
import showcaseImg from "/images/showcase.jpg";

const QuestionsTabComponent = () => {
  const [state, setState] = useState("");
  const [filters, setFilers] = useState({
    lectures: {},
    recomended: {},
    filterQuestions: {},
  });

  const data = [{}];

  const sortByOptions1 = [
    {
      key: "All Lectures",
      value: "all lectures",
    },
    {
      key: "Current Lecture",
      value: "current lecture",
    },
  ];

  const sortByOptions2 = [
    {
      key: "Sort by Most Recent",
      value: "sort by most recent",
    },
    {
      key: "Sort by Most Upvoted",
      value: "sort by most upvoted",
    },
    {
      key: "Sort by Recomended",
      value: "sort by recomended",
    },
  ];

  const sortByOptions3 = [
    {
      key: "Questions I'm Following",
      value: "questions i'm following",
    },
    {
      key: "Questions I asked",
      value: "questions i asked",
    },
    {
      key: "Questions without Responses",
      value: "questions withour responses",
    },
  ];

  const cmtData = {
    cmmntId: 0,
    name: "koushil",
    img: showcaseImg,
    ttl: "This is awesome lecture",
    cnt: "This is awesome lecture This is awesome lecture This is awesome lecture This is awesome lecture This is awesome lecture This is awesome lecture This is awesome lecture This is awesome lectureThis is awesome lecture",
    upvotes: 3,
    comments: 2,
    lecture: 3,
    date: {
      y: 2000,
      m: 3,
      d: 29,
    },
  };

  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.filters}>
          <InputUtil
            type="text"
            state={state}
            onChange={(e) => setState(e.target?.value ?? "")}
            icon={searchIcon}
            iconPosition="right"
            placeholderTxt="Search course content"
          />
          <div className={css.filtersBox}>
            <SelectDropdownUtil
              id="filter1"
              filterType="lectures"
              defaultValue={sortByOptions1[0]}
              value={filters.lectures}
              setValue={setFilers}
              multipleOptions={false}
              options={sortByOptions1}
              selectBoxCss={{ height: "auto" }}
            />
            <SelectDropdownUtil
              id="filter2"
              filterType="recomended"
              defaultValue={sortByOptions2[0]}
              value={filters.recomended}
              setValue={setFilers}
              multipleOptions={false}
              options={sortByOptions2}
              selectBoxCss={{ height: "auto" }}
            />
            <SelectDropdownUtil
              id="filter3"
              filterType="filterQuestions"
              defaultValue={sortByOptions3[0]}
              value={filters.filterQuestions}
              setValue={setFilers}
              multipleOptions={false}
              options={sortByOptions3}
              selectBoxCss={{ height: "auto" }}
            />
          </div>
        </div>
        <div className={css.searchContent}>
          <div className={css.sTtl}>
            All questions in this course ({data.length})
          </div>
          <div className={css.comments}>
            <CommentBoxUtil data={cmtData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsTabComponent;
