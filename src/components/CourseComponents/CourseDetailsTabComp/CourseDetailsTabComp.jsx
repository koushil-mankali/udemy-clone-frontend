import { useState } from "react";

import css from "./CourseDetailsTabComp.module.css";

import Button2 from "../../../utils/Buttons/Button2/Button2";

const CourseDetailsTabComp = (props) => {
  const [btnTxtState, setBtnTxtState] = useState("Expand all sections");
  const [state, setState] = useState({
    sections: 2,
    lectures: 2,
    length: "14h 23m",
  });

  let tabHandler = () => {
    let tags = document.getElementsByTagName("details");
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].open) {
        setBtnTxtState("Expand all sections");
        tags[i].open = false;
      } else {
        setBtnTxtState("Collapse all sections");
        tags[i].open = true;
      }
    }
  };

  const courseData = props.courseData;
  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.crseDet}>
          <div className={css.crsDetLeft}>
            <div>{state.sections} sections</div>
            <div>{state.lectures} lectures</div>
            <div>{state.length} total length</div>
          </div>
          <Button2
            onClick={tabHandler}
            txt={btnTxtState}
            hovBck="transparent"
            color="var(--purple-dark)"
            extraCss={{ fontSize: "0.9rem", margin: "0", padding: "0.5rem 0" }}
          />
        </div>
        {courseData?.map((item, id) => {
          return (
            <details key={id}>
              <summary>
                <span className={css.summaryDiv}>
                  <span>{item.ttl}</span>
                  <span className={css.summDet}>
                    <span>{item.lects} lectures</span>
                    <span>{item.dur}</span>
                  </span>
                </span>
              </summary>
              {item.list?.map((list, id) => {
                return <p key={id}>{list.ttl}</p>;
              })}
            </details>
          );
        })}
      </div>
    </div>
  );
};

export default CourseDetailsTabComp;
