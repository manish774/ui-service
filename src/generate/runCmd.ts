import { generateEndpoints } from "./types/generateEndpoints";
import { generateMetadataProps } from "./types/TypesModel";

const aa: generateMetadataProps = {
  serviceName: "ticketsNew",
  model: [
    {
      method: "POST",
      url: "https://api.github.com/users/{name}/${userId}",
      requestOrQuery: [
        { name: "name", dataType: "string" },
        { name: "userId", dataType: "string" },
      ],
      apiName: "fetchUsers",
    },
   
  ],
};

generateEndpoints(aa);
