import { useEffect } from "react";
import { useState } from "react";

import css from "./TextEditorUtil.module.css";

const TextEditorUtil = (props) => {
  const tagMappings = new Map();
  tagMappings.set("bold", "strong");
  tagMappings.set("italic", "em");

  const [toolOptions, setToolOptions] = useState({
    bold: false,
    italic: false,
  });
  const [selectedText, setSelectedText] = useState({
    txt: "",
    parent: "",
  });
  const { editorState, setEditor } = props;

  const editorChangeHandler = (e) => {
    setEditor(e.target.innerText || "");
  };

  const toolOptionHandler = (item) => {
    const tag = tagMappings.get(item);
    const tagEle = tagMappings.get(item)?.toUpperCase();
    let modifiedText = "";
    modifiedText = `<${tag}>${selectedText.txt}</${tag}>`;
    if (selectedText.parent === tag?.toUpperCase()) {
      modifiedText = `</${tagEle}>${selectedText.txt}<${tagEle}>`;
    }

    setEditor((prev) => {
      return prev.replace(selectedText.txt, modifiedText);
    });
    setToolOptions((prev) => {
      return { ...prev, [item]: !prev[item] };
    });
  };

  const editorTextHandler = (e) => {
    const tagName = document.getSelection().anchorNode.parentElement.tagName;
    console.log(tagName);
    if (tagName === "STRONG") {
      setToolOptions((prev) => {
        return { ...prev, bold: true, italic: false };
      });
    } else if (tagName === "EM") {
      setToolOptions((prev) => {
        return { ...prev, bold: false, italic: true };
      });
    } else {
      setToolOptions((prev) => {
        return { ...prev, bold: false, italic: false };
      });
    }
    setSelectedText({
      txt: document.getSelection().toString() || "",
      parent: tagName,
    });
  };

  useEffect(() => {
    document.querySelector("#editor").innerHTML = editorState;
  }, [editorState]);

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
      ></div>
    </div>
  );
};

export default TextEditorUtil;
