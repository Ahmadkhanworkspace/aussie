"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Bolt,
  Globe2,
  Headphones,
  Monitor,
  MonitorPlay,
  PlayCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Tv2,
  Wifi,
  ChevronDown
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageTransition } from "@/components/ui/PageTransition";

const features = [
  {
    title: "45,000+ Live Channels",
    description: "Australian, UK, USA, and global channels organised by genre.",
    icon: Tv2
  },
  {
    title: "World Sports Coverage",
    description:
      "Football leagues, cricket events, combat sports, racing, and PPV.",
    icon: Star
  },
  {
    title: "Movies & Series Library",
    description: "140,000+ titles across Hollywood, Bollywood, and family hits.",
    icon: PlayCircle
  },
  {
    title: "4K / Full HD Streaming",
    description: "Ultra HD streams optimised for fast Australian connections.",
    icon: MonitorPlay
  },
  {
    title: "No Buffering Technology",
    description: "Advanced anti-freeze tech keeps streams smooth all day.",
    icon: Bolt
  },
  {
    title: "Works on All Devices",
    description: "Smart TV, Android, iOS, Firestick, Windows & Mac.",
    icon: Smartphone
  },
  {
    title: "24/7 Customer Support",
    description: "Local support team with real humans on standby.",
    icon: Headphones
  }
];

