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
    const modelCode = literalGet({ apiName, url, isHavingParams });
    if (requestOrQuery?.length) {
      const interfaceCode = literalForInterface({ apiName, requestOrQuery });
      return { modelCode, interfaceCode };
    }
    return { modelCode };
  }

  postMethod(props: mPostProps, fileName: string): MethodReturnType {
    const { url, requestOrQuery, apiName, params } = props;
    const mergeQuery = [...(requestOrQuery || []), ...(params || [])];
    return {
      modelCode: literalPost({ apiName, url }),
      interfaceCode: literalForInterface({
        apiName,
        requestOrQuery: mergeQuery,
      }),
    };
  }
}

const Type = new Types();

export default Type;
