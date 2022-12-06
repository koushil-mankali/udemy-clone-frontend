import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import css from "./CourseCardWithOptions.module.css";

import playIcon from "/icons/play-button.png";
import dotsIcon from "/icons/dots.png";

const CourseCardWithOptions = (props) => {
  const {
    path = "",
    img = "",
    id = 0,
    ttl = "",
    author = "",
    ratings = 0,
    courseCoveredPercent = 0,
  } = props.data;
  const optionsComps = props.options;
  const [menuBox, setMenuBox] = useState(false);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.id !== `cwo-${id}`) {
        return setMenuBox(false);
      }
    });

    return () => {
      window.removeEventListener("click", (e) => {
        if (e.target.id !== `cwo-${id}`) {
          return setMenuBox(false);
        }
      });
    };
  }, []);

  return (
    <Link to={path} className={css.outerDiv}>
      <div
        className={css.optionsBox}
        onClickCapture={(e) => e.preventDefault()}
      >
        <button
          id={`cwo-${id}`}
          type="button"
          className={css.menuBtn}
          onClick={() => setMenuBox((prev) => !prev)}
        >
          <img src={dotsIcon} className={css.menuIcon} id={`cwo-${id}`} />
          {menuBox ? (
            <div className={css.menuBox}>
              {optionsComps?.map((Option, id) => {
                return (
                  <div className={css.optionComp} key={id}>
                    {Option}
                  </div>
                );
              })}
            </div>
          ) : null}
        </button>
      </div>
      <div className={css.imgBox}>
        <img src={img} alt="course image" className={css.img} />
        <div className={css.hovImgBox}>
          <img src={playIcon} alt="play icon" className={css.hovImg} />
        </div>
      </div>
      <div className={css.bdy}>
        <div className={css.ttl}>{ttl}</div>
        <div className={css.author}>{author}</div>
        <progress value={76} max="100" className={css.progressBar} />
        <div className={css.footerBox}>
          <span className={css.txt}>{courseCoveredPercent}% complete</span>
          <span className={css.stars}>
            <span></span>
            <span>Leave a rating</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCardWithOptions;
