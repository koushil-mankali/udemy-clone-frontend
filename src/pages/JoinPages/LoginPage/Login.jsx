import { useState } from "react";

import { Link } from "react-router-dom";

import Layout1 from "../../Layout1/Layout1";

import InputUtil from "../../../utils/FormUtils/InputUtil/InputUtil";
import Button1 from "../../../utils/Buttons/Button1/Button1";

import fImg from "/icons/facebook.svg";
import gImg from "/icons/google.svg";
import aImg from "/icons/apple-logo.svg";
import email from "/icons/email.png";
import lock from "/icons/lock.png";

import css from "./Login.module.css";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const oauth = [
    { img: fImg, txt: "Continue with Facebook", link: "/facebook-auth" },
    { img: gImg, txt: "Continue with Google", link: "/google-auth" },
    { img: aImg, txt: "Continue with Apple", link: "/apple-auth" },
  ];

  let changeHanlder = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  let submitHandler = () => {
    if (!state.email.includes("@") || state.password.length < 10) {
      console.log("Error", state);
      return;
    }
    console.log(state, "Form Values");
  };

  return (
    <>
      <Layout1>
        <div className={css.outerDiv}>
          <div className={css.loginBox}>
            <div className={css.ttl}>Log in to your Udemy account</div>
            <hr />
            <div className={css.boxBdy}>
              {oauth?.map((item, id) => {
                return (
                  <div className={css.oauth} key={id}>
                    <img src={item?.img} alt="login img" className={css.icon} />
                    <span className={css.txt}>{item?.txt}</span>
                  </div>
                );
              })}
              <InputUtil
                type="email"
                name="email"
                state={state.email}
                icon={email}
                placeholderTxt="Email"
                onChange={changeHanlder}
              />
              <InputUtil
                type="password"
                name="password"
                state={state.password}
                icon={lock}
                placeholderTxt="Password"
                onChange={changeHanlder}
              />
              <Button1
                txt="Login"
                color="var(--white)"
                bck="var(--purple)"
                hovBck="var(--purple-dark)"
                extraCss={{
                  width: "100%",
                  margin: "0",
                  border: "none",
                  padding: "1rem",
                }}
                onClick={submitHandler}
              />
              <div className={css.blck}>
                <span className={css.blckTxt}>or</span>
                <Link to="/join/forgot-password" className={css.anchor}>
                  Forgot password
                </Link>
              </div>
              <div className={css.blck}>
                <Link to="/join/login" className={css.anchor}>
                  Log in to a different account
                </Link>
              </div>
              <div className={css.blck}>
                <span className={css.blckTxt}>Dont have an account?</span>
                <Link to="/join/signup" className={css.anchor}>
                  <b>Signup</b>
                </Link>
              </div>
              <div className={css.blck}>
                <Link to="/join/login" className={css.anchor}>
                  <b>Login with your organization</b>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout1>
    </>
  );
};

export default Login;
