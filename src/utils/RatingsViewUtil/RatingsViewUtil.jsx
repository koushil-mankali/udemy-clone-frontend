import starIcon from "/icons/star.png";
import starGOIcon from "/icons/star-g.png";

import ProgressBar from "../../utils/ProgressBar/ProgressBar";

import css from "./RatingsViewUtil.module.css";

const RatingsViewUtil = (props) => {
  const data = props?.data;

  let content = [];

  const totalRatingCalc =
    (1 * (data["1star"] || 0) +
      2 * (data["2star"] || 0) +
      3 * (data["3star"] || 0) +
      4 * (data["4star"] || 0) +
      5 * (data["5star"] || 0)) /
    ((data["1star"] || 0) +
      (data["2star"] || 0) +
      (data["3star"] || 0) +
      (data["4star"] || 0) +
      (data["5star"] || 0));

  for (let i = 0; i <= 4; i++) {
    content.push(
      <div className={css.ratingBar} key={i}>
        <div className={css.progressBars}>
          <ProgressBar value={data[`${5 - i}star`] || 0} />
        </div>
        <div className={css.starsBox}>
          <div className={css.starsItem}>
            <span className={css.stars}>
              {Array.from(new Array(5 - i), (_, i) => (
                <img
                  src={starIcon}
                  key={`star-${i}`}
                  alt="star"
                  className={css.starIcon}
                />
              ))}
              {Array.from(new Array(i), (_, i) => (
                <img
                  src={starGOIcon}
                  key={`star-${i}`}
                  alt="star"
                  className={css.starIcon}
                />
              ))}
            </span>
            <span className={css.rating}>{data[`${5 - i}star`] || 0}%</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={css.outerDiv}>
      <div className={css.ratingBox}>
        <div className={css.ratingNum}>{totalRatingCalc}</div>
        <div className={css.rStars}>
          {Array.from(new Array(Math.floor(totalRatingCalc)), (_, i) => (
            <img
              src={starIcon}
              key={`star-${i}`}
              alt="star"
              className={css.starIcon}
            />
          ))}
          {Array.from(new Array(5 - Math.floor(totalRatingCalc)), (_, i) => (
            <img
              src={starGOIcon}
              key={`star-${i}`}
              alt="star"
              className={css.starIcon}
            />
          ))}
        </div>
        <div className={css.ratingTxt}>Course Rating</div>
      </div>
      <div className={css.bar}>{content}</div>
    </div>
  );
};

export default RatingsViewUtil;
