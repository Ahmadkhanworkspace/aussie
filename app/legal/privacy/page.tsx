"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { PageTransition } from "@/components/ui/PageTransition";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Shield, Lock } from "lucide-react";

const privacySections = [
  {
    title: "Data We Collect",
    body:
      "We collect essential account details such as name, email, and device information to provide service access and support. This information is necessary for account activation and customer service."
  },
  {
    title: "How We Use Data",
    body:
      "Data is used to activate accounts, improve service reliability, and provide customer support. We do not sell personal data to third parties or use it for unauthorized marketing purposes."
  },
  {
    title: "Cookies",
    body:
      "We use cookies for session management, analytics, and service personalization. You can disable cookies in your browser settings, though this may affect some functionality."
  },
  {
    title: "Payment Safety",
    body:
      "Payment data is processed through secure, PCI-compliant providers. We do not store card details on our servers. All transactions are encrypted and protected."
  },
  {
    title: "Data Security",
    body:
      "We apply encryption, access controls, and monitoring to protect customer information. Our infrastructure follows industry-standard security practices."
  },
  {
    title: "Data Retention",
    body:
      "We retain customer data for the duration of your subscription and for a reasonable period afterward for support and legal compliance purposes."
  },
  {
    title: "Your Rights",
    body:
      "You have the right to access, update, or delete your personal data. Contact our support team to exercise these rights or for any privacy-related questions."
  }
];

export default function PrivacyPage() {
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
              <Lock size={14} className="text-gold-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-gold-500">Privacy</span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl mb-6">
              Privacy <span className="text-gold-500">Policy</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We respect your data and protect your privacy with industry-standard security measures.
            </p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="px-6 py-16 md:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 rounded-2xl border border-gold-500/20 bg-gold-500/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-500/20 text-gold-500">
                  <Shield size={20} />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-white mb-2">
                    Your Data, Handled Responsibly
                  </h2>
                  <p className="text-sm text-white/70">
                    We collect only what is necessary to deliver a premium experience and protect your information with the highest security standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {privacySections.map((section, index) => (
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
