"use client";

import { CreditCard, ShieldCheck, Sparkles, Wifi, Check, Clock, Zap, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageTransition } from "@/components/ui/PageTransition";

const steps = [
  {
    number: "01",
    title: "Choose Your Package",
    description: "Select from 3, 6, or 12-month plans. All packages include full access to 45,000+ channels and 140,000+ VOD.",
    icon: Sparkles,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    number: "02",
    title: "Secure Payment",
    description: "Complete your purchase through our encrypted payment gateway. We accept all major payment methods.",
    icon: CreditCard,
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    number: "03",
    title: "Instant Activation",
    description: "Receive your login credentials via email within minutes. No waiting, no delays.",
    icon: ShieldCheck,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    number: "04",
    title: "Start Streaming",
    description: "Download your preferred IPTV player, enter your credentials, and enjoy buffer-free streaming.",
    icon: Wifi,
    color: "from-orange-500/20 to-amber-500/20"
  }
];

const features = [
  {
    icon: Clock,
    title: "5-Minute Setup",
    description: "From purchase to streaming in under 5 minutes"
  },
  {
    icon: Zap,
    title: "Instant Delivery",
    description: "Automated system sends credentials immediately"
  },
  {
    icon: Check,
    title: "No Technical Skills",
    description: "Simple setup process anyone can follow"
  }
];

const faqs = [
  {
    question: "Do I need special equipment?",
    answer: "No. Any device with internet access works - Smart TV, phone, tablet, computer, or streaming box."
  },
  {
    question: "How long does activation take?",
    answer: "Credentials are sent within 2-5 minutes after payment confirmation."
  },
  {
    question: "Can I change my package later?",
    answer: "Yes. Contact support to upgrade or modify your subscription at any time."
  }
];

export default function HowItWorksPage() {
  return (
    <PageTransition>
      <main className="relative">
        {/* Premium Hero Section */}
        <section className="relative px-6 pb-20 pt-24 md:px-10 lg:px-16 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.15),transparent_50%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/5 px-4 py-1.5 mb-6">
                <Zap size={14} className="text-gold-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-gold-500">Simple Process</span>
              </div>
              <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl mb-6">
                How It <span className="text-gold-500">Works</span>
              </h1>
              <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
                Get started with premium IPTV in just 4 simple steps. From package selection to streaming in under 5 minutes.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <ButtonLink href="/packages">Get Started Now</ButtonLink>
                <ButtonLink href="/contact" variant="outline">Need Help?</ButtonLink>
              </div>
            </div>

            {/* Quick Features */}
            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm text-center"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500 mb-4">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/60">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="px-6 py-16 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                4 Steps to Premium Streaming
              </h2>
              <p className="text-white/60">
                Our streamlined process gets you watching in minutes
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm transition-all hover:border-gold-500/30 hover:bg-white/[0.05]"
                  >
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 transition-opacity group-hover:opacity-100`} />

                    <div className="relative">
                      {/* Step Number */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-display text-6xl font-bold text-gold-500/20">
                          {step.number}
                        </span>
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500 transition-transform group-hover:scale-110">
                          <Icon size={28} />
                        </div>
                      </div>

                      <h3 className="font-display text-2xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Arrow for non-last items */}
                      {index < steps.length - 1 && (
                        <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-gold-500/30">
                          <ArrowRight size={24} />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-16 md:px-10 lg:px-16 bg-white/[0.01]">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Common Questions
              </h2>
              <p className="text-white/60">
                Everything you need to know about getting started
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm"
                >
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-white/70">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 md:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl text-center">
            <div className="rounded-3xl border border-gold-500/20 bg-gradient-to-br from-gold-500/10 to-transparent p-12">
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Choose your package and start streaming premium content in minutes
              </p>
              <ButtonLink href="/packages" className="inline-flex">
                View Packages
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
