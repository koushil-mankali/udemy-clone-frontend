import { NavLink, Outlet } from "react-router-dom";

import css from "./ProfileSettingsComponent.module.css";

const ProfileSettingsComponent = () => {
  const jsonData = [
    {
      id: "tab-1",
      ttl: "Profile",
      slug: "basic",
    },
    {
      id: "tab-2",
      ttl: "Photo",
      slug: "photo",
    },
    {
      id: "tab-3",
      ttl: "Privacy Settings",
      slug: "privacy",
    },
  ];

  return (
    <div className={css.outerDiv}>
      <div className={css.ttl}>Profile & Settings</div>
      <div className={css.innerDiv}>
        <div className={css.tabs}>
          {jsonData?.map((item) => (
            <NavLink
              to={item.slug}
              className={({ isActive }) =>
                isActive ? [css.tab, css.tabActive].join(" ") : css.tab
              }
              key={item.id}
            >
              {item.ttl}
            </NavLink>
          ))}
        </div>
        <div className={css.bdy}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingsComponent;
