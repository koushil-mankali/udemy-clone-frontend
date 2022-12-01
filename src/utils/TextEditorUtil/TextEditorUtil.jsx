import { useEffect, createRef } from "react";
import { useState } from "react";

import css from "./TextEditorUtil.module.css";

const TextEditorUtil = (props) => {
  const textEditorRef = createRef();

  const [toolOptions, setToolOptions] = useState({
    bold: false,
    italic: false,
  });

  const { editorState, setEditor } = props;

  const toolOptionHandler = (command) => {
    document.execCommand(
      command,
      false,
      document.getElementById("editor").value
    );

    setToolOptions((prev) => {
      return { ...prev, [command]: !prev[command] };
    });
  };

  useEffect(() => {
    textEditorRef.current.innerHTML = editorState;

    const el = textEditorRef.current;
    const selection = window.getSelection();
    const range = document.createRange();
    selection.removeAllRanges();
    range.selectNodeContents(el);
    range.collapse(false);
    selection.addRange(range);
  }, [editorState]);

  const textEditorHandler = (e) => {
    setEditor(e.target.innerHTML);
  };

  const selectTextHandler = (e) => {
    const selection = document.getSelection();
    console.log(e, "s", selection);
  };

  return (
    <div className={css.textEditor}>
      <div className={css.toolBar}>
        <button
          onClick={() => toolOptionHandler("bold")}
          className={[
            css.toolItem,
            toolOptions.bold ? css.toolItemActive : null,
          ].join(" ")}
        >
          B
        </button>
        <button
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
        </button>
      </div>
      <div
        id="editor"
        ref={textEditorRef}
        className={css.editor}
        contentEditable={true}
        onSelect={(e) => selectTextHandler(e)}
        onInput={(e) => textEditorHandler(e)}
        suppressContentEditableWarning={true}
      ></div>
    </div>
  );
};

export default TextEditorUtil;
