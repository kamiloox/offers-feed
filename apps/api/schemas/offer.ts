import { defineField, defineType } from "sanity";

export const offerSchema = defineType({
  name: "offer",
  title: "Offer",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "Id",
      type: "string",
    }),
    defineField({
      name: "brand",
      title: "Brand",
      type: "string",
    }),
    defineField({
      name: "productType",
      title: "Product Type",
      type: "string",
    }),
    defineField({
      name: "mainCategory",
      title: "Main Category",
      type: "string",
    }),
    defineField({
      name: "subcategory",
      title: "Subcategory",
      type: "string",
    }),
    defineField({
      name: "quantityAvailable",
      title: "Quantity Available",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "voivodeship",
      title: "Voivodeship",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "string",
    }),
    defineField({
      name: "country",
      title: "Country",
      type: "string",
    }),
    defineField({
      name: "zipCode",
      title: "Zip Code",
      type: "string",
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
  ],
});
