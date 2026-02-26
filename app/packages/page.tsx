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
          primaryCta={{ label: "Subscribe Now", href: "https://wa.me/447862120843" }}
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
                  <ButtonLink href="https://wa.me/447862120843" className="mt-auto w-full">
                    Subscribe Now
                  </ButtonLink>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-24 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <GlassCard className="flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gold-400">
                  Secure Checkout
                </p>
                <h2 className="font-display mt-3 text-2xl font-semibold md:text-3xl">
                  Ready for Stripe integration
                </h2>
                <p className="mt-3 text-sm text-white/70">
                  Connect payments when you’re ready. The structure is designed
                  for seamless subscription workflows.
                </p>
              </div>
              <ButtonLink href="https://wa.me/447862120843" variant="outline">
                Talk to Sales
              </ButtonLink>
            </GlassCard>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
