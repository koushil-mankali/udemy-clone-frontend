import React from "react";
import { Outlet, Link } from "react-router-dom";
import Layout1 from "../../Layout1/Layout1";

import css from "./MyCoursesPage.module.css";

const MyCoursesPage = () => {
  const tabs = [
    { name: "All Courses", link: "learning" },
    { name: "My List", link: "lists" },
    { name: "Wishlist", link: "wishlist" },
    { name: "Archived", link: "archived" },
    { name: "Learning tools", link: "learning-tools" },
  ];
  return (
    <Layout1>
      <div className={css.outerDiv}>
        <div className={css.topBar}>
          <div>My Learning</div>
          <div className={css.links}>
            {tabs?.map((item) => (
              <Link to={item.link}>{item.name}</Link>
            ))}
          </div>
        </div>
        <Outlet />
      </div>
    </Layout1>
  );
};

export default MyCoursesPage;
