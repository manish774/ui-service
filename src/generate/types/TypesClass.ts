import {
  literalForInterface,
  literalGet,
  literalPost,
} from "../literals/literal";
import { mPostProps } from "./TypesModel";

interface MethodReturnType {
  modelCode: string;
  interfaceCode?: string;
  importStatement: string;
}

class Types {
  constructor() {}

  getMethod(props: mPostProps, fileName: string) {
    const { url, requestOrQuery, apiName } = props;
    let importStatement = `import {${apiName}Props} from './${fileName}Model';`;
    let interfaces = literalForInterface({ apiName, requestOrQuery });
    let code = literalGet({ apiName, url });
    const completeLiteral: MethodReturnType = {
      modelCode: code,
      importStatement,
    };

    if (requestOrQuery?.length) {
      completeLiteral.interfaceCode = interfaces;
    }

    return completeLiteral;
  }

  postMethod(props: mPostProps, fileName: string): MethodReturnType {
    const { url, requestOrQuery, apiName, params } = props;
    let importStatement = `import {${apiName}Props} from './${fileName}Model';`;
    const mergeQuery = [...(requestOrQuery || []), ...(params || [])];

    let interfaces = literalForInterface({
      apiName,
      requestOrQuery: mergeQuery,
    });
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
