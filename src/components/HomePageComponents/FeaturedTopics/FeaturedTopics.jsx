import React from "react";
import { Link } from "react-router-dom";

import Button1 from "../../../utils/Buttons/Button1/Button1";

import css from "./FeaturedTopics.module.css";

const FeaturedTopics = () => {
  const jsonData = [
    {
      id: "1",
      category: "Development",
      topics: [
        {
          id: "t11",
          topicName: "Python",
          link: "/topic/python",
          studentsEnrolled: "36354994",
        },
        {
          id: "t12",
          topicName: "Web Development",
          link: "/topic/webdevelopment",
          studentsEnrolled: "22354994",
        },
        {
          id: "t13",
          topicName: "Machine Learning",
          link: "/topic/machinelearning",
          studentsEnrolled: "16354994",
        },
      ],
    },
    {
      id: "2",
      category: "Bussiness",
      topics: [
        {
          id: "t21",
          topicName: "SQL",
          link: "/topic/sql",
          studentsEnrolled: "06354994",
        },
        {
          id: "t22",
          topicName: "PMP",
          link: "/topic/pmp",
          studentsEnrolled: "86354994",
        },
      ],
    },
    {
      id: "3",
      category: "IT and Software",
      topics: [
        {
          id: "t31",
          topicName: "AWS Certification",
          link: "/topic/aws",
          studentsEnrolled: "66354994",
        },
        {
          id: "t32",
          topicName: "Azure Certification",
          link: "/topic/azure",
          studentsEnrolled: "56354994",
        },
        {
          id: "t33",
          topicName: "Cyber Security",
          link: "/topic/cybersec",
          studentsEnrolled: "76354994",
        },
      ],
    },
  ];

  const comp = jsonData?.map((item) => {
    return (
      <div className={css.topic} key={item.id}>
        <h2 className={css.catName}>{item.category}</h2>
        <div className={css.topicBdy}>
          {item?.topics?.map((topic) => {
            return (
              <div key={topic.id} className={css.topicList}>
                <Link className={css.topicName} to={topic.link}>
                  {topic.topicName}
                </Link>
                <div className={css.topicStds}>
                  {topic.studentsEnrolled
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  <span> students</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <h1 className={css.ttl}>Featured topics by category</h1>
        <div className={css.bdy}>{comp}</div>
        <Button1 bck="#f0f2f4" txt="Explore more topics" link="/explore" />
      </div>
    </div>
  );
};

export default FeaturedTopics;
