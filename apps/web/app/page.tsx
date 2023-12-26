import { Grid, Typography } from "@mui/joy";
import { getAllOffers } from "../offers/database";
import { ProductCard } from "./ProductCard";

const Page = async () => {
  const offers = await getAllOffers();

  return (
    <section>
      <Typography level="h2" sx={{ my: 2 }}>
        Oferty
      </Typography>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {offers.map((offer) => (
          <Grid key={offer.id} xs={12} md={6} lg={4} sx={{ height: "100%" }}>
            <ProductCard {...offer} href={`/oferty/${offer.id}`} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Page;
