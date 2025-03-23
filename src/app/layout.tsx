import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abubakar Sohail",
  description: "I'm a full-stack software engineer specializing in Ruby on Rails, React, JavaScript, TypeScript, Next.js, Node.js, and MongoDB. I build scalable web applications and high-performance APIs.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: "Full-Stack Developer | Javascript, Ruby on Rails, React, Next.js",
    description: 
      "Experienced full-stack engineer with expertise in Ruby on Rails, React, JavaScript, TypeScript, Next.js, Node.js, and MongoDB. Passionate about building modern, scalable web applications.",
    images: ["/android-chrome-512x512.png"],
    url: "https:/yourportfolio.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Developer | Rails, React, Next.js, Node.js",
    description: 
      "Experienced software engineer specializing in full-stack web development with Ruby on Rails, React, Next.js, and Node.js. Check out my portfolio!",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
