import React from "react";

import cardImg from "/images/card.jpg";

import CourseCard from "../../components/Cards/CourseCard/CourseCard";

const Test = () => {
  const moreCourses = [
    {
      img: cardImg,
      ttl: "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53675 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹649Original price: ₹3,399",
      authDet: "Koushil Mankali, Nani",
      prc: 649,
      oldprc: 1338,
      stars: { a: 5, b: 1, c: 1, d: 1, e: 1 },
      noOfRats: 9,
    },
    {
      img: cardImg,
      ttl: "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53675 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹649Original price: ₹3,399",
      authDet: "Koushil Mankali, Nani",
      prc: 649,
      oldprc: 1338,
      stars: { a: 5, b: 1, c: 1, d: 1, e: 1 },
      noOfRats: 9,
    },
  ];

  return (
    <>
      <h1>Test Page</h1>
      <hr />
      <div style={{ display: "flex" }}>
        {moreCourses?.map((item) => {
          return <CourseCard key={item.id} data={item} />;
        })}
      </div>
    </>
  );
};

export default Test;
