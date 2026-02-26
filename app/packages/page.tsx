"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageTransition } from "@/components/ui/PageTransition";

const plans = [
  {
    name: "3 Months",
    price: "$45",
    period: "AUD / 3 Months",
    description: "Great starter plan with full access and 24/7 support.",
    features: [
      "All AU/UK/USA Channels",
      "45,000+ Channels",
      "140,000+ Movies & Series",
      "EPG TV Guide",
      "Adult Channels (Optional)",
      "24/7 Support"
    ]
  },
  {
    name: "6 Months",
    price: "$75",
    period: "AUD / 6 Months",
    description: "Most popular plan for families and long-term value.",
    highlight: "Most Popular",
    features: [
      "All AU/UK/USA Channels",
      "45,000+ Channels",
      "140,000+ Movies & Series",
      "EPG TV Guide",
      "Adult Channels (Optional)",
      "24/7 Support"
    ]
  },
  {
    name: "12 Months",
    price: "$120",
    period: "AUD / 12 Months",
    description: "Best value for heavy viewers and multi-device homes.",
    features: [
      "All AU/UK/USA Channels",
      "45,000+ Channels",
      "140,000+ Movies & Series",
      "EPG TV Guide",
      "Adult Channels (Optional)",
      "24/7 Support"
    ]
  }
];

export default function PackagesPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          title="Premium IPTV Packages"
          subtitle="3, 6, and 12 month plans with instant activation, Australian servers, and buffer-free streaming."
          primaryCta={{ label: "Subscribe Now", href: "/contact" }}
          secondaryCta={{ label: "Compare Plans", href: "#pricing" }}
          imageLabel="Pricing visuals placeholder"
        />

        <section id="pricing" className="px-6 py-16 md:px-10 lg:px-16">
          <SectionHeading
            eyebrow="Pricing"
            title="Choose the plan that fits your household"
            subtitle="All plans include Australian support, fast servers, and premium streaming infrastructure."
          />
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -6 }}
              >
                <GlassCard
                  className={`relative flex h-full flex-col gap-6 p-8 ${plan.highlight ? "border-gold-400/50 shadow-glow" : ""
                    }`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-4 left-6 rounded-full bg-gold-500 px-4 py-1 text-xs font-semibold text-midnight-900">
                      {plan.highlight}
                    </span>
                  )}
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                      {plan.name}
                    </p>
                    <div className="mt-4 flex items-end gap-2">
                      <span className="font-display text-4xl font-semibold">
                        {plan.price}
                      </span>
                      <span className="text-sm text-white/60">{plan.period}</span>
                    </div>
                    <p className="mt-3 text-sm text-white/70">{plan.description}</p>
                  </div>
                  <div className="space-y-3 text-sm text-white/75">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <BadgeCheck className="h-4 w-4 text-gold-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <ButtonLink href="/contact" className="mt-auto w-full">
                    Subscribe Now
                  </ButtonLink>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-24 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <GlassCard className="relative overflow-hidden border-gold-500/20 bg-gradient-to-br from-gold-500/5 to-transparent p-8">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -z-10" />

              <div className="grid gap-8 md:grid-cols-3">
                <div className="text-center md:text-left">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/20 text-gold-500 mb-4">
                    <BadgeCheck size={24} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    Instant Activation
                  </h3>
                  <p className="text-sm text-white/70">
                    Get your credentials within minutes of purchase. Start streaming immediately.
                  </p>
                </div>

                <div className="text-center md:text-left">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/20 text-gold-500 mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    Secure Payment
                  </h3>
                  <p className="text-sm text-white/70">
                    All transactions are encrypted and processed securely through trusted payment gateways.
                  </p>
                </div>

                <div className="text-center md:text-left">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/20 text-gold-500 mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    Money-Back Guarantee
                  </h3>
                  <p className="text-sm text-white/70">
                    Not satisfied? Get a full refund within the first 7 days, no questions asked.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 text-center">
                <p className="text-sm text-white/60 mb-4">
                  Have questions about our packages? Our team is here to help.
                </p>
                <ButtonLink href="/contact" variant="outline" className="w-full sm:w-auto">
                  Contact Support
                </ButtonLink>
              </div>
            </GlassCard>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
