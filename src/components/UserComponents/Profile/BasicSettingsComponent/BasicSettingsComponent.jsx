import React from "react";

import InputUtil from "../../../../utils/FormUtils/InputUtil/InputUtil";
import SelectUtil from "../../../../utils/FormUtils/SelectUtil/SelectUtil";

import css from "./BasicSettingsComponent.module.css";

const BasicSettingsComponent = () => {
  const options = [
    { value: "ss", txt: "see" },
    { value: "ss", txt: "see" },
  ];
  return (
    <div className={css.outerDiv}>
      <InputUtil
        label="First Name"
        name="firstname"
        count={true}
        countLimit={40}
        btnTxt="hello"
      />
      <SelectUtil options={options} />
    </div>
  );
};

export default BasicSettingsComponent;
