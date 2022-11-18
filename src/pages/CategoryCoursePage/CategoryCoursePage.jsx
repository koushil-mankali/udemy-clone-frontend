import BreadcrumbVerticalCategoryMenuBar from "../../components/LayoutComponents/BreadcrumbVerticalCategoryMenuBar/BreadcrumbVerticalCategoryMenuBar";
import Layout1 from "../Layout1/Layout1";

import css from "./CategoryCoursePage.module.css";

const CategoryCoursePage = () => {
  return (
    <Layout1>
      <div className={css.outerDiv}>
        <BreadcrumbVerticalCategoryMenuBar />
      </div>
    </Layout1>
  );
};

export default CategoryCoursePage;
