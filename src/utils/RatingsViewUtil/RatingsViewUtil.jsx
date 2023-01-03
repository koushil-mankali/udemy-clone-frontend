import starIcon from "/icons/star.png";
import starGOIcon from "/icons/star-g.png";

import ProgressBar from "../../utils/ProgressBar/ProgressBar";

import css from "./RatingsViewUtil.module.css";

const RatingsViewUtil = (props) => {
  const data = props?.data;

  let content = [];

  for (let i = 0; i <= 4; i++) {
    content.push(
      <div className={css.ratingBar} key={i}>
        <div className={css.progressBars}>
          <ProgressBar value={data[`${5 - i}star`]} />
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
            <span className={css.rating}>{data[`${5 - i}star`]}%</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={css.outerDiv}>
      <div>rating</div>
      <div className={css.bar}>{content}</div>
    </div>
  );
};

export default RatingsViewUtil;
