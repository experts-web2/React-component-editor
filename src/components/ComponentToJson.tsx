import AceEditor from "react-ace";
import "ace-builds/src-noconflict/worker-javascript";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { useMemo, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

/**
 * React Component to JSON
 * @param param0
 * @returns
 */

interface Props {
  reactCode: any;
  generateJsonCode: (reactCode: string) => void;
}
const ComponentToJSON = ({ reactCode, generateJsonCode }: Props) => {
  const editorReference = useRef<any>(null);

  const convertToJSON = () => {
    if (editorReference?.current?.editor?.getValue() !== "") {
      generateJsonCode(editorReference?.current?.editor?.getValue());
    }
  };

  useMemo(() => {
    editorReference?.current?.editor?.setValue(reactCode);
  }, [reactCode]);

  return (
    <>
      <AceEditor
        ref={editorReference}
        style={editorStyle}
        setOptions={{ useWorker: false }}
        mode="javascript"
        theme="monokai"
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
      />
      <button
        className="editor_btn"
        onClick={() => {
          convertToJSON();
        }}
      >
        Convert to JSON
        <span>
          {" "}
          <FaArrowRight style={icon} />
        </span>
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
const icon = {
  marginLeft: "10px",
  marginTop: "5px",
};
