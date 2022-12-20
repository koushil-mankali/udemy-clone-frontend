import { useState } from "react";

import InputUtil from "../../../../utils/FormUtils/InputUtil/InputUtil";

import searchIcon from "/icons/search.png";

import css from "./SearchTabComponent.module.css";

const SearchTabComponent = () => {
  const [state, setState] = useState("sdd");
  const data = "";

  return (
    <div className={css.outerDiv}>
      <InputUtil
        type="text"
        state={state}
        onChange={(e) => setState(e.target?.value ?? "")}
        icon={searchIcon}
        iconPosition="right"
        placeholderTxt="Search course content"
      />
      <div className={css.searchContent}>
        {state ? (
          data ? (
            <></>
          ) : (
            <div className={css.noResult}>
              <div className={css.txtB}>Sorry, no results for "{state}"</div>
              <div className={css.txt}>
                Your search did not match any captions, lectures or resources
              </div>
            </div>
          )
        ) : (
          <div className={css.noResult}>
            <div className={css.txtB}>Start a new search</div>
            <div className={css.txt}>
              To find captions, lectures or resources
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchTabComponent;
