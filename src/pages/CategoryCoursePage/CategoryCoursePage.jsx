import { useParams, useMatch } from "react-router-dom";

import Layout1 from "../Layout1/Layout1";
import BreadcrumbVerticalCategoryMenuBar from "../../components/LayoutComponents/BreadcrumbVerticalCategoryMenuBar/BreadcrumbVerticalCategoryMenuBar";
import BigVerticalCourseCard from "../../components/Cards/BigVerticalCourseCard/BigVerticalCourseCard";
import CarouselLayout from "../../components/CarouselComponents/CarouselLayout/CarouselLayout";
import TabbedCourseCarouselComp from "../../components/CarouselComponents/TabbedCourseCarouselComp/TabbedCourseCarouselComp";
import InstructorCard from "../../components/Cards/InstructorCard/InstructorCard";
import CourseSearchResultsComponent from "../../components/CourseSearchResultsComponent/CourseSearchResultsComponent";

import {
  BigVerticalCourseCardData,
  popularInstructorsData,
} from "../../fakedata/fakedata";

import css from "./CategoryCoursePage.module.css";

const CategoryCoursePage = () => {
  const match = useMatch("/courses/search");
  const { catId } = useParams();

  return (
    <Layout1>
      <div className={css.outerDiv}>
        <BreadcrumbVerticalCategoryMenuBar />
      </div>
      <div className={css.bdy}>
        {!match ? (
          <>
            <h2 className={css.pageTtl}>{catId || "Category Page"} Courses</h2>
            <div className={css.box}>
              <TabbedCourseCarouselComp ttl="Courses to get you started" />
            </div>
            <div className={css.box}>
              <h2 className={css.ttl}>Featured Courses</h2>
              <CarouselLayout autoplay={true}>
                {BigVerticalCourseCardData?.map((item) => {
                  return <BigVerticalCourseCard data={item} key={item.id} />;
                })}
              </CarouselLayout>
            </div>
            <div className={css.box}>
              <h2 className={css.ttl}>Popular Instructors</h2>
              <CarouselLayout slidesToShow={4} slidesToScroll={3}>
                {popularInstructorsData?.map((item) => {
                  return <InstructorCard data={item} key={item.id} />;
                })}
              </CarouselLayout>
            </div>
          </>
        ) : null}
        <div className={css.box}>
          <CourseSearchResultsComponent />
        </div>
      </div>
    </Layout1>
  );
};

export default CategoryCoursePage;
