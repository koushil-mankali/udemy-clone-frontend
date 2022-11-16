import React from "react";
import css from "./CategoryTabsBox.module.css";

import Button1 from "../../../utils/Buttons/Button1/Button1";

const CategoryTabsBox = ({
  title,
  desc,
  data,
  clickHandler,
  outerCss,
  children,
}) => {
  return (
    <div className={css.outerDiv} style={outerCss}>
      <div className={css.ttl}>{title}</div>
      <div className={css.desc}>{desc}</div>
      <div className={css.innerDiv}>
        <div className={css.tabs}>
          {data?.map((item, id) => {
            return (
              <div
                className={css.tab}
                key={id}
                style={{
                  color: item?.active ? "var(--gray)" : "var(--light-gray)",
                }}
                onClick={() => clickHandler(item?.id)}
              >
                {item.tab}
              </div>
            );
          })}
        </div>
        <div className={css.box}>
          {data?.map((item, id) => {
            return item?.active ? (
              <div key={id} className={css.boxInner}>
                <div className={css.inBx1}>
                  <div className={css.bxTtl}>{item.ttl}</div>
                  <div className={css.bxdesc}>{item.desc}</div>
                </div>
                <Button1
                  txt={`Explore ${item?.btnTxt}`}
                  link={item?.btnLink}
                  extraCss={{ margin: "1rem 0px", fontSize: "0.9rem" }}
                  classNames={css.btnStyle}
                />
                <div className={css.scroll}>{children}</div>
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabsBox;
