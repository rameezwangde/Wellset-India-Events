import type { Metadata } from "next";
import { Inter, Oswald, Caveat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-condensed",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wellset India Events and Promotions | BTL & Rural Marketing Agency",
  description:
    "Wellset India Events and Promotions – pan-India BTL, rural, and urban marketing agency since 2006. Nukkad natak, IEC, and govt/NGO campaigns.",
  keywords: [
    "Event Management India",
    "Brand Activations",
    "Rural Marketing",
    "BTL Campaigns",
    "Van Activations",
    "Nukkad Natak",
    "Mall Activations",
    "Corporate Events",
    "Wellset India Events",
    "NGO Awareness Campaigns",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${caveat.variable} w-full min-h-full antialiased`}
    >
      <body className="w-full min-h-full font-sans bg-cream text-charcoal">
        <Header />
        <main className="w-full min-h-screen h-auto overflow-visible flex flex-col">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
