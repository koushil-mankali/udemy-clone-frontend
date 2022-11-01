import React, { useState } from "react";
import { Link } from "react-router-dom";

import css from "./Navbar.module.css";

import SearchBar from "../../utils/SearchBar/SearchBar";
import Button1 from "../../utils/Buttons/Button1/Button1";

import globeIcon from "/icons/globe.png";
import cartIcon from "/icons/shopping-cart.png";
import hamburgerIcon from "/icons/hamburger.png";

const Navbar = () => {
  let [menuState, setMenuState] = useState(false);

  return (
    <>
      <div className={css.navbar}>
        <div
          className={css.menuBox}
          onClick={() => setMenuState((prev) => !prev)}
        >
          <img src={hamburgerIcon} alt="menu icon" className={css.menuIcon} />
        </div>
        <div className={css.left}>
          <Link className={css.logoBox} to="/">
            <img src="/images/logo-udemy.svg" alt="logo" className={css.logo} />
          </Link>
        </div>
        <div className={css.right}>
          <div className={css.catDropdown}>Categories</div>
          <div className={css.searchBox}>
            <SearchBar />
          </div>
          <a className={css.hovBox} href="#" target="_blank">
            Teach on Udemy
          </a>
          <Link to="/cart" className={css.cartBox}>
            <img
              className={css.cartIcon}
              src="/icons/shopping-cart.png"
              alt="cart icon"
            />
          </Link>
          <div className={css.btns}>
            <Button1 txt="Login" link="/login" />
            <Button1
              txt="Sign up"
              bck="#1c1d1f"
              link="/signup"
              color="#fff"
              hovBck="#000"
            />
            <Button1 img={globeIcon} />
          </div>
        </div>
      </div>
      {menuState ? (
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
            <Button1 txt="Login" link="/login" />
            <Button1
              txt="Sign up"
              bck="#1c1d1f"
              link="/signup"
              color="#fff"
              hovBck="#000"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
