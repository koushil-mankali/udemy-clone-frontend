import { Link } from "react-router-dom";

import css from "./InstructorNavbar.module.css";

import globeIcon from "/icons/globe.png";
import notificationIcon from "/icons/notification.png";
import userEmptyIcon from "/icons/user-empty.png";
import exitIcon from "/icons/exit.png";

const InstructorNavbar = () => {
  return (
    <div className={css.navbar}>
      <div className={css.right}>
        <Link className={css.hovBox} to="/">
          Student
        </Link>
        <div className={css.notiBox}>
          <img
            className={css.notiIcon}
            src={notificationIcon}
            alt="notification icon"
          />
        </div>
        <div className={css.profile}>
          <img src={userEmptyIcon} className={css.profileIcon} />
          <div className={css.menuBox}>
            <div className={css.innerMenuBox}>
              <div className={css.prflDiv}>
                <Link to="/user/profile/settings/basic" className={css.user}>
                  <div className={css.leftUserDiv}>
                    <img
                      src={userEmptyIcon}
                      alt="user profile"
                      className={css.userProfileImg}
                    />
                  </div>
                  <div className={css.rightUserDiv}>
                    <div className={css.uname}>Koushil Mankali</div>
                    <div className={css.email}>koushilmankali@gmail.com</div>
                  </div>
                </Link>
              </div>
              <hr className={css.hr} />
              <div className={css.prflDiv}>
                <Link to="/user/my-courses/learning" className={css.menuItem}>
                  My Learning
                </Link>
                <Link to="/cart" className={css.menuItem}>
                  My Cart
                </Link>
                <Link to="/user/my-courses/wishlist" className={css.menuItem}>
                  My Wishlist
                </Link>
                <Link to="/" className={css.menuItem}>
                  Instructor Dashboard
                </Link>
              </div>
              <hr className={css.hr} />
              <div className={css.prflDiv}>
                <Link to="/" className={css.menuItem}>
                  Notifications
                </Link>
                <Link to="/" className={css.menuItem}>
                  Messages
                </Link>
              </div>
              <hr className={css.hr} />
              <div className={css.prflDiv}>
                <Link to="/user/account" className={css.menuItem}>
                  Account Settings
                </Link>
                <Link to="/" className={css.menuItem}>
                  Payment Methods
                </Link>
                <Link to="/" className={css.menuItem}>
                  Subscriptions
                </Link>
                <Link to="/" className={css.menuItem}>
                  Udemy Credits
                </Link>
                <Link to="/" className={css.menuItem}>
                  Purchase History
                </Link>
              </div>
              <hr className={css.hr} />
              <div className={css.prflDiv}>
                <div className={css.menuItem2}>
                  <span>Language</span>
                  <span>
                    <span>English</span>
                    <img src={globeIcon} className={css.icon} alt="glob icon" />
                  </span>
                </div>
              </div>
              <hr className={css.hr} />
              <div className={css.prflDiv}>
                <Link to="/" className={css.menuItem}>
                  Public Profile
                </Link>
                <Link
                  to="/user/profile/settings/basic"
                  className={css.menuItem}
                >
                  Edit Profile
                </Link>
              </div>
              <hr className={css.hr} />
              <div className={css.prflDiv}>
                <Link to="/" className={css.menuItem}>
                  Help
                </Link>
                <Link to="/" className={css.menuItem}>
                  Logout
                </Link>
              </div>
              <hr className={css.hr} />
              <div className={css.prflDiv}>
                <div className={css.menuItem2}>
                  <span>
                    <div className={css.menuItemTxt1}>Udemy Bussiness</div>
                    <div className={css.menuItemTxt2}>
                      Bring learning to your company
                    </div>
                  </span>
                  <span>
                    <img src={exitIcon} className={css.icon} alt="exit icon" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorNavbar;
