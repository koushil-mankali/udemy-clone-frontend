import React from "react";

import TextWithButtonCard from "../../../components/InstructorComponents/Cards/TextWithButtonCard/TextWithButtonCard";

const InstructorCoursesDisplay = () => {
  return (
    <div>
      <TextWithButtonCard
        txt="Jump Into Course Creation"
        btnTxt="Create your Course"
        btnLink="/courses/create/1"
      />
    </div>
  );
};

export default InstructorCoursesDisplay;
