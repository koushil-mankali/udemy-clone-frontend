import React from "react";

import logo from "/images/logo-udemy-inverted.svg";
import globeIcon from "/icons/globe.png";

import css from "./Footer.module.css";

import Button1 from "../../utils/Buttons/Button1/Button1";

const Footer = () => {
  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.clmns}>
          <div className={css.clmn}></div>
          <div className={css.clmn}></div>
          <div className={css.clmn}></div>
          <div className={[css.clmn, css.mr]}>
            <Button1
              img={globeIcon}
              txt="English"
              bck="#1c1d1f"
              color="#fff"
              hovBck="rgba(255,255,255,.08)"
              extraCss={{ border: "1px solid #fff" }}
              imageCss={{ filter: "invert(1)" }}
            />
          </div>
        </div>
        <div className={css.creds}>
          <div className={css.cred1}>
            <img className={css.img} src={logo} alt="logo" />
          </div>
          <div className={css.cred2}>
            © {new Date().getFullYear()} Udemy Clone, Inc.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
