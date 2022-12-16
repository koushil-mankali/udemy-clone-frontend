import { useState, useEffect } from "react";

import VideoPlayer from "../../components/CourseVideoComponents/VideoPlayer/VideoPlayer";
import DetailDPComponent from "../../components/CourseVideoComponents/DetailDPComponent/DetailDPComponent";
import CourseContentComponent from "../../components/CourseVideoComponents/CourseContentComponent/CourseContentComponent";

import CourseVideoNavbar from "../../components/LayoutComponents/CourseVideoNavbar/CourseVideoNavbar";
import Footer from "../../components/LayoutComponents/Footer/Footer";

import css from "./CourseViewPage.module.css";

import { courseData } from "../../fakedata/fakedata";

const CourseViewPage = () => {
  const [sidebarH, setSidebarH] = useState(60);
  const data = {
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      var scrollTop = document.documentElement.scrollTop;
      var docHeight = window.innerHeight;
      var winHeight = window.outerHeight;
      var scrollPercent = scrollTop / (docHeight - winHeight);
      var scrollPercentRounded = Math.abs(Math.round(scrollPercent * 100));
      console.log(+scrollPercentRounded);
      if (scrollPercentRounded >= 50) {
        setSidebarH(0);
      } else {
        setSidebarH(60 - scrollPercentRounded - 1);
      }
    });
  }, []);

  return (
    <div className={css.outterDiv}>
      <CourseVideoNavbar data={data} />
      <div className={css.bdy}>
        <div className={css.left}>
          <div className={css.content}>
            <VideoPlayer />
          </div>
          <div style={{ height: "500px" }}>content</div>
          <div className={css.footer}>
            <Footer />
          </div>
        </div>
        <div className={css.right} style={{ top: sidebarH + "px" }}>
          <DetailDPComponent
            title="Take a Udemy Assessment to check your skills"
            desc="Made by Udemy, this generalized assessment is a great way to check in on your skills."
            btnTxt="Launch Assessment"
          />
          <CourseContentComponent title="Course Content" data={courseData} />
        </div>
      </div>
    </div>
  );
};

export default CourseViewPage;
