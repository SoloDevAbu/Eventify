"use client";

import { Database, Share2, Zap, Code2, Lock, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <Database className="w-6 h-6 text-cyan-400" />,
    title: "Collect",
    description:
      "Ingest data from every app, website, and SaaS tool with a single API.",
    code: `client.track('Order Completed', {
  total: 99.99,
  currency: 'USD'
});`,
  },
  {
    icon: <Share2 className="w-6 h-6 text-purple-400" />,
    title: "Unify",
    description:
      "Stitch together user profiles and build a complete view of your customer journey.",
    code: `const profile = await client.identify('user_123', {
  email: 'alex@example.com',
  plan: 'enterprise'
});`,
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    title: "Activate",
    description:
      "Sync computed traits and audiences to 200+ destinations in real-time.",
    code: `// Data automatically syncs to:
// - Salesforce
// - HubSpot
// - Google Ads`,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-[#0b0c15] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            The complete{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Customer Data Stack
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to build a first-class data infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-panel rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="p-8">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8 h-20">
                  {feature.description}
                </p>

                <div className="bg-[#101124] rounded-lg p-4 border border-white/5 font-mono text-xs text-gray-300 overflow-x-auto">
                  <pre>{feature.code}</pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
