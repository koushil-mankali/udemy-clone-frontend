import React from "react";
import css from "./InstructorCoursePage.module.css";

import showcase1 from "/images/showcase4.jpg";
import showcase2 from "/images/showcase5.jpg";
import showcase3 from "/images/showcase5.jpg";

import TextWithButtonCard from "../../../components/InstructorComponents/Cards/TextWithButtonCard/TextWithButtonCard";
import ParaCard from "../../../components/InstructorComponents/Cards/ParaCard/ParaCard";

const InstructorCoursePage = () => {
  return (
    <>
      <TextWithButtonCard
        txt="Jump Into Course Creation"
        btnTxt="Create your Course"
        btnLink="create"
      />
      <div className={css.plainTxt}>
        Based on your experience, we think these resources will be helpful.
      </div>
      <div className={css.box1}>
        <ParaCard
          imgSrc={showcase1}
          ttl="Create an Engaging Course"
          cnt="Whether you've been teaching for years or are teaching for the first time, you can make an engaging course. We've compiled resources and best practices to help you get to the next level, no matter where you're starting."
          btnTxt="Get Started"
          btnLink="#"
        />
      </div>

      <div className={css.box1}>
        <ParaCard
          imgSrc={showcase2}
          ttl="Get Started with Video"
          cnt="Quality video lectures can set your course apart. Use our resources to learn the basics."
          btnTxt="Get Started"
          btnLink="#"
        />
        <ParaCard
          imgSrc={showcase3}
          ttl="Build Your Audience"
          cnt="Set your course up for success by building your audience."
          btnTxt="Get Started"
          btnLink="#"
        />
      </div>
      <div className={css.plainTxt}>
        Have questions? Here are our most popular instructor resources.
      </div>
    </>
  );
};

export default InstructorCoursePage;
