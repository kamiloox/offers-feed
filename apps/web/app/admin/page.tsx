"use client";
import { Box, Button, Divider, Link, Stack, Typography } from "@mui/joy";
import { InputFileUpload } from "../../components/InputFileUpload";
import { useUploadOffers } from "./useUploadOffers";

const ALLEGRO_INSTRUCTIONS_LINK =
  "https://allegro.pl/pomoc/dla-sprzedajacych/wystawianie-ofert-z-pliku/masowe-wystawianie-ofert-z-pliku-csv-bez-wykorzystania-makr-m0RYGv0PmsX";

const Page = () => {
  const { file, uploadState, uploadOffers, onFileChange } = useUploadOffers();

  return (
    <Box sx={{ py: 2 }}>
      <Typography level="h2" fontSize="xl" sx={{ mb: 2 }}>
        Wystaw oferty z pliku CSV Allegro{" "}
        <Link href={ALLEGRO_INSTRUCTIONS_LINK} target="_blank">
          (Instrukcja)
        </Link>
      </Typography>
      <form onSubmit={uploadOffers}>
        {file && (
          <Typography level="body-sm" color="neutral">
            Wybrany plik: {file?.name}
          </Typography>
        )}
        <Stack spacing={2} sx={{ maxWidth: "200px", mb: 2 }}>
          <InputFileUpload
            accept="text/csv"
            label="Wybierz plik CSV"
            name="offers"
            onChange={onFileChange}
          />
          <Button
            type="submit"
            loading={uploadState === "uploading"}
            disabled={!file}
          >
            Wgraj
          </Button>
        </Stack>
      </form>
      <Divider sx={{ mb: 2 }} />
      <Stack spacing={2} sx={{ my: 2 }} alignItems="flex-start">
        <Typography level="h2" fontSize="xl">
          Baza ofert (Do wystawienia na allegro)
        </Typography>
        <Button component="a" variant="soft" href="/api/offers/feed" download>
          Pobierz CSV z ofertami
        </Button>
      </Stack>
    </Box>
  );
};

export default Page;
