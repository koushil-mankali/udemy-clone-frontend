import { useState } from "react";

import css from "./LanguageChangeCard.module.css";

import closeIcon from "/icons/close.png";

const LanguageChangeCard = (props) => {
  const { setModal } = props;
  const [active, setActive] = useState("English");

  const langs = [
    { lang: "English", code: "en" },
    { lang: "Hindi", code: "hi" },
    { lang: "Telugu", code: "tel" },
    { lang: "Marathi", code: "mt" },
    { lang: "Tamil", code: "tm" },
    { lang: "Kanada", code: "kn" },
    { lang: "Assamese", code: "as" },
    { lang: "Gujarati", code: "gj" },
    { lang: "Kashmiri", code: "ksh" },
    { lang: "Bangla", code: "bng" },
    { lang: "Malayalam", code: "mly" },
    { lang: "Punjabi", code: "pjb" },
    { lang: "Oriya", code: "ory" },
    { lang: "Manipuri", code: "mnp" },
    { lang: "Dogri", code: "dgr" },
    { lang: "Santali", code: "snt" },
    { lang: "Bodo", code: "bd" },
    { lang: "Sindhi", code: "si" },
    { lang: "Urdu", code: "urdu" },
  ];

  let changeHandler = (e) => {
    console.log(e);
    setActive(e.target.innerText || "");
  };

  return (
    <div className={css.modalBC}>
      <div className={css.modal}>
        <div className={css.ttl}>
          <span>Choose a language</span>
          <img
            src={closeIcon}
            alt="close icon"
            className={css.icon}
            onClick={() => setModal(false)}
          />
        </div>
        <div className={css.modalBdy}>
          {langs?.map((lang, id) => {
            return (
              <div
                key={id}
                className={css.langTxt}
                style={
                  active === lang.lang
                    ? {
                        outline: "1px solid var(--gray)",
                        outlineOffset: "0.5rem",
                      }
                    : {}
                }
                onClick={changeHandler}
              >
                {lang.lang}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LanguageChangeCard;
