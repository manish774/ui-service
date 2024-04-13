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
      method: "POST",
      url: "https://api.github.com/users/{name}/${userId}",
      requestOrQuery: [
        { name: "name", dataType: "string" },
        { name: "userId", dataType: "string" },
      ],
      apiName: "fetchUsers2",
    },
    {
      method: "POST",
      url: "https://api.github.com/users/{name}/${userId}",
      requestOrQuery: [
        { name: "name", dataType: "string" },
        { name: "userId", dataType: "string" },
      ],
      apiName: "fetchUsers1",
    },
    {
      method: "GET",
      url: "gacebook.com",
      requestOrQuery: [
        { name: "name", dataType: "string" },
        { name: "userId", dataType: "string" },
      ],
      apiName: "myGetQuery",
    },
  ],
};

generateEndpoints(aa);
