import { useState } from "react";

import css from "./TextEditorUtil.module.css";

const TextEditorUtil = (props) => {
  const [toolOptions, setToolOptions] = useState({
    bold: false,
    italic: false,
  });
  const { editorState, setEditor } = props;

  const editorChangeHandler = (e) => {
    let range = document.createRange();
    let sel = window.getSelection();
    range.setStartAfter(e.target.childNodes[0], e.target.childNodes[0].length);
    range.collapse(true);

    sel.removeAllRanges();
    sel.addRange(range);
    setEditor(e.target.innerText || "");
  };

  const toolOptionHandler = (item) => {
    setToolOptions((prev) => {
      return { ...prev, [item]: !prev[item] };
    });
  };

  const editorTextHandler = (e) => {
    console.log(document.getSelection().toString(), "pp");
  };

  return (
    <div className={css.textEditor}>
      <div className={css.toolBar}>
        <span
          onClick={() => toolOptionHandler("bold")}
          className={[
            css.toolItem,
            toolOptions.bold ? css.toolItemActive : null,
          ].join(" ")}
        >
          B
        </span>
        <span
          style={{
            fontStyle: "italic",
            fontFamily: "none",
          }}
          onClick={() => toolOptionHandler("italic")}
          className={[
            css.toolItem,
            toolOptions.italic ? css.toolItemActive : null,
          ].join(" ")}
        >
          I
        </span>
      </div>
      <div
        id="editor"
        className={css.editor}
        contentEditable={true}
        suppressContentEditableWarning={true}
        onInput={editorChangeHandler}
        onMouseUp={editorTextHandler}
      >
        {editorState}
      </div>
    </div>
  );
};

export default TextEditorUtil;
