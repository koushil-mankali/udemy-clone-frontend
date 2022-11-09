import React from "react";

import css from "./StudentsAlsoBought.module.css";

import Button1 from "../../utils/Buttons/Button1/Button1";

const StudentsAlsoBought = (props) => {
  const { ttl, coursesData } = props;

  const showMoreHanlder = () => {
    console.log("Show More");
  };

  return (
    <div className={css.outerDiv}>
      <div className={css.ttl}>{ttl}</div>
      <div className={css.bdy}>
        {coursesData?.map((item) => {
          return <div key={item.id}>{item.id}</div>;
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
