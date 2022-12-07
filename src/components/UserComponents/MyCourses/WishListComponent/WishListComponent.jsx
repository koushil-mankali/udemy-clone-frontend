import CourseCard from "../../../Cards/CourseCard/CourseCard";
import InputUtil from "../../../../utils/FormUtils/InputUtil/InputUtil";

import { coursesData } from "../../../../fakedata/fakedata";
import searchIcon from "/icons/search.png";

import css from "./WishListComponent.module.css";

const WishListComponent = () => {
  return (
    <div className={css.outerDiv}>
      <div className={css.topBAR}>
        <div className={css.searchBar}>
          <InputUtil
            icon={searchIcon}
            iconPosition="right"
            placeholderTxt="Search my courses"
            extraCss={{ padding: "0.3rem", fontSize: "1rem" }}
          />
        </div>
      </div>
      <div className={css.courses}>
        {coursesData?.map((item, id) => {
          return (
            <CourseCard key={id} data={item} extraCss={{ margin: "1rem 0" }} />
          );
        })}
      </div>
    </div>
  );
};

export default WishListComponent;
