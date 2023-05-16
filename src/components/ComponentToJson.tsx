import AceEditor from "react-ace";
import "ace-builds/src-noconflict/worker-javascript";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { useRef } from "react";

const ComponentToJSON: any = ({ component, codeTransformation }: any) => {
  const reactEditorRef = useRef<any>(null);
 

  const handleClick =async () => {
    if (reactEditorRef.current) {
      const editorValue = reactEditorRef.current.editor.getValue();
      codeTransformation(editorValue);
    }
  };

  return (
    <>
      <AceEditor
      ref={reactEditorRef}
        style={editorStyle}
        setOptions={{ useWorker: false }}
        defaultValue={JSON.stringify(component, null, 1)}
        value={component}
        mode="javascript"
        theme="monokai"
        // onChange={(value) => {
        //   setValue(value);
        // }}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
      />
      <button
        className="editor_btn"
        onClick={() => {
          handleClick();
          // 
        }}
      >
        Transform React Component to Json
      </button>
    </>
  );
};

export default ComponentToJSON;
const editorStyle = {
  width: "100%",
  height: "400px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  marginBottom: "10px",
};
