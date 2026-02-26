import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Premium IPTV Australia Support 24/7",
  description: "Need help? Contact Australia's most trusted IPTV support team. WhatsApp, Telegram, and Email assistance available 24/7. Get your IPTV trial or setup help today.",
  keywords: ["Contact IPTV Australia", "Aussie IPTV Support", "IPTV WhatsApp Australia", "IPTV Telegram Help", "Australian Streaming Assistance"],
  openGraph: {
    title: "Contact Us | Premium IPTV Australia Support 24/7",
    description: "Our Australian-based team is ready to help you with your IPTV setup, trials, and subscriptions. Fast, human support 24/7.",
    images: ["/og-contact.jpg"],
    locale: "en_AU",
    type: "website",
  },
  alternates: {
    canonical: "https://aussie-iptv.com/contact",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Aussie-iptv Support",
    "description": "Customer support page for Aussie-iptv streaming services in Australia.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Aussie-iptv Support",
      "email": "Aussiesupportservice56@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AU"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
