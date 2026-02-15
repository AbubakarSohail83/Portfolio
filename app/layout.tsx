import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import ThemeToggleCta from "@/widgets/themeToggleCta";
import PortfolioInsightsPanel from "@/widgets/PortfolioInsightsPanel";
import { FancyCursor } from "@/widgets/FancyCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* SEO: Base URL for canonical and OG tags */
const siteUrl = "https://abubakarsohail.online";

/* SEO: Metadata targeting recruiters and search engines */
export const metadata: Metadata = {
  /* Title: Brand + Role (clean, professional) */
  title: "Abubakar Sohail | Senior Full Stack Software Engineer",
  
  /* Meta description: Under 155 chars, targeting recruiter intent */
  description:
    "Senior Full Stack Software Engineer building scalable backend systems and APIs. Open to remote and on-site roles in Pakistan and the UK.",
  
  /* Minimal, relevant keywords */
  keywords: [
    "Abubakar Sohail",
    "Senior Full Stack Software Engineer",
    "Backend Engineer",
    "Node.js",
    "Ruby on Rails",
    "React",
    "TypeScript",
    "AWS",
  ],
  
  authors: [{ name: "Abubakar Sohail", url: siteUrl }],
  creator: "Abubakar Sohail",
  publisher: "Abubakar Sohail",
  
  /* Canonical URL */
  alternates: {
    canonical: siteUrl,
  },
  
  /* Open Graph for social sharing */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Abubakar Sohail | Senior Full Stack Software Engineer",
    description:
      "Senior Full Stack Software Engineer specializing in scalable backend systems, API design, and cloud infrastructure.",
    siteName: "Abubakar Sohail",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Abubakar Sohail – Senior Full Stack Software Engineer",
      },
    ],
  },
  
  /* Twitter Card */
  twitter: {
    card: "summary_large_image",
    title: "Abubakar Sohail | Senior Full Stack Software Engineer",
    description:
      "Senior Full Stack Software Engineer specializing in scalable backend systems and APIs.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@abubakarsohail",
  },
  
  /* Robots directives */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  /* Verification (add your IDs when ready) */
  verification: {
    google: "your-google-verification-code",
  },
  
  category: "technology",
};

/* JSON-LD Structured Data (minimal, valid Schema.org) */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    /* Person schema */
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Abubakar Sohail",
      jobTitle: "Senior Full Stack Software Engineer",
      url: siteUrl,
      image: `${siteUrl}/self.png`,
      email: "abubakarsohail83@gmail.com",
      knowsAbout: [
        "Node.js",
        "Ruby on Rails",
        "React",
        "TypeScript",
        "AWS",
        "PostgreSQL",
        "GraphQL",
        "REST APIs",
      ],
      areaServed: ["Pakistan", "United Kingdom", "Remote"],
      sameAs: [
        "https://github.com/abubakarsohail",
        "https://linkedin.com/in/abubakarsohail",
        siteUrl,
      ],
    },
    /* WebSite schema */
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Abubakar Sohail",
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-US",
    },
    /* WebPage schema */
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Abubakar Sohail | Senior Full Stack Software Engineer",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable} data-theme="light">
      <head>
        {/* Respect saved theme on first paint; fallback to light */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='dark'?'dark':'light');}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
        {/* SEO: JSON-LD Structured Data injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* SEO: Preconnect to external resources for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.className} bg-[var(--background)] text-[var(--foreground)] antialiased`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem={false}
          storageKey="theme"
          disableTransitionOnChange
        >
          {/* Subtle noise overlay for texture */}
          <div className="noise-overlay" aria-hidden="true" />
          
          {children}

          <PortfolioInsightsPanel />
          <ThemeToggleCta className="fixed bottom-5 right-4 z-50 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8" />
          <FancyCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
