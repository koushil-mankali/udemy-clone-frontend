import { Outlet } from "react-router-dom";

import css from "./CourseViewTabComponent.module.css";

const CourseViewTabComponent = () => {
  return (
    <div className={css.outerDiv}>
      <div className={css.tabs}></div>
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default CourseViewTabComponent;
