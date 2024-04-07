import { generate, runFormatter } from "../generator";
import Type from "./TypesClass";
import { generateMetadataProps } from "./TypesModel";

export const generateEndpoints = (props: generateMetadataProps) => {
  let completeCodeString: string = "";
  let importString: string = "";
  let interfaceString: string = "";
  let fileName: string = props?.serviceName;

  props?.model?.forEach((metadata) => {
    if (metadata.method === "POST") {
      const { modelCode, interfaceCode, importStatement } = Type.postMethod(
        metadata,
        props?.serviceName,
      );
      completeCodeString += modelCode;
      interfaceString += interfaceCode;
      importString += importStatement;
    }
    if (metadata.method === "GET") {
      const { modelCode, interfaceCode, importStatement } = Type.getMethod(
        metadata,
        props?.serviceName,
      );
      completeCodeString += modelCode;
      interfaceString += interfaceCode;
      importString += importStatement;
    }

    generate({
      fileName: `src/services/${props?.serviceName}.ts`,
      code: importString + completeCodeString,
    });
    generate({
      fileName: `src/services/${props?.serviceName}Model.ts`,
      code: interfaceString,
    });
    runFormatter();
  });
};
