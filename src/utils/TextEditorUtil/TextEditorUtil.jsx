import { useState } from "react";

import css from "./TextEditorUtil.module.css";

const TextEditorUtil = (props) => {
  const [toolOptions, setToolOptions] = useState({
    bold: false,
    italic: false,
  });
  const { editorState, setEditor } = props;

  const editorChangeHandler = (e) => {
    const selection = e.getSelection;
    console.log(
      "Editor Value:",
      e.target.innerText,
      document.getSelection(),
      selection
    );
    setEditor(e.target.innerText || "");
  };

  const toolOptionHandler = (item) => {
    setToolOptions((prev) => {
      return { ...prev, [item]: !prev[item] };
    });
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
      >
        {editorState}
      </div>
    </div>
  );
};

export default TextEditorUtil;
