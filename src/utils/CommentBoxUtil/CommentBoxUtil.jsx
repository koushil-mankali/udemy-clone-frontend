import { useState } from "react";
import { Link } from "react-router-dom";

import css from "./CommentBoxUtil.module.css";

import upArrowCircleBoldIcon from "/icons/up-arrow-circle-bold.png";
import upArrowCircleIcon from "/icons/up-arrow-circle.png";
import chatIcon from "/icons/chat.png";

const CommentBoxUtil = (props) => {
  const {
    cmmntId = 0,
    nameDirection = "bottom",
    name = "",
    img = "",
    ttl = "",
    cnt = "",
    upvotes = 0,
    comments = 0,
    commentsLink = "",
    lecture = 0,
    date = {
      y: 2020,
      m: 12,
      d: 12,
    },
  } = props.data;
  const [state, setState] = useState({
    upvote: false,
    comment: false,
  });

  const cred = (
    <div className={css.cred}>
      <div className={[css.name, css.credTxt].join(" ")}>{name}</div>
      <div className={[css.lect, css.credTxt].join(" ")}>Lecture {lecture}</div>
      <div className={[css.date, css.credTxt].join(" ")}>
        1 hour
        <span>ago</span>
      </div>
    </div>
  );

  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.pc1}>
          <div className={css.p1}>
            <img src={img} alt="profile pic" className={css.profileIcon} />
          </div>
          <div className={css.p2}>
            {nameDirection === "top" ? cred : null}
            <div className={css.ttl}>{ttl}</div>
            <div className={css.cnt}>{cnt}</div>
            {nameDirection === "bottom" ? cred : null}
          </div>
        </div>
        <div className={css.pc2}>
          <div className={css.p2In}>
            <span
              className={css.p2Box}
              onClick={() =>
                setState((p) => {
                  return { ...p, upvote: !p.upvote };
                })
              }
            >
              <span className={css.p2Txt}>{upvotes}</span>
              <img
                className={state.upvote ? css.p2Iconf2 : css.p2Icon}
                src={state.upvote ? upArrowCircleBoldIcon : upArrowCircleIcon}
                alt="upvotes"
              />
            </span>
          </div>
          <Link to={commentsLink} className={css.p2In}>
            <span className={css.p2Box}>
              <span className={css.p2Txt}>{upvotes}</span>
              <img className={css.p2Icon} src={chatIcon} alt="upvotes" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommentBoxUtil;
