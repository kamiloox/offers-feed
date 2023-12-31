import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";
import { Container } from "@mui/joy";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Feed ofertowy | AJP",
  description: "Twórca: Kamil Troczewski",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry options={{ key: "joy" }}>
          <Container>
            <main>{children}</main>
            <Toaster />
          </Container>
        </ThemeRegistry>
      </body>
    </html>
  );
}
