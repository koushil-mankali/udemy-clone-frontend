import React from "react";
import css from "./InstructorCoursePage.module.css";

import showcase1 from "/images/showcase4.jpg";
import showcase2 from "/images/showcase5.jpg";
import showcase3 from "/images/showcase5.jpg";
import tvIcon from "/icons/tv.png";
import helpWebIcon from "/icons/help-web-button.png";
import analyticsIcon from "/icons/analytics.png";
import teachIcon from "/icons/teach.png";
import chatIcon from "/icons/chat.png";

import TextWithButtonCard from "../../../components/InstructorComponents/Cards/TextWithButtonCard/TextWithButtonCard";
import ParaCard from "../../../components/InstructorComponents/Cards/ParaCard/ParaCard";
import SmallNaviCard from "../../../components/InstructorComponents/Cards/SmallNaviCard/SmallNaviCard";
import Button1 from "../../../utils/Buttons/Button1/Button1";

const InstructorCoursePage = () => {
  return (
    <>
      <TextWithButtonCard
        txt="Jump Into Course Creation"
        btnTxt="Create your Course"
        btnLink="/courses/create/1"
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
      <div className={css.box2}>
        <SmallNaviCard
          icon={tvIcon}
          ttl="Test Video"
          desc="Send us a sample video and get expert feedback."
          link="#"
        />
        <SmallNaviCard
          icon={chatIcon}
          ttl="Instructor Community"
          desc="Connect with experienced instructors. Ask questions, browse discussions, and more."
          link="#"
        />
        <SmallNaviCard
          icon={teachIcon}
          ttl="Testing Center"
          desc="Learn about best practices for teaching on Udemy."
          link="#"
        />
        <SmallNaviCard
          icon={analyticsIcon}
          ttl="Marketplace Insights"
          desc="Validate your course topic by exploring our marketplace supply and demand."
          link="#"
        />
        <SmallNaviCard
          icon={helpWebIcon}
          ttl="Help and Support"
          desc="Browse our Help Center or contact our support team."
          link="#"
        />
      </div>
      <div className={css.box3}>
        <p className={css.txt}>Are You Ready to Begin?</p>
        <Button1
          txt="Create your Course"
          link="/courses/create/1"
          color="var(--white)"
          bck="var(--purple)"
          hovBck="var(--purple-dark)"
          extraCss={{
            border: "none",
            padding: "0.5rem 2rem",
          }}
        />
      </div>
    </>
  );
};

export default InstructorCoursePage;
