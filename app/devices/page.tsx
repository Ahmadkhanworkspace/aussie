"use client";

import { Laptop, Smartphone, Tv2, Tv, MonitorPlay, Boxes } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageTransition } from "@/components/ui/PageTransition";

const devices = [
  { label: "All Smart TVs", icon: Tv2 },
  { label: "All Android Devices", icon: Tv },
  { label: "All Apple Devices (iOS)", icon: Smartphone },
  { label: "Windows PC", icon: Laptop },
  { label: "MacBook / Laptop", icon: Laptop },
  { label: "Fire Stick / Fire TV", icon: MonitorPlay },
  { label: "MAG / IPTV Apps", icon: Boxes }
];

const apps = [
  "IPTV Smarters Pro",
  "XCIPTV Player",
  "TiviMate",
  "B1G Player",
  "Sky Glass App",
  "4K Strong Player"
];

export default function DevicesPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          title="Supported Devices"
          subtitle="Stream on every screen with reliable performance and premium video quality."
          primaryCta={{ label: "View Packages", href: "/packages" }}
          secondaryCta={{ label: "Contact Support", href: "/contact" }}
          imageLabel="Device compatibility visual"
        />

        <section className="px-6 py-16 md:px-10 lg:px-16">
          <SectionHeading
            eyebrow="Compatibility"
            title="Optimised for your favourite devices"
          subtitle="From Smart TVs to mobile devices, our service is tuned for smooth playback."
          />
          <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
            {devices.map((device) => {
              const Icon = device.icon;
              return (
                <GlassCard
                  key={device.label}
                  className="flex items-center justify-between px-6 py-5"
                >
                  <span className="font-display text-lg">{device.label}</span>
                  <Icon className="h-5 w-5 text-gold-400" />
                </GlassCard>
              );
            })}
          </div>
        </section>

        <section className="px-6 pb-24 md:px-10 lg:px-16">
          <SectionHeading
            eyebrow="Player Apps"
            title="Compatible IPTV apps"
            subtitle="Use your preferred IPTV player to access your subscription."
          />
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
            {apps.map((app) => (
              <GlassCard key={app} className="px-6 py-5 text-center">
                <p className="font-display text-lg">{app}</p>
              </GlassCard>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-4xl text-sm text-white/60">
            All listed apps work smoothly with our service.
          </p>
        </section>
      </main>
    </PageTransition>
  );
}
