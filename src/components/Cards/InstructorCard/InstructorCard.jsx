import css from "./InstructorCard.module.css";

const InstructorCard = (props) => {
  const {
    name = "",
    img = "",
    majorLang = [""],
    rating = 0,
    students = 0,
    courses = 0,
  } = props?.data;
  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.imgBox}>
          <img className={css.img} src={img} alt="profile pic" />
        </div>
        <div className={css.det}>
          <div className={css.name}>{name}</div>
          <div className={css.langs}>{majorLang?.join(", ")}</div>
          <div className={css.rats}>
            {rating} <span>Instructor Rating</span>
          </div>
          <div className={css.txt}>
            {new Intl.NumberFormat("en-IN", {
              maximumSignificantDigits: 3,
            }).format(students)}
            <span>students</span>
          </div>
          <div className={css.txt}>
            {new Intl.NumberFormat("en-IN", {
              maximumSignificantDigits: 3,
            }).format(courses)}
            <span>courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
