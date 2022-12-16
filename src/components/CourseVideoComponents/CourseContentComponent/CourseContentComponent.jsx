import { useState } from "react";
import { Link } from "react-router-dom";

import closeIcon from "/icons/close.png";
import downArrowIcon from "/icons/down-arrow.svg";

import css from "./CourseContentComponent.module.css";

const CourseContentComponent = (props) => {
  const { title = "", data = [] } = props;
  const [toggleBox, setToggleBox] = useState({});

  return (
    <div className={css.outterDiv}>
      <div className={css.innerDiv}>
        <div className={css.titleBox}>
          <span className={css.ttl}>{title}</span>
          <span className={css.imgBox}>
            <img src={closeIcon} alt="close icon" className={css.closeIcon} />
          </span>
        </div>
        <div className={css.bdy}>
          {data?.map((item, id) => {
            return (
              <div
                className={css.tab}
                key={`tab-${id}`}
                onClick={() =>
                  setToggleBox((p) => {
                    return { ...p, [id]: !p[id] };
                  })
                }
              >
                <div className={css.tabTitleBox}>
                  <div className={css.tabTitleLeft}>
                    <div className={css.tabTtl}>{`Section ${id + 1}: ${
                      item.ttl
                    }`}</div>
                    <div className={css.tabDesc}>
                      <span>10/10</span>
                      <span></span>
                      <span>40 min</span>
                    </div>
                  </div>
                  <div className={css.tabTitleRight}>
                    <img
                      src={downArrowIcon}
                      alt="down arrow"
                      className={[
                        css.icon,
                        toggleBox[id] ? css.iconReverse : null,
                      ].join(" ")}
                    />
                  </div>
                </div>
                {toggleBox[id] ? (
                  <div className={css.tabBdy}>
                    {item.list?.map((subItem) => {
                      return (
                        <div className={css.descBdy}>
                          <div className={css.descBdyLeft}></div>
                          <div className={css.descBdyRight}>
                            <div className={css.sbTtl}>{subItem.ttl}</div>
                            <div className={css.sbBox}>
                              <span className={css.subDur}>{subItem.dur}</span>
                              <span className={css.subDrp}>
                                <div className={css.subDrpBox}>
                                  <img alt="icon" className={css.subIcon} />
                                  <div>Resources</div>
                                  <img
                                    icon="dropdown icon"
                                    className={css.subIcon}
                                  />
                                </div>
                                <div className={css.subDrpItemsBox}>
                                  {subItem?.resources?.map((resItem) => {
                                    return (
                                      <Link
                                        download={resItem.downloadable}
                                        to={resItem.link}
                                        className={css.resItem}
                                      >
                                        <img
                                          src={resItem.icon}
                                          alt="icon"
                                          className={css.resItemIcon}
                                        />
                                        <span className={css.resItemTxt}>
                                          {resItem.text}
                                        </span>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseContentComponent;
