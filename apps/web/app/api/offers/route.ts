import { readFileContents } from "../../../utils/file";
import { parseAllegroOffersCsv } from "../../../offers/parseAllegroOffersCsv";
import { createManyOffers, getAllOffers } from "../../../offers/database";

const handleFailure = (error: unknown) => {
  console.error(error);

  const errorMessage = error instanceof Error ? error.message : "Unknown error";

  return Response.json(
    { error: true, data: null },
    { status: 500, statusText: errorMessage }
  );
};

export const POST = async (request: Request) => {
  try {
    const data = await request.formData();

    const offersFile = data.get("offers") as File | null;

    if (!offersFile) {
      throw new Error("No file provided.");
    }

    const offersContent = await readFileContents(offersFile);

    const offers = await parseAllegroOffersCsv(offersContent);

    await createManyOffers(offers);

    return Response.json({ error: false, data: offers });
  } catch (error) {
    handleFailure(error);
  }
};

export const GET = async () => {
  try {
    const offers = await getAllOffers();

    return Response.json({ error: false, data: offers });
  } catch (error) {
    handleFailure(error);
  }
};
