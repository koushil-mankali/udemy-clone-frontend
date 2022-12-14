import { useState, useEffect } from "react";

import Button1 from "../../../utils/Buttons/Button1/Button1";
import Button2 from "../../../utils/Buttons/Button2/Button2";

import css from "./CourseDetailsTabComp.module.css";

import playIcon from "/icons/play-button.png";
import docIcon from "/icons/google-docs.png";
import queryIcon from "/icons/question-sign.png";

const CourseDetailsTabComp = (props) => {
  const courseData = props.courseData;
  const [stopId, setStopId] = useState(9);
  const [crseDataTab, setCrseDataTab] = useState({
    total: courseData.length,
    leftOver: courseData.length - 9,
  });

  const [btnTxtState, setBtnTxtState] = useState("Expand all sections");
  const [state, setState] = useState({
    sections: 2,
    lectures: 2,
    length: "14h 23m",
  });
  const [btnDisabled, setBtnDisabled] = useState(false);

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

  const imageTypeHandler = (list) => {
    if (list.type === "doc") {
      return docIcon;
    } else if (list.type === "query") {
      return queryIcon;
    } else {
      return playIcon;
    }
  };

  const showMoreHandler = () => {
    setStopId((prev) => prev + 9);
    setCrseDataTab((prev) => {
      return {
        ...prev,
        leftOver: prev.leftOver - 9,
      };
    });
  };

  useEffect(() => {
    if (stopId > 9) {
      if (crseDataTab.leftOver <= 0) {
        setBtnDisabled(true);
      }
    }
  }, [stopId, crseDataTab.leftOver]);

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
          if (id >= stopId) {
            return;
          }
          return (
            <details key={id} className={css.details}>
              <summary className={css.summary}>
                <span className={css.summaryDiv}>
                  <span className={css.crsTtl}>{item.ttl}</span>
                  <span className={css.summDet}>
                    <span>{item.lects} lectures</span>
                    <span>{item.dur}</span>
                  </span>
                </span>
              </summary>
              {item.list?.map((list, id) => {
                return (
                  <div className={css.detSumm} key={`detSum-${id}`}>
                    <div className={css.detSummLeft}>
                      <img
                        src={imageTypeHandler(list)}
                        alt="icon"
                        className={css.icon}
                      />
                    </div>
                    <div className={css.detSumCenter}>
                      <p
                        key={id}
                        className={
                          list.preview
                            ? [css.prvwBtn, css.crsTtl].join(" ")
                            : css.crsTt
                        }
                      >
                        {list.ttl}
                      </p>
                      <p className={list.preview ? css.prvwBtn : ""}>Preview</p>
                    </div>
                    <div className={css.detSummRight}>
                      <p className={css.time}>{list.dur}</p>
                    </div>
                  </div>
                );
              })}
            </details>
          );
        })}
        <Button1
          txt={`${crseDataTab.leftOver} more sections`}
          onClick={showMoreHandler}
          disableBtn={btnDisabled}
          extraCss={{ width: "100%", margin: "1rem 0", padding: "0.5rem" }}
        />
      </div>
    </div>
  );
};

export default CourseDetailsTabComp;
