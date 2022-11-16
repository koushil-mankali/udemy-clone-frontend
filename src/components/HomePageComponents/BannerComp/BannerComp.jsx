import { Link } from "react-router-dom";

import css from "./BannerComp.module.css";

const BannerComp = (props) => {
  const { bannerData } = props;
  return (
    <Link className={css.outerDiv} to={bannerData?.link}>
      <img src={bannerData?.img} alt="banner" className={css.img} />
      <div className={css.box}>
        <div className={css.ttl}>{bannerData?.boxData?.ttl}</div>
        <div className={css.desc}>{bannerData?.boxData?.desc}</div>
      </div>
    </Link>
  );
};

export default BannerComp;
