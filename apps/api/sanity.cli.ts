import { defineCliConfig } from "sanity/cli";
import { getEnvVariables } from "./utils/env";

const env = getEnvVariables();

export default defineCliConfig({
  api: {
    projectId: env.SANITY_STUDIO_PROJECT_ID,
    dataset: env.SANITY_STUDIO_DATASET,
  },
});
