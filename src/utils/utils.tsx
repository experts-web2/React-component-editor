/**
 * Generate React Component Code
 * @param json
 * @returns
 */
export function generateReactComponent(json: string) {
  if (!json) {
    return "kindly provide a valid json";
  }

  try {
    let data = JSON.parse(json);
    const { componentName, props, propsDefaults, imports, content } = data;

    const importStatements = imports?.join("\n") || undefined;
    const propTypes =
      props
        ?.filter((prop: any) => prop.key && prop.value)
        .map((prop: any) => `  ${prop.key}: ${prop.value},`)
        .join("\n") || undefined;
    const defaultProps =
      propsDefaults
        ?.filter((prop: any) => prop.key && prop.value)
        .map((prop: any) => `  ${prop.key}: ${prop.value},`)
        .join("\n") || undefined;

    const componentCode = `
        ${importStatements}
  
        const ${componentName} = ({${propTypes && "\n" + propTypes}
        }) => {
          return (
            ${content?.trim()}
          );
        };
  
        ${componentName}.propTypes = {
        ${propTypes && "\n" + propTypes}
        };
  
        ${componentName}.defaultProps = {
        ${defaultProps && "\n" + defaultProps}
        };
  
        export default ${componentName};
         `;

    return componentCode;
  } catch (error: any) {
    return "Invalid JSON";
  }
}

/**
 * Generate JSON from React Component
 * @param component
 * @returns
 */
export function convertComponentToJSON(component: any) {
  if (!component) {
    return "kindly provide a component";
  }

  const functionNameRegex = /function\s+([a-zA-Z_$][0-9a-zA-Z_$]*)\s*\(/;
  const arrowFunctionNameRegex = /const\s*([a-zA-Z_$][0-9a-zA-Z_$]*)\s*=\s*\(/;

  let match = functionNameRegex.exec(component);
  if (!match) {
    match = arrowFunctionNameRegex.exec(component);
  }

  const componentName = match ? match[1] : undefined;
  const imports = component.match(/import .+ from ['"].+['"]/g) || undefined;
  const content =
    component.match(/(?<=return \().+(?=\))/s)?.[0].replace(/\n/g, "") ||
    undefined;

  const propTypesMatch = component.match(/propTypes\s*=\s*{([^}]+)}/);
  const defaultPropsMatch = component.match(/defaultProps\s*=\s*{([^}]+)}/);

  const props = propTypesMatch
    ? propTypesMatch[1].split(",").map(
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
    : undefined;

  const propsDefaults = defaultPropsMatch
    ? defaultPropsMatch[1].split(",").map(
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
    : undefined;

  if (!componentName && !props && !propsDefaults && !imports && !content)
    return "Invalid Component";

  return {
    componentName,
    props,
    propsDefaults,
    imports,
    content,
  };
}
