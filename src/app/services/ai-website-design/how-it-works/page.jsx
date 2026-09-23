"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HowItWorksSection() {
  // Parent container stagger animation
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

  // Card slide & fade-up animation
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // 5 Process Steps Data
  const steps = [
    {
      stepNumber: "01",
      days: "DAYS 1–3",
      title: "Discovery & Brand Audit",
      desc: "A 60-minute strategy call covering your business goals, target audience, competitors, and messaging. We map the full conversion journey before writing a single line of code.",
      bgColor: "bg-sky-50",
      iconColor: "text-sky-500",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      stepNumber: "02",
      days: "DAYS 4–7",
      title: "Wireframe & Copy Strategy",
      desc: "We create page-by-page wireframes and write conversion-focused copy using AI + human editing. Every section is intentional — designed to move visitors toward a decision.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      stepNumber: "03",
      days: "DAYS 8–14",
      title: "AI-Assisted Design Build",
      desc: "Our AI design engine generates layout options based on top-performing sites in your industry. We select, refine, and custom-polish every section to match your brand.",
      bgColor: "bg-sky-50",
      iconColor: "text-sky-500",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      stepNumber: "04",
      days: "DAYS 15–21",
      title: "Development & Integration",
      desc: "Full frontend development, CRM connection, lead forms, analytics, and SEO implementation. Tested across all browsers and devices before QA.",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-500",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      stepNumber: "05",
      days: "DAYS 22–28",
      title: "Launch & Post-Launch Support",
      desc: "We go live, submit to Google Search Console, and stay hands-on for 30–60 days. Full walkthrough so you can manage updates with confidence.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-500",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="relative w-full bg-white py-10 md:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-7xl mx-auto text-center"
      >
        {/* 1. BADGE */}
        <motion.div variants={itemVariants} className="inline-block mb-4">
          <span className="px-4 py-1.5 rounded-full bg-green-50 border border-green-200/60 text-green-600 font-bold text-xs uppercase tracking-wider">
            HOW IT WORKS
          </span>
        </motion.div>

        {/* 2. MAIN HEADING */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-extrabold text-[#002B66] tracking-tight leading-tight mb-4 max-w-3xl mx-auto"
        >
          From Kick-Off to Live in <br/> 2–4 Weeks
        </motion.h2>

        {/* 3. SUBTITLE */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-gray-500 font-normal max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          A structured, transparent build process — so you always know what&apos;s happening
          and when.
        </motion.p>

        {/* 4. 5-STEP GRID */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 text-left"
        >
          {steps.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* CARD TOP ROW: ICON & STEP NUMBER */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-10 h-10 rounded-xl ${item.bgColor} ${item.iconColor} flex items-center justify-center`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-3xl font-extrabold text-gray-400 select-none">
                    {item.stepNumber}
                  </span>
                </div>

                {/* DAYS BADGE */}
                <span className="inline-block text-[11px] font-bold tracking-wider text-gray-400 uppercase mb-2">
                  {item.days}
                </span>

                {/* STEP TITLE */}
                <h3 className="text-base font-bold text-[#002B66] mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* STEP DESCRIPTION */}
                <p className="text-xs text-gray-500 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}