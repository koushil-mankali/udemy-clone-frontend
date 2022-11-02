import React from "react";

import css from "./TAG1.module.css";

const TAG1 = (props) => {
  const { txt = "Bestseller", extraCss = {} } = props;
  return (
    <div style={{ ...extraCss }} className={css.tag}>
      {txt}
    </div>
  );
};

export default TAG1;
