import React from "react";

import CourseCard from "../../components/Cards/CourseCard/CourseCard";

const Test = () => {
  return (
    <>
      <h1>Test Page</h1>
      <hr />
      <div style={{ display: "flex" }}>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </>
  );
};

export default Test;
