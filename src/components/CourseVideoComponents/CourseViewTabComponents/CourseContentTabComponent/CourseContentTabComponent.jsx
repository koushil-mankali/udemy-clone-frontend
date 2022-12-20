import DetailDPComponent from "../../DetailDPComponent/DetailDPComponent";
import CourseContentComponent from "../../CourseContentComponent/CourseContentComponent";

import { courseData } from "../../../../fakedata/fakedata";

import css from "./CourseContentTabComponent.module.css";

const CourseContentTabComponent = () => {
  return (
    <div className={css.outerDiv}>
      <DetailDPComponent
        title="Take a Udemy Assessment to check your skills"
        desc="Made by Udemy, this generalized assessment is a great way to check in on your skills."
        btnTxt="Launch Assessment"
        extraCss={{
          backgroundColor: "var(--white)",
          border: "1px solid var(--gray86)",
        }}
      />
      <div className={css.contentBdy}>
        <CourseContentComponent data={courseData} />
      </div>
    </div>
  );
};

export default CourseContentTabComponent;
