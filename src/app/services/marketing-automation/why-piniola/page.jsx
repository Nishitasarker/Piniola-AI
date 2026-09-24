"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PiniolaComparisonSection() {
  // Parent container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Fade-up animation for header, table, and cards
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Piniola AI Comparison Rows Data
  const features = [
    {
      name: "Multi-Channel (Email + SMS + Voicemail)",
      mailchimp: "text-email-only",
      activeCampaign: "text-email-sms",
      klaviyo: "text-email-sms",
      piniola: "check",
    },
    {
      name: "Behavioural Trigger Workflows",
      mailchimp: "text-basic",
      activeCampaign: "check",
      klaviyo: "check",
      piniola: "check",
    },
    {
      name: "CRM-Integrated Automations",
      mailchimp: "cross",
      activeCampaign: "text-limited",
      klaviyo: "text-limited",
      piniola: "check",
    },
    {
      name: "Done-For-You Copywriting",
      mailchimp: "cross",
      activeCampaign: "cross",
      klaviyo: "cross",
      piniola: "check",
    },
    {
      name: "Visual Workflow Builder",
      mailchimp: "text-basic",
      activeCampaign: "check",
      klaviyo: "check",
      piniola: "check",
    },
    {
      name: "Lead Scoring & Segmentation",
      mailchimp: "text-basic",
      activeCampaign: "check",
      klaviyo: "check",
      piniola: "check",
    },
    {
      name: "Appointment Automation Built In",
      mailchimp: "cross",
      activeCampaign: "text-extra",
      klaviyo: "cross",
      piniola: "check",
    },
    {
      name: "Re-engagement Campaigns",
      mailchimp: "cross",
      activeCampaign: "check",
      klaviyo: "check",
      piniola: "check",
    },
    {
      name: "Revenue Attribution Reporting",
      mailchimp: "cross",
      activeCampaign: "text-basic",
      klaviyo: "text-basic",
      piniola: "check",
    },
    {
      name: "Transparent, All-In-One Pricing",
      mailchimp: "check",
      activeCampaign: "cross",
      klaviyo: "cross",
      piniola: "check",
    },
  ];

  // Helper function to render cell content (Checkmark, Cross, or Gray Text)
  const renderCellContent = (status, isHighlightedColumn = false) => {
    if (status === "check") {
      return (
        <span
          className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
            isHighlightedColumn
              ? "bg-[#2BB673]/20 text-[#2BB673]"
              : "bg-emerald-50 text-[#2BB673]"
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </span>
      );
    }

    if (status === "cross") {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 text-rose-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      );
    }

    // Custom Text Statuses Map
    const textMap = {
      "text-email-only": "email only",
      "text-email-sms": "email + SMS",
      "text-basic": "basic",
      "text-limited": "limited",
      "text-extra": "extra cost",
    };

    return (
      <span className="text-xs font-medium text-slate-400">
        {textMap[status] || status}
      </span>
    );
  };

  return (
    <section className="relative w-full bg-slate-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* 1. BADGE */}
        <motion.div variants={itemVariants} className="inline-block mb-4">
          <span className="px-4 py-1.5 rounded-full bg-[#2BB673]/10 border border-[#2BB673]/20 text-[#2BB673] font-bold text-xs uppercase tracking-wider">
            WHY PINIOLA AI
          </span>
        </motion.div>

        {/* 2. HEADING */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-extrabold text-[#002B66] tracking-tight leading-tight mb-4 max-w-3xl mx-auto"
        >
          How We Compare to Standalone Automation Tools
        </motion.h2>

        {/* 3. SUBTITLE */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-slate-500 font-normal max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Mailchimp, ActiveCampaign, and Klaviyo are tools — we deliver a complete, done-for-you automation system.
        </motion.p>

        {/* 4. COMPARISON TABLE CONTAINER */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-200/40 overflow-hidden mb-10"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left border-collapse">
              {/* TABLE HEADER */}
              <thead>
                <tr className="border-b border-slate-100 text-xs sm:text-sm font-bold text-slate-600">
                  <th className="py-5 px-6 w-1/3 text-[#002B66]">Feature</th>
                  <th className="py-5 px-4 text-center">Mailchimp</th>
                  <th className="py-5 px-4 text-center">ActiveCampaign</th>
                  <th className="py-5 px-4 text-center">Klaviyo</th>
                  {/* PINIOLA AI HIGHLIGHTED HEADER */}
                  <th className="py-5 px-6 text-center bg-[#2BB673]/5 border-l border-r border-slate-100 relative">
                    <div className="flex flex-col items-center justify-center gap-1.5">
                      <span className="text-[#002B66] font-extrabold text-sm sm:text-base">
                        PINIOLA AI
                      </span>
                      <span className="px-3 py-0.5 rounded-full bg-[#2BB673] text-white text-[10px] font-bold tracking-wide uppercase shadow-sm">
                        Best Value
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* TABLE BODY */}
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {features.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50/70 transition-colors duration-150"
                  >
                    {/* FEATURE NAME */}
                    <td className="py-4 px-6 font-bold text-[#002B66]">
                      {item.name}
                    </td>

                    {/* MAILCHIMP COLUMN */}
                    <td className="py-4 px-4 text-center">
                      {renderCellContent(item.mailchimp)}
                    </td>

                    {/* ACTIVECAMPAIGN COLUMN */}
                    <td className="py-4 px-4 text-center">
                      {renderCellContent(item.activeCampaign)}
                    </td>

                    {/* KLAVIYO COLUMN */}
                    <td className="py-4 px-4 text-center">
                      {renderCellContent(item.klaviyo)}
                    </td>

                    {/* PINIOLA AI HIGHLIGHTED COLUMN */}
                    <td className="py-4 px-6 text-center bg-[#2BB673]/5 border-l border-r border-slate-100 font-semibold">
                      {renderCellContent(item.piniola, true)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* 5. PRICING & VALUE SUMMARY CARDS (PINIOLA MATCHED STYLES) */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
        >
          {/* Card 1: Mailchimp */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="text-center font-bold text-[#002B66] text-lg mb-1">
                Mailchimp
              </h3>
              <p className="text-center font-extrabold text-[#002B66] text-2xl sm:text-3xl mb-4">
                $20–$350<span className="text-base font-semibold text-slate-500">/mo</span>
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-center sm:text-left font-normal">
                Email only. Limited automation on lower tiers. No SMS, no CRM, no appointment scheduling. You still have to build everything yourself.
              </p>
            </div>
          </motion.div>

          {/* Card 2: ActiveCampaign */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="text-center font-bold text-[#002B66] text-lg mb-1">
                ActiveCampaign
              </h3>
              <p className="text-center font-extrabold text-[#002B66] text-2xl sm:text-3xl mb-4">
                $49–$299<span className="text-base font-semibold text-slate-500">/mo</span>
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-center sm:text-left font-normal">
                Powerful tool, but complex setup. Requires significant internal time to build and maintain. No done-for-you service included.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Piniola AI (Brand Color Matched Card) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-gradient-to-br from-[#002B66] to-[#001D47] rounded-2xl p-6 border border-[#2BB673]/40 shadow-xl flex flex-col justify-between relative overflow-hidden text-white"
          >
            {/* Green Glow Accent in corner */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#2BB673]/30 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-[#2BB673] text-white text-[10px] font-bold tracking-wider uppercase">
                  RECOMMENDED
                </span>
              </div>
              <h3 className="text-center font-bold text-white text-base sm:text-lg mb-1">
                Piniola AI Agency
              </h3>
              <p className="text-center text-xs text-slate-300 font-medium mb-3">
                (n8n · GHL · Make · Zapier)
              </p>
              <p className="text-center font-extrabold text-[#2BB673] text-xl sm:text-2xl mb-4 leading-tight">
                One-time build + platform costs
              </p>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed text-center sm:text-left font-normal">
                We pick the right tool for your stack — n8n, GoHighLevel, Make, or Zapier. Fully built, copy-written, tested, and managed for you from day one.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}