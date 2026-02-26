"use client";

import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageTransition } from "@/components/ui/PageTransition";
import { Accordion } from "@/components/ui/Accordion";

const faqs = [
  {
    question: "Is IPTV legal in Australia?",
    answer:
      "IPTV technology is legal. We provide premium streaming access and encourage customers to comply with local content laws and licensing requirements."
  },
  {
    question: "Do you offer trials?",
    answer:
      "Yes, we offer a short trial so you can confirm quality, compatibility, and performance before subscribing."
  },
  {
    question: "What internet speed is required?",
    answer:
      "We recommend 15 Mbps for HD streaming and 35 Mbps for 4K streaming."
  },
  {
    question: "How fast is activation?",
    answer:
      "Activation is typically instant and always within 10 minutes after purchase."
  },
  {
    question: "Can I use multiple devices?",
    answer:
      "Yes. Choose a plan with multi-device support and stream on all eligible screens."
  },
  {
    question: "What is the refund policy?",
    answer:
      "Refunds are available within the eligible period outlined on our refund policy page."
  }
];

export default function FAQPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          title="Frequently Asked Questions"
          subtitle="Clear answers on legality, trials, activation, and performance."
          primaryCta={{ label: "View Packages", href: "/packages" }}
          secondaryCta={{ label: "Contact Support", href: "/contact" }}
          imageLabel="FAQ hero placeholder"
        />

        <section className="px-6 pb-24 md:px-10 lg:px-16">
          <SectionHeading
            eyebrow="Support"
            title="Everything you need to know"
            subtitle="If you still have questions, our team is ready to help."
          />
          <div className="mx-auto max-w-4xl">
            <Accordion items={faqs} />
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
