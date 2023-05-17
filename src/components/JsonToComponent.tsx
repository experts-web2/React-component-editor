import {  useMemo, useRef } from "react";
import AceEditor from "react-ace";
import "../App.css";
import "ace-builds/src-noconflict/worker-javascript";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

/**
 * Convert JSON to React Component
 * @param param0
 * @returns
 */
interface Props {
  jsonCode: string;
  generateReactCode: (jsonCode: any) => void;
}

function JsonToComponent({ jsonCode, generateReactCode }: Props) {
  const editorReference = useRef<any>(null);
  const jsonToReact = () => {
    if (editorReference?.current?.editor?.getValue() !== "") {
      generateReactCode(editorReference?.current?.editor?.getValue());
    }
  };

  useMemo(() => {
    editorReference?.current?.editor?.setValue(JSON.stringify(jsonCode, null, 2));
  }, [jsonCode]);

  return (
    <>
      <AceEditor
        style={editorStyle}
        ref={editorReference}
        setOptions={{ useWorker: false }}
        mode="javascript"
        theme="monokai"
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
      />
      <button
        style={buttonStyle}
        onClick={() => {
          jsonToReact();
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
