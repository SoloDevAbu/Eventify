"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--background)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-[var(--foreground)] mb-4 block"
            >
              Eventify
            </Link>
            <p className="text-[var(--muted-foreground)] text-sm mb-6">
              The open-source customer data platform for developers.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/eventify"
                target="_blank"
                className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[var(--muted)] hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[var(--muted)] hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
              <li>
                <Link
                  href="/docs"
                  className="hover:text-[var(--foreground)] transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/api"
                  className="hover:text-[var(--foreground)] transition-colors"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="/integrations"
                  className="hover:text-[var(--foreground)] transition-colors"
                >
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[var(--foreground)] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[var(--foreground)] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-[var(--foreground)] transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[var(--foreground)] transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[var(--foreground)] transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--card-border)] text-center text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Eventify. Open Source.
        </div>
      </div>
    </footer>
  );
}
