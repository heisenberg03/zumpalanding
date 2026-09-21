import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://zumpa.in"),
  title: "Zumpa — Discover Gigs & Talented Pros | Founded by Abhash Mishra",
  description:
    "Zumpa connects event hosts with top creative talent and gig professionals across the entertainment industry. Founded by Abhash Mishra.",
  authors: [
    { name: "Abhash Mishra", url: "https://www.linkedin.com/in/abhash-mishra-1a489337/" },
    { name: "Zumpa", url: "https://zumpa.in" },
  ],
  creator: "Abhash Mishra",
  publisher: "Zumpa",
  keywords: [
    "Abhash Mishra",
    "Abhash Mishra Zumpa",
    "Founder of Zumpa",
    "Zumpa Founder",
    "Zumpa",
    "Gig professionals",
    "Creative professionals",
    "Reimagining entertainment industry",
    "Event professionals",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://zumpa.in",
    siteName: "Zumpa",
    title: "Zumpa — Discover Gigs & Talented Pros | Founded by Abhash Mishra",
    description:
      "Zumpa connects event hosts with top creative talent and gig professionals across the entertainment industry. Founded by Abhash Mishra.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zumpa — Founded by Abhash Mishra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zumpa — Discover Gigs & Talented Pros | Founded by Abhash Mishra",
    description:
      "Zumpa connects event hosts with top creative talent and gig professionals across the entertainment industry. Founded by Abhash Mishra.",
    creator: "@MRAbhashMishra",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://zumpa.in",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://zumpa.in/#organization",
      "name": "Zumpa",
      "url": "https://zumpa.in",
      "logo": "https://zumpa.in/logo.png",
      "description":
        "Zumpa connects event hosts with top creative talent and gig professionals across the entertainment industry. Post gigs, hire talent, and build portfolios.",
      "foundingLocation": {
        "@type": "Place",
        "name": "Agra, Uttar Pradesh, India",
      },
      "founder": {
        "@id": "https://zumpa.in/#founder",
      },
      "sameAs": [
        "https://www.linkedin.com/company/zumpa",
        "https://x.com/MRAbhashMishra",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://zumpa.in/#founder",
      "name": "Abhash Mishra",
      "jobTitle": "Founder & CEO",
      "image": "https://zumpa.in/abhashmishra.png",
      "worksFor": {
        "@id": "https://zumpa.in/#organization",
      },
      "url": "https://zumpa.in/#about",
      "sameAs": [
        "https://www.linkedin.com/in/abhash-mishra-1a489337/",
        "https://x.com/MRAbhashMishra",
      ],
      "knowsAbout": [
        "Event Technology",
        "Startup Leadership",
        "Gig Economy",
        "Artist & Talent Marketplace",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://zumpa.in/#website",
      "url": "https://zumpa.in",
      "name": "Zumpa",
      "publisher": {
        "@id": "https://zumpa.in/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
