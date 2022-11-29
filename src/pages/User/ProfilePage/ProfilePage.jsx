import { Outlet } from "react-router-dom";

import css from "./ProfilePage.module.css";

import InstructorLayout from "../../InstructorLayout/InstructorLayout";

const ProfilePage = () => {
  return (
    <InstructorLayout>
      <div className={css.outerDiv}>
        <Outlet />
      </div>
    </InstructorLayout>
  );
};

export default ProfilePage;
