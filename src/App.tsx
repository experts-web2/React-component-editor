import React, { useState } from "react";
import ComponentToJSON from "./ComponentToJSON";
import componentString from "./constants/componentString";

function App() {
  const [code, setCode] = useState(componentString);
  return (
    <div>
      <h1>My Component</h1>
      <ComponentToJSON component={code} />
    </div>
  );
}

export default App;
