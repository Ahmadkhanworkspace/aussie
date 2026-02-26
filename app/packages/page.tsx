import { Metadata } from "next";
import PackagesClient from "./PackagesClient";

export const metadata: Metadata = {
  title: "Premium IPTV Packages Australia | Best 4K Streaming Plans",
  description: "Affordable IPTV subscription plans for Australian viewers. Get 3, 6, or 12 months of premium access in AUD. 45,000+ channels, AFL/NRL sports, and instant activation.",
  keywords: ["IPTV Subscription Australia", "IPTV Plans AUD", "Premium IPTV Packages", "Aussie IPTV Pricing", "4K IPTV Australia"],
  openGraph: {
    title: "Premium IPTV Packages Australia | Best 4K Streaming Plans",
    description: "Choose the perfect IPTV plan for your home. Instant AUD activation, local support, and buffer-free 4K streaming.",
    images: ["/og-pricing.jpg"], // Suggested image for pricing
    locale: "en_AU",
    type: "website",
  },
  alternates: {
    canonical: "https://aussie-iptv.com/packages",
  },
};

export default function PackagesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Aussie-iptv Subscription Plans",
    "description": "Premium IPTV subscription with Australian servers and 45,000+ channels.",
    "brand": {
      "@type": "Brand",
      "name": "Aussie-iptv"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "3 Months Plan",
        "price": "45.00",
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "6 Months Plan",
        "price": "75.00",
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "12 Months Plan",
        "price": "120.00",
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PackagesClient />
    </>
  );
}
