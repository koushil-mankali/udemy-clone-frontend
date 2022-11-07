import React from "react";

import Navbar from "../../../components/Navbar1/Navbar";

import fImg from "/icons/facebook.svg";
import gImg from "/icons/google.svg";
import aImg from "/icons/apple-logo.svg";

import css from "./Login.module.css";

const login = () => {
  const oauth = [
    { img: fImg, txt: "Continue with Facebook", link: "/facebook-auth" },
    { img: gImg, txt: "Continue with Google", link: "/google-auth" },
    { img: aImg, txt: "Continue with Apple", link: "/apple-auth" },
  ];

  return (
    <>
      <Navbar />
      <div className={css.outerDiv}>
        <div className={css.loginBox}>
          <div className={css.ttl}>Log in to your Udemy account</div>
          <hr />
          {oauth?.map((item) => {
            return (
              <div className={css.oauth}>
                <img src={item?.img} alt="login img" className={css.icon} />
                <span className={css.txt}>{item?.txt}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default login;
