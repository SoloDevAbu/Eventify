"use client";

import Image from "next/image";

const companies = [
  "Vercel",
  "Linear",
  "RudderStack",
  "Supabase",
  "Raycast",
  "PlanetScale",
];

export default function Testimonials() {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-medium text-gray-400 mb-8 uppercase tracking-widest">
          Trusted by innovative teams at
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {companies.map((company) => (
            <div
              key={company}
              className="text-xl md:text-2xl font-bold text-gray-300 hover:text-white transition-colors cursor-default"
            >
              {company}
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-panel p-6 rounded-xl relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-xl font-serif text-black">
                "
              </div>
              <p className="text-gray-300 mb-6 relative z-10">
                "PulseFlow has completely transformed how we understand our user
                journey. The real-time insights are unmatched in the industry."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500" />
                <div>
                  <div className="font-semibold text-white">Alex Chen</div>
                  <div className="text-xs text-gray-400">CTO at TechCorp</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
