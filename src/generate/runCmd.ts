import { generateTypes } from "./types/Types";

const aa = {
  serviceName: "tickets",
  model: [
    {
      url: "https://facebook.com",
      requestObject: [
        { name: "name", dataType: "string" },
        { name: "userId", dataType: "string" },
        { name: "userAge", dataType: "number" },
      ],
      fileName: "userService.ts",
      apiName: "fetchUsers",
    },
    {
      url: "https://facebook.com/user",
      requestObject: [{ name: "name", dataType: "string" }],
      fileName: "userService.ts",
      apiName: "fetchUsersNew",
    },
  ],
};

generateTypes.post(aa);
