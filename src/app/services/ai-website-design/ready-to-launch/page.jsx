"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CTASection() {
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

  // Fade up animation items
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-[#002456] py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden text-white">
      {/* Background Decorative Glow (Optional for modern feel) */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#2BB673]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* 1. BADGE */}
        <motion.div variants={itemVariants} className="inline-block mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider">
            <svg
              className="w-4 h-4 text-[#2BB673]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            READY TO LAUNCH?
          </span>
        </motion.div>

        {/* 2. HEADING */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-6 text-white"
        >
          Let&apos;s Build a Website That <br className="hidden sm:inline" />
          Actually Works for Your Business
        </motion.h2>

        {/* 3. SUBTITLE */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-blue-100/90 font-normal max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Book a free 30-minute website audit. We&apos;ll review your current site (or
          your idea), identify what&apos;s costing you leads, and show you exactly
          what your new site will do differently.
        </motion.p>

        {/* 4. BUTTONS */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          {/* PRIMARY BUTTON */}
          <motion.a
            href="#book-audit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-8 py-2.5 rounded-xl bg-white text-[#002B66] font-bold text-base shadow-lg hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-2"
          >
            Book My Free Website Audit
            <svg
              className="w-5 h-5 text-[#2BB673]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>

          {/* SECONDARY BUTTON */}
          <motion.a
            href="#services"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-8 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md text-white font-bold text-base transition-colors inline-flex items-center justify-center"
          >
            Explore All Services
          </motion.a>
        </motion.div>

        {/* 5. TRUST BADGES / GUARANTEES */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-blue-100/90 font-medium"
        >
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#2BB673]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>No commitment required</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#2BB673]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>30-minute call, no pressure</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#2BB673]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Clear action plan guaranteed</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}