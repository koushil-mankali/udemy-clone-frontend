import { Link } from "react-router-dom";

import Navbar2 from "../../components/LayoutComponents/Navbar2/Navbar2";
import Button1 from "../../utils/Buttons/Button1/Button1";

import css from "./Checkout.module.css";

import lockIcon from "/icons/lock2.png";
import crseImg from "/images/card.jpg";

const Checkout = () => {
  const coursesInCartData = [
    {
      id: 1,
      ttl: "Learn Python: The Complete Python Programming Course",
      img: crseImg,
      price: "3399",
    },
    {
      id: 2,
      ttl: "Learn Python: The Complete Python Programming Course",
      img: crseImg,
      price: "3399",
    },
  ];
  return (
    <>
      <Navbar2 />
      <div className={css.outerDiv}>
        <div className={css.bdy}>
          <div className={css.leftDiv}>
            <h2 className={css.ttl}>Checkout</h2>
            <div className={css.cbdy}>
              <div className={css.bx}>
                <h2 className={css.cbdyTtl}>Billing Address</h2>
                <div className={css.note}>
                  Udemy is required by law to collect applicable transaction
                  taxes for purchases made in certain tax jurisdictions.
                </div>
              </div>
              <div className={css.bx}>
                <h2 className={css.cbdyTtl}>
                  <span>Payment Method</span>
                  <span>
                    Secured connection
                    <img src={lockIcon} alt="lock icon" className={css.icon} />
                  </span>
                </h2>
              </div>
              <div className={css.bx}>
                <h2 className={css.cbdyTtl}>Order</h2>
                <div className={css.crsBox}>
                  {coursesInCartData?.map((item) => {
                    return (
                      <div className={css.cres} key={item.id}>
                        <div className={css.crsebx1}>
                          <img src={item.img} className={css.img} />
                          <div className={css.crsTtl}>{item.ttl}</div>
                        </div>
                        <div className={css.crsPrc}>
                          {new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                          }).format(item.price)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className={css.rightDiv}>
            <div className={css.innerRightDiv}>
              <div className={css.cbdyTtl}>Summary</div>
              <div className={css.p1}>
                <span>Original price:</span>
                <span>
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }).format(3399)}
                </span>
              </div>
              <hr className={css.hr} />
              <div className={css.p2}>
                <span>Total:</span>
                <span>
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }).format(3399)}
                </span>
              </div>
              <div className={css.note}>
                By completing your purchase you agree to these
                <Link to="/" className={css.noteLink}>
                  Terms of Service
                </Link>
                .
              </div>
              <Button1
                txt="Complete Checkout"
                bck="var(--purple)"
                hovBck="var(--purple-dark)"
                color="var(--white)"
                extraCss={{
                  fontSize: "1rem",
                  border: "none",
                  borderRadius: "5px",
                  width: "100%",
                  margin: "0.5rem 0",
                  padding: "1rem",
                }}
              />
              <div className={[css.note, css.mc].join(" ")}>
                30-Day Money-Back Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
