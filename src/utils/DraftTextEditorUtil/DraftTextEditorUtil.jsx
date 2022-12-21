import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Button1 from "../Buttons/Button1/Button1";

import css from "./DraftTextEditorUtil.module.css";

const DraftTextEditorUtil = (props) => {
  const {
    dur = "",
    editorState = "",
    setEditorState = () => {},
    cancelHandler = () => {},
    saveHandler = () => {},
  } = props;

  const editorHandler = (e) => {
    setEditorState(e);
  };

  return (
    <div className={css.outerDiv}>
      <div className={css.editorBox}>
        {dur ? (
          <div className={css.det}>
            <div className={css.dur}>{dur}</div>
          </div>
        ) : null}
        <div className={css.editor}>
          <ReactQuill
            theme="snow"
            value={editorState}
            onChange={editorHandler}
          />
        </div>
      </div>
      <div className={css.btns}>
        <Button1 txt="Cancel" onClick={cancelHandler} />
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
