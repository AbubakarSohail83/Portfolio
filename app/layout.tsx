import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import ThemeToggleCta from "@/widgets/themeToggleCta";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* SEO: Base URL for canonical and OG tags */
const siteUrl = "https://abubakarsohail.online";

/* SEO: Comprehensive metadata targeting recruiters, hiring managers, and search engines */
export const metadata: Metadata = {
  /* SEO: Keyword-rich title targeting brand + role + geography */
  title: "Abubakar Sohail | Senior Full Stack Software Engineer | Pakistan & UK",
  
  /* SEO: Description targeting recruiter search intent with clear value proposition */
  description:
    "Abubakar Sohail is a Senior Full Stack Software Engineer with 4+ years of experience building scalable backend systems, REST/GraphQL APIs, and cloud infrastructure. Available for remote work with UK, European, and international teams. Expertise in Node.js, Ruby on Rails, React, TypeScript, AWS, and PostgreSQL.",
  
  /* SEO: Comprehensive keyword targeting for brand, role, tech, and geo searches */
  keywords: [
    // Brand keywords
    "Abubakar",
    "Abubakar Sohail",
    "Abubakar Sohail Software Engineer",
    "Abubakar Sohail Full Stack Developer",
    "Abubakar Sohail Portfolio",
    // Core role keywords
    "Software Engineer",
    "Senior Software Engineer",
    "Full Stack Software Engineer",
    "Full Stack Developer",
    "Backend Engineer",
    "Web Developer",
    // Technology keywords
    "Ruby on Rails Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Engineer",
    "REST API Developer",
    "GraphQL Developer",
    "AWS Software Engineer",
    "Microservices Engineer",
    // Geo-targeted keywords
    "Software Engineer Pakistan",
    "Full Stack Developer Pakistan",
    "Software Engineer UK",
    "Remote Software Engineer",
    "Remote Full Stack Developer",
    // Hiring intent keywords
    "Hire Full Stack Developer",
    "Hire Software Engineer",
    "Freelance Full Stack Developer",
    "Software Engineer for Startups",
    "Software Engineer for SaaS",
  ],
  
  authors: [{ name: "Abubakar Sohail", url: siteUrl }],
  creator: "Abubakar Sohail",
  publisher: "Abubakar Sohail",
  
  /* SEO: Alternate name for brand searches */
  alternates: {
    canonical: siteUrl,
  },
  
  /* SEO: Open Graph for social sharing and rich previews */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Abubakar Sohail | Senior Full Stack Software Engineer | Pakistan & UK",
    description:
      "Senior Full Stack Software Engineer specializing in scalable backend systems, API design, and cloud infrastructure. Available for remote work with startups, SaaS companies, and international teams.",
    siteName: "Abubakar Sohail - Software Engineer Portfolio",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Abubakar Sohail - Senior Full Stack Software Engineer Portfolio",
      },
    ],
  },
  
  /* SEO: Twitter card for Twitter/X sharing */
  twitter: {
    card: "summary_large_image",
    title: "Abubakar Sohail | Senior Full Stack Software Engineer",
    description:
      "Senior Full Stack Software Engineer available for remote work. Expertise in Node.js, Ruby on Rails, React, and cloud infrastructure.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@abubakarsohail",
  },
  
  /* SEO: Robots directives for search engine crawling */
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
  
  /* SEO: Verification for search consoles (add your IDs) */
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  
  /* SEO: Category for better classification */
  category: "technology",
};

/* SEO: JSON-LD Structured Data for rich search results */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    /* SEO: Person schema for knowledge panel and rich results */
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Abubakar Sohail",
      alternateName: "Abubakar",
      jobTitle: "Senior Full Stack Software Engineer",
      description: "Senior Full Stack Software Engineer specializing in scalable backend systems, API design, and cloud infrastructure. Available for remote work with UK, European, and international teams.",
      url: siteUrl,
      image: `${siteUrl}/self.png`,
      email: "abubakarsohail83@gmail.com",
      /* SEO: Skills/expertise for relevance signals */
      knowsAbout: [
        "Ruby on Rails",
        "React",
        "TypeScript",
        "Node.js",
        "JavaScript",
        "AWS",
        "PostgreSQL",
        "Redis",
        "GraphQL",
        "REST APIs",
        "Microservices",
        "Docker",
        "Kubernetes",
        "System Design",
        "Full Stack Development",
        "Backend Engineering",
      ],
      /* SEO: Geographic relevance for local searches */
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressCountry: "Pakistan",
      },
      /* SEO: Service areas for geo-targeting */
      areaServed: [
        { "@type": "Country", name: "Pakistan" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Continent", name: "Europe" },
        { "@type": "Text", name: "Remote / Worldwide" },
      ],
      /* SEO: Social profiles for sameAs validation */
      sameAs: [
        "https://github.com/abubakarsohail",
        "https://linkedin.com/in/abubakarsohail",
        siteUrl,
      ],
      /* SEO: Work examples */
      hasOccupation: {
        "@type": "Occupation",
        name: "Senior Full Stack Software Engineer",
        occupationLocation: {
          "@type": "Country",
          name: "Pakistan",
        },
        skills: "Node.js, Ruby on Rails, React, TypeScript, AWS, PostgreSQL, GraphQL, Docker, Kubernetes",
      },
    },
    /* SEO: WebSite schema for sitelinks search box */
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Abubakar Sohail - Software Engineer Portfolio",
      description: "Portfolio of Abubakar Sohail, Senior Full Stack Software Engineer",
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-US",
    },
    /* SEO: WebPage schema for the homepage */
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Abubakar Sohail | Senior Full Stack Software Engineer | Pakistan & UK",
      description: "Portfolio of Abubakar Sohail, Senior Full Stack Software Engineer available for remote work with startups, SaaS companies, and international teams.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-US",
    },
    /* SEO: ProfilePage for personal branding */
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Abubakar Sohail Portfolio",
      mainEntity: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
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
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Subtle noise overlay for texture */}
          <div className="noise-overlay" aria-hidden="true" />
          
          {children}

          <ThemeToggleCta className="fixed bottom-6 right-6 z-50" />
        </ThemeProvider>
      </body>
    </html>
  );
}
