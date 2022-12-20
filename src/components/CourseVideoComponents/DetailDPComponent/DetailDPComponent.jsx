import { useState } from "react";

import Button1 from "../../../utils/Buttons/Button1/Button1";

import downArrowIcon from "/icons/down-arrow.svg";

import css from "./DetailDPComponent.module.css";

const DetailDPComponent = (props) => {
  const {
    title = "",
    desc = "",
    btnTxt = "",
    btnLink = "",
    extraCss = {},
  } = props;

  const [toggleIcon, setToggleIcon] = useState(false);

  return (
    <div className={css.outerDiv} style={extraCss}>
      <details
        className={css.details}
        onClick={() => setToggleIcon((prev) => !prev)}
      >
        <summary className={css.summary}>
          <span>{title}</span>
          <span>
            <img
              src={downArrowIcon}
              alt="down arrow"
              className={[css.icon, toggleIcon ? css.iconReverse : null].join(
                " "
              )}
            />
          </span>
        </summary>
        <p className={css.desc}>{desc}</p>
        {btnTxt ? (
          <Button1
            link={btnLink}
            txt={btnTxt}
            color="var(--white)"
            bck="var(--purple)"
            hovBck="var(--purple-dark)"
            extraCss={{
              padding: "0.7rem",
              margin: 0,
              fontSize: "1.1rem",
              border: "none",
            }}
          />
        ) : null}
      </details>
    </div>
  );
};

export default DetailDPComponent;
