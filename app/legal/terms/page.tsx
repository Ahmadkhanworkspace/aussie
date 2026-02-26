"use client";

import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageTransition } from "@/components/ui/PageTransition";

const termsSections = [
  {
    title: "Service Overview",
    body:
      "Australia IPTV provides a premium streaming service built on IPTV technology. We supply account access, customer support, and delivery infrastructure for approved content streams."
  },
  {
    title: "User Responsibility",
    body:
      "Customers are responsible for using the service in compliance with local laws and content regulations. We do not encourage or endorse unauthorised access to copyrighted material."
  },
  {
    title: "Fair Usage Policy",
    body:
      "To maintain service quality, fair usage rules apply. Excessive concurrent streaming beyond plan limits may lead to account restrictions."
  },
  {
    title: "Account Sharing Rules",
    body:
      "Plan device limits must be respected. Sharing accounts outside your household or exceeding device limits is not permitted."
  },
  {
    title: "Service Availability",
    body:
      "We aim for 99.9% uptime. Scheduled maintenance or unexpected outages may occur and will be communicated when possible."
  }
];

export default function TermsPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          title="Terms & Conditions"
          subtitle="These terms outline service usage, responsibilities, and fair usage guidelines for Australia IPTV."
          imageLabel="Legal document placeholder"
        />

        <section className="px-6 pb-24 md:px-10 lg:px-16">
          <SectionHeading
            eyebrow="Legal"
            title="Transparent, Australia-safe terms"
            subtitle="Please read these terms carefully before using the service."
          />
          <div className="mx-auto max-w-4xl space-y-4">
            {termsSections.map((section) => (
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