const plans = [
  {
    name: "3 Months",
    price: "$45",
    period: "AUD / 3 Months",
    accent: "Starter",
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
    accent: "Most Popular",
    features: [
      "All AU/UK/USA Channels",
      "45,000+ Channels",
      "140,000+ Movies & Series",
      "EPG TV Guide",
      "Adult Channels (Optional)",
      "24/7 Support"
    ],
    highlight: true
  },
  {
    name: "12 Months",
    price: "$120",
    period: "AUD / 12 Months",
    accent: "Best Value",
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

const categories = [
  { label: "Australian Channels", icon: Globe2 },
  { label: "World Sports", icon: TrophyIcon },
  { label: "Movies & Series", icon: PlayCircle },
  { label: "International", icon: Globe2 },
  { label: "Kids & Family", icon: Sparkles },
  { label: "News", icon: Globe2 },
  { label: "Religious", icon: Globe2 },
  { label: "Entertainment", icon: Globe2 }
];

const steps = [
  {
    title: "Choose a Plan",
    description: "Pick the package that matches your devices and viewing habits.",
    icon: CrownIcon
  },
  {
    title: "Receive Instant Activation",
    description: "We send your login details within minutes — no waiting.",
    icon: ShieldCheck
  },
  {
    title: "Start Streaming",
    description: "Watch premium IPTV on any device with zero buffering.",
    icon: Monitor
  }
];

const devices = [
  "Smart TV",
  "Android TV",
  "iOS",
  "Windows / Mac",
  "Firestick / Fire TV",
  "MAG / IPTV Apps"
];

const testimonials = [
  {
    name: "Sophie W.",
    location: "Sydney, NSW",
    quote:
      "The sports quality is unreal. AFL in 4K with no lag, even on weekends.",
    rating: 5
  },
  {
    name: "Liam B.",
    location: "Brisbane, QLD",
    quote:
      "Setup was instant and the channel list is massive. Support replied in minutes.",
    rating: 5
  },
  {
    name: "Charlotte R.",
    location: "Melbourne, VIC",
    quote:
      "Finally a service that feels premium. The interface is smooth and reliable.",
    rating: 5
  },
  {
    name: "Noah K.",
    location: "Perth, WA",
    quote:
      "No buffering and the movies library is stacked. Worth every dollar.",
    rating: 5
  }
];

const faqs = [
  {
    question: "Is IPTV legal in Australia?",
    answer:
      "IPTV technology is legal. We provide secure access to premium streaming technology and encourage customers to comply with local content guidelines."
  },
  {
    question: "Do you offer free trials?",
    answer:
      "Yes. We provide a short trial so you can test quality and device compatibility before subscribing."
  },
  {
    question: "What internet speed is required?",
    answer:
      "We recommend 15 Mbps for HD and 35 Mbps for 4K streaming for a flawless experience."
  },
  {
    question: "How fast is activation?",
    answer:
      "Activation is typically instant and always within 10 minutes after purchase."
  },
  {
    question: "Can I use multiple devices?",
    answer:
      "Absolutely. Choose a plan with multi-device support and stream on all your screens."
  }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 21h8" />
      <path d="M12 17c3.866 0 7-3.134 7-7V4H5v6c0 3.866 3.134 7 7 7Z" />
      <path d="M4 5H2v2c0 2.5 2 4.5 4.5 4.5H7" />
      <path d="M20 5h2v2c0 2.5-2 4.5-4.5 4.5H17" />
    </svg>
  );
}

function CrownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 16h14l-1 4H6l-1-4Z" />
      <path d="m5 16 2-9 5 5 5-5 2 9" />
    </svg>
  );
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <PageTransition>
      <main className="relative overflow-hidden">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
          animate={{ backgroundPosition: ["0px 0px", "80px 80px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-40"
          animate={{ opacity: [0.25, 0.4, 0.25], y: [0, -12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 10%, rgba(20,32,64,0.35), transparent 55%), radial-gradient(circle at 50% 90%, rgba(20,32,64,0.35), transparent 55%)"
          }}
        />

        <section className="relative px-4 pb-20 pt-20 sm:px-6 md:px-10 lg:px-16 lg:pt-24">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={sectionVariants}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
                <Sparkles className="h-4 w-4 text-gold-400" />
                Australia-first streaming, built for premium viewers
              </div>
              <h1 className="font-display mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Australia’s #1 Premium IPTV Streaming Service
              </h1>
              <p className="mt-5 text-base text-white/75 sm:text-lg md:text-xl">
                45,000+ Live Channels • 140,000+ Movies & Series • 4K Ultra HD •
                Zero Buffering
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <ButtonLink href="/packages" className="w-full sm:w-auto">Get Started</ButtonLink>
                <ButtonLink href="/packages" variant="outline" className="w-full sm:w-auto">
                  View Packages
                </ButtonLink>
              </div>
              <div className="mt-10 flex flex-wrap gap-4 text-sm text-white/70">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <BadgeCheck className="h-4 w-4 text-gold-400" />
                  Works on All Devices
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <ShieldCheck className="h-4 w-4 text-gold-400" />
                  99.9% Uptime
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <Wifi className="h-4 w-4 text-gold-400" />
                  Australian Servers
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-white/5 blur-[30px]" />
              <div className="relative space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="rounded-2xl border border-white/10 bg-midnight-700/80 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-white/70">Smart TV</p>
                    <MonitorPlay className="h-5 w-5 text-gold-400" />
                  </div>
                  <p className="mt-3 font-display text-2xl font-semibold">
                    4K Sports Night
                  </p>
                  <p className="mt-2 text-sm text-white/60">
                    Ultra-low latency streaming
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-midnight-700/80 p-4">
                    <div className="flex items-center justify-between text-sm text-white/70">
                      Mobile
                      <Smartphone className="h-4 w-4 text-gold-400" />
                    </div>
                    <p className="mt-3 font-display text-lg font-semibold">
                      Match Highlights
                    </p>
                    <p className="mt-1 text-xs text-white/60">
                      Watch anywhere
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-midnight-700/80 p-4">
                    <div className="flex items-center justify-between text-sm text-white/70">
                      Laptop
                      <Monitor className="h-4 w-4 text-gold-400" />
                    </div>
                    <p className="mt-3 font-display text-lg font-semibold">
                      Movie Premiere
                    </p>
                    <p className="mt-1 text-xs text-white/60">
                      Cinematic quality
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-midnight-700/80 p-4">
                  <div>
                    <p className="text-sm text-white/70">Streaming Health</p>
                    <p className="mt-2 font-display text-lg font-semibold">
                      Anti-Buffering Active
                    </p>
                  </div>
                  <ShieldCheck className="h-6 w-6 text-gold-400" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 md:px-10 lg:px-16">
          <SectionHeading
            eyebrow="Premium Features"
            title="Built for reliability, designed for luxury"
            subtitle="Every stream is optimised for Australian speeds, backed by 24/7 support and premium infrastructure."
          />
          <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -6, boxShadow: "0 0 40px rgba(212,175,55,0.2)" }}
                >
                  <GlassCard className="h-full p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 bg-gold-500/10">
                      <Icon className="h-6 w-6 text-gold-400" />
                    </div>
                    <h3 className="font-display mt-5 text-xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm text-white/70">
                      {feature.description}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="pricing" className="px-4 py-20 sm:px-6 md:px-10 lg:px-16">
          <SectionHeading
            eyebrow="Packages"
            title="Choose a premium plan that fits your household"
            subtitle="3, 6, and 12 month plans in AUD with instant activation and 24/7 support."
          />
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 pt-4 lg:grid-cols-3">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.6 }}
                className={`relative overflow-visible ${plan.highlight ? "z-20 lg:-mt-8 lg:scale-[1.02]" : ""}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-6 z-30 rounded-full bg-gold-500 px-4 py-1 text-xs font-semibold text-midnight-900 shadow-glow">
                    Most Popular
                  </div>
                )}
                <GlassCard
                  className={`flex h-full flex-col gap-6 p-8 ${plan.highlight
                      ? "relative z-20 border-gold-400/50 shadow-glow"
                      : "border-white/10"
                    }`}
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                      {plan.accent}
                    </p>
                    <h3 className="font-display mt-3 text-2xl font-semibold">
                      {plan.name}
                    </h3>
                    <div className="mt-4 flex items-end gap-2">
                      <span className="font-display text-4xl font-semibold">
                        {plan.price}
                      </span>
                      <span className="text-sm text-white/60">{plan.period}</span>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-white/75">
                    {plan.features.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <BadgeCheck className="h-4 w-4 text-gold-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <ButtonLink href="/packages" className="mt-auto w-full">
                    Subscribe Now
                  </ButtonLink>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="channels" className="px-4 py-20 sm:px-6 md:px-10 lg:px-16">
          <SectionHeading
            eyebrow="Channel Categories"
            title="Everything you love, organised and curated"
            subtitle="Australian favourites, premium sports, and global entertainment across every genre."
          />
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto mt-10 grid max-w-6xl gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <GlassCard
                  key={category.label}
                  className="flex items-center justify-center gap-3 px-4 py-6 text-center text-sm text-white/80"
                >
                  <Icon className="h-5 w-5 text-gold-400" />
                  <span>{category.label}</span>
                </GlassCard>
              );
            })}
          </motion.div>
        </section>

        <section id="how" className="px-4 py-20 sm:px-6 md:px-10 lg:px-16">
          <SectionHeading
            eyebrow="How It Works"
            title="Start streaming in minutes"
            subtitle="A simple onboarding flow designed for speed and confidence."
          />
          <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.5 }}
                >
                  <GlassCard className="h-full p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 bg-gold-500/10">
                      <Icon className="h-6 w-6 text-gold-400" />
                    </div>
                    <h3 className="font-display mt-4 text-xl font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70">
                      {step.description}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="devices" className="px-4 py-20 sm:px-6 md:px-10 lg:px-16">
          <SectionHeading
            eyebrow="Device Compatibility"
            title="Stream anywhere, anytime"
            subtitle="Optimised for every screen and every operating system."
          />
          <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-3">
            {devices.map((device) => (
              <GlassCard
                key={device}
                className="flex items-center justify-between px-6 py-5"
              >
                <span className="font-display text-lg">{device}</span>
                <MonitorPlay className="h-5 w-5 text-gold-400" />
              </GlassCard>
            ))}
          </div>
        </section>

        <section id="testimonials" className="px-4 py-20 sm:px-6 md:px-10 lg:px-16">
          <SectionHeading
            eyebrow="Trust Builders"
            title="Loved across Australia"
            subtitle="Premium quality, local support, and zero buffering that customers can feel."
          />
          <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial) => (
              <GlassCard key={testimonial.name} className="p-6">
                <div className="flex items-center gap-1 text-gold-400">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 text-gold-400 fill-gold-400"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm text-white/75">
                  “{testimonial.quote}”
                </p>
                <div className="mt-5 text-sm">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-white/60">{testimonial.location}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        <section id="faq" className="px-4 py-20 sm:px-6 md:px-10 lg:px-16">
          <SectionHeading
            eyebrow="FAQ"
            title="Answers to common questions"
            subtitle="Everything you need to know before you start streaming."
          />
          <div className="mx-auto mt-10 max-w-4xl space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <GlassCard key={faq.question} className="overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left gap-4"
                  >
                    <span className="font-display text-base md:text-lg leading-snug">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 transition ${isOpen ? "rotate-180 text-gold-400" : "text-white/60"
                        }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6"
                  >
                    <p className="pb-5 text-sm text-white/70">{faq.answer}</p>
                  </motion.div>
                </GlassCard>
              );
            })}
          </div>
        </section>

        <section id="final-cta" className="px-4 pb-24 pt-6 sm:px-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <GlassCard className="relative overflow-hidden p-10 md:p-12">
              <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-gold-500/20 blur-[80px]" />
              <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-gold-400">
                    Premium Access
                  </p>
                  <h2 className="font-display mt-3 text-3xl font-semibold md:text-4xl">
                    Start Streaming Premium IPTV Today
                  </h2>
                  <p className="mt-3 text-sm text-white/70 md:text-base">
                    Secure your spot with Australia’s most trusted IPTV service.
                  </p>
                </div>
                <ButtonLink href="/packages">Get Instant Access</ButtonLink>
              </div>
            </GlassCard>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
