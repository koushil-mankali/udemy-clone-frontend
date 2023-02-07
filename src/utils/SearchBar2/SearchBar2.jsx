import searchIcon from "/icons/search.png";

import css from "./SearchBar2.module.css";

const SearchBar2 = (props) => {
  const {
    searchBar = "",
    setSearchBar = () => {},
    searchHandler = () => {},
    placeholder = "Search...",
  } = props;
  return (
    <div className={css.searchBar}>
      <input
        type="text"
        name="searchbar"
        value={searchBar}
        onChange={(e) => setSearchBar(e)}
        className={css.inpt}
        placeholder={placeholder}
      />
      <div className={css.iconBox} onClick={searchHandler}>
        <img src={searchIcon} alt="searchbar" className={css.imgIcon} />
      </div>
    </div>
  );
};

export default SearchBar2;
