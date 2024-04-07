export interface mPostProps {
  url: string;
  requestObject?: any[];
  apiName: string;
  method: "GET" | "POST";
  params?: any;
}

export interface generateMetadataProps {
  serviceName: string;
  model: mPostProps[];
}
