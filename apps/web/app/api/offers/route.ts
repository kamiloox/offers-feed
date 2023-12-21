import { readFileContents } from "../../../utils/file";
import { parseAllegroOffersCsv } from "../../../offers/parseAllegroOffersCsv";

export const POST = async (request: Request) => {
  try {
    const data = await request.formData();

    const offersFile = data.get("offers") as File | null;

    if (!offersFile) {
      throw new Error("No file provided.");
    }

    const offersContent = await readFileContents(offersFile);

    const offers = await parseAllegroOffersCsv(offersContent);

    // upload to sanity

    return Response.json({ error: false, data: offers });
  } catch (error) {
    console.error(error);

    return Response.json({ error: true, data: null });
  }
};
