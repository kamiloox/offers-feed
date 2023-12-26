import { getAllOffers } from "../../../offers/database";
import { handleFailure } from "../../../utils/api";

export const GET = async () => {
  try {
    const offers = await getAllOffers();

    return Response.json({ error: false, data: offers });
  } catch (error) {
    return handleFailure(error);
  }
};
