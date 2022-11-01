import React, { useState } from "react";

import css from "./SearchBar.module.css";

import searchIcon from "/icons/search.png";

const SearchBar = () => {
  let [srchInpt, setSearchInpt] = useState("");
  let [resultData, setResultData] = useState([]);

  return (
    <div className={css.srchOuterdiv}>
      <div className={css.searchBar}>
        <div className={css.iconBox}>
          <img src={searchIcon} alt="search icon" className={css.searchIcon} />
        </div>
        <input
          type="text"
          placeholder="Search for anything"
          name="searchbar"
          id="searchbar"
          onChange={(e) => setSearchInpt(e.target.value || "")}
          className={css.searchInpt}
        />
      </div>
      {resultData?.length > 0 ? (
        <div className={css.resultBox}>
          <div className={css.resVal}>
            <div className={css.srchIconBox}>
              <img
                src={searchIcon}
                alt="search icon"
                className={css.searchIconBox}
              />
            </div>
            <span className={css.resValTxt}>{srchInpt}</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
