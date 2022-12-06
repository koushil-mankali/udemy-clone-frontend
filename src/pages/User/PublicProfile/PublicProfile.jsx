import CourseCard from "../../../components/Cards/CourseCard/CourseCard";
import Layout1 from "../../Layout1/Layout1";

import profile from "/images/showcase.jpg";

import { coursesData } from "../../../fakedata/fakedata";

import css from "./PublicProfile.module.css";

const PublicProfile = () => {
  return (
    <Layout1>
      <div className={css.outerDiv}>
        <div className={css.topBar}>
          <div className={css.userBar}>
            <div className={css.user}>Koushil Mankali</div>
          </div>
        </div>
      </div>
      <div className={css.menuTopBar}>
        <div className={css.innerMenuTopBar}>
          <div className={css.profileBar}>
            <img src={profile} alt="profile pic" className={css.profilePic} />
          </div>
        </div>
      </div>
      <div className={css.bdy}>
        <div className={css.innerBdy}>
          {coursesData?.map((item, id) => {
            return <CourseCard key={id} data={item} />;
          })}
        </div>
      </div>
    </Layout1>
  );
};

export default PublicProfile;
