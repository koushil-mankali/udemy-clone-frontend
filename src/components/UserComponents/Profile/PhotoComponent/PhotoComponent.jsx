import React from "react";

import Button1 from "../../../../utils/Buttons/Button1/Button1";
import UploadUtil from "../../../../utils/FormUtils/UploadUtil/UploadUtil";

import css from "./PhotoComponent.module.css";

const PhotoComponent = () => {
  return (
    <div className={css.outerDiv}>
      <div className={css.imgBox}></div>
      <UploadUtil txt="Upload Image" />
      <Button1
        txt="Save"
        bck="var(--light-gray2)"
        color="var(--white)"
        hovBck="var(--gray)"
        extraCss={{
          padding: "0.5rem",
          fontSize: "1rem",
          margin: "2rem 0rem",
        }}
      />
    </div>
  );
};

export default PhotoComponent;
