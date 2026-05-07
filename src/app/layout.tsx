import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OAK VIZ | Fotografia Arquitetônica",
  description: "Capturando a essência da excelência arquitetônica e ambientes corporativos com precisão cinematográfica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${playfair.variable} antialiased bg-[#F8F6E5] text-[#1B0F03]`}
      >
        {children}
      </body>
    </html>
  );
}
