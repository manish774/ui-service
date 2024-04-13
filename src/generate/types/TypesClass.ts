import {
  literalForInterface,
  literalGet,
  literalPost,
} from "../literals/literal";
import { mPostProps } from "./TypesModel";

interface MethodReturnType {
  modelCode: string;
  interfaceCode?: string;
  importStatement?: string;
}

class Types {
  constructor() {}

  getMethod(props: mPostProps, fileName: string) {
    const { url, requestOrQuery, apiName } = props;
    const isHavingParams = requestOrQuery?.length > 0;
    let code = literalGet({ apiName, url, isHavingParams });
    const completeLiteral: MethodReturnType = {
      modelCode: code,
    };

    if (requestOrQuery?.length) {
      let importStatement = `import {${apiName}Props} from './${fileName}Model';`;
      let interfaces = literalForInterface({ apiName, requestOrQuery });
      completeLiteral.interfaceCode = interfaces;
      completeLiteral.importStatement = importStatement;
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
