import {
  literalForInterface,
  literalGet,
  literalPost,
} from "../literals/literal";
import { mPostProps } from "./TypesModel";

interface MethodReturnType {
  modelCode: string;
  interfaceCode: string;
  importStatement: string;
}

class Types {
  constructor() {}

  getMethod(props: mPostProps, fileName: string) {
    const { url, requestObject, apiName } = props;
    let importStatement = `import {${apiName}Props} from './${fileName}Model';`;
    let interfaces = literalForInterface({ apiName, requestObject });
    let code = literalGet({ apiName, url });

    return {
      modelCode: code,
      interfaceCode: interfaces,
      importStatement,
    };
  }

  postMethod(props: mPostProps, fileName: string): MethodReturnType {
    const { url, requestObject, apiName } = props;
    let importStatement = `import {${apiName}Props} from './${fileName}Model';`;
    let interfaces = literalForInterface({ apiName, requestObject });
    let code = literalPost({ apiName, url });

    return {
      modelCode: code,
      interfaceCode: interfaces,
      importStatement,
    };
  }
}

const Type = new Types();

export default Type;
