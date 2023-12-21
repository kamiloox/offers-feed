import csv from "csvtojson";
import { z } from "zod";

import { parsePolishCharacters, textToSnakeCase } from "../utils/text";
import { offerSchema } from "./offerSchema";

const CSV_HEADER_LINE = 3;
export const parseAllegroOffersCsv = async (offersCsv: string) => {
  const lines = offersCsv.toString().split("\n");
  const [header, ...offers] = lines.slice(CSV_HEADER_LINE);

  if (!header) {
    throw new Error("Invalid file format. Provide valid Allegro Feed file.");
  }

  const parsedHeader = parsePolishCharacters(
    header.split(",").map(textToSnakeCase).join(",")
  );

  const result = await csv().fromString([parsedHeader, ...offers].join("\n"));

  return z.array(offerSchema).parse(result);
};
