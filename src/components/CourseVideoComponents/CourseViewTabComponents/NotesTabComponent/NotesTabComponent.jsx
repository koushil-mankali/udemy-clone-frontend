import { useState } from "react";

import DraftTextEditorUtil from "../../../../utils/DraftTextEditorUtil/DraftTextEditorUtil";

import css from "./NotesTabComponent.module.css";

const NotesTabComponent = () => {
  const [editorState, setEditorState] = useState("");

  const editClickHanlder = () => {
    console.log("edit");
  };
  const deleteClickHanlder = () => {
    console.log("delete");
  };
  const saveHandler = (value) => {
    console.log(value);
  };

  return (
    <div className={css.outerDiv}>
      <DraftTextEditorUtil
        catTtl="Sample"
        vidTtl="sample"
        editorState={editorState}
        setEditorState={setEditorState}
        editClickHanlder={editClickHanlder}
        deleteClickHanlder={deleteClickHanlder}
        saveHandler={saveHandler}
      />
    </div>
  );
};

export default NotesTabComponent;
