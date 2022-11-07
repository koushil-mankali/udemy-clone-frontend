import { useState } from "react";

import css from "./Cart.module.css";

import Navbar from "../../components/Navbar1/Navbar";
import Footer from "../../components/Footer/Footer";
import Button1 from "../../utils/Buttons/Button1/Button1";

import crossIcon from "/icons/close.png";

const Cart = () => {
  const [coupon, setCoupon] = useState("");
  return (
    <>
      <Navbar />
      <div className={css.outerDiv}>
        <div className={css.innerDiv}>
          <div className={css.ttl}>Shopping Cart</div>
          <div className={css.boxs}>
            <div className={css.box1}>
              <div className={css.cnt}>1 Course in Cart</div>
            </div>
            <div className={css.box2}>
              <div className={css.totalTxt}>Total:</div>
              <div className={css.currrency}>
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(600)}
              </div>
              <div className={css.totalDiscount}>
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(3399)}
              </div>
              <div className={css.ttlDisPer}>81% off</div>
              <Button1
                txt="Checkout"
                bck="var(--purple)"
                hovBck="var(--purple-dark)"
                extraCss={{
                  width: "100%",
                  margin: "1rem 0",
                  padding: "1rem",
                  border: "none",
                  color: "var(--white)",
                }}
              />
              <div className={css.ctxt}>Coupon code</div>
              {coupon ? (
                <div className={css.cpnBox}>
                  <img
                    src={crossIcon}
                    alt="close icon"
                    className={css.icon}
                    onClick={() => setCoupon("")}
                  />
                  <div className={css.cpnCode}>
                    <b>{coupon}</b> is applied
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
