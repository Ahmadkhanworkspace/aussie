"use client";

import { CreditCard, ShieldCheck, Sparkles, Wifi } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageTransition } from "@/components/ui/PageTransition";

const steps = [
  {
    title: "Choose a Package",
    description: "Select a plan that matches your devices and viewing habits.",
    icon: Sparkles
  },
  {
    title: "Secure Payment",
    description: "Checkout securely with a payment provider you trust.",
    icon: CreditCard
  },
  {
    title: "Instant Activation",
    description: "Receive your login details within minutes.",
    icon: ShieldCheck
  },
  {
    title: "Stream Anywhere",
    description: "Enjoy buffer-free streaming across all devices.",
    icon: Wifi
  }
];

export default function HowItWorksPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          title="How It Works"
          subtitle="Four simple steps to start streaming premium IPTV in Australia."
          primaryCta={{ label: "View Packages", href: "https://wa.me/447862120843" }}
          secondaryCta={{ label: "Contact Support", href: "https://wa.me/447862120843" }}
          imageLabel="Activation timeline placeholder"
        />

        <section className="px-6 py-16 md:px-10 lg:px-16">
          <SectionHeading
            eyebrow="Steps"
            title="Fast onboarding with zero friction"
            subtitle="Every step is designed to deliver a premium, secure, and fast setup."
          />
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <GlassCard key={step.title} className="p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
                    Step {index + 1}
                    <span className="h-2 w-2 rounded-full bg-gold-400" />
                  </div>
                  <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 bg-gold-500/10">
                    <Icon className="h-6 w-6 text-gold-400" />
                  </div>
                  <h3 className="font-display mt-4 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    {step.description}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
