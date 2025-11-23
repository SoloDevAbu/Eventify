"use client";

import { ArrowRight, Terminal, Github } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[var(--background)] bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-semibold tracking-wide uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              v2.0 is now live
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-[var(--foreground)]">
              The Warehouse Native{" "}
              <span className="text-blue-500">Customer Data Platform</span>
            </h1>

            <p className="mt-4 text-lg text-[var(--muted-foreground)] mb-10 leading-relaxed max-w-xl">
              Eventify turns your data warehouse into a fully featured CDP.
              Collect, unify, and activate your customer data with open source
              infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button className="btn-primary px-8 py-4 text-lg flex items-center gap-2 group">
                Start Building
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="https://github.com/eventify"
                target="_blank"
                className="btn-secondary px-8 py-4 text-lg flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                Star on GitHub
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-[var(--card-border)]">
              <p className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-4">
                Trusted by engineering teams at
              </p>
              <div className="flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholders for logos */}
                <span className="text-xl font-bold text-[var(--muted-foreground)]">
                  ACME
                </span>
                <span className="text-xl font-bold text-[var(--muted-foreground)]">
                  Globex
                </span>
                <span className="text-xl font-bold text-[var(--muted-foreground)]">
                  Soylent
                </span>
                <span className="text-xl font-bold text-[var(--muted-foreground)]">
                  Initech
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Abstract Pipeline Visualization */}
            <div className="relative rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] p-2 shadow-2xl">
              <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full" />

              <div className="bg-[var(--background)] rounded-lg p-6 border border-[var(--card-border)]">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                  </div>
                  <div className="text-xs font-mono text-[var(--muted)]">
                    pipeline_status: active
                  </div>
                </div>

                {/* Diagram */}
                <div className="flex items-center justify-between gap-4">
                  {/* Sources */}
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-xs font-bold text-[var(--muted)]">
                      JS
                    </div>
                    <div className="w-12 h-12 rounded bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-xs font-bold text-[var(--muted)]">
                      iOS
                    </div>
                    <div className="w-12 h-12 rounded bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-xs font-bold text-[var(--muted)]">
                      Go
                    </div>
                  </div>

                  {/* Flow Lines */}
                  <div className="flex-1 h-[2px] bg-[var(--card-border)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/50 w-1/2 animate-slide-right" />
                  </div>

                  {/* Engine */}
                  <div className="w-24 h-24 rounded-full border-2 border-blue-500/30 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-ping" />
                    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                      <div className="w-8 h-8 bg-white rounded-sm" />
                    </div>
                  </div>

                  {/* Flow Lines */}
                  <div className="flex-1 h-[2px] bg-[var(--card-border)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-teal-500/50 w-1/2 animate-slide-right delay-75" />
                  </div>

                  {/* Destinations */}
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-xs font-bold text-[var(--muted)]">
                      S3
                    </div>
                    <div className="w-12 h-12 rounded bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-xs font-bold text-[var(--muted)]">
                      PG
                    </div>
                    <div className="w-12 h-12 rounded bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-xs font-bold text-[var(--muted)]">
                      WH
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--card-border)] grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--foreground)]">
                      12k+
                    </div>
                    <div className="text-xs text-[var(--muted)] uppercase tracking-wide">
                      Events/sec
                    </div>
                  </div>
                  <div className="text-center border-l border-[var(--card-border)]">
                    <div className="text-2xl font-bold text-teal-500">
                      99.9%
                    </div>
                    <div className="text-xs text-[var(--muted)] uppercase tracking-wide">
                      Uptime
                    </div>
                  </div>
                  <div className="text-center border-l border-[var(--card-border)]">
                    <div className="text-2xl font-bold text-blue-500">50ms</div>
                    <div className="text-xs text-[var(--muted)] uppercase tracking-wide">
                      Latency
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
