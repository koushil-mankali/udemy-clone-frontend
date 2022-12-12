import { useState } from "react";

import css from "./Cart.module.css";

import Layout1 from "../Layout1/Layout1";
import Button1 from "../../utils/Buttons/Button1/Button1";
import InputUtil from "../../utils/FormUtils/InputUtil/InputUtil";

import CheckoutCourseCard from "../../components/Cards/CheckoutCourseCard/CheckoutCourseCard";

import cardImg from "/images/card.jpg";
import crossIcon from "/icons/close.png";
import emptyCartImg from "/images/empty-shopping-cart.jpg";

const Cart = () => {
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("");

  const cartData = [
    // {
    //   id: 1,
    //   img: cardImg,
    //   link: "/course/python",
    //   ttl: "Learn Python: The complete python programming course",
    //   authors: ["Koushil", "Nani"],
    //   ratings: { totalratings: 4.3, count: 3445 },
    //   duration: 10000,
    //   lectures: 146,
    //   level: "All",
    //   price: 649,
    //   discount: 3399,
    //   couponApplied: "koushil mankali",
    //   bestSeller: true,
    // },
  ];

  const whitlistedCourses = [
    {
      id: 1,
      img: cardImg,
      link: "/course/python",
      ttl: "Learn Python: The complete python programming course",
      authors: ["Koushil", "Nani"],
      ratings: { totalratings: 4.3, count: 3445 },
      duration: 10000,
      lectures: 146,
      level: "All",
      price: 649,
      discount: 3399,
      couponApplied: "koushil mankali",
      bestSeller: true,
    },
    {
      id: 2,
      img: cardImg,
      link: "/course/python",
      ttl: "Learn Python: The complete python programming course",
      authors: ["Koushil", "Nani"],
      ratings: { totalratings: 4.3, count: 3445 },
      duration: 10000,
      lectures: 146,
      level: "All",
      price: 649,
      discount: 3399,
      couponApplied: "koushil mankali",
      bestSeller: true,
    },
  ];

  let clearCouponHandler = () => {
    setAppliedCoupon("");
  };

  let setCouponHandler = (e) => {
    setCoupon(e.target.value);
  };

  let submitCoupon = () => {
    setAppliedCoupon(coupon);
    console.log(coupon, "coupon");
  };

  return (
    <>
      <Layout1>
        <div className={css.outerDiv}>
          <div className={css.innerDiv}>
            <div className={css.ttl}>Shopping Cart</div>
            {cartData?.length > 0 ? (
              <div className={css.boxs}>
                <div className={css.box1}>
                  <div className={css.cnt}>1 Course in Cart</div>
                  <div className={css.courses}>
                    {cartData?.map((item) => {
                      return <CheckoutCourseCard data={item} key={item.id} />;
                    })}
                  </div>
                  <div>keep shopping div</div>
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
                    link="/checkout"
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
                  {appliedCoupon ? (
                    <div className={css.cpnBox}>
                      <img
                        src={crossIcon}
                        alt="close icon"
                        className={css.icon}
                        onClick={clearCouponHandler}
                      />
                      <div className={css.cpnCode}>
                        <b>{appliedCoupon}</b> is applied
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <InputUtil
                    type="text"
                    btnTxt="Apply"
                    onChange={setCouponHandler}
                    btnClick={submitCoupon}
                  />
                </div>
              </div>
            ) : (
              <div className={css.emptyBdy}>
                <div className={css.cartItemsLen}>
                  <span>{cartData?.length}</span>
                  <span>Courses in Cart</span>
                </div>
                <div className={css.cartBox}>
                  <img
                    src={emptyCartImg}
                    alt="empty cart"
                    className={css.emptyCartImg}
                  />
                  <div className={css.emptyCartTxt}>
                    Your cart is empty. Keep shopping to find a course!
                  </div>
                  <Button1
                    txt="Keep Shopping"
                    color="var(--white)"
                    hovBck="var(--purple-dark)"
                    extraCss={{
                      backgroundColor: "var(--purple)",
                      width: "150px",
                      height: "50px",
                      border: "none",
                    }}
                  />
                </div>
                <div className={css.whitlistedCourses}>
                  <div className={css.whTtl}>Recently wishlisted</div>
                  {whitlistedCourses?.map((item) => {
                    return (
                      <CheckoutCourseCard
                        data={item}
                        key={item.id}
                        extraCss={{
                          margin: "1rem 0",
                          border: "none",
                          borderTop: "1px solid var(--gray86)",
                          justifyContent: "space-between",
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout1>
    </>
  );
};

export default Cart;
