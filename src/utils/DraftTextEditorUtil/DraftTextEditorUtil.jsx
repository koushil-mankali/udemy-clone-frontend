import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Button1 from "../Buttons/Button1/Button1";

import pencilIcon from "/icons/pencil.png";
import deleteIcon from "/icons/delete.png";

import css from "./DraftTextEditorUtil.module.css";

const DraftTextEditorUtil = (props) => {
  const {
    editorState = "",
    setEditorState = () => {},
    catTtl = "",
    vidTtl = "",
    editClickHanlder = () => {},
    deleteClickHanlder = () => {},
    saveHandler = () => {},
  } = props;

  const editorHandler = (e) => {
    setEditorState(e);
  };

  return (
    <div className={css.outerDiv}>
      <div
        className={css.editorBox}
        style={{
          display: catTtl.length > 0 || vidTtl.length > 0 ? "block" : "flex",
        }}
      >
        {catTtl.length > 0 || vidTtl.length > 0 ? (
          <div className={css.detWithTTl}>
            <div className={css.detCnt}>
              <div className={css.dur}>1:45</div>
              <strong className={css.detTxt}>{catTtl}</strong>
              <div className={css.detTxt}>{vidTtl}</div>
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
        ) : (
          <div className={css.det}>
            <div className={css.dur}>1:45</div>
          </div>
        )}
        <div className={css.editor}>
          <ReactQuill
            theme="snow"
            value={editorState}
            onChange={editorHandler}
          />
        </div>
      </div>
      <div className={css.btns}>
        <Button1 txt="Cancel" />
        <Button1
          onClick={() => saveHandler(editorState)}
          txt="Save note"
          color="var(--white)"
          bck="var(--light-gray2)"
          hovBck="var(--gray)"
        />
      </div>
    </div>
  );
};

export default DraftTextEditorUtil;
