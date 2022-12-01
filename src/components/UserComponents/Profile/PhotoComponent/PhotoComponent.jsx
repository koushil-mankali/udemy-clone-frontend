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
        color="var(--white)"
        bck="var(--light-gray2)"
        hovBck="var(--gray)"
        disableBtn={true}
        extraCss={{
          margin: "1rem 0",
          fontSize: "1.1rem",
          padding: "0.8rem 1.2rem",
        }}
      />
    </div>
  );
};

export default PhotoComponent;
