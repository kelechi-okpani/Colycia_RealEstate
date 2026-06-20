// app/layout.tsx
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

// 1. GLOBAL SEO METADATA CONFIGURATION
export const metadata: Metadata = {
  metadataBase: new URL("https://calyciasmarthomes.com"), // Replace with actual production domain
  title: {
    default: "Calycia Smart Homes | Affordable Luxury Real Estate Abuja",
    template: "%s | Calycia Smart Homes",
  },
  description: "Discover innovative, sustainable, and affordable luxury residential properties and strategic land investment opportunities in Abuja's emerging growth corridors.",
  keywords: [
    "Calycia Smart Homes", 
    "Real Estate Abuja", 
    "Affordable Luxury Housing Nigeria", 
    "Property Development Abuja", 
    "Smart Homes Abuja", 
    "Land Acquisition Abuja", 
    "Diaspora Real Estate Investment"
  ],
  authors: [{ name: "Calycia Smart Homes Team" }],
  creator: "Calycia Smart Homes",
  publisher: "Calycia Smart Homes",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
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
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://calyciasmarthomes.com",
    title: "Calycia Smart Homes | Affordable Luxury Real Estate Abuja",
    description: "Building the future of modern living with international design standards and practical affordability in Nigeria's capital.",
    siteName: "Calycia Smart Homes",
    images: [
      {
        url: "/logo.png", // Place a 1200x630px high-res graphic asset in your public directory
        width: 1200,
        height: 630,
        alt: "Calycia Smart Homes Architectural Concept Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calycia Smart Homes | Real Estate Abuja",
    description: "Innovative real estate solutions balancing modern living with environmental responsibility.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // 2. REAL ESTATE BUSINESS JSON-LD SCHEMA FOR RICH SNIPPETS
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Calycia Smart Homes",
    "image": "https://calyciasmarthomes.com/og-image.jpg",
    "@id": "https://calyciasmarthomes.com/#organization",
    "url": "https://calyciasmarthomes.com",
    "telephone": "+2349060142148", // Replace with correct phone number
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Corporate Office Address Here",
      "addressLocality": "Abuja",
      "addressRegion": "FCT",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.0765, // Abuja coordinates baseline
      "longitude": 7.3986
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com/calyciasmarthomes",
      "https://www.instagram.com/calyciasmarthomes",
      "https://www.linkedin.com/company/calyciasmarthomes"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen bg-white text-slate-800 flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}