"use client";

import {
  Baby,
  Film,
  Globe2,
  Heart,
  Landmark,
  Newspaper,
  Trophy,
  Sparkles
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageTransition } from "@/components/ui/PageTransition";

const categories = [
  { label: "Australian Channels", icon: Landmark },
  { label: "World Sports", icon: Trophy },
  { label: "Movies & Series", icon: Film },
  { label: "Premium Originals", icon: Sparkles },
  { label: "International", icon: Globe2 },
  { label: "Kids & Family", icon: Baby },
  { label: "News", icon: Newspaper },
  { label: "Religious", icon: Heart },
  { label: "Entertainment", icon: Globe2 }
];

export default function ChannelsPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          title="Channel Categories"
          subtitle="Discover curated channel groups across every genre. Lineups are refreshed regularly."
          primaryCta={{ label: "View Packages", href: "/packages" }}
          secondaryCta={{ label: "Contact Support", href: "/contact" }}
          imageLabel="Channel category grid preview"
        />

        <section className="px-6 py-16 md:px-10 lg:px-16">
          <SectionHeading
            eyebrow="Categories"
            title="Everything your household watches, neatly organised"
            subtitle="We focus on the experience and consistent service quality without listing copyrighted channel names."
          />
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <GlassCard key={category.label} className="p-6 text-white/80">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 bg-gold-500/10">
                    <Icon className="h-6 w-6 text-gold-400" />
                  </div>
                  <h3 className="font-display mt-4 text-lg font-semibold text-white">
                    {category.label}
                  </h3>
                  <p className="mt-2 text-sm text-white/60">
                    Curated lineups refreshed weekly.
                  </p>
                </GlassCard>
              );
            })}
          </div>
          <p className="mx-auto mt-6 max-w-6xl text-sm text-white/60">
            Channels are updated regularly to keep the catalogue current and
            aligned with viewer demand.
          </p>
        </section>
      </main>
    </PageTransition>
  );
}
