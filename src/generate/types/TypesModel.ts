export interface mPostProps {
  url: string;
  requestOrQuery: any[];
  apiName: string;
  method: "GET" | "POST";
  params?: any[];
}

export interface generateMetadataProps {
  serviceName: string;
  model: mPostProps[];
}
