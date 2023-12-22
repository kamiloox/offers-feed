import { cleanEnv, str } from "envalid";

export const env = cleanEnv(process.env, {
  SANITY_PROJECT_ID: str(),
  SANITY_DATASET: str(),
  SANITY_API_VERSION: str(),
  SANITY_API_TOKEN: str(),
});
