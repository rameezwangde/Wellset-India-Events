import type { Metadata } from "next";
import { Inter, Oswald, Caveat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
  title: "Wellset India Events & Promotions | Nationwide Brand Activations",
  description:
    "Wellset India delivers impactful events, rural marketing, van activations, retail campaigns and community engagement programs across India.",
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
      </body>
    </html>
  );
}
