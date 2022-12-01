import { useState } from "react";

import InputUtil from "../../../../utils/FormUtils/InputUtil/InputUtil";
import SelectUtil from "../../../../utils/FormUtils/SelectUtil/SelectUtil";
import TextEditorUtil from "../../../../utils/TextEditorUtil/TextEditorUtil";
import Button1 from "../../../../utils/Buttons/Button1/Button1";

import css from "./BasicSettingsComponent.module.css";

const BasicSettingsComponent = () => {
  const [textEditorState, setTextEditorState] = useState("");
  const options = [
    { value: "ss", txt: "see" },
    { value: "ss", txt: "see" },
  ];
  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.box1}>
          <InputUtil
            label="First Name"
            name="firstname"
            placeholderTxt="Enter first name"
          />
          <InputUtil
            label="Last Name"
            name="lastname"
            placeholderTxt="Enter last name"
          />
          <InputUtil
            label="Headline"
            name="headline"
            placeholderTxt="Instructor at zzzz"
            count={true}
            countLimit={60}
          />
          <TextEditorUtil
            label="Biography"
            disclaimer="Your biography should have at least 50 characters, links and coupon codes are not permitted."
            editorState={textEditorState}
            setEditor={setTextEditorState}
          />
          <SelectUtil
            label="Language"
            value={options[0].txt}
            options={options}
          />
        </div>
        <div className={css.box2}>
          <InputUtil
            label="Website"
            name="website"
            placeholderTxt="URL"
            disabledInpt={true}
          />
          <InputUtil
            inptTxt="http://www.twitter.com/"
            label="Twitter"
            name="twitter"
            placeholderTxt="Username"
          />
          <InputUtil
            inptTxt="http://www.facebook.com/"
            label="Facebook"
            name="facebook"
            placeholderTxt="Username"
          />
          <InputUtil
            inptTxt="http://www.linkedin.com/"
            label="LinkedIn"
            name="linkedin"
            placeholderTxt="Resource ID"
          />
          <InputUtil
            inptTxt="http://www.youtube.com/"
            label="Youtube"
            name="youtube"
            placeholderTxt="Username"
          />
        </div>
      </div>
      <div className={css.bottomDiv}>
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
    </div>
  );
};

export default BasicSettingsComponent;
