import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ateş Feuerdöner Berlin | Handgemachter Döner am offenen Feuer",
  description:
    "Ateş Feuerdöner in Berlin-Kreuzberg: Döner, Dürüm & Lahmacun aus 100% frischen Zutaten, täglich hausgemacht. Jetzt online bestellen oder vorbeikommen.",
  keywords: [
    "Döner Berlin",
    "Feuerdöner",
    "Dürüm",
    "Lahmacun",
    "Döner Kreuzberg",
    "bester Döner Berlin",
  ],
  openGraph: {
    title: "Ateş Feuerdöner Berlin | Handgemachter Döner am offenen Feuer",
    description:
      "Frisch. Handgemacht. Am offenen Feuer gegrillt. Besuche Ateş Feuerdöner in Berlin-Kreuzberg.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${bebas.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-charcoal text-white font-body">
        {children}
      </body>
    </html>
  );
}
