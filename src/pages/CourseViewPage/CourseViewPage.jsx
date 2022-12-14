import CourseVideoNavbar from "../../components/LayoutComponents/CourseVideoNavbar/CourseVideoNavbar";
import Footer from "../../components/LayoutComponents/Footer/Footer";

import css from "./CourseViewPage.module.css";

const CourseViewPage = () => {
  return (
    <div className={css.outterDiv}>
      <CourseVideoNavbar />
      <div className={css.bdy}>
        <div className={css.left}>
          <div className={css.content}></div>
          <div className={css.footer}>
            <Footer />
          </div>
        </div>
        <div className={css.right}>ddd</div>
      </div>
    </div>
  );
};

export default CourseViewPage;
