import React, { useState } from "react";
import JsonToComponent from "./components/JsonToComponent";
import ComponentToJson from "./components/ComponentToJson";
import { convertComponentToJSON, generateReactComponent } from "./utils/utils";
import "./App.css";

function App() {
  const [reactCode, setReactCode] = useState<string>();
  const [jsonCode, setJsonCode] = useState<any>();

  const transformReactToJson = (reactCode: string) => {
    const jsonCode: any = convertComponentToJSON(reactCode);
    setJsonCode(jsonCode);
  };

  const transformJsonToReact = (jsonCode: string) => {
    const jsonToReact: string = generateReactComponent(jsonCode);
    setReactCode(jsonToReact);
  };

  return (
    <div>
      <div className="container">
        <div className="editor-container">
          <h1 className="heading">React Editor</h1>
          <div className="editor-container">
            <ComponentToJson
              reactCode={reactCode}
              generateJsonCode={transformReactToJson}
            />
          </div>
        </div>
        <div className="editor-container">
          <h1 className="heading">JSON Editor</h1>
          <div className="editor-container">
            <JsonToComponent
              generateReactCode={transformJsonToReact}
              jsonCode={jsonCode}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
