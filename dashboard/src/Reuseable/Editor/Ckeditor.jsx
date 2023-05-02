import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CkEditor = (props) => {
  const { editorContent, setEditorContent } = props;

  const config = {
    allowedContent: true,
    filebrowserImageUploadUrl: "http://localhost:5000/api/upload/image",
  };

  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data={editorContent}
        onReady={(editor) => {
          // You can store the "editor" reference to use it later.
          console.log("Editor is ready to use!", editor);
        }}
        config={{
          ckfinder: {
            uploadUrl: "http://localhost:5000/api/upload/image",
          },
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setEditorContent(data);
        }}
      />
    </>
  );
};

export default CkEditor;
