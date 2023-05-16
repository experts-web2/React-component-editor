import React, { useState } from "react";
import JsonToComponent from "./components/JsonToComponent";
import ComponentToJson from "./components/ComponentToJson";
import { convertComponentToJSON, generateReactComponent } from "./utils/utils";
import "./App.css";

function App() {
  const [reactCode, setReactCode] = useState<any>();
  const [jsonCode, setJsonCode] = useState<any>();

  const formReactToJson = (reactCode: string) => {
    const json: any = convertComponentToJSON(reactCode);
    setJsonCode(json);
    setReactCode(reactCode);
  };

  const transformJsonToReact = (newValue: any) => {
    const jsonToReact = generateReactComponent(newValue);
    setReactCode(jsonToReact);
  };

  return (
    <div>
      <div className="container">
        <div className="editor-container">
          <h1 className="heading">React Into JSON</h1>
          <div className="editor-container">
            <ComponentToJson
              component={reactCode}
              codeTransformation={formReactToJson}
            />
          </div>
        </div>
        <div className="editor-container">
          <h1 className="heading">JSON Into ReactComponent</h1>
          <div className="editor-container">
            <JsonToComponent
              generateComponent={transformJsonToReact}
              component={jsonCode}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
