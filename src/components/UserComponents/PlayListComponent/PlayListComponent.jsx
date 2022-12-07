import { Fragment, useState } from "react";

import PlanModalUtil from "../../../utils/Modals/PlanModalUtil/PlanModalUtil";
import InputUtil from "../../../utils/FormUtils/InputUtil/InputUtil";
import TextAreaUtil from "../../../utils/FormUtils/TextAreaUtil/TextAreaUtil";

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
  const [editState, setEditState] = useState({
    name: "",
    desc: "",
  });

  const modalHandler = (type) => {
    switch (type) {
      case "cancel":
        setDeleteModal(false);
        setEditModal(false);
        break;
      case "edit":
        setEditModal(false);
        break;
      case "ok":
        setDeleteModal(false);
        break;
      default:
        setDeleteModal(false);
        setEditModal(false);
    }
  };

  const editChangeHandler = (e) => {
    setEditState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const EditModalContent = (
    <>
      <InputUtil
        name="name"
        type="text"
        count={true}
        countLimit={60}
        showCount={false}
        state={editState.name}
        onChange={editChangeHandler}
      />
      <TextAreaUtil
        name="desc"
        type="textarea"
        count={true}
        countLimit={200}
        showCount={false}
        state={editState.desc}
        onChange={editChangeHandler}
      />
    </>
  );

  return (
    <div className={css.outerDiv}>
      {editModal ? (
        <PlanModalUtil
          title="Edit your list"
          content={EditModalContent}
          btns={["cancel", "edit"]}
          state={editModal}
          setModal={modalHandler}
        />
      ) : null}
      {deleteModal ? (
        <PlanModalUtil
          title="Please confirm"
          content="Are you sure you want to delete your list? You will still be able to access your courses."
          btns={["cancel", "ok"]}
          state={deleteModal}
          setModal={modalHandler}
        />
      ) : null}
      <div className={css.topbar}>
        <div className={css.ttl}>{title}</div>
        <img
          src={editIcon}
          alt="icon"
          className={css.icon}
          onClick={() => setEditModal((prev) => !prev)}
        />
        <img
          src={deleteIcon}
          alt="icon"
          className={css.icon}
          onClick={() => setDeleteModal((prev) => !prev)}
        />
      </div>
      {desc ? <div className={css.desc}>{desc}</div> : null}
      <div className={css.bdy}>
        <div className={css.cards}>
          {elements?.map((ele, id) => {
            return <Fragment key={`ele-${id}`}>{ele}</Fragment>;
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
