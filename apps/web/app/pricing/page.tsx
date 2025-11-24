"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PricingCard from "../../components/PricingCard";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-blue-500/30">
      <Navbar />

      <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl mix-blend-screen" />
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl mix-blend-screen" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto mb-16">
            Start for free, scale as you grow. No hidden fees.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Free"
              price="$0"
              description="Perfect for side projects and hobbyists."
              features={[
                "1,000 events per month",
                "14-day data retention",
                "Community support",
                "Basic analytics",
                "1 project",
              ]}
              ctaText="Start for free"
              onCtaClick={() => console.log("Free plan clicked")}
            />
            <PricingCard
              title="Pro"
              price="$49"
              description="For growing businesses and data-driven teams."
              features={[
                "10,000 events per day",
                "90-day data retention",
                "Priority email support",
                "Advanced analytics & segmentation",
                "Unlimited projects",
                "Custom event properties",
              ]}
              ctaText="Get started with Pro"
              highlighted={true}
              onCtaClick={() => console.log("Pro plan clicked")}
            />
          </div>

          {/* FAQ Section */}
          <div className="mt-32 max-w-3xl mx-auto text-left">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Frequently asked questions
            </h2>

            <Accordion.Root
              type="single"
              defaultValue="item-1"
              collapsible
              className="space-y-4"
            >
              <Accordion.Item
                value="item-1"
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between px-6 py-4 text-left text-lg font-medium hover:bg-[var(--muted)]/10 transition-colors group">
                    <span>What counts as an event?</span>
                    <ChevronDown className="w-5 h-5 text-[var(--muted-foreground)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 pb-4 text-[var(--muted-foreground)] data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                  An event is any trackable action sent to Eventify, such as a
                  page view, button click, or custom user action. We count the
                  total number of events received across all your projects.
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item
                value="item-2"
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between px-6 py-4 text-left text-lg font-medium hover:bg-[var(--muted)]/10 transition-colors group">
                    <span>What happens if I exceed my limit?</span>
                    <ChevronDown className="w-5 h-5 text-[var(--muted-foreground)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 pb-4 text-[var(--muted-foreground)] data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                  On the Free plan, we'll stop processing events until the next
                  billing cycle. On the Pro plan, we'll contact you to discuss
                  upgrading to a higher tier or custom enterprise plan. We won't
                  cut you off immediately.
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item
                value="item-3"
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between px-6 py-4 text-left text-lg font-medium hover:bg-[var(--muted)]/10 transition-colors group">
                    <span>Can I cancel anytime?</span>
                    <ChevronDown className="w-5 h-5 text-[var(--muted-foreground)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 pb-4 text-[var(--muted-foreground)] data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                  Yes, you can cancel your subscription at any time. Your access
                  will continue until the end of your current billing period.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
