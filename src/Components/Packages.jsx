"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PricingPackagesPage() {
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" or "annual"

  const packages = [
    {
      tier: "Tier 1",
      name: "Automate",
      subtitle: "The Foundation",
      badge: "Starter Package",
      monthlyPrice: "$297",
      annualPrice: "$249",
      setupFee: "$500 – $750 Setup",
      targetAudience: "Ideal for single-location clinics or property hosts transitioning to automated systems.",
      highlight: false,
      ctaText: "Start Automating",
      ctaLink: "/book-consultation?plan=automate",
      features: [
        "AI-Optimized Responsive Website & Funnels",
        "GHL CRM Setup & Niche Pipeline Architecture",
        "Automated Lead Capture & Qualification Forms",
        "PINIOLA AI Advisor (Basic Chatbot)",
        "Automated Email & SMS Welcome Flows",
        "Online Calendar & Appointment Scheduling",
        "30-Day Social Media Content Calendar",
        "Missed-Call & Instant Lead Recovery Workflow",
      ],
    },
    {
      tier: "Tier 2",
      name: "Growth",
      subtitle: "The Accelerator",
      badge: "Most Popular",
      monthlyPrice: "$497",
      annualPrice: "$415",
      setupFee: "$1,000 – $1,500 Setup",
      targetAudience: "Designed for scaling GLP-1 clinics and property managers ready to capture and retain more market share.",
      highlight: true, // Distinct styling for most popular tier
      ctaText: "Accelerate Growth",
      ctaLink: "/book-consultation?plan=growth",
      features: [
        "Everything in Starter Package",
        "Advanced AI Advisor (Qualification & Routing)",
        "AI-Assisted SEO & Keyword Research Strategy",
        "Competitor Analysis & On-Page Optimization",
        "Expanded Multi-Platform Social Management",
        "Automated Review & Reputation Workflows",
        "30/60/90-Day Lead Reactivation Campaigns",
        "Monthly Analytics & Commercial Dashboard",
      ],
    },
    {
      tier: "Tier 3",
      name: "Scale",
      subtitle: "The Powerhouse",
      badge: "Scale Package",
      monthlyPrice: "$797",
      annualPrice: "$665",
      setupFee: "$2,000 – $3,000 Setup",
      targetAudience: "For high-volume businesses ready to dominate both organic search and aggressive paid acquisition.",
      highlight: false,
      ctaText: "Dominate Market",
      ctaLink: "/book-consultation?plan=scale",
      features: [
        "Everything in Growth Package",
        "Full-Service Meta, Google & LinkedIn Ads Management",
        "Ad Spend Management (Up to $20K/month)",
        "AI-Driven Creative Testing & Dynamic Copywriting",
        "No-Show Recovery & Post-Call Nurture Workflows",
        "Advanced Multi-Channel Attribution & ROI Tracking",
        "Custom Automated Lead Scoring Rules",
        "Priority L2 Technical & Workflow Support",
      ],
    },
    {
      tier: "Custom",
      name: "Enterprise",
      subtitle: "Custom Solutions",
      badge: "Enterprise",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      setupFee: "Bespoke Implementation",
      targetAudience: "For multi-location clinic groups, massive property portfolios, or custom API/software needs.",
      highlight: false,
      ctaText: "Talk to Enterprise Team",
      ctaLink: "/book-consultation?plan=enterprise",
      features: [
        "Everything in Scale Package",
        "Unlimited Ad Spend Management",
        "Dedicated HIPAA Compliance Setup (for Clinics)",
        "Bespoke Software, Webhook & API Integrations",
        "Custom AI-Powered Workflow & Agent Builds",
        "Dedicated Account & Success Manager",
        "L3 Technical & Developer Support SLA",
        "Multi-Account Master Snapshot Architecture",
      ],
    },
  ];

  return (
    <div className="bg-white text-[#002B66] min-h-screen">
      
      {/* HEADER SECTION */}
      <section className="relative pt-20 lg:pt-28 bg-gradient-to-b from-[#002B66]/5 via-white to-white px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[#002B66]/10 text-[#002B66] mb-4">
            What We Do
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002B66] tracking-tight leading-tight">
            Our Service Packages
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            From foundational AI-powered setups to full-scale enterprise solutions — choose the tier that fits your growth stage.
          </p>

          {/* BILLING TOGGLE SWITCH */}
          <div className="mt-5 flex justify-center items-center gap-4">
            <span className={`text-sm font-bold ${billingCycle === "monthly" ? "text-[#002B66]" : "text-gray-400"}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              className="w-14 h-8 bg-[#002B66] rounded-full p-1 relative transition-colors focus:outline-none"
              aria-label="Toggle Billing"
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                  billingCycle === "annual" ? "transform translate-x-6" : ""
                }`}
              />
            </button>
            <span className={`text-sm font-bold flex items-center gap-1.5 ${billingCycle === "annual" ? "text-[#002B66]" : "text-gray-400"}`}>
              Annual Billing
              <span className="bg-[#2BB673]/15 text-[#2BB673] text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* PRICING GRID SECTION */}
      <section className="pt-15 pb-10 lg:pt-25 lg:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.highlight
                  ? "bg-[#002B66] text-white shadow-2xl scale-105 border-2 border-[#2BB673] z-10"
                  : "bg-white text-[#002B66] border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#002B66]/30"
              }`}
            >
              {/* BADGE FOR POPULAR TIER */}
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#2BB673] text-white text-[11px] font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md">
                  {pkg.badge}
                </div>
              )}

              <div>
                {/* TIER META INFO */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-md ${
                    pkg.highlight ? "bg-white/10 text-[#2BB673]" : "bg-[#002B66]/5 text-[#002B66]"
                  }`}>
                    {pkg.tier}
                  </span>
                  {!pkg.highlight && (
                    <span className="text-xs font-semibold text-gray-400">
                      {pkg.subtitle}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-black tracking-tight mb-2">
                  {pkg.name}
                </h3>
                <p className={`text-xs font-medium leading-relaxed mb-6 ${pkg.highlight ? "text-white/80" : "text-gray-500"}`}>
                  {pkg.targetAudience}
                </p>

                {/* PRICING DISPLAY */}
                <div className="mb-6 border-b pb-6 border-gray-100/20">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black">
                      {billingCycle === "monthly" ? pkg.monthlyPrice : pkg.annualPrice}
                    </span>
                    {pkg.monthlyPrice !== "Custom" && (
                      <span className={`text-sm font-semibold ${pkg.highlight ? "text-white/70" : "text-gray-400"}`}>
                        /month
                      </span>
                    )}
                  </div>
                  <div className={`mt-2 text-xs font-extrabold tracking-wide ${pkg.highlight ? "text-[#2BB673]" : "text-[#002B66]"}`}>
                    {pkg.setupFee}
                  </div>
                </div>

                {/* INCLUDED FEATURES LIST */}
                <div className="space-y-3.5 mb-8">
                  <div className={`text-xs font-bold uppercase tracking-wider ${pkg.highlight ? "text-white/60" : "text-gray-400"}`}>
                    Key Deliverables:
                  </div>
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <svg
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.highlight ? "text-[#2BB673]" : "text-[#2BB673]"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-xs font-medium leading-snug ${pkg.highlight ? "text-white/90" : "text-gray-700"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTON */}
              <div>
                <Link
                  href={pkg.ctaLink}
                  className={`block w-full py-3.5 px-4 rounded-xl text-center font-extrabold text-sm shadow-md transition-all transform hover:-translate-y-0.5 ${
                    pkg.highlight
                      ? "bg-[#2BB673] hover:bg-[#249e63] text-white"
                      : "bg-[#002B66] hover:bg-[#001D47] text-white"
                  }`}
                >
                  {pkg.ctaText}
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* NICHE OUTCOME CALLOUT SECTION (ALIGNED WITH PRD) */}
      <section className="py-16 bg-[#002B66]/5 border-y border-gray-100 my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002B66]">
              Designed for High-Converting Business Outcomes
            </h2>
            <p className="mt-2 text-sm text-gray-600 font-medium">
              We don't sell generic software. Every tier powers custom PINIOLA Growth Snapshots™ built specifically for your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* MEDICAL WEIGHT LOSS CLINICS */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[#002B66] text-white rounded-xl">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#002B66]">Medical Weight Loss / GLP-1 Clinics</h3>
                  <p className="text-xs text-gray-500 font-semibold">Primary Core System</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Automated administrative qualification and appointment engine designed to eliminate manual intake, increase consultation show rates, and reactivate cold patient leads.
              </p>
              <div className="text-xs font-bold text-[#2BB673] flex items-center gap-1">
                <span>Outcome: Lead → Qualification → Consultation → Follow-up → Reactivation</span>
              </div>
            </div>

            {/* SHORT TERM RENTALS */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[#002B66] text-white rounded-xl">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#002B66]">Short-Term Rental & Property Management</h3>
                  <p className="text-xs text-gray-500 font-semibold">Secondary Core System</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Automates guest inquiry responses, booking follow-ups, review requests, and owner-acquisition lead nurturing for property management portfolios.
              </p>
              <div className="text-xs font-bold text-[#2BB673] flex items-center gap-1">
                <span>Outcome: Inquiry → Response → Qualification → Booking → Review & Nurture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM STRATEGY CALL CTA */}
      
    </div>
  );
}