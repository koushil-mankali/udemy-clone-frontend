import { useState } from "react";

import StepCard from "../../Cards/StepCard/StepCard";

import css from "./StepOneComp.module.css";

import tvIcon from "/icons/tv.png";

const StepOneComp = (props) => {
  const { currentStep = 1 } = props;

  const [active, setActive] = useState({
    box1: false,
    box2: false,
  });

  console.log("currentStep", currentStep);

  const StepCardData = [
    {
      box: 1,
      id: 1,
      icon: tvIcon,
      ttl: "Course",
      desc: "This is a test description for a card in udemy clone using react js project.",
    },
    {
      box: 2,
      id: 2,
      icon: tvIcon,
      ttl: "Practice Test",
      desc: "This is a test description for a card in udemy clone using react js project.",
    },
  ];

  return (
    <div className={css.outerDiv}>
      <div className={css.txt}>
        First, let's find out what type of course you're making.
      </div>
      <div className={css.boxes}>
        {StepCardData?.map((item) => {
          return (
            <StepCard
              box={item.box}
              active={active}
              setActive={setActive}
              key={item.id}
              icon={item.icon}
              ttl={item.ttl}
              desc={item.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StepOneComp;
