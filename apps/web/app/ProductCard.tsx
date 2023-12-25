import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Offer } from "../offers/offerSchema";
import Image from "next/image";

type Props = Pick<
  Offer,
  "title" | "price" | "image" | "quantityAvailable" | "mainCategory"
> & {
  href: string;
};

export const ProductCard = ({
  image,
  title,
  price,
  href,
  mainCategory,
  quantityAvailable,
}: Props) => {
  return (
    <Card sx={{ minHeight: 380, maxWidth: "100%", boxShadow: "lg" }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <Image src={image} fill loading="lazy" alt="" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">{mainCategory}</Typography>
        <Link
          href={href}
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon />}
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </Link>
        <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
          {price} zł
        </Typography>
        <Typography level="body-sm">
          (Ilość sztuk: <b>{quantityAvailable}</b>)
        </Typography>
      </CardContent>
    </Card>
  );
};
