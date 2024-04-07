import { generateEndpoints } from "./types/generateEndpoints";
import { generateMetadataProps } from "./types/TypesModel";

const aa: generateMetadataProps = {
  serviceName: "ticketsNew",
  model: [
    {
      method: "POST",
      url: "https://api.github.com/users",
      requestObject: [
        { name: "name", dataType: "string" },
        { name: "userId", dataType: "string" },
        { name: "userAge", dataType: "number" },
      ],
      apiName: "fetchUsers",
    },
    {
      url: "https://api.github.com/users/user",
      requestObject: [{ name: "name", dataType: "string" }],
      apiName: "fetchUsersNew",
      method: "POST",
    },
    {
      url: "https://api.github.com/users",
      apiName: "getUsers",
      method: "GET",
    },
  ],
};

generateEndpoints(aa);
