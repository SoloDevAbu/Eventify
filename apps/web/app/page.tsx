"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import SignupModal from "../components/SignupModal";
import { useState } from "react";

export default function Home() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
      />
    </main>
  );
}
