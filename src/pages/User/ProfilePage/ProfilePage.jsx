import React from "react";

import css from "./ProfilePage.module.css";

import InstructorLayout from "../../InstructorLayout/InstructorLayout";

const ProfilePage = () => {
  return (
    <InstructorLayout>
      <div className={css.outerDiv}>
        <h1>hello</h1>
      </div>
    </InstructorLayout>
  );
};

export default ProfilePage;
