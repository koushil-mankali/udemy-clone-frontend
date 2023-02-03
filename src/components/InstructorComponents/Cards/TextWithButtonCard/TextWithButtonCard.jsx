import React from "react";

import Button1 from "../../../../utils/Buttons/Button1/Button1";

import css from "./TextWithButtonCard.module.css";

const TextWithButtonCard = (props) => {
  const { txt = "", btnTxt = "", btnLink = "/" } = props;
  return (
    <div className={css.outerDiv}>
      <div className={css.txt}>{txt}</div>
      <Button1
        txt={btnTxt}
        link={btnLink}
        color="var(--white)"
        bck="var(--purple)"
        hovBck="var(--purple-dark)"
        extraCss={{
          border: "none",
          padding: "0.5rem 2rem",
        }}
      />
    </div>
  );
};

export default TextWithButtonCard;
