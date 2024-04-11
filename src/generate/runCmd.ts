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
    {
      url: "https://api.github.com/users/user",
      requestOrQuery: [{ name: "name", dataType: "string" }],
      apiName: "fetchUsersNew",
      method: "POST",
    },
    {
      url: "https://api.github.com/users",
      apiName: "getUsers",
      method: "GET",
      requestOrQuery: [{}],
    },
    {
      url: "https://api.github.com/user/{id}",
      apiName: "getUsersNew",
      method: "GET",
      requestOrQuery: [{ name: "id", dataType: "string" }],
    },
    {
      method: "POST",
      url: "https://api.github.com/users/{name}/${userId}",
      requestOrQuery: [
        { name: "name", dataType: "string" },
        { name: "userId", dataType: "string" },
      ],
      apiName: "fetchAllUser",
    },
  ],
};

generateEndpoints(aa);
