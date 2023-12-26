export const getEnvVariables = () => {
  const SANITY_STUDIO_PROJECT_ID = process.env.SANITY_STUDIO_PROJECT_ID;
  const SANITY_STUDIO_DATASET = process.env.SANITY_STUDIO_DATASET;

  if (!SANITY_STUDIO_PROJECT_ID || !SANITY_STUDIO_DATASET) {
    throw new Error(
      "Missing SANITY_STUDIO_PROJECT_ID or SANITY_STUDIO_DATASET env var"
    );
  }

  return {
    SANITY_STUDIO_PROJECT_ID,
    SANITY_STUDIO_DATASET,
  };
};
