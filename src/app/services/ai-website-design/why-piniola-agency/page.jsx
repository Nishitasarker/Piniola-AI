"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ComparisonSection() {
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

  // Fade-up animation for header and table
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Comparison Rows Data
  const features = [
    {
      name: "Custom AI-Designed Layout",
      diy: "cross",
      freelancer: "check",
      agency: "check",
      piniola: "check",
    },
    {
      name: "Mobile-First Development",
      diy: "text-basic",
      freelancer: "text-varies",
      agency: "check",
      piniola: "check",
    },
    {
      name: "SEO Foundation Built In",
      diy: "cross",
      freelancer: "text-varies",
      agency: "text-addon",
      piniola: "check",
    },
    {
      name: "CRM & Lead Form Integration",
      diy: "cross",
      freelancer: "text-extra",
      agency: "text-extra",
      piniola: "check",
    },
    {
      name: "Core Web Vitals Optimized (95+)",
      diy: "cross",
      freelancer: "text-varies",
      agency: "text-rarely",
      piniola: "check",
    },
    {
      name: "Analytics & Conversion Tracking",
      diy: "text-basic",
      freelancer: "text-extra",
      agency: "text-extra",
      piniola: "check",
    },
    {
      name: "Self-Managed CMS",
      diy: "check",
      freelancer: "text-varies",
      agency: "check",
      piniola: "check",
    },
    {
      name: "Launch in 2–4 Weeks",
      diy: "check",
      freelancer: "cross",
      agency: "cross",
      piniola: "check",
    },
    {
      name: "Integrated Marketing Stack",
      diy: "cross",
      freelancer: "cross",
      agency: "cross",
      piniola: "check",
    },
    {
      name: "Transparent Fixed Pricing",
      diy: "check",
      freelancer: "cross",
      agency: "cross",
      piniola: "check",
    },
  ];

  // Helper function to render cell content (Checkmark, Cross, or Gray Text)
  const renderCellContent = (status, isHighlightedColumn = false) => {
    if (status === "check") {
      return (
        <span
          className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
            isHighlightedColumn ? "bg-[#2BB673]/15 text-[#2BB673]" : "bg-sky-50 text-[#002B66]"
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

    // Gray Text Statuses
    const textMap = {
      "text-basic": "basic",
      "text-varies": "varies",
      "text-addon": "add-on",
      "text-extra": "extra cost",
      "text-rarely": "rarely",
    };

    return (
      <span className="text-xs font-medium text-gray-400">
        {textMap[status] || status}
      </span>
    );
  };

  return (
    <section className="relative w-full bg-gray-100 py-10 md:py-15 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* 1. BADGE */}
        <motion.div variants={itemVariants} className="inline-block mb-4">
          <span className="px-4 py-1.5 rounded-full bg-green-50 border border-green-200/60 text-green-600 font-bold text-xs uppercase tracking-wider">
            WHY PINIOLA AI
          </span>
        </motion.div>

        {/* 2. HEADING */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl  font-extrabold text-[#002B66] tracking-tight leading-tight mb-4 max-w-3xl mx-auto"
        >
          How We Compare to Your Options
        </motion.h2>

        {/* 3. SUBTITLE */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-gray-500 font-normal max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          See what you actually get — and what everyone else quietly leaves out.
        </motion.p>

        {/* 4. COMPARISON TABLE CONTAINER */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left border-collapse">
              {/* TABLE HEADER */}
              <thead>
                <tr className="border-b border-gray-100/80 text-xs sm:text-sm font-bold text-gray-600">
                  <th className="py-5 px-6 w-1/3">Feature</th>
                  <th className="py-5 px-4 text-center">DIY (Wix / Squarespace)</th>
                  <th className="py-5 px-4 text-center">Freelancer</th>
                  <th className="py-5 px-4 text-center">Traditional Agency</th>
                  {/* PINIOLA COLUMN HEADER */}
                  <th className="py-5 px-6 text-center bg-[#002B66]/[0.03] border-l border-r border-gray-100 relative">
                    <div className="flex flex-col items-center justify-center gap-1.5">
                      <span className="text-[#002B66] font-extrabold text-sm sm:text-base">
                        PINIOLA AI
                      </span>
                      <span className="px-3 py-0.5 rounded-full bg-[#002B66] text-white text-[10px] font-bold tracking-wide uppercase">
                        Best Value
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* TABLE BODY */}
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                {features.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50/50 transition-colors duration-150"
                  >
                    {/* FEATURE NAME */}
                    <td className="py-4 px-6 font-bold text-[#002B66]">
                      {item.name}
                    </td>

                    {/* DIY COLUMN */}
                    <td className="py-4 px-4 text-center">
                      {renderCellContent(item.diy)}
                    </td>

                    {/* FREELANCER COLUMN */}
                    <td className="py-4 px-4 text-center">
                      {renderCellContent(item.freelancer)}
                    </td>

                    {/* TRADITIONAL AGENCY COLUMN */}
                    <td className="py-4 px-4 text-center">
                      {renderCellContent(item.agency)}
                    </td>

                    {/* PINIOLA AI HIGHLIGHTED COLUMN */}
                    <td className="py-4 px-6 text-center bg-[#002B66]/[0.03] border-l border-r border-gray-100 font-semibold">
                      {renderCellContent(item.piniola, true)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}