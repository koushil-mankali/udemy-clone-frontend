import { useEffect } from "react";
import { createPortal } from "react-dom";

import Button1 from "../../Buttons/Button1/Button1";

import cancelIcon from "/icons/close.png";

import css from "./PlanModalUtil.module.css";

const PlanModalUtil = (props) => {
  const {
    title = "",
    content = "",
    btns = [],
    state = false,
    setModal = () => {},
  } = props;

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.id === "modalBC" && e.target.id !== "modal") {
        return setModal("");
      }
    });
    return () => {
      window.removeEventListener("click", (e) => {
        if (e.target.id === "modalBC" && e.target.id !== "modal") {
          return setModal("");
        }
      });
    };
  }, []);

  const modal = (
    <div className={css.outerDiv} id="modalBC">
      <div className={css.innerDiv} id="modal">
        <div className={css.bar}>
          <div className={css.ttl}>{title}</div>
          <div className={css.imgBox} onClick={() => setModal("")}>
            <img src={cancelIcon} alt="close icon" className={css.icon} />
          </div>
        </div>
        <div className={css.content}>{content}</div>
        <div className={css.btns}>
          {btns?.map((btn, id) => {
            return (
              <Button1
                txt={btn}
                className={css.btn}
                key={`btn-${id}`}
                onClick={() => setModal(btn)}
                extraCss={{ textTransform: "capitalize" }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
  return createPortal(modal, document.getElementById("modal"));
};

export default PlanModalUtil;
