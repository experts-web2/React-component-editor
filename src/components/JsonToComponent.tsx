import { convertComponentToJSON } from "../utils/utils";
import AceEditor from "react-ace";
import "../App.css";
import "ace-builds/src-noconflict/worker-javascript";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { useRef } from "react";

function JsonToComponent({ component, generateComponent }: any) {
  const editorRef = useRef<any>(null);

  const handleClick = () => {
    if (editorRef.current) {
      console.log("editorRef.current=", editorRef.current.editor.getValue());
      const editorValue = editorRef.current.editor.getValue();
      generateComponent(editorValue);
    }
  };

  return (
    <>
      <AceEditor
        style={editorStyle}
        ref={editorRef}
        setOptions={{ useWorker: false }}
        defaultValue={JSON.stringify(component, null, 2)}
        value={JSON.stringify(component, null, 2)}
        mode="javascript"
        theme="monokai"
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
      />
      <button
        style={buttonStyle}
        onClick={() => {
          handleClick();
        }}
      >
        Transform Json to React Component
      </button>
    </>
  );
}

export default JsonToComponent;

const editorStyle = {
  width: "100%",
  height: "400px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  marginRight: "30px",
};

const buttonStyle = {
  padding: "8px 16px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginLeft: "140px",
  marginTop: "50px",
};

// let newValue = "";
// const setValue = (value: any) => {
//   newValue = value;
//   console.log("Type=", typeof newValue, "newValue=", newValue);
// };
