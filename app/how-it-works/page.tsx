import { Metadata } from "next";
import HowItWorksClient from "./HowItWorksClient";

export const metadata: Metadata = {
  title: "How to Setup IPTV Australia | 5-Minute Installation Guide",
  description: "Learn how to setup and stream IPTV on any device in Australia. 4 simple steps to premium 4K entertainment. Compatible with Smart TV, Mobile, and Firestick.",
  keywords: ["How to Setup IPTV Australia", "IPTV Installation Guide", "Best IPTV Player AU", "IPTV Activation Process", "Streaming IPTV on Smart TV"],
  openGraph: {
    title: "How to Setup IPTV Australia | 5-Minute Installation Guide",
    description: "Start streaming premium IPTV in 4 simple steps. Instant activation, easy setup, and buffer-free Australian servers.",
    images: ["/og-how-it-works.jpg"],
    locale: "en_AU",
    type: "website",
  },
  alternates: {
    canonical: "https://aussie-iptv.com/how-it-works",
  },
};

export default function HowItWorksPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need special equipment for IPTV in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Any device with internet access works - Smart TV, phone, tablet, computer, or streaming box like Firestick."
        }
      },
      {
        "@type": "Question",
        "name": "How long does IPTV activation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your login credentials are sent within 2-5 minutes after payment confirmation via email."
        }
      },
      {
        "@type": "Question",
        "name": "Can I change my IPTV package later?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can contact our Australian support team via WhatsApp or Email to upgrade or modify your subscription at any time."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HowItWorksClient />
    </>
  );
}
