export const handleFailure = (error: unknown) => {
  console.error(error);

  const errorMessage = error instanceof Error ? error.message : "Unknown error";

  return Response.json(
    { error: true, data: null },
    { status: 500, statusText: errorMessage }
  );
};
