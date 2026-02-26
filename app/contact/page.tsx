"use client";

import { Mail, MessageCircle, Phone, Clock, Send, Headphones } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageTransition } from "@/components/ui/PageTransition";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    value: "Aussiesupportservice56@gmail.com",
    link: "mailto:Aussiesupportservice56@gmail.com",
    description: "Average response time under 30 minutes",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+47 3806 00578",
    link: "https://wa.me/47380600578",
    description: "Instant messaging support",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Send,
    title: "Telegram",
    value: "+44 7449 881139",
    link: "https://t.me/+447449881139",
    description: "Fast and secure messaging",
    color: "from-purple-500/20 to-pink-500/20"
  }
];

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock support"
  },
  {
    icon: Headphones,
    title: "Expert Team",
    description: "Australian-based support"
  },
  {
    icon: Phone,
    title: "Fast Response",
    description: "Under 30 min reply time"
  }
];

export default function ContactPage() {
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
                <Headphones size={14} className="text-gold-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-gold-500">24/7 Support</span>
              </div>
              <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl mb-6">
                Get in <span className="text-gold-500">Touch</span>
              </h1>
              <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
                Our Australian support team is here to help. Reach out via email, WhatsApp, or Telegram for fast assistance.
              </p>
            </div>

            {/* Quick Features */}
            <div className="grid gap-6 md:grid-cols-3 mb-16">
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

        {/* Contact Methods & Form */}
        <section className="px-6 py-16 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <h2 className="font-display text-3xl font-bold text-white mb-4">
                    Send a Message
                  </h2>
                  <p className="text-white/60">
                    Fill out the form and we'll get back to you within 30 minutes
                  </p>
                </div>

                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full h-12 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold-500/30 focus:bg-white/[0.05] transition-all"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full h-12 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold-500/30 focus:bg-white/[0.05] transition-all"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full h-12 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold-500/30 focus:bg-white/[0.05] transition-all"
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold-500/30 focus:bg-white/[0.05] transition-all resize-none"
                      placeholder="Tell us what you need..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-midnight-900 text-sm font-bold tracking-wide transition-all hover:shadow-lg hover:shadow-gold-500/20 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={16} />
                  </button>
                </form>
              </div>

              {/* Contact Methods */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="mb-8">
                  <h2 className="font-display text-3xl font-bold text-white mb-4">
                    Contact Methods
                  </h2>
                  <p className="text-white/60">
                    Choose your preferred way to reach us
                  </p>
                </div>

                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={method.title}
                      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-gold-500/30 hover:bg-white/[0.05]"
                    >
                      {/* Gradient Background on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 transition-opacity group-hover:opacity-100`} />

                      <div className="relative">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500 transition-transform group-hover:scale-110">
                            <Icon size={24} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-display text-lg font-bold text-white mb-1">
                              {method.title}
                            </h3>
                            <a
                              href={method.link}
                              target="_blank"
                              rel="noreferrer"
                              className="text-gold-400 hover:text-gold-300 transition-colors font-semibold"
                            >
                              {method.value}
                            </a>
                            <p className="text-sm text-white/60 mt-2">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Quick Action Card */}
                <div className="rounded-2xl border border-gold-500/20 bg-gradient-to-br from-gold-500/10 to-transparent p-6">
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    Ready to Subscribe?
                  </h3>
                  <p className="text-sm text-white/70 mb-4">
                    View our packages and start streaming today
                  </p>
                  <ButtonLink href="/packages" className="w-full">
                    View Packages
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
