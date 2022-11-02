import React from "react";

import css from "./TrustedByBest.module.css";

import boxDarkIcon from "/images/brands/box-dark.svg";
import eventbriteIcon from "/images/brands/eventbrite-dark.svg";
import nasdaqIcon from "/images/brands/nasdaq-dark.svg";
import tcsIcon from "/images/brands/tcs-dark.svg";
import netappIcon from "/images/brands/netapp-dark.svg";
import volkswagenIcon from "/images/brands/volkswagen-dark.svg";

const TrustedByBest = () => {
  let brands = [
    boxDarkIcon,
    eventbriteIcon,
    nasdaqIcon,
    tcsIcon,
    netappIcon,
    volkswagenIcon,
  ];

  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <h2 className={css.ttl}>Trusted by the best</h2>
        <div className={css.tagLine}>
          Leading companies use the same courses to help employees keep their
          skills fresh.
        </div>
        <div className={css.brands}>
          {brands?.map((item, id) => {
            return (
              <img key={id} src={item} alt="brand icon" className={css.img} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustedByBest;
