"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { PageTransition } from "@/components/ui/PageTransition";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DollarSign, CheckCircle } from "lucide-react";

const refundSections = [
  {
    title: "7-Day Money-Back Guarantee",
    body:
      "We offer a full refund within 7 days of purchase if you're not satisfied with the service. This gives you peace of mind to try our premium IPTV service risk-free."
  },
  {
    title: "Trial Conditions",
    body:
      "Trials are offered to validate quality and compatibility before committing to a full subscription. Trial access is limited to one per customer and must be requested before purchase."
  },
  {
    title: "Refund Eligibility",
    body:
      "Refunds are available within 7 days if the service fails to perform as described. Valid reasons include technical issues on our end, service unavailability, or quality not meeting advertised standards."
  },
  {
    title: "Non-Refundable Cases",
    body:
      "Refunds are not provided for user-side issues such as insufficient internet speed, unsupported devices, incorrect app configuration, or plan misuse. We recommend testing with a trial first."
  },
  {
    title: "How to Request a Refund",
    body:
      "Contact support via email, WhatsApp, or Telegram with your account email and purchase details. Our team will respond within 24 hours and process eligible refunds within 5-7 business days."
  },
  {
    title: "Partial Refunds",
    body:
      "For subscriptions beyond the 7-day window, partial refunds may be considered on a case-by-case basis for exceptional circumstances. Contact support to discuss your situation."
  }
];

export default function RefundPage() {
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
              <DollarSign size={14} className="text-gold-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-gold-500">Refunds</span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl mb-6">
              Refund <span className="text-gold-500">Policy</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Clear guidelines around trials, eligibility, and refund processing. We want you to feel confident in your subscription.
            </p>
          </div>
        </section>

        {/* Refund Content */}
        <section className="px-6 py-16 md:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 rounded-2xl border border-gold-500/20 bg-gold-500/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-500/20 text-gold-500">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-white mb-2">
                    Fair, Transparent Refund Guidelines
                  </h2>
                  <p className="text-sm text-white/70">
                    We stand behind our service quality. If you're not satisfied within the first 7 days, we'll provide a full refund, no questions asked.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {refundSections.map((section, index) => (
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
              <div className="flex flex-wrap gap-4 justify-center">
                <ButtonLink href="/contact">Request Refund</ButtonLink>
                <ButtonLink href="/packages" variant="outline">View Packages</ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
