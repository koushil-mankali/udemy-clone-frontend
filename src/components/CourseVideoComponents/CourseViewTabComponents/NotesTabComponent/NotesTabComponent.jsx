import { useState } from "react";

import DraftTextEditorUtil from "../../../../utils/DraftTextEditorUtil/DraftTextEditorUtil";
import SelectDropdownUtil from "../../../../utils/FormUtils/SelectDropdownUtil/SelectDropdownUtil";

import css from "./NotesTabComponent.module.css";

import pencilIcon from "/icons/pencil.png";
import deleteIcon from "/icons/delete.png";

const NotesTabComponent = () => {
  const [showEditor, setShowEditor] = useState(false);
  const [editorState, setEditorState] = useState("");
  const [filters, setFilers] = useState({
    lectures: {},
    recomended: {},
  });

  const fakeData = {
    playTime: "1:45",
    catTtl: "s",
    vidTtl: "s",
  };

  const editClickHanlder = () => {
    console.log("edit");
  };
  const deleteClickHanlder = () => {
    console.log("delete");
    setShowEditor(false);
  };
  const cancelHandler = () => {
    setShowEditor(false);
  };
  const saveHandler = (value) => {
    console.log(value);
    setShowEditor(false);
  };

  const sortByOptions1 = [
    {
      key: "All Lectures",
      value: "all lectures",
    },
    {
      key: "Current Lecture",
      value: "current lecture",
    },
  ];

  const sortByOptions2 = [
    {
      key: "Sort by Most Recent",
      value: "sort by most recent",
    },
    {
      key: "Sort by Most Oldest",
      value: "sort by most oldest",
    },
  ];

  return (
    <div className={css.outerDiv}>
      {showEditor ? null : (
        <button
          className={css.noteBtn}
          onClick={() => setShowEditor((p) => !p)}
        >
          <span className={css.btnTxt}>
            Edit your note at {fakeData.playTime}
          </span>
          <span>
            <img src={pencilIcon} alt="edit" className={css.editIcon} />
          </span>
        </button>
      )}
      {showEditor ? (
        <DraftTextEditorUtil
          dur="1:45"
          editorState={editorState}
          setEditorState={setEditorState}
          editClickHanlder={editClickHanlder}
          deleteClickHanlder={deleteClickHanlder}
          cancelHandler={cancelHandler}
          saveHandler={saveHandler}
        />
      ) : null}
      <div className={css.filtersBox}>
        <SelectDropdownUtil
          id="filter1"
          filterType="lectures"
          defaultValue={sortByOptions1[0]}
          value={filters.lectures}
          setValue={setFilers}
          multipleOptions={false}
          options={sortByOptions1}
          selectBoxCss={{ height: "auto" }}
        />
        <SelectDropdownUtil
          id="filter2"
          filterType="recomended"
          defaultValue={sortByOptions2[0]}
          value={filters.recomended}
          setValue={setFilers}
          multipleOptions={false}
          options={sortByOptions2}
          selectBoxCss={{ height: "auto" }}
        />
      </div>
      <div>
        <div className={css.detWithTTl}>
          <div className={css.detCnt}>
            <div className={css.dur}>1:45</div>
            <strong className={css.detTxt}>{fakeData.catTtl}</strong>
            <div className={css.detTxt}>{fakeData.vidTtl}</div>
          </div>
          <div className={css.optionBtns}>
            <div className={css.optionBtn} onClick={editClickHanlder}>
              <img alt="edit" src={pencilIcon} className={css.optionIcon} />
            </div>
            <div className={css.optionBtn} onClick={deleteClickHanlder}>
              <img alt="edit" src={deleteIcon} className={css.optionIcon} />
            </div>
          </div>
        </div>
        <DraftTextEditorUtil
          editorState={editorState}
          setEditorState={setEditorState}
          editClickHanlder={editClickHanlder}
          deleteClickHanlder={deleteClickHanlder}
          cancelHandler={cancelHandler}
          saveHandler={saveHandler}
        />
      </div>
    </div>
  );
};

export default NotesTabComponent;
