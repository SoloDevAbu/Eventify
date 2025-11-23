"use client";

import { ArrowRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Ingest",
    description: "Send events via SDK or API.",
  },
  {
    id: "02",
    title: "Process",
    description: "Real-time rule evaluation.",
  },
  {
    id: "03",
    title: "Segment",
    description: "Dynamic user grouping.",
  },
  {
    id: "04",
    title: "Activate",
    description: "Trigger downstream actions.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[var(--background)] border-t border-[var(--card-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            How it works
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-[var(--card-border)] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--card-bg)] border-2 border-[var(--card-border)] flex items-center justify-center text-[var(--muted)] font-bold text-lg mb-6 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors z-10">
                    {step.id}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
