"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { GlassCard } from "./GlassCard";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpen?: number;
};

export function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <GlassCard key={item.question} className="overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <span className="font-display text-lg">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 transition ${
                  isOpen ? "rotate-180 text-gold-400" : "text-white/60"
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden px-6 pb-5 text-sm text-white/70">
                {item.answer}
              </div>
            </div>
          </GlassCard>
        );
      })}
    </div>
  );
}
