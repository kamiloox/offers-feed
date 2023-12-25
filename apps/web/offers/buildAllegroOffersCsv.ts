import { Offer } from "./offerSchema";

export const buildAllegroOffersCsv = (offers: Offer[]) => {
  const csvHeader = "Product ID, Quantity, Standard Price";

  const csvData = offers
    .map(
      (offer) =>
        `${offer.productId}, ${offer.quantityAvailable}, ${offer.price}`
    )
    .join("\n");

  return `${csvHeader}\n${csvData}`;
};
