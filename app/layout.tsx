import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PropCapital.ai — Smarter Real Estate for NCR",
  description: "India's first institutional-grade real estate advisory platform for Gurugram, Noida & Faridabad. Powered by IRA Neural Engine — 4,120+ RERA-authenticated projects.",
  keywords: "real estate, NCR, Gurugram, Noida, property, IRA AI, RERA, PropCapital",
  openGraph: {
    title: "PropCapital.ai — Smarter Real Estate for NCR",
    description: "Algorithm-first. Fiduciary-first. Find your perfect property with AI-powered matching.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
