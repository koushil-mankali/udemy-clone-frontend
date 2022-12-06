import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Layout1 from "../../Layout1/Layout1";

import css from "./MyCoursesPage.module.css";

const MyCoursesPage = () => {
  const tabs = [
    { name: "All Courses", link: "learning" },
    { name: "My Lists", link: "lists" },
    { name: "Wishlist", link: "wishlist" },
    { name: "Archived", link: "archived" },
  ];
  return (
    <Layout1>
      <div className={css.outerDiv}>
        <div className={css.topBar}>
          <div className={css.topBarTtl}>My Learning</div>
        </div>
        <div className={css.menuBar}>
          <div className={css.links}>
            {tabs?.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                className={({ isActive }) =>
                  isActive ? [css.link, css.linkActive].join(" ") : css.link
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className={css.outletBdy}>
          <Outlet />
        </div>
      </div>
    </Layout1>
  );
};

export default MyCoursesPage;
