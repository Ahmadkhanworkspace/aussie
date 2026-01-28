"use client";

import {
  Baby,
  Film,
  Globe2,
  Heart,
  Landmark,
  Newspaper,
  Trophy,
  Sparkles,
  Tv,
  Play,
  Zap
} from "lucide-react";
import { PageTransition } from "@/components/ui/PageTransition";
import { ButtonLink } from "@/components/ui/ButtonLink";

const categories = [
  {
    label: "Australian Channels",
    icon: Landmark,
    count: "200+",
    description: "Local news, sports, and entertainment",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    label: "World Sports",
    icon: Trophy,
    count: "500+",
    description: "Live matches, highlights & analysis",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    label: "Movies & Series",
    icon: Film,
    count: "140,000+",
    description: "Latest releases and classics",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    label: "Premium Originals",
    icon: Sparkles,
    count: "1,000+",
    description: "Exclusive premium content",
    color: "from-gold-500/20 to-amber-500/20"
  },
  {
    label: "International",
    icon: Globe2,
    count: "5,000+",
    description: "UK, USA & global channels",
    color: "from-indigo-500/20 to-blue-500/20"
  },
  {
    label: "Kids & Family",
    icon: Baby,
    count: "300+",
    description: "Safe, age-appropriate content",
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    label: "News & Current Affairs",
    icon: Newspaper,
    count: "150+",
    description: "24/7 news from around the world",
    color: "from-red-500/20 to-orange-500/20"
  },
  {
    label: "Entertainment",
    icon: Tv,
    count: "800+",
    description: "Reality, talk shows & more",
    color: "from-teal-500/20 to-cyan-500/20"
  }
];

const highlights = [
  {
    icon: Zap,
    title: "45,000+ Live Channels",
    description: "Stream from Australia, UK, USA and worldwide"
  },
  {
    icon: Film,
    title: "140,000+ VOD",
    description: "Movies and series on-demand library"
  },
  {
    icon: Play,
    title: "4K Quality",
    description: "Crystal clear streaming on all devices"
  }
];

export default function ChannelsPage() {
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
                <Sparkles size={14} className="text-gold-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-gold-500">Premium Content Library</span>
              </div>
              <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl mb-6">
                45,000+ Channels <br />
                <span className="text-gold-500">Organized for You</span>
              </h1>
              <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
                Access the world's largest IPTV library with Australian, UK, USA channels plus 140,000+ movies and series on-demand.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <ButtonLink href="/packages">View Packages</ButtonLink>
                <ButtonLink href="/contact" variant="outline">Request Channel List</ButtonLink>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid gap-6 md:grid-cols-3 mb-16">
              {highlights.map((highlight, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm text-center"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500 mb-4">
                    <highlight.icon size={24} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-white/60">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Channel Categories */}
        <section className="px-6 py-16 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Channel Categories
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Every genre, every interest. Our curated categories make it easy to find exactly what you want to watch.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.label}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-gold-500/30 hover:bg-white/[0.05]"
                  >
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity group-hover:opacity-100`} />

                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500 transition-transform group-hover:scale-110">
                          <Icon size={24} />
                        </div>
                        <span className="rounded-full bg-white/[0.05] px-3 py-1 text-xs font-bold text-gold-500">
                          {category.count}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-white mb-2">
                        {category.label}
                      </h3>
                      <p className="text-sm text-white/60">
                        {category.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Info Note */}
            <div className="mt-12 rounded-2xl border border-gold-500/20 bg-gold-500/5 p-6 backdrop-blur-sm">
              <p className="text-sm text-white/80 text-center">
                <span className="font-bold text-gold-500">Regular Updates:</span> Our channel lineup is refreshed weekly to ensure you always have access to the latest content and live events.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 md:px-10 lg:px-16 bg-white/[0.01]">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Want the Full Channel List?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Contact us to receive a detailed breakdown of all available channels and categories
            </p>
            <ButtonLink href="/contact" className="inline-flex">
              Get Channel List
            </ButtonLink>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
