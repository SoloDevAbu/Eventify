"use client";

import { ArrowRight, Terminal } from "lucide-react";
import PipelineAnimation from "./PipelineAnimation";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0b0c15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-8">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse" />
              The Warehouse Native CDP
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-white">
              Turn your warehouse into a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Customer Data Platform
              </span>
            </h1>

            <p className="mt-4 text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
              Collect, unify, and activate your customer data. Open source,
              warehouse-first, and developer-friendly.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center gap-2 group">
                Start Building
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full text-lg font-semibold text-white border border-white/20 hover:bg-white/5 flex items-center gap-2 transition-all">
                <Terminal className="w-5 h-5 text-gray-400" />
                Read the Docs
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-gray-500 text-sm font-medium">
              <span>TRUSTED BY ENGINEERING TEAMS AT</span>
              <div className="flex gap-6 opacity-60 grayscale">
                {/* Simple text placeholders for logos to keep it clean */}
                <span className="font-bold">Acme Corp</span>
                <span className="font-bold">Globex</span>
                <span className="font-bold">Soylent</span>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl" />
            <div className="relative w-full">
              <PipelineAnimation />

              {/* Code Snippet Overlay */}
              <div className="absolute -bottom-12 -right-4 bg-[#101124]/90 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl max-w-sm animate-fade-in-up hidden md:block">
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-gray-500 font-mono">
                    config.ts
                  </span>
                </div>
                <pre className="font-mono text-xs text-gray-300 overflow-x-auto">
                  <code>
                    <span className="text-purple-400">const</span> client ={" "}
                    <span className="text-yellow-400">new</span> PulseFlow({`{`}
                    {"\n"} writeKey:{" "}
                    <span className="text-green-400">"pk_live_..."</span>,{"\n"}{" "}
                    dataPlaneUrl:{" "}
                    <span className="text-green-400">"https://..."</span>
                    {"\n"}
                    {`}`});
                    {"\n"}
                    {"\n"}client.track(
                    <span className="text-green-400">"Order Completed"</span>,{" "}
                    {`{`}
                    {"\n"} total: <span className="text-orange-400">99.00</span>
                    ,{"\n"} currency:{" "}
                    <span className="text-green-400">"USD"</span>
                    {"\n"}
                    {`}`});
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
