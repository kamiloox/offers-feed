import { defineCliConfig } from "sanity/cli";
import { env } from "./utils/env";

export default defineCliConfig({
  api: {
    projectId: env.SANITY_PROJECT_ID,
    dataset: env.SANITY_DATASET,
  },
});
