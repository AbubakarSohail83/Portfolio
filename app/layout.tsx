import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import ThemeToggleCta from "@/widgets/themeToggleCta";
import { Montserrat_Alternates } from "next/font/google";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
});

export const metadata: Metadata = {
  title: "Abubakar Sohail | Full Stack Software Engineer",
  description:
    "Portfolio website of Abubakar Sohail, a Full Stack Software Engineer specializing in modern web applications and beyond.",
  keywords: [
    "Abubakar Sohail",
    "Abubakar Sohail Portfolio",
    "AbubakarSohail",
    "Full Stack Developer",
    "AWS Developer",
    "Ruby on Rails Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "Web Development",
    "Cloud Computing",
    "Backend Development",
    "Frontend Development",
    "Software Engineer",
    "React Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "AWS Solutions Architect",
    "Cloud Infrastructure",
    "API Development",
    "Full Stack Engineer",
    "Web Application Developer",
    "Modern Web Technologies"
  ],
  authors: [{ name: "Abubakar Sohail" }],
  creator: "Abubakar Sohail",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abubakarsohail.online",
    title: "Abubakar Sohail | Full Stack Software Engineer",
    description: "Portfolio website of Abubakar Sohail, a Full Stack Software Engineer specializing in modern web applications and beyond.",
    siteName: "Abubakar Sohail Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserratAlternates.className} bg-background text-foreground relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}

          <ThemeToggleCta className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50" />
        </ThemeProvider>
      </body>
    </html>
  );
}
