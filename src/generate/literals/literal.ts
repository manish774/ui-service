interface literalPostProps {
  apiName: string;
  url: string;
  isHavingParams?: boolean;
}
interface literalInterfaceProps {
  apiName: string;
  requestOrQuery: any;
}
export const literalPost = ({ apiName, url }: literalPostProps) => {
  return `\n\n
    export const  ${apiName} = async (props:${apiName}Props) =>{
           const fetchData = await fetch(\`${createTemplateLiteralForUrl(url)}\`,{
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
  requestOrQuery,
}: literalInterfaceProps): string => {
  let interfaceLiterals = "";

  interfaceLiterals += `\n\n export interface ${apiName}Props {
    ${createInterface(requestOrQuery)}
  }`;

  return interfaceLiterals;
};

export const literalGet = ({
  apiName,
  url,
  isHavingParams,
}: literalPostProps) => {
  const createMethodWithOrWithoutArgs = isHavingParams
    ? `async (props:${apiName}Props)`
    : `async () `;
  return `\n\n
    export const  ${apiName} = ${createMethodWithOrWithoutArgs} =>{
           const fetchData = await fetch(\`${createTemplateLiteralForUrl(url)}\`)
          const data = await fetchData.json()
          return data;
}`;
};

const createTemplateLiteralForUrl = (templateString: string): string => {
  const regex: RegExp = /\{([^}]+)\}/g;
  const placeholders: RegExpMatchArray | null = templateString.match(regex);
  const props: { [key: string]: string } = {};
  if (placeholders) {
    placeholders.forEach((placeholder: string) => {
      const key: string = placeholder.substring(1, placeholder.length - 1);
      props[key] = `\${props?.${key}}`;
    });
  }
  const modifiedString: string = templateString.replace(
    regex,
    (match: string, placeholder: string) => {
      return props[placeholder] || match;
    },
  );
  return modifiedString;
};
