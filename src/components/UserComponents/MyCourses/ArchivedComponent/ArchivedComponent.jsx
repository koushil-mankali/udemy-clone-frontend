import CourseCardWithOptions from "../../../Cards/CourseCardWithOptions/CourseCardWithOptions";
import { courseDataWithOptions } from "../../../../fakedata/fakedata";

import folderIcon from "/icons/folder.png";

import css from "./ArchivedComponent.module.css";

const ArchivedComponent = () => {
  const optionsComps = [
    <div>
      <div className={css.txtBox}>
        <span className={css.iconBox}>
          <img src={folderIcon} alt="icon" className={css.icon} />
        </span>
        <span className={css.txt}>Unarchive</span>
      </div>
      <div className={css.txtBox}>
        <span className={css.iconBox}>
          <img src={folderIcon} alt="icon" className={css.icon} />
        </span>
        <span className={css.txt}>Unarchive</span>
      </div>
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
              isOptions={true}
              options={optionsComps}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ArchivedComponent;
