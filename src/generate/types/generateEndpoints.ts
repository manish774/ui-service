import { generate, runFormatter } from "../generator";
import Type from "./TypesClass";
import { generateMetadataProps } from "./TypesModel";

export const generateEndpoints = (props: generateMetadataProps) => {
  if (!props || !props.model || props.model.length === 0) {
    return; // No props or empty model, nothing to generate
  }

  const serviceName = props.serviceName || "UnnamedService";
  let completeCodeString = "";
  let interfaceString = "";
  const importArr: string[] = [];
  props.model.forEach((metadata) => {
    let { modelCode, interfaceCode } =
      {
        POST: Type.postMethod,
        GET: Type.getMethod,
      }[metadata.method]?.(metadata, serviceName) || {};

    completeCodeString += modelCode || "";
    interfaceString += interfaceCode || "";
    metadata?.requestOrQuery?.length && importArr.push(metadata?.apiName);
  });

  const importString = `import {${importArr.join("Props,")}Props} from "./${serviceName}Model"`;

  // Generate scripts
  generate({
    fileName: `src/services/${serviceName}.ts`,
    code: importString + completeCodeString,
  });

  // Generate models
  generate({
    fileName: `src/services/${serviceName}Model.ts`,
    code: interfaceString,
  });

  runFormatter();
};
