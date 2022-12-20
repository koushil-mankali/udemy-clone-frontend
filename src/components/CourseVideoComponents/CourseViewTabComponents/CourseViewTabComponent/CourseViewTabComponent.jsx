import { NavLink, Outlet } from "react-router-dom";

import css from "./CourseViewTabComponent.module.css";

import searchIcon from "/icons/search.png";

const CourseViewTabComponent = () => {
  const tabs = [
    {
      id: 1,
      name: null,
      icon: searchIcon,
      link: "search",
    },
    {
      id: 2,
      name: "OverView",
      icon: null,
      link: "overview",
    },
    {
      id: 3,
      name: "Q&A",
      icon: null,
      link: "questions",
    },
    {
      id: 4,
      name: "Notes",
      icon: null,
      link: "notes",
    },
    {
      id: 5,
      name: "Announcements",
      icon: null,
      link: "announcements",
    },
    {
      id: 6,
      name: "Reviews",
      icon: null,
      link: "reviews",
    },
  ];

  return (
    <div className={css.outerDiv}>
      <div className={css.tabs}>
        {tabs?.map((item) => {
          return (
            <NavLink
              key={`tab-${item.id}`}
              to={item.link ?? ""}
              className={(e) => {
                if (e.isActive) {
                  return [css.tab, css.activeTab].join(" ");
                }
                return css.tab;
              }}
            >
              {item?.name ? <div>{item.name}</div> : null}
              {item?.icon ? (
                <img src={item.icon} alt="icon" className={css.icon} />
              ) : null}
            </NavLink>
          );
        })}
      </div>
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default CourseViewTabComponent;
