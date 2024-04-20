export const jsonData = [
  {
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
        requestOrQuery: [],
        apiName: "myGetQuery",
      },
    ],
  },
  {
    serviceName: "NewTest",
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
        requestOrQuery: [],
        apiName: "myGetQuery",
      },
      {
        method: "GET",
        url: "facebook.com",
        requestOrQuery: [],
        apiName: "myGetQuery1",
      },
    ],
  },
];
