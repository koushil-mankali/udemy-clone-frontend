import { useState } from "react";

import { Link } from "react-router-dom";

import Layout1 from "../../Layout1/Layout1";

import InputUtil from "../../../utils/FormUtils/InputUtil/InputUtil";
import CheckboxUtil from "../../../utils/FormUtils/CheckboxUtil/CheckboxUtil";
import Button1 from "../../../utils/Buttons/Button1/Button1";

import user from "/icons/user.png";
import email from "/icons/email.png";
import lock from "/icons/lock.png";

import css from "./Signup.module.css";

const Signup = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    check: true,
  });

  let changeHanlder = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  let checkboxChangeHanlder = (e) => {
    setState((prev) => {
      return { ...prev, check: !prev.check };
    });
  };

  let submitHandler = () => {
    if (
      !state.email.includes("@") ||
      state.password.length < 10 ||
      state.username.length < 5
    ) {
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
            <div className={css.ttl}>Sign up and start learning</div>
            <hr />
            <div className={css.boxBdy}>
              <InputUtil
                type="text"
                name="username"
                state={state.username}
                icon={user}
                placeholderTxt="Username"
                onChange={changeHanlder}
              />
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
              <CheckboxUtil
                label="Send me special offers, personalized recommendations, and learning tips."
                type="checkbox"
                name="checkbox"
                id="checkbox"
                state={state.check}
                onChange={checkboxChangeHanlder}
              />
              <Button1
                txt="Signup"
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
                <span className={css.blckTxt}>
                  By signing up, you agree to our
                  <Link to="/join/forgot-password" className={css.anchor}>
                    Terms of Use
                  </Link>
                  and
                  <Link to="/join/forgot-password" className={css.anchor}>
                    Privacy Policy
                  </Link>
                  .
                </span>
              </div>
              <div className={css.blck}>
                <span className={css.blckTxt2}>Already have an account?</span>
                <Link to="/join/login" className={css.anchor}>
                  <b>Log in</b>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout1>
    </>
  );
};

export default Signup;
