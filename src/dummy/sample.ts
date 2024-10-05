interface query {
  name: string;
  dataType: string;
}
interface model {
  method: string;
  url: string;
  requestOrQuery: query[];
  apiName: string;
}
interface JsonDataProps {
  serviceName: string;
  model: model[];
}
export const jsonData: JsonDataProps[] = [
  {
    serviceName: "User",
    model: [
      {
        method: "POST",
        url: "https://localhost:4000/signup",
        requestOrQuery: [
          { name: "firstName", dataType: "string" },
          { name: "lastName", dataType: "string" },
          {
            name: "emailId",
            dataType: "string",
          },
          {
            name: "string",
            dataType: "string",
          },
          {
            name: "gender",
            dataType: "string",
          },
          {
            name: "skills",
            dataType: "any",
          },
        ],
        apiName: "signup",
      },
      {
        method: "POST",
        url: "https://localhost:4000/login",
        requestOrQuery: [
          { name: "email", dataType: "string" },
          { name: "password", dataType: "string" },
        ],
        apiName: "login",
      },
    ],
  },
];
