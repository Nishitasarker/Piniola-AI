"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ProblemSection from "./the-problem/page";
import AutomationSection from "./what's-included/page";
import AutomationStackSection from "./our-automation-stack/page";
import HowItWorksSection from "./how-it-works/page";
import PiniolaComparisonSection from "./why-piniola/page";



export default function ServiceHeroSection() {
  // Staggered parent animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  // Fade up animation items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Stats Data
  const stats = [
    {
      value: "451%",
      desc: "More qualified leads generated with marketing automation vs no automation",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      value: "14×",
      desc: "Higher click-through rates from behaviour-triggered emails vs blasts",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
        </svg>
      ),
    },
    {
      value: "80%",
      desc: "Of repetitive marketing tasks eliminated after a full automation build",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      value: "24/7",
      desc: "Your pipeline nurtured — even when your team is completely offline",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
    <section className="relative w-full bg-gradient-to-b from-white via-[#f4faf7] to-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center"
      >
        {/* 1. BREADCRUMB */}
        <motion.nav
          variants={itemVariants}
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500 font-medium mb-6"
        >
          <Link href="/" className="hover:text-[#002B66] transition-colors">
            Home
          </Link>
          <span>›</span>
          <Link href="/services" className="hover:text-[#002B66] transition-colors">
            Services
          </Link>
          <span>›</span>
          <span className="text-[#2BB673] font-semibold">Marketing Automation</span>
        </motion.nav>

        {/* 2. BADGE WITH GREEN ACCENT */}
        <motion.div variants={itemVariants} className="inline-block mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2BB673]/10 border border-[#2BB673]/30 text-[#2BB673] font-bold text-xs uppercase tracking-wider">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            MARKETING AUTOMATION
          </span>
        </motion.div>

        {/* 3. MAIN HEADING */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-extrabold text-[#002B66] tracking-tight leading-tight mb-6 max-w-4xl mx-auto"
        >
          Nurture Every Lead 24/7 With{" "}
          <span className="text-[#2BB673] inline-block">
            Smart Multi-Channel Automation
          </span>
        </motion.h1>

        {/* 4. SUBTITLE WITH BRAND REPLACEMENT (PINIOLA AI) */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-slate-600 font-normal max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Manual email blasts and forgotten follow-ups are costing you deals every single
          week. <strong className="text-[#002B66] font-semibold">Piniola AI</strong> designs, writes,
          and builds your complete marketing automation system — using n8n, GoHighLevel,
          Make, Zapier, and the best-fit tools for your stack — so every lead is nurtured
          and every deal is tracked, around the clock.
        </motion.p>

        {/* 5. CALL TO ACTION BUTTONS */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          {/* PRIMARY BUTTON */}
          <motion.a
            href="#free-audit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-7 py-2.5 rounded-xl bg-[#002B66] hover:bg-[#001D47] text-white font-bold text-base shadow-lg shadow-[#2BB673]/20 transition-colors inline-flex items-center justify-center gap-2 group"
          >
            <span>Get a Free Automation Audit</span>
            <svg
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>

          {/* SECONDARY BUTTON */}
          <motion.a
            href="#how-it-works"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-7 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#002B66] border-2  font-bold text-base transition-colors inline-flex items-center justify-center gap-2 group"
          >
            <span>See How It Works</span>
            <svg
              className="w-4 h-4 text-[#002B66] transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>

        {/* 6. STATS GRID (4 CARDS) */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-[#2BB673]/30 transition-all flex flex-col items-center justify-between"
            >
              {/* ICON */}
              <div className="w-10 h-10 rounded-xl bg-[#2BB673]/10 text-[#2BB673] flex items-center justify-center mb-4">
                {stat.icon}
              </div>

              {/* STAT NUMBER */}
              <div className="text-2xl sm:text-3xl font-extrabold text-[#002B66] mb-3 tracking-tight">
                {stat.value}
              </div>

              {/* STAT DESCRIPTION */}
              <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
    <ProblemSection></ProblemSection>
    <AutomationSection></AutomationSection>
    <AutomationStackSection></AutomationStackSection>
    <HowItWorksSection></HowItWorksSection>
    <PiniolaComparisonSection></PiniolaComparisonSection>
    </>
  );
}