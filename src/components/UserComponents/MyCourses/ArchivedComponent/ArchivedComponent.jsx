import CourseCardWithOptions from "../../../Cards/CourseCardWithOptions/CourseCardWithOptions";

import { courseDataWithOptions } from "../../../../fakedata/fakedata";

import css from "./ArchivedComponent.module.css";

const ArchivedComponent = (props) => {
  const optionsComps = [
    <div className={css.txtBox}>
      <span className={css.iconBox}>
        <img src="" alt="icon" className={css.icon} />
      </span>
      <span className={css.txt}>Unarchive</span>
    </div>,
  ];
  return (
    <div className={css.outerDiv}>
      <div className={css.bdy}>
        {courseDataWithOptions.map((item) => {
          return (
            <CourseCardWithOptions
              key={item.id}
              data={item}
              options={optionsComps}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ArchivedComponent;
