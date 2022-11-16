import { Link } from "react-router-dom";

import css from "./Navbar2.module.css";

const Navbar2 = () => {
  return (
    <>
      <div className={css.navbar}>
        <div className={css.left}>
          <Link className={css.logoBox} to="/">
            <img src="/images/logo-udemy.svg" alt="logo" className={css.logo} />
          </Link>
        </div>
        <div className={css.right}>
          <Link to="/cart" className={css.btn}>
            Cancel
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
