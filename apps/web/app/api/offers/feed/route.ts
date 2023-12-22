import { createManyOffers } from "../../../../offers/database";
import { parseAllegroOffersCsv } from "../../../../offers/parseAllegroOffersCsv";
import { handleFailure } from "../../../../utils/api";
import { readFileContents } from "../../../../utils/file";

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
