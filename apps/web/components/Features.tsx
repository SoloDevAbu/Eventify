"use client";

import { Database, Zap, Users, Workflow } from "lucide-react";

const features = [
  {
    icon: <Database className="w-6 h-6 text-blue-500" />,
    title: "Event Ingestion",
    description: "High-throughput ingestion API compatible with Segment SDKs.",
    colSpan: "md:col-span-2",
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    title: "Real-time Processing",
    description: "Sub-50ms latency for rule evaluation and profile updates.",
    colSpan: "md:col-span-1",
  },
  {
    icon: <Users className="w-6 h-6 text-teal-500" />,
    title: "Identity Resolution",
    description: "Automatically stitch anonymous and identified user sessions.",
    colSpan: "md:col-span-1",
  },
  {
    icon: <Workflow className="w-6 h-6 text-purple-500" />,
    title: "Visual Workflow Builder",
    description: "Create complex automation flows without writing code.",
    colSpan: "md:col-span-2",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-[var(--background)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            Built for modern data stacks
          </h2>
          <p className="text-[var(--muted-foreground)] text-lg max-w-2xl">
            Eventify provides the infrastructure you need to build personalized
            experiences at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`tech-card rounded-xl p-8 ${feature.colSpan}`}
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--background)] border border-[var(--card-border)] flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">
                {feature.title}
              </h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
