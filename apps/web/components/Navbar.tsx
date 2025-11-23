"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Github, Book, Code2 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--card-border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-[var(--foreground)]"
            >
              Eventify
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/product"
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Product
            </Link>
            <Link
              href="/solutions"
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Pricing
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href="https://github.com/eventify"
              target="_blank"
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Sign in
            </Link>
            <button className="btn-primary px-4 py-2 text-sm">
              Start for free
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[var(--muted)] hover:text-[var(--foreground)] p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--background)] border-b border-[var(--card-border)]">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              href="/product"
              className="block py-3 text-base font-medium text-[var(--muted)] hover:text-[var(--foreground)] border-b border-[var(--card-border)]"
            >
              Product
            </Link>
            <Link
              href="/solutions"
              className="block py-3 text-base font-medium text-[var(--muted)] hover:text-[var(--foreground)] border-b border-[var(--card-border)]"
            >
              Solutions
            </Link>
            <Link
              href="/docs"
              className="block py-3 text-base font-medium text-[var(--muted)] hover:text-[var(--foreground)] border-b border-[var(--card-border)]"
            >
              Documentation
            </Link>
            <Link
              href="/pricing"
              className="block py-3 text-base font-medium text-[var(--muted)] hover:text-[var(--foreground)] border-b border-[var(--card-border)]"
            >
              Pricing
            </Link>
            <div className="pt-6 flex flex-col gap-4">
              <Link
                href="/login"
                className="text-center py-3 text-[var(--muted)] hover:text-[var(--foreground)] font-medium"
              >
                Sign in
              </Link>
              <button className="w-full btn-primary py-3">
                Start for free
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
