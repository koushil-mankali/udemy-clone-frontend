import { useState } from "react";
import { createPortal } from "react-dom";

import Button1 from "../../../utils/Buttons/Button1/Button1";

import css from "./CourseRatingsCard.module.css";

import outLineStar from "/icons/star-g.png";
import filledStar from "/icons/star.png";
import closeIcon from "/icons/close.png";

const CourseRatingsCard = (props) => {
  const { ttl = "", closeModal = () => {} } = props;

  const [selectedRatingNumber, setSelectedRatingNumber] = useState(0);
  const [hoverStarNum, setHoverStarNum] = useState(0);
  const [selectedRating, setSelectedRating] = useState("Select Rating");

  const ratings = [
    "Select Rating",
    "One Star",
    "Two Star",
    "Three Star",
    "Four Star",
    "Five Star",
  ];

  const mouseOverHandler = (currentStarNum) => {
    if (selectedRatingNumber <= 0) {
      setSelectedRating(ratings[currentStarNum]);
    }
    setHoverStarNum(currentStarNum);
  };

  const mouseLeaveHandler = () => {
    if (selectedRatingNumber <= 0) {
      setSelectedRating(ratings[0]);
    }
    setHoverStarNum(0);
  };

  const clickHandler = (currentStarNum) => {
    setSelectedRatingNumber(currentStarNum);
    setSelectedRating(ratings[currentStarNum]);
  };

  const submitHandler = () => {
    console.log("selectedRatingNumber", ratings[selectedRatingNumber]);
    closeModal();
  };

  return createPortal(
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.box1}>
          <div className={css.ttl}>{ttl}</div>
          <img src={closeIcon} onClick={closeModal} className={css.crossIcon} />
        </div>
        <div className={css.box2}>{selectedRating}</div>
        <div className={css.box3}>
          <img
            src={
              selectedRatingNumber >= 1 || hoverStarNum > 0
                ? filledStar
                : outLineStar
            }
            alt="star icon"
            onClick={() => clickHandler(1)}
            className={css.icon}
            onMouseOver={() => mouseOverHandler(1)}
            onMouseLeave={mouseLeaveHandler}
          />
          <img
            src={
              selectedRatingNumber >= 2 || hoverStarNum > 1
                ? filledStar
                : outLineStar
            }
            alt="star icon"
            onClick={() => clickHandler(2)}
            className={css.icon}
            onMouseOver={() => mouseOverHandler(2)}
            onMouseLeave={mouseLeaveHandler}
          />
          <img
            src={
              selectedRatingNumber >= 3 || hoverStarNum > 2
                ? filledStar
                : outLineStar
            }
            alt="star icon"
            onClick={() => clickHandler(3)}
            className={css.icon}
            onMouseOver={() => mouseOverHandler(3)}
            onMouseLeave={mouseLeaveHandler}
          />
          <img
            src={
              selectedRatingNumber >= 4 || hoverStarNum > 3
                ? filledStar
                : outLineStar
            }
            alt="star icon"
            onClick={() => clickHandler(4)}
            className={css.icon}
            onMouseOver={() => mouseOverHandler(4)}
            onMouseLeave={mouseLeaveHandler}
          />
          <img
            src={
              selectedRatingNumber >= 5 || hoverStarNum > 4
                ? filledStar
                : outLineStar
            }
            alt="star icon"
            onClick={() => clickHandler(5)}
            className={css.icon}
            onMouseOver={() => mouseOverHandler(5)}
            onMouseLeave={mouseLeaveHandler}
          />
        </div>
        <div className={css.box4}>
          <Button1
            onClick={submitHandler}
            txt="Save and continue"
            bck="var(--gray)"
            hovBck="var(--light-gray2)"
            color="var(--white)"
          />
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default CourseRatingsCard;
