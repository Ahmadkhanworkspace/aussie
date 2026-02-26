import { Metadata } from "next";
import ResellerClient from "./ResellerClient";

export const metadata: Metadata = {
  title: "IPTV Reseller Program Australia | Start Your Business AUD",
  description: "Join the most reliable IPTV reseller program in Australia. White-label panels, wholesale AUD pricing, instant credit activation, and professional local support.",
  keywords: ["IPTV Reseller Australia", "Start IPTV Business AU", "IPTV Reseller Panel AUD", "Wholesale IPTV Australia", "Best IPTV Reseller Program"],
  openGraph: {
    title: "IPTV Reseller Program Australia | Start Your Business AUD",
    description: "Launch your own premium IPTV brand with Australia's best infrastructure. Wholesale rates, 24/7 support, and instant activation.",
    images: ["/og-reseller.jpg"], // Suggested reseller OG image
    locale: "en_AU",
    type: "website",
  },
  alternates: {
    canonical: "https://aussie-iptv.com/reseller",
  },
};

export default function ResellerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "IPTV Reseller Program Australia",
    "description": "Professional IPTV reseller partnership program with local Australian infrastructure.",
    "publisher": {
      "@type": "Organization",
      "name": "Aussie-iptv"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ResellerClient />
    </>
  );
}
