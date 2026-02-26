"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageTransition } from "@/components/ui/PageTransition";

export default function ContactPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          title="Contact Australia IPTV"
          subtitle="We respond fast with real support. Reach us via email or messaging apps."
          primaryCta={{ label: "View Packages", href: "/packages" }}
          secondaryCta={{ label: "Reseller Program", href: "/reseller" }}
          imageLabel="Support team placeholder"
        />

        <section className="px-6 py-16 md:px-10 lg:px-16">
          <SectionHeading
            eyebrow="Support"
            title="Send us a message"
            subtitle="Fill in the form below and our Australian team will get back to you."
          />
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <GlassCard className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="text-sm text-white/70">Full Name</label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold-400 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/70">Email Address</label>
                  <input
                    type="email"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold-400 focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/70">Subject</label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold-400 focus:outline-none"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/70">Message</label>
                  <textarea
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold-400 focus:outline-none"
                    placeholder="Tell us what you need"
                  />
                </div>
                <button
                  type="button"
                  className="w-full rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-midnight-900 shadow-glow transition hover:bg-gold-400"
                >
                  Send Message
                </button>
                <p className="text-xs text-white/50">
                  Form submissions are stored once backend integration is added.
                </p>
              </form>
            </GlassCard>

            <div className="space-y-4">
              <GlassCard className="p-6">
                <div className="flex items-center gap-3 text-gold-400">
                  <Mail className="h-5 w-5" />
                  <a
                    href="mailto:Aussiesupportservice56@gmail.com"
                    className="text-sm font-semibold text-white hover:text-gold-300"
                  >
                    Aussiesupportservice56@gmail.com
                  </a>
                </div>
                <p className="mt-3 text-sm text-white/60">
                  Email support available 24/7 with average response time under
                  30 minutes.
                </p>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="flex items-center gap-3 text-gold-400">
                  <MessageCircle className="h-5 w-5" />
                  <p className="text-sm font-semibold text-white">
                    WhatsApp / Telegram
                  </p>
                </div>
                <div className="mt-3 space-y-2 text-sm text-white/60">
                  <a
                    href="https://wa.me/447862120843"
                    className="block hover:text-gold-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp: +44 7862 120843
                  </a>
                  <a
                    href="https://t.me/+447449881139"
                    className="block hover:text-gold-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Telegram: +44 7449 881139
                  </a>
                </div>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="flex items-center gap-3 text-gold-400">
                  <Phone className="h-5 w-5" />
                  <p className="text-sm font-semibold text-white">
                    Support Hours
                  </p>
                </div>
                <p className="mt-3 text-sm text-white/60">
                  Available 24/7 for fast response.
                </p>
                <ButtonLink href="https://wa.me/447862120843" variant="outline" className="mt-4">
                  View Plans
                </ButtonLink>
              </GlassCard>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
