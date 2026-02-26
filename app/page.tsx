import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Best IPTV Australia | Premium 4K Streaming & Australian Support",
  description: "Aussie-iptv is Australia's #1 IPTV service. 45,000+ local & global channels, AFL/NRL sports coverage, 4K streaming, and 24/7 Australian-based support. AUD pricing.",
  keywords: ["IPTV Australia", "Best Aussie IPTV", "Live Sports Streaming AU", "Watch AFL NRL Overseas", "Australian IPTV Servers", "IPTV Sydney Melbourne Brisbane"],
  openGraph: {
    title: "Best IPTV Australia | Premium 4K Streaming & Australian Support",
    description: "Experience buffer-free entertainment with Australia's most trusted IPTV provider. 4K quality, local support, and instant AUD activation.",
    url: "https://aussie-iptv.com", // Replace with actual domain if known, common pattern is using base URL
    siteName: "Aussie-iptv",
    images: [
      {
        url: "/og-image.jpg", // Make sure to suggest or create an OG image later
        width: 1200,
        height: 630,
        alt: "Aussie-iptv Premium Australian Streaming",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IPTV Australia | Premium 4K Streaming & Australian Support",
    description: "Australia's #1 IPTV Service. AFL, NRL, and 45,000+ Global Channels in 4K.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://aussie-iptv.com",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aussie-iptv Premium Streaming",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aussie-iptv",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AU"
      }
    },
    "areaServed": "AU",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IPTV Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "3 Months Subscription"
          },
          "price": "45.00",
          "priceCurrency": "AUD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "6 Months Subscription"
          },
          "price": "75.00",
          "priceCurrency": "AUD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "12 Months Subscription"
          },
          "price": "120.00",
          "priceCurrency": "AUD"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
