import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/themeProvider"
import ThemeToggleCta from "@/widgets/themeToggleCta"


import { Montserrat_Alternates } from 'next/font/google';

const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['200', '400', '700'],
});



export const metadata: Metadata = {
  title: "Abubakar Sohail | Full Stack Developer",
  description: "Portfolio website of Abubakar Sohail, a Full Stack Developer specializing in modern web applications and beyond.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserratAlternates.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <ThemeToggleCta className="absolute bottom-5 right-5" />
        </ThemeProvider>
      </body>
    </html>
  )
}