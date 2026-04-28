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
  title: "Abubakar Sohail | Senior Software Engineer",
  applicationName: "Abubakar Sohail",
  
  /* Meta description: recruiter, freelance, and market-specific intent */
  description:
    "Senior Software Engineer in Glasgow building scalable backend-heavy systems, APIs, AI workflows, and cloud products. No sponsorship required.",
  
  /* Relevant discovery keywords for recruiter, client, and technical searches */
  keywords: [
    "Abubakar Sohail",
    "Abubakar Sohail",
    "Abubakar Sohail portfolio",
    "Abubakar Sohail software engineer",
    "Abubakar Sohail 2026",
    "Abubakar Sohail 2027",
    "Senior Software Engineer",
    "Senior Software Engineer 2026",
    "Senior Software Engineer 2027",
    "Senior Full Stack Software Engineer",
    "SSE",
    "SE",
    "Backend Engineer",
    "Backend Software Engineer",
    "Full Stack Engineer",
    "AI Engineer",
    "AI Software Engineer",
    "RAG Engineer",
    "LLM Engineer",
    "Server-Sent Events",
    "Glasgow Software Engineer",
    "UK Software Engineer",
    "US market Software Engineer",
    "Pakistan Software Engineer",
    "Freelance Software Engineer",
    "Remote Software Engineer",
    "Contract Software Engineer",
    "Node.js",
    "Express.js",
    "NestJS",
    "Ruby on Rails",
    "React",
    "Next.js",
    "TypeScript",
    "GraphQL",
    "REST APIs",
    "PostgreSQL",
    "FastAPI",
    "Python",
    "AWS",
    "Docker",
    "ArgoCD",
    "OpenAI",
    "Gemini",
    "Claude",
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
    title: "Abubakar Sohail | Senior Software Engineer",
    description:
      "Abubakar Sohail builds backend-heavy products, AI workflows, APIs, SSE features, and cloud systems for UK, US, Pakistan, remote, freelance, and contract markets.",
    siteName: "Abubakar Sohail Engineering",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Abubakar Sohail - Senior Software Engineer for backend, AI, React, Node, Rails, AWS, and cloud systems",
      },
    ],
  },
  
  /* Twitter Card */
  twitter: {
    card: "summary_large_image",
    title: "Abubakar Sohail | Senior Software Engineer",
    description:
      "Backend, AI, SSE, React, Node.js, Rails, TypeScript, AWS, and cloud engineering for UK, US, Pakistan, freelance, and remote markets.",
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
      alternateName: [
        "Abubakar Sohail Engineering",
        "Abubakar Sohail Software Engineer",
      ],
      jobTitle: "Senior Software Engineer",
      url: siteUrl,
      image: `${siteUrl}/self.png`,
      email: "abubakarsohail83@gmail.com",
      brand: { "@id": `${siteUrl}/#brand` },
      knowsAbout: [
        "Node.js",
        "Express.js",
        "NestJS",
        "Ruby on Rails",
        "React",
        "Next.js",
        "TypeScript",
        "AWS",
        "Docker",
        "ArgoCD",
        "PostgreSQL",
        "GraphQL",
        "REST APIs",
        "Server-Sent Events",
        "SSE",
        "Software Engineering",
        "Senior Software Engineering",
        "RAG pipelines",
        "AI workflows",
        "LLM integrations",
        "OpenAI",
        "Gemini",
        "Claude",
        "FastAPI",
      ],
      areaServed: ["United Kingdom", "United States", "Pakistan", "Europe", "North America", "Remote", "Freelance"],
      sameAs: [
        "https://github.com/AbubakarSohail83",
        "https://linkedin.com/in/abubakar-sohail-090b0015a",
        siteUrl,
      ],
    },
    /* WebSite schema */
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Abubakar Sohail Engineering",
      alternateName: "Abubakar Sohail",
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-US",
    },
    /* WebPage schema */
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Abubakar Sohail | Senior Software Engineer",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      description:
        "Portfolio and technical profile for Abubakar Sohail, Senior Software Engineer serving backend, AI, SSE, cloud, freelance, UK, US, Pakistan, and remote software markets.",
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
