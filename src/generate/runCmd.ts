import { generateEndpoints } from "./types/generateEndpoints";
import { generateMetadataProps } from "./types/TypesModel";
import { jsonData } from "../dummy/sample";

(jsonData as generateMetadataProps[]).forEach((item) =>
  generateEndpoints(item),
);
