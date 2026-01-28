"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { PageTransition } from "@/components/ui/PageTransition";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FileText, Shield } from "lucide-react";

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
  },
  {
    title: "Payment Terms",
    body:
      "All subscriptions are prepaid. Payments are processed securely through encrypted gateways. Prices are in Australian Dollars (AUD)."
  },
  {
    title: "Termination",
    body:
      "We reserve the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, or abuse the service."
  }
];

export default function TermsPage() {
  return (
    <PageTransition>
      <main className="relative">
        {/* Premium Hero Section */}
        <section className="relative px-6 pb-20 pt-24 md:px-10 lg:px-16 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.15),transparent_50%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/5 px-4 py-1.5 mb-6">
              <FileText size={14} className="text-gold-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-gold-500">Legal</span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl mb-6">
              Terms & <span className="text-gold-500">Conditions</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              These terms outline service usage, responsibilities, and fair usage guidelines for Aussie-iptv.
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="px-6 py-16 md:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 rounded-2xl border border-gold-500/20 bg-gold-500/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-500/20 text-gold-500">
                  <Shield size={20} />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-white mb-2">
                    Transparent, Australia-Safe Terms
                  </h2>
                  <p className="text-sm text-white/70">
                    Please read these terms carefully before using the service. By subscribing, you agree to these conditions.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {termsSections.map((section, index) => (
                <GlassCard key={section.title} className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-500/10 text-sm font-bold text-gold-500">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-white mb-3">
                        {section.title}
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {section.body}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-white/60 mb-6">
                Last updated: January 2026
              </p>
              <ButtonLink href="/contact" variant="outline">
                Contact Support
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
