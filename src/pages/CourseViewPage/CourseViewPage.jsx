import VideoPlayer from "../../components/CourseVideoComponents/VideoPlayer/VideoPlayer";

import CourseVideoNavbar from "../../components/LayoutComponents/CourseVideoNavbar/CourseVideoNavbar";
import Footer from "../../components/LayoutComponents/Footer/Footer";

import css from "./CourseViewPage.module.css";

const CourseViewPage = () => {
  const data = {
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
  };

  return (
    <div className={css.outterDiv}>
      <CourseVideoNavbar data={data} />
      <div className={css.bdy}>
        <div className={css.left}>
          <div className={css.content}>
            <VideoPlayer />
          </div>
        </div>
        <div className={css.right}>ddd</div>
      </div>
      <div className={css.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default CourseViewPage;
