import { useEffect, createRef } from "react";
import { useState } from "react";

import css from "./TextEditorUtil.module.css";

const TextEditorUtil = (props) => {
  const { label, disclaimer } = props;
  const textEditorRef = createRef();
  const allowedFormats = ["B", "I"];
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
    const parentElement = selection?.anchorNode?.parentElement;
    const ancestorParentElement =
      selection?.anchorNode?.parentElement?.parentElement;

    if (
      allowedFormats.includes(parentElement.tagName) &&
      allowedFormats.includes(ancestorParentElement.tagName)
    ) {
      setToolOptions({ bold: true, italic: true });
    } else if (parentElement.tagName === "B") {
      setToolOptions({ bold: true, italic: false });
    } else if (parentElement.tagName === "I") {
      setToolOptions({ bold: false, italic: true });
    }
  };

  return (
    <div className={css.editorBox}>
      {label ? <label className={css.label}>{label}</label> : null}
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
          onMouseUp={(e) => selectTextHandler(e)}
          onInput={(e) => textEditorHandler(e)}
          suppressContentEditableWarning={true}
        ></div>
      </div>
      <div className={css.note}>{disclaimer}</div>
    </div>
  );
};

export default TextEditorUtil;
