import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { env } from "./utils/env";

export default defineConfig({
  name: "default",
  title: "Offers Feed",
  projectId: env.SANITY_PROJECT_ID,
  dataset: env.SANITY_DATASET,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
