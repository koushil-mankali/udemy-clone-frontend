import { useState } from "react";

import InputUtil from "../../../../utils/FormUtils/InputUtil/InputUtil";
import SelectUtil from "../../../../utils/FormUtils/SelectUtil/SelectUtil";
import TextEditorUtil from "../../../../utils/TextEditorUtil/TextEditorUtil";

import css from "./BasicSettingsComponent.module.css";

const BasicSettingsComponent = () => {
  const [textEditorState, setTextEditorState] = useState("");
  const options = [
    { value: "ss", txt: "see" },
    { value: "ss", txt: "see" },
  ];
  return (
    <div className={css.outerDiv}>
      <TextEditorUtil
        editorState={textEditorState}
        setEditor={setTextEditorState}
      />
      <InputUtil
        inptTxt="http://www.twitter.com/"
        label="First Name"
        name="firstname"
        count={true}
        countLimit={40}
        disabledInpt={false}
      />
      <InputUtil
        label="First Name"
        name="firstname"
        count={true}
        countLimit={40}
        btnTxt="hello"
        disabledBtn={false}
        btnClick={() => console.log("Btn")}
      />
      <SelectUtil options={options} />
    </div>
  );
};

export default BasicSettingsComponent;
