import { Bodoni_Moda, Source_Serif_4, Outfit } from "next/font/google";

export const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500"],
});

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500"],
});
