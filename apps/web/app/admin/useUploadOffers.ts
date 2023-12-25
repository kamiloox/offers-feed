import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export const useUploadOffers = () => {
  const [uploadState, setUploadState] = useState<
    "idle" | "uploading" | "success" | "error"
  >("idle");
  const [file, setFile] = useState<File | null>(null);

  const uploadOffers = async (event: FormEvent<HTMLFormElement>) => {
    setUploadState("uploading");
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    try {
      await fetch("/api/offers/feed", {
        method: "POST",
        body: formData,
      });
      setUploadState("success");
      toast.success("Oferty zostały zaimportowane");
    } catch (error) {
      setUploadState("error");
      toast.error(
        "Błąd podczas importowania ofert, skontaktuj się z administratorem"
      );
      console.error(error);
    }
  };

  const onFileChange = (event: FormEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    setFile(file!);
  };

  return { file, uploadState, uploadOffers, onFileChange };
};
