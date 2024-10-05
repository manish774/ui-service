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
    serviceName: "Login",
    model: [
      {
        method: "POST",
        url: "https://localhost:3000/signup",
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
    ],
  },
];
