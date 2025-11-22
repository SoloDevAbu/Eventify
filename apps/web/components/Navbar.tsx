"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#0b0c15]/90 backdrop-blur-md border-white/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-[#0b0c15] rounded-sm transform rotate-45" />
            </div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-white"
            >
              PulseFlow
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Product <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <Link
              href="/solutions"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Solutions
            </Link>
            <Link
              href="/customers"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Customers
            </Link>
            <Link
              href="/docs"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Docs
            </Link>
            <Link
              href="/pricing"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Pricing
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Sign in
            </Link>
            <button className="bg-white text-black hover:bg-gray-200 px-5 py-2.5 rounded-full text-sm font-semibold transition-all">
              Start Building
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0b0c15] border-b border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              href="/product"
              className="block py-3 text-base font-medium text-gray-300 hover:text-white border-b border-white/5"
            >
              Product
            </Link>
            <Link
              href="/solutions"
              className="block py-3 text-base font-medium text-gray-300 hover:text-white border-b border-white/5"
            >
              Solutions
            </Link>
            <Link
              href="/pricing"
              className="block py-3 text-base font-medium text-gray-300 hover:text-white border-b border-white/5"
            >
              Pricing
            </Link>
            <div className="pt-6 flex flex-col gap-4">
              <Link
                href="/login"
                className="text-center py-3 text-gray-300 hover:text-white font-medium"
              >
                Sign in
              </Link>
              <button className="w-full bg-white text-black py-3 rounded-full font-semibold">
                Start Building
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
