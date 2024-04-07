interface literalPostProps {
  apiName: string;
  url: string;
}
interface literalInterfaceProps {
  apiName: string;
  requestObject: any;
}
export const literalPost = ({ apiName, url }: literalPostProps) => {
  return `\n\n
    export const  ${apiName} = async (props:${apiName}Props) =>{
           const fetchData = await fetch('${url}',{
                method:'POST',
                body: JSON.stringify(props)
            })
          const data = await fetchData.json()
          return data;
}`;
};

const createInterface = (requestObject: any) => {
  let ic = ``;
  for (let i = 0; i < requestObject?.length; i++) {
    ic += `${requestObject[i].name}: ${requestObject[i].dataType};`;
  }
  return ic;
};

export const literalForInterface = ({
  apiName,
  requestObject,
}: literalInterfaceProps): string => {
  let interfaceLiterals = "";

  interfaceLiterals += `\n\n export interface ${apiName}Props {
    ${createInterface(requestObject)}
  }`;

  return interfaceLiterals;
};

export const literalGet = ({ apiName, url }: literalPostProps) => {
  return `\n\n
    export const  ${apiName} = async (props:${apiName}Props) =>{
           const fetchData = await fetch('${url}')
          const data = await fetchData.json()
          return data;
}`;
};
