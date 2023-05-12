import React from "react";

function convertComponentToJSON(component: any) {
  if (!component) {
    return null;
  }

  const functionNameRegex = /function\s+([a-zA-Z_$][0-9a-zA-Z_$]*)\s*\(/;
  const arrowFunctionNameRegex = /const\s*([a-zA-Z_$][0-9a-zA-Z_$]*)\s*=\s*\(/;

  let match = functionNameRegex.exec(component);
  if (!match) {
    match = arrowFunctionNameRegex.exec(component);
  }

  const componentName = match ? match[1] : undefined;
  const imports = component.match(/import .+ from ['"].+['"]/g) || [];
  const content =
    component.match(/(?<=return \().+(?=\))/s)?.[0].replace(/\n/g, "") || "";

  const propTypesMatch = component.match(/propTypes\s*=\s*{([^}]+)}/);
  const defaultPropsMatch = component.match(/defaultProps\s*=\s*{([^}]+)}/);

  const props = propTypesMatch
    ? propTypesMatch[1]
        .split(",")
        .map(
          (prop: {
            trim: () => {
              (): any;
              new (): any;
              split: { (arg0: string): [any, any]; new (): any };
            };
          }) => {
            const [key, value] = prop.trim().split(":");
            return { key, value };
          }
        )
    : [];

  const propsDefaults = defaultPropsMatch
    ? defaultPropsMatch[1]
        .split(",")
        .map(
          (prop: {
            trim: () => {
              (): any;
              new (): any;
              split: { (arg0: string): [any, any]; new (): any };
            };
          }) => {
            const [key, value] = prop.trim().split(":");
            return { key, value };
          }
        )
    : [];

  return {
    componentName,
    props,
    propsDefaults,
    imports,
    content,
  };
}

function ComponentToJSON({ component }: any) {
  const json = convertComponentToJSON(component);
  return <pre>{JSON.stringify(json, null, 2)}</pre>;
}

export default ComponentToJSON;
