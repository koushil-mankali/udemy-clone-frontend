import { useState } from "react";

import css from "./StudentsAlsoBought.module.css";

import Button1 from "../../../utils/Buttons/Button1/Button1";
import VerticalCourseCard from "../../Cards/VerticalCourseCard/VerticalCourseCard";

import courseImg from "/images/card.jpg";

const StudentsAlsoBought = (props) => {
  const { ttl } = props;
  const [data, setData] = useState([
    {
      id: 1,
      img: courseImg,
      title:
        "Python for beginners Python for beginners Python for beginners Python for beginners",
      duration: "2.3",
      lastUpdatedOn: new Date(),
      ratings: 4.3,
      enrolled: 5000,
      price: 3399,
      wishListed: false,
    },
    {
      id: 2,
      img: courseImg,
      title: "Javascript for beginners",
      duration: "5.6",
      lastUpdatedOn: new Date(),
      ratings: 3.3,
      enrolled: 3000,
      price: 2499,
      wishListed: true,
    },
    {
      id: 3,
      img: courseImg,
      title:
        "Python for beginners Python for beginners Python for beginners Python for beginners",
      duration: "2.3",
      lastUpdatedOn: new Date(),
      ratings: 4.3,
      enrolled: 5000,
      price: 3399,
      wishListed: false,
    },
    {
      id: 4,
      img: courseImg,
      title: "Javascript for beginners",
      duration: "5.6",
      lastUpdatedOn: new Date(),
      ratings: 3.3,
      enrolled: 3000,
      price: 2499,
      wishListed: true,
    },
  ]);

  const showMoreHanlder = () => {
    setData((prev) => [
      ...prev,
      {
        id: Math.random(),
        img: courseImg,
        title:
          "Python for beginners Python for beginners Python for beginners Python for beginners",
        duration: "2.3",
        lastUpdatedOn: new Date(),
        ratings: 4.3,
        enrolled: 5000,
        price: 3399,
        wishListed: false,
      },
      {
        id: Math.random(),
        img: courseImg,
        title: "Javascript for beginners",
        duration: "5.6",
        lastUpdatedOn: new Date(),
        ratings: 3.3,
        enrolled: 3000,
        price: 2499,
        wishListed: true,
      },
      {
        id: Math.random(),
        img: courseImg,
        title:
          "Python for beginners Python for beginners Python for beginners Python for beginners",
        duration: "2.3",
        lastUpdatedOn: new Date(),
        ratings: 4.3,
        enrolled: 5000,
        price: 3399,
        wishListed: false,
      },
      {
        id: Math.random(),
        img: courseImg,
        title: "Javascript for beginners",
        duration: "5.6",
        lastUpdatedOn: new Date(),
        ratings: 3.3,
        enrolled: 3000,
        price: 2499,
        wishListed: true,
      },
    ]);
  };

  return (
    <div className={css.outerDiv}>
      <div className={css.ttl}>{ttl}</div>
      <div className={css.bdy}>
        {data?.map((item) => {
          return (
            <div key={item.id}>
              <VerticalCourseCard data={item} />
              <hr />
            </div>
          );
        })}
      </div>
      <Button1
        txt="Show more"
        onClick={showMoreHanlder}
        extraCss={{ width: "100%", margin: "0" }}
      />
    </div>
  );
};

export default StudentsAlsoBought;
