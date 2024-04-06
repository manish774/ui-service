import { generate, runFormatter } from "../generator";

interface mPostProps {
  url: string;
  requestObject: any[];
  fileName: string;
  apiName: string;
}

interface postProps {
  serviceName: string;
  model: mPostProps[];
}
const storInterfaces = {};

const mPost = (props: postProps) => {
  let all = "";
  let interfaces = "";
  let importStatement = "";

  props.model.forEach((element) => {
    const { url, requestObject, apiName, fileName } = element;

    importStatement += `import {${apiName}Props} from './${props?.serviceName}Model';`;

    const createInterface = () => {
      let ic = ``;
      for (let i = 0; i < requestObject?.length; i++) {
        ic += `${requestObject[i].name}: ${requestObject[i].dataType};`;
      }
      return ic;
    };

    interfaces += `\n\n export interface ${apiName}Props {
    ${createInterface()}
  }`;

    let code = `\n\n
          export const  ${apiName} = async (props:${apiName}Props) =>{
                 const fetchData = await fetch('${url}',{
                      method:'POST',
                      body: JSON.stringify(props)
                  })
                const data = await fetchData.json()
                return data;
    }`;

    all += code;
  });

  generate({
    fileName: `src/services/${props?.serviceName}.ts`,
    code: importStatement + all,
  });
  generate({
    fileName: `src/services/${props?.serviceName}Model.ts`,
    code: interfaces,
  });
};

const mGet = (props:) => {
  
};

export const generateTypes = {
  post: (props: postProps) => {
    mPost(props);
    runFormatter();
  },

  get: (props) => {
    mGet(props);
    runFormatter();
  },
};
