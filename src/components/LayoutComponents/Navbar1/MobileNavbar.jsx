import React from "react";
import css from "./Navbar.module.css";

import SearchBar from "../../../utils/SearchBar/SearchBar";
import Button1 from "../../../utils/Buttons/Button1/Button1";

import cartIcon from "/icons/shopping-cart.png";

const MobileNavbar = () => {
  return (
    <>
      <div className={css.sidebarMenu}>
        <div className={css.searchBoxM}>
          <SearchBar />
        </div>
        <div className={css.catDropdownM}>Categories</div>
        <a className={css.hovBoxM} href="#" target="_blank">
          Teach on Udemy
        </a>
        <div className={css.btnsM}>
          <Button1 txt="Cart" img={cartIcon} link="/cart" />
          <Button1 txt="Login" link="/join/login" />
          <Button1
            txt="Sign up"
            bck="#1c1d1f"
            link="/join/signup"
            color="#fff"
            hovBck="#000"
          />
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
