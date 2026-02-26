"use client";

import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageTransition } from "@/components/ui/PageTransition";

const privacySections = [
  {
    title: "Data We Collect",
    body:
      "We collect essential account details such as name, email, and device information to provide service access and support."
  },
  {
    title: "How We Use Data",
    body:
      "Data is used to activate accounts, improve service reliability, and provide customer support. We do not sell personal data."
  },
  {
    title: "Cookies",
    body:
      "We use cookies for session management, analytics, and service personalization. You can disable cookies in your browser settings."
  },
  {
    title: "Payment Safety",
    body:
      "Payment data is processed through secure, PCI-compliant providers. We do not store card details on our servers."
  },
  {
    title: "Data Security",
    body:
      "We apply encryption, access controls, and monitoring to protect customer information."
  }
];

export default function PrivacyPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          title="Privacy Policy"
          subtitle="We respect your data and protect your privacy with industry-standard security."
          imageLabel="Privacy policy placeholder"
        />

        <section className="px-6 pb-24 md:px-10 lg:px-16">
          <SectionHeading
            eyebrow="Privacy"
            title="Your data, handled responsibly"
            subtitle="We collect only what is necessary to deliver a premium experience."
          />
          <div className="mx-auto max-w-4xl space-y-4">
            {privacySections.map((section) => (
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
