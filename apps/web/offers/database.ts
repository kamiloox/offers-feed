import { Offer } from "./offerSchema";
import { client } from "../utils/sanityClient";

export const createManyOffers = (offers: Offer[]) => {
  const transaction = client.transaction();
  offers.forEach((offer) => {
    transaction.createOrReplace({
      _id: offer.id,
      _type: "offer",
      ...offer,
    });
  });

  return transaction.commit();
};

export const getAllOffers = () => {
  return client.fetch<Offer[]>(`*[_type == "offer"]`);
};

export const getOfferById = (id: string) => {
  return client.fetch<Offer>(`*[_type == "offer" && id == $id][0]`, { id });
};
