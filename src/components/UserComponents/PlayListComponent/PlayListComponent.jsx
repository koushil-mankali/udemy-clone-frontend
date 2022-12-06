import { useState } from "react";

import editIcon from "/icons/pencil.png";
import deleteIcon from "/icons/delete.png";

import css from "./PlayListComponent.module.css";

const PlayListComponent = (props) => {
  const {
    title = "",
    desc = "",
    elements = [],
    seeMore = false,
    getMoreDataHandler = () => {},
  } = props;

  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <div className={css.outerDiv}>
      <div className={css.topbar}>
        <div className={css.ttl}>{title}</div>
        <img src={editIcon} alt="icon" className={css.icon} />
        <img src={deleteIcon} alt="icon" className={css.icon} />
      </div>
      {desc ? <div className={css.desc}>{desc}</div> : null}
      <div className={css.bdy}>
        <div className={css.cards}>
          {elements?.map((ele) => {
            return ele;
          })}
        </div>
        {seeMore ? (
          <div className={css.seeMoreBtn} onClick={getMoreDataHandler}>
            See More
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PlayListComponent;
