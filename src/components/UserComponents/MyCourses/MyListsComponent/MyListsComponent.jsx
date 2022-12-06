import { Link } from "react-router-dom";

import PlayListComponent from "../../PlayListComponent/PlayListComponent";
import CourseCardWithOptions from "../../../Cards/CourseCardWithOptions/CourseCardWithOptions";

import plusIcon from "/icons/plus.png";
import minusIcon from "/icons/minus.png";
import { courseDataWithOptions } from "../../../../fakedata/fakedata";

import css from "./MyListsComponent.module.css";

const MyListsComponent = () => {
  const optionsData = [
    <div className={css.opt}>
      <Link tp="/" className={css.txtBox}>
        <span className={css.iconBox}>
          <img src={plusIcon} alt="icon" className={css.icon} />
        </span>
        <span className={css.txt}>Save course to list</span>
      </Link>
      <Link tp="/" className={css.txtBox}>
        <span className={css.iconBox}>
          <img src={minusIcon} alt="icon" className={css.icon} />
        </span>
        <span className={css.txt}>Remove course from this list</span>
      </Link>
    </div>,
  ];

  const elems = courseDataWithOptions?.map((item) => {
    return (
      <CourseCardWithOptions
        key={item.id}
        data={item}
        isOptions={true}
        options={optionsData}
      />
    );
  });

  const getMoreDataHandler = () => {
    console.log("Getting more data");
  };

  return (
    <div className={css.outerDiv}>
      <PlayListComponent
        title="Dynamics"
        desc="Cloud + DevOps Tools"
        seeMore={false}
        elements={elems}
      />
      <PlayListComponent
        title="NCloud"
        desc="Cloud + DevOps Tools"
        seeMore={true}
        getMoreDataHandler={getMoreDataHandler}
        elements={elems.slice(0, 3)}
      />
    </div>
  );
};

export default MyListsComponent;
