"use client";

import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageTransition } from "@/components/ui/PageTransition";

const refundSections = [
  {
    title: "Trial Conditions",
    body:
      "Trials are offered to validate quality and compatibility. Trial access is limited to one per customer."
  },
  {
    title: "Refund Eligibility",
    body:
      "Refunds are available within the stated refund window if the service fails to perform as described."
  },
  {
    title: "Non-Refundable Cases",
    body:
      "Refunds are not provided for user-side issues such as insufficient internet speed, unsupported devices, or plan misuse."
  },
  {
    title: "How to Request",
    body:
      "Contact support with your account email and purchase details. Our team will respond within 24 hours."
  }
];

export default function RefundPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          title="Refund Policy"
          subtitle="Clear guidelines around trials, eligibility, and refund processing."
          imageLabel="Refund policy placeholder"
        />

        <section className="px-6 pb-24 md:px-10 lg:px-16">
          <SectionHeading
            eyebrow="Refunds"
            title="Fair, transparent refund guidelines"
            subtitle="We want you to feel confident in your subscription."
          />
          <div className="mx-auto max-w-4xl space-y-4">
            {refundSections.map((section) => (
              <GlassCard key={section.title} className="p-6">
                <h3 className="font-display text-lg font-semibold text-white">
                  {section.title}
                </h3>
                <p className="mt-3 text-sm text-white/70">{section.body}</p>
              </GlassCard>
            ))}
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
