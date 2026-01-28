"use client";

import { BadgePercent, Boxes, Briefcase, Users, TrendingUp, Shield, Zap, DollarSign, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageTransition } from "@/components/ui/PageTransition";

const benefits = [
  {
    title: "Professional Panel",
    description: "Manage clients, activations, and renewals in one dashboard",
    icon: BadgePercent,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Bulk Pricing",
    description: "Access wholesale rates with healthy profit margins",
    icon: Boxes,
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Business Ready",
    description: "Perfect for shops, freelancers, and online sellers",
    icon: Briefcase,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "24/7 Support",
    description: "Dedicated reseller support for fast resolution",
    icon: Users,
    color: "from-orange-500/20 to-amber-500/20"
  }
];

const features = [
  "Instant credit activation system",
  "White-label reseller panel",
  "Automated renewal notifications",
  "Real-time customer management",
  "Bulk discount tiers",
  "Priority technical support"
];

const stats = [
  { value: "50+", label: "Active Resellers" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Support Available" }
];

export default function ResellerPage() {
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
                <TrendingUp size={14} className="text-gold-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-gold-500">Partner Program</span>
              </div>
              <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl mb-6">
                Become an <span className="text-gold-500">IPTV Reseller</span>
              </h1>
              <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
                Launch your premium IPTV business with Australian infrastructure, instant activation, and wholesale pricing designed for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ButtonLink href="/contact" className="w-full sm:w-auto">Apply Now</ButtonLink>
                <ButtonLink href="/packages" variant="outline" className="w-full sm:w-auto">View Pricing</ButtonLink>
              </div>
            </div>

            {/* Stats */}
            <div className="grid gap-6 md:grid-cols-3">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm text-center"
                >
                  <div className="font-display text-4xl font-bold text-gold-500 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-6 py-16 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Why Partner With Us?
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                We provide the infrastructure and support so you can focus on growing your customer base
              </p>
            </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-gold-500/30 hover:bg-white/[0.05]"
                  >
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 transition-opacity group-hover:opacity-100`} />

                    <div className="relative">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500 transition-transform group-hover:scale-110 mb-4">
                        <Icon size={24} />
                      </div>
                      <h3 className="font-display text-lg font-bold text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-white/60">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-6 py-16 md:px-10 lg:px-16 bg-white/[0.01]">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                What's Included
              </h2>
              <p className="text-white/60">
                Everything you need to run a successful IPTV reselling business
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 backdrop-blur-sm"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-500/10">
                    <Check size={16} className="text-gold-500" />
                  </div>
                  <span className="text-sm text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-3xl border border-gold-500/20 bg-gradient-to-br from-gold-500/10 to-transparent p-12">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl -z-10" />

              <div className="relative text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-500/20 text-gold-500 mb-6">
                  <DollarSign size={32} />
                </div>
                <h2 className="font-display text-3xl font-bold text-white mb-4">
                  Ready to Start Your IPTV Business?
                </h2>
                <p className="text-white/70 max-w-2xl mx-auto mb-8">
                  Apply for our reseller program and get access to wholesale pricing, professional tools, and dedicated support. We'll respond within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ButtonLink href="/contact" className="w-full sm:w-auto">Submit Application</ButtonLink>
                  <ButtonLink href="/packages" variant="outline" className="w-full sm:w-auto">View Packages</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
