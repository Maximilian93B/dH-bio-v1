import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Hanegraaf | Global Finance & Sustainability Leader",
  description: "Senior financial executive with extensive experience in global markets, sustainable investments, and technology innovation. Principal & CFO at Global Sustainability Fund.",
  keywords: [
    "David Hanegraaf",
    "Global Finance",
    "Sustainable Investment",
    "Technology Innovation",
    "Capital Markets",
    "CFO",
    "Global Sustainability Fund",
    "Strategic Leadership",
    "UN Innovation Initiatives"
  ],
  authors: [{ name: "David Hanegraaf" }],
  openGraph: {
    title: "David Hanegraaf | Global Finance & Sustainability Leader",
    description: "Senior financial executive leading sustainable investments and technology innovation across global markets.",
    url: "https://davidhanegraaf.com",
    siteName: "David Hanegraaf",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Hanegraaf | Global Finance & Sustainability Leader",
    description: "Senior financial executive leading sustainable investments and technology innovation across global markets.",
    creator: "@davidhanegraaf",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
