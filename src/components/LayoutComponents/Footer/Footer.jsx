import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "/images/logo-udemy-inverted.svg";
import globeIcon from "/icons/globe.png";

import css from "./Footer.module.css";

import Button1 from "../../../utils/Buttons/Button1/Button1";
import LanguageChangeCard from "../../Cards/LanguageChangeCard/LanguageChangeCard";

const Footer = () => {
  const [showLanguageSettingsModal, setShowLanguageSettingsModal] =
    useState(false);

  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.clmns}>
          <div className={css.clmn}>
            <ul className={css.cul}>
              <li className={css.cli}>
                <Link to="/">Udemy Bussiness</Link>
              </li>
              <li className={css.cli}>
                <Link to="/">Teach on Udemy</Link>
              </li>
              <li className={css.cli}>
                <Link to="/">Get the app</Link>
              </li>
              <li className={css.cli}>
                <Link to="/">About us</Link>
              </li>
              <li className={css.cli}>
                <Link to="/">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className={css.clmn}>
            <ul className={css.cul}>
              <li className={css.cli}>
                <Link to="/">Carrers</Link>
              </li>
              <li className={css.cli}>
                <Link to="/">Blog</Link>
              </li>
              <li className={css.cli}>
                <Link to="/">Help and Support</Link>
              </li>
              <li className={css.cli}>
                <Link to="/">Affiliate</Link>
              </li>
              <li className={css.cli}>
                <Link to="/">Investors</Link>
              </li>
            </ul>
          </div>
          <div className={css.clmn}>
            <ul className={css.cul}>
              <li className={css.cli}>
                <Link to="/">Terms</Link>
              </li>
              <li className={css.cli}>
                <Link to="/">Privacy policy</Link>
              </li>
              <li className={css.cli}>
                <Link to="/">Cookie settings</Link>
              </li>
              <li className={css.cli}>
                <Link to="/">Sitemap</Link>
              </li>
              <li className={css.cli}>
                <Link to="/">Accessibility statement</Link>
              </li>
            </ul>
          </div>
          <div className={[css.lastChild, css.clmn].join(" ")}>
            <Button1
              img={globeIcon}
              txt="English"
              bck="#1c1d1f"
              color="#fff"
              onClick={() => setShowLanguageSettingsModal(true)}
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
      {showLanguageSettingsModal ? (
        <LanguageChangeCard setModal={setShowLanguageSettingsModal} />
      ) : null}
    </div>
  );
};

export default Footer;
