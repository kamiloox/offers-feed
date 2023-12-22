"use client";
import { FormEvent } from "react";

export default function Page(): JSX.Element {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    await fetch("/api/offers/feed", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <main>
      <h1>Hello world!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Wybierz plik CSV
          <input type="file" name="offers" accept="text/csv" />
        </label>
        <button type="submit">Wgraj</button>
      </form>
    </main>
  );
}
