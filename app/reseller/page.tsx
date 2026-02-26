"use client";

import { BadgePercent, Boxes, Briefcase, Users } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageTransition } from "@/components/ui/PageTransition";

const benefits = [
  {
    title: "Professional Reseller Panel",
    description: "Manage clients, activations, and renewals in one place.",
    icon: BadgePercent
  },
  {
    title: "Affordable Reseller Prices",
    description: "Access bulk pricing tiers built for healthy margins.",
    icon: Boxes
  },
  {
    title: "Business Ready",
    description: "Ideal for freelancers, shops, and online sellers.",
    icon: Briefcase
  },
  {
    title: "24/7 Reseller Support",
    description: "Dedicated support for fast issue resolution.",
    icon: Users
  }
];

export default function ResellerPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          title="Become an IPTV Reseller"
          subtitle="Launch a premium IPTV business with Australian servers, instant activation, and partner-friendly pricing."
          primaryCta={{ label: "Apply Now", href: "https://wa.me/447862120843" }}
          secondaryCta={{ label: "View Packages", href: "/packages" }}
          imageLabel="Reseller program placeholder"
        />

        <section className="px-6 py-16 md:px-10 lg:px-16">
          <SectionHeading
            eyebrow="Reseller Benefits"
            title="Designed for long-term partner growth"
            subtitle="We provide the infrastructure so you can focus on sales and retention."
          />
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <GlassCard key={benefit.title} className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 bg-gold-500/10">
                    <Icon className="h-6 w-6 text-gold-400" />
                  </div>
                  <h3 className="font-display mt-4 text-lg font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    {benefit.description}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </section>

        <section className="px-6 pb-24 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <GlassCard className="flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gold-400">
                  Reseller CTA
                </p>
                <h2 className="font-display mt-3 text-2xl font-semibold md:text-3xl">
                  Apply for bulk pricing and partner onboarding
                </h2>
                <p className="mt-3 text-sm text-white/70">
                  We’ll respond within 24 hours with commission details and
                  onboarding steps.
                </p>
              </div>
              <ButtonLink href="https://wa.me/447862120843">Submit Reseller Request</ButtonLink>
            </GlassCard>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
