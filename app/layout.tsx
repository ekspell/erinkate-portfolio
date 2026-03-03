import type { Metadata } from "next";
import { bodoni, sourceSerif, outfit } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Erin Kate — Design Engineer",
  description:
    "Product designer and design engineer based in Cascais, Portugal. I design products and then I build them — from research and Figma to production code.",
  openGraph: {
    title: "Erin Kate — Design Engineer",
    description:
      "Product designer and design engineer. I design products and then I build them.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${sourceSerif.variable} ${outfit.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
