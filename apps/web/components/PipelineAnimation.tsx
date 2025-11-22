"use client";

import { useEffect, useState } from "react";

export default function PipelineAnimation() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />

      {/* Central Hub */}
      <div className="relative z-10 w-24 h-24 bg-[#101124] rounded-full border-2 border-cyan-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.3)]">
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full animate-pulse flex items-center justify-center">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
      </div>

      {/* Orbiting Nodes */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i * 90 * Math.PI) / 180;
        const radius = 140;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <div
            key={i}
            className={`absolute w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
              activeNode === i
                ? "bg-white text-black scale-110 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                : "bg-[#1A1B3D] border border-white/10 text-gray-400"
            }`}
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            {i === 0 && <span className="text-xs font-bold">JS</span>}
            {i === 1 && <span className="text-xs font-bold">PY</span>}
            {i === 2 && <span className="text-xs font-bold">GO</span>}
            {i === 3 && <span className="text-xs font-bold">RS</span>}

            {/* Connection Line */}
            <div
              className="absolute top-1/2 left-1/2 w-[140px] h-[2px] bg-gradient-to-r from-cyan-500/50 to-transparent origin-left -z-10"
              style={{
                transform: `rotate(${i * 90 + 180}deg)`,
                opacity: activeNode === i ? 1 : 0.2,
              }}
            />
          </div>
        );
      })}

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              opacity: Math.random() * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}
