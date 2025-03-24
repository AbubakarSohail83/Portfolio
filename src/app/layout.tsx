import type { Metadata } from "next";
import { metaTags } from "../constants/meta";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Overpass_Mono } from 'next/font/google';
import { HorizontalWrapper } from "@/utils/HorizontalWrapper";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = metaTags;

const overpassMono = Overpass_Mono({
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={overpassMono.className}>
      <body className="flex flex-col bg-background text-secondary">
        <>
          <HorizontalWrapper>
            <Navbar />
            {children}
          </HorizontalWrapper>
          <Footer />
        </>
      </body>
    </html>
  );
}
