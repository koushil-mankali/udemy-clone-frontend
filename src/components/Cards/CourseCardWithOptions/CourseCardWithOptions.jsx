import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PlanModalUtil from "../../../utils/Modals/PlanModalUtil/PlanModalUtil";

import css from "./CourseCardWithOptions.module.css";

import playIcon from "/icons/play-button.png";
import dotsIcon from "/icons/dots.png";

const CourseCardWithOptions = (props) => {
  const { isOptions = false, options, data } = props;
  const {
    path = "",
    img = "",
    id = 0,
    ttl = "",
    author = "",
    ratings = 0,
    courseCoveredPercent = 0,
  } = data;
  const [menuBox, setMenuBox] = useState(false);
  const [modal, setModal] = useState(false);

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

  let stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40px"
        height="40px"
        viewBox="0 0 32 32"
        className={css.star}
      >
        <defs>
          <linearGradient id="grad">
            <stop offset="50%" stop-color="gold" />
            <stop offset="50%" stop-color="white" />
          </linearGradient>
        </defs>
        <path
          fill="url(#grad)"
          d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
l11.547-1.2L16.026,0.6L20.388,10.918z"
          stroke-width="3"
          stroke="gold"
        />
      </svg>
    );
  }

  const content = (
    <>
      <h3 className={css.mHeader}>How would you rate this course?</h3>
      <p className={css.mtxt}>Select Rating</p>
      <div className={css.stars}>{stars}</div>
    </>
  );

  const modalHandler = (e) => {
    e.preventDefault();
    setModal((prev) => !prev);
  };

  return (
    <>
      {modal ? <PlanModalUtil setModal={setModal} content={content} /> : null}
      <Link to={path} className={css.outerDiv}>
        {isOptions ? (
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
                  {options?.map((Option, id) => {
                    return (
                      <div className={css.optionComp} key={`option-${id}`}>
                        {Option}
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </button>
          </div>
        ) : null}
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
            <span className={css.starsRatings}>
              <span></span>
              <span onClick={modalHandler}>Leave a rating</span>
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CourseCardWithOptions;
