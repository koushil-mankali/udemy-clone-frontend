import BreadcrumbVerticalCategoryMenuBar from "../../components/LayoutComponents/BreadcrumbVerticalCategoryMenuBar/BreadcrumbVerticalCategoryMenuBar";
import BigVerticalCourseCard from "../../components/Cards/BigVerticalCourseCard/BigVerticalCourseCard";
import Layout1 from "../Layout1/Layout1";
import CarouselLayout from "../../components/CarouselComponents/CarouselLayout/CarouselLayout";
import { BigVerticalCourseCardData } from "../../fakedata/fakedata";

import css from "./CategoryCoursePage.module.css";

const CategoryCoursePage = () => {
  return (
    <Layout1>
      <div className={css.outerDiv}>
        <BreadcrumbVerticalCategoryMenuBar />
      </div>
      <div className={css.bdy}>
        <h2 className={css.ttl}>Featured Courses</h2>
        <CarouselLayout autoplay={true}>
          {BigVerticalCourseCardData?.map((item) => {
            return <BigVerticalCourseCard data={item} key={item.id} />;
          })}
        </CarouselLayout>
      </div>
    </Layout1>
  );
};

export default CategoryCoursePage;
