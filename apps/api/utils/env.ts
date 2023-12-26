import { cleanEnv, str } from "envalid";

export const env = cleanEnv(process.env, {
  SANITY_STUDIO_PROJECT_ID: str(),
  SANITY_STUDIO_DATASET: str(),
});
