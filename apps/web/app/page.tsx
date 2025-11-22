"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import SignupModal from "../components/SignupModal";
import { useState } from "react";

export default function Home() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0b0c15] text-white selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
      />
    </main>
  );
}
