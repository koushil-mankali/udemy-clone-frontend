import Tag from "../../../utils/Tags/TAG1/TAG1";

import css from "./BigVerticalCourseCard.module.css";

const BigVerticalCourseCard = (props) => {
  const {
    id = 0,
    img = "",
    ttl = "",
    desc = "",
    author = "",
    lastUpdated = "11-02-2022",
    dur = 0,
    lectures = 0,
    level = "",
    rats = 0,
    rated = 0,
    tag = "",
    price = 0,
    oPrice = 0,
  } = props?.data;

  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.imgBox}>
          <img className={css.img} src={img} alt="course image" />
        </div>
        <div className={css.detBox}>
          <div className={css.leftDetBox}>
            <div className={css.ttl}>{ttl}</div>
            <div className={css.desc}>{desc}</div>
            <div className={css.author}>By {author}</div>
            <div className={css.det}>
              <span className={css.updated}>
                {/* Updated <div>{new Date(lastUpdated)}</div> */}
              </span>
              <span className={css.inDet}>
                <span>{dur} total hours</span>
                <span>{lectures} lectures</span>
                <span>{level}</span>
              </span>
            </div>
            <div className={css.rats}>
              <div className={css.rat}>{rats}</div>
              <div className={css.cnt}>({rated})</div>
              <Tag
                txt={tag}
                extraCss={{ backgroundColor: "var(--light-orangish)" }}
              />
            </div>
          </div>
          <div className={css.rightDetBox}>
            <div className={css.prc}>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(price)}
            </div>
            <div className={css.oPrc}>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(oPrice)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigVerticalCourseCard;
