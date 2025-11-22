"use client";

import Navbar from "../../components/Navbar";
import { Copy, Check, Terminal } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [copied, setCopied] = useState(false);
  const apiKey = "pf_live_592834928349283492834";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#101124] text-white">
      <Navbar />

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Developer</h1>
          <p className="text-gray-400">
            Here's what's happening with your projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quickstart */}
            <div className="glass-panel p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                Quickstart
              </h2>
              <p className="text-gray-400 mb-4 text-sm">
                Install the PulseFlow SDK to start tracking events in your
                application.
              </p>

              <div className="bg-[#0b0c15] rounded-lg p-4 font-mono text-sm text-gray-300 mb-4 border border-white/10">
                npm install @pulseflow/sdk
              </div>

              <p className="text-gray-400 mb-4 text-sm">
                Initialize the client with your API key:
              </p>

              <div className="bg-[#0b0c15] rounded-lg p-4 font-mono text-sm text-gray-300 border border-white/10 overflow-x-auto">
                <span className="text-purple-400">import</span>{" "}
                {"{ PulseFlow }"} <span className="text-purple-400">from</span>{" "}
                <span className="text-green-400">'@pulseflow/sdk'</span>;
                <br />
                <br />
                <span className="text-purple-400">const</span> client ={" "}
                <span className="text-purple-400">new</span> PulseFlow(
                {"{ API_KEY }"});
                <br />
                client.track(
                <span className="text-green-400">'user_signup'</span>,{" "}
                {"{ plan: 'pro' }"});
              </div>
            </div>

            {/* Recent Events */}
            <div className="glass-panel p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Live Events</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="font-mono text-sm text-cyan-300">
                        user_signup
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">Just now</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* API Key */}
            <div className="glass-panel p-6 rounded-xl">
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                API Key
              </h2>
              <div className="relative">
                <input
                  type="text"
                  readOnly
                  value={apiKey}
                  className="w-full bg-[#0b0c15] border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none"
                />
                <button
                  onClick={copyToClipboard}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Keep this key secret. Do not share it in client-side code.
              </p>
            </div>

            {/* Usage */}
            <div className="glass-panel p-6 rounded-xl">
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Usage
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Events</span>
                    <span className="text-gray-400">12,450 / 50,000</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-1/4 bg-gradient-to-r from-cyan-500 to-blue-500" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">API Calls</span>
                    <span className="text-gray-400">840 / 1,000</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-pink-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
