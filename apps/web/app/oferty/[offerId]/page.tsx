import { getOfferById } from "../../../offers/database";
import NextLink from "next/link";
import Image from "next/image";
import { Link, Box, Typography, AspectRatio, Grid } from "@mui/joy";
import { ArrowLeftOutlined } from "@mui/icons-material";

const Page = async ({ params }: { params: { offerId: string } }) => {
  const offer = await getOfferById(params.offerId);

  return (
    <Box sx={{ my: 2 }}>
      <NextLink href="/" passHref legacyBehavior>
        <Link variant="soft" color="neutral" href="/">
          <ArrowLeftOutlined />
          Wróć do listy ofert
        </Link>
      </NextLink>

      <Typography level="body-sm" sx={{ mt: 2 }}>
        {offer.subcategory}
      </Typography>

      <Box sx={{ mb: 2, mt: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12} md={8}>
            <Box sx={{ boxShadow: "lg" }}>
              <AspectRatio ratio="3/2">
                <Image
                  src={offer.image}
                  fill
                  loading="lazy"
                  alt=""
                  style={{ borderRadius: "8px" }}
                />
              </AspectRatio>
            </Box>
          </Grid>
          <Grid xs={12} md={4}>
            <Typography level="body-xs" sx={{ mb: 1 }}>
              {offer.mainCategory}, {offer.productType}, {offer.brand}
            </Typography>
            <Typography level="title-lg">{offer.title}</Typography>
            <Typography level="h3" sx={{ mt: 1, mb: 2, fontWeight: "xl" }}>
              {offer.price} zł
            </Typography>

            <Typography>
              Ilość sztuk: <b>{offer.quantityAvailable}</b>
            </Typography>

            <Typography level="body-sm">
              {offer.city} {offer.zipCode}, {offer.country} {offer.voivodeship}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Page;
