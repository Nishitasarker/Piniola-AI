"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ProblemSection from "./what's-include/page";

export default function HeroSection() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Stats Data List
  const stats = [
    {
      value: "3×",
      label: "Average conversion rate increase vs. previous site",
      icon: (
        <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      value: "2–4 wks",
      label: "Average time from kick-off to live website",
      icon: (
        <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      value: "95+",
      label: "Average Google PageSpeed score on launch",
      icon: (
        <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      value: "100%",
      label: "CRM-integrated from day one",
      icon: (
        <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
    <section className="relative w-full bg-gradient-to-b from-white via-[#f4faf7] to-white py-10 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
          className="flex items-center justify-center gap-2 text-sm font-medium text-gray-500 mb-6"
        >
          <Link href="/" className="hover:text-[#002B66] transition-colors">
            Home
          </Link>
          <span className="text-gray-300">&gt;</span>
          <Link href="/services" className="hover:text-[#002B66] transition-colors">
            Services
          </Link>
          <span className="text-gray-300">&gt;</span>
          <span className="text-[#2BB673] font-semibold">
            AI Website Design
          </span>
        </motion.nav>

        {/* 2. BADGE */}
        <motion.div variants={itemVariants} className="inline-block mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200/60 text-sky-600 font-bold text-xs uppercase tracking-wider shadow-sm">
            <svg
              className="w-4 h-4 text-sky-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <span>WEB DESIGN & DEVELOPMENT</span>
          </div>
        </motion.div>

        {/* 3. MAIN HEADING */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002B66] tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto"
        >
          AI-Powered Websites That Turn{" "}
          <span className="text-[#2BB673] inline-block">
            Visitors Into Paying Clients
          </span>
        </motion.h1>

        {/* 4. SUBTEXT / PARAGRAPH */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-3xl mx-auto mb-10"
        >
          Most business websites are digital brochures — they cost money without making
          money. PINIOLA AI builds AI-powered, conversion-first websites that load fast,
          rank on Google, and plug directly into your CRM to turn every visitor into a
          trackable lead.
        </motion.p>

        {/* 5. CALL TO ACTION BUTTONS */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          {/* Primary CTA */}
          <Link
            href="/free-audit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#002B66] hover:bg-[#001D47] text-white font-semibold text-base px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            <span>Get a Free Website Audit</span>
            <svg
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>

          {/* Secondary CTA */}
          <Link
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#002B66] border-2 border-[#002B66]/20 hover:border-[#002B66] font-semibold text-base px-6 py-2 rounded-xl transition-all duration-200 group"
          >
            <span>See How It Works</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>

        {/* 6. METRIC CARDS / STATS SECTION */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-3 p-2 bg-sky-50 rounded-full border border-sky-100">
                {stat.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#002B66] tracking-tight mb-2">
                {stat.value}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-medium leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
    <ProblemSection></ProblemSection>
    </>
  );
}