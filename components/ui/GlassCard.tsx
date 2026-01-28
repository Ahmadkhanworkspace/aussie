import React from "react";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-glass shadow-card backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}
