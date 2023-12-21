import { z } from "zod";

export const allegroOfferSchema = z.object({
  id_oferty: z.string(),
  kategoria_glowna: z.string(),
  podkategoria: z.string(),
  liczba_sztuk: z.string(),
  cena: z.string(),
  tytul_oferty: z.string(),
  wojewodztwo: z.string(),
  zdjecia: z.string(),
  kraj: z.string(),
  miejscowosc: z.string(),
  city: z.string().nullish(),
  opis_oferty: z.string(),
  kod_pocztowy: z.string(),
  marka: z.string(),
  rodzaj: z.string(),
});

export const offerSchema = allegroOfferSchema.transform((offer) => ({
  id: offer.id_oferty,
  brand: offer.marka,
  productType: offer.rodzaj,
  mainCategory: offer.kategoria_glowna,
  subcategory: offer.podkategoria,
  quantityAvailable: offer.liczba_sztuk,
  price: offer.cena,
  title: offer.tytul_oferty,
  voivodeship: offer.wojewodztwo,
  image: offer.zdjecia,
  country: offer.kraj,
  zipCode: offer.kod_pocztowy,
  city: offer.miejscowosc,
  description: offer.opis_oferty,
}));

export type AllegroOffer = z.infer<typeof allegroOfferSchema>;
export type Offer = z.infer<typeof offerSchema>;
