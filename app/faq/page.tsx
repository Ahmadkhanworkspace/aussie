"use client";

import { PageTransition } from "@/components/ui/PageTransition";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HelpCircle, Zap, Shield, Clock } from "lucide-react";

const faqs = [
  {
    question: "Is IPTV legal in Australia?",
    answer:
      "IPTV technology is legal. We provide premium streaming access and encourage customers to comply with local content laws and licensing requirements."
  },
  {
    question: "Do you offer trials?",
    answer:
      "Yes, we offer a short trial so you can confirm quality, compatibility, and performance before subscribing."
  },
  {
    question: "What internet speed is required?",
    answer:
      "We recommend 15 Mbps for HD streaming and 35 Mbps for 4K streaming. For the best experience with multiple devices, 50+ Mbps is ideal."
  },
  {
    question: "How fast is activation?",
    answer:
      "Activation is typically instant and always within 10 minutes after purchase. You'll receive your credentials via email immediately."
  },
  {
    question: "Can I use multiple devices?",
    answer:
      "Yes. Choose a plan with multi-device support and stream on all eligible screens including Smart TVs, phones, tablets, and computers."
  },
  {
    question: "What is the refund policy?",
    answer:
      "We offer a 7-day money-back guarantee. If you're not satisfied with the service, contact us within 7 days for a full refund, no questions asked."
  },
  {
    question: "What channels are included?",
    answer:
      "All plans include access to 45,000+ live channels from Australia, UK, USA, and worldwide, plus 140,000+ movies and series on-demand."
  },
  {
    question: "Do I need special equipment?",
    answer:
      "No special equipment needed. Our service works on any device with internet access - Smart TVs, Android/iOS devices, computers, Fire Stick, and more."
  },
  {
    question: "Is there a contract or commitment?",
    answer:
      "No contracts required. Choose your preferred subscription length (3, 6, or 12 months) and cancel anytime without penalties."
  },
  {
    question: "What if I have technical issues?",
    answer:
      "Our 24/7 Australian support team is available via email, WhatsApp, and Telegram. Average response time is under 30 minutes."
  }
];

const quickStats = [
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Credentials in minutes"
  },
  {
    icon: Shield,
    title: "7-Day Guarantee",
    description: "Full refund available"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Always here to help"
  }
];

export default function FAQPage() {
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
                <HelpCircle size={14} className="text-gold-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-gold-500">Help Center</span>
              </div>
              <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl mb-6">
                Frequently Asked <span className="text-gold-500">Questions</span>
              </h1>
              <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
                Find answers to common questions about our IPTV service, activation, devices, and support.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <ButtonLink href="/packages">View Packages</ButtonLink>
                <ButtonLink href="/contact" variant="outline">Contact Support</ButtonLink>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid gap-6 md:grid-cols-3">
              {quickStats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm text-center"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500 mb-4">
                    <stat.icon size={24} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-sm text-white/60">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-16 md:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Common Questions
              </h2>
              <p className="text-white/60">
                Everything you need to know about Aussie-iptv
              </p>
            </div>

            <Accordion items={faqs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 md:px-10 lg:px-16 bg-white/[0.01]">
          <div className="mx-auto max-w-4xl text-center">
            <div className="rounded-3xl border border-gold-500/20 bg-gradient-to-br from-gold-500/10 to-transparent p-12">
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Our support team is available 24/7 to help with any questions
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <ButtonLink href="/contact">Contact Support</ButtonLink>
                <ButtonLink href="/packages" variant="outline">View Packages</ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
