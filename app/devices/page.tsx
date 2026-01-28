"use client";

import { Laptop, Smartphone, Tv2, Tv, MonitorPlay, Boxes, Check } from "lucide-react";
import { PageTransition } from "@/components/ui/PageTransition";
import { ButtonLink } from "@/components/ui/ButtonLink";
import Image from "next/image";

const devices = [
  {
    label: "Smart TVs",
    icon: Tv2,
    description: "Samsung, LG, Sony & more",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    label: "Android Devices",
    icon: Tv,
    description: "Phones, tablets & boxes",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    label: "Apple Devices",
    icon: Smartphone,
    description: "iPhone, iPad & Apple TV",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    label: "Windows PC",
    icon: Laptop,
    description: "Desktop & laptop",
    color: "from-orange-500/20 to-amber-500/20"
  },
  {
    label: "MacBook",
    icon: Laptop,
    description: "macOS devices",
    color: "from-indigo-500/20 to-blue-500/20"
  },
  {
    label: "Fire Stick",
    icon: MonitorPlay,
    description: "Amazon Fire TV",
    color: "from-red-500/20 to-orange-500/20"
  },
  {
    label: "MAG Boxes",
    icon: Boxes,
    description: "IPTV set-top boxes",
    color: "from-teal-500/20 to-cyan-500/20"
  }
];

const apps = [
  { name: "IPTV Smarters Pro", popular: true },
  { name: "XCIPTV Player", popular: true },
  { name: "TiviMate", popular: true },
  { name: "B1G Player", popular: false },
  { name: "Sky Glass App", popular: false },
  { name: "4K Strong Player", popular: false }
];

const features = [
  "Instant activation on all devices",
  "No technical knowledge required",
  "24/7 setup assistance available",
  "Multi-device streaming support"
];

export default function DevicesPage() {
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
                <span className="text-xs font-bold uppercase tracking-wider text-gold-500">Universal Compatibility</span>
              </div>
              <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl mb-6">
                Stream on <span className="text-gold-500">Every Device</span>
              </h1>
              <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
                Premium IPTV service optimized for all your screens. From Smart TVs to mobile devices, enjoy seamless streaming anywhere.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <ButtonLink href="/packages">View Packages</ButtonLink>
                <ButtonLink href="/contact" variant="outline">Get Setup Help</ButtonLink>
              </div>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 justify-center mb-16">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm"
                >
                  <Check size={14} className="text-gold-500" />
                  <span className="text-sm text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Devices Grid */}
        <section className="px-6 py-16 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Compatible Devices
              </h2>
              <p className="text-white/60">
                Works flawlessly on all major platforms and devices
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {devices.map((device) => {
                const Icon = device.icon;
                return (
                  <div
                    key={device.label}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-gold-500/30 hover:bg-white/[0.05]"
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${device.color} opacity-0 transition-opacity group-hover:opacity-100`} />

                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500 transition-transform group-hover:scale-110">
                          <Icon size={24} />
                        </div>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white mb-2">
                        {device.label}
                      </h3>
                      <p className="text-sm text-white/60">
                        {device.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 md:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Ready to Start Streaming?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Get instant access to premium Australian channels on all your devices
            </p>
            <ButtonLink href="/packages" className="inline-flex">
              Choose Your Package
            </ButtonLink>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
