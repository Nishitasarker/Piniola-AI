"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProblemSection() {
  // Container animation
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

  // Item fade-up animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // 6 Problems Data
  const problems = [
    {
      title: "Sending Emails Manually, One by One",
      desc: "Your team spends hours writing and sending the same follow-up emails for every new lead. It's not sustainable — and it means slower responses, inconsistent messaging, and burned-out staff.",
      icon: (
        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      iconBg: "bg-red-50 border-red-100",
    },
    {
      title: "No Nurture After the First Touch",
      desc: "A lead downloads your guide, gets one welcome email, and then — silence. Without a nurture sequence, 97% of leads who aren't ready to buy today simply forget you exist.",
      icon: (
        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      iconBg: "bg-amber-50 border-amber-100",
    },
    {
      title: "Email and SMS Running in Silos",
      desc: "Your email tool doesn't know what your SMS platform is doing. Leads get duplicate messages, or no message at all, depending on which list they're on. Nothing is coordinated.",
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      iconBg: "bg-emerald-50 border-emerald-100",
    },
    {
      title: "Blasting Everyone the Same Message",
      desc: "You have one email list and everyone gets the same broadcast. Cold leads, hot prospects, and existing customers all receive identical content — and your unsubscribe rate shows it.",
      icon: (
        <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      iconBg: "bg-indigo-50 border-indigo-100",
    },
    {
      title: "No Behavioural Triggers",
      desc: "When a lead visits your pricing page three times, nothing happens. When someone abandons a booking, no reminder fires. Your automation should react to intent signals — but it doesn't.",
      icon: (
        <svg className="w-5 h-5 text-[#2BB673]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      iconBg: "bg-[#2BB673]/10 border-[#2BB673]/20",
    },
    {
      title: "No Visibility Into What's Actually Working",
      desc: "You send campaigns but have no clear view of open rates, click-throughs, revenue attributed, or which sequence is converting. You're optimising in the dark.",
      icon: (
        <svg className="w-5 h-5 text-[#002B66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      iconBg: "bg-[#002B66]/10 border-[#002B66]/20",
    },
  ];

  return (
    <section className="relative w-full bg-gray-100 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* 1. BADGE */}
        <motion.div variants={itemVariants} className="inline-block mb-4">
          <span className="px-4 py-1.5 rounded-full bg-red-100/70 border border-red-200 text-red-600 font-bold text-xs uppercase tracking-wider">
            THE PROBLEM
          </span>
        </motion.div>

        {/* 2. HEADING (#002B66 Dark Blue) */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl  font-extrabold text-[#002B66] tracking-tight leading-tight mb-4"
        >
          Is Your Marketing Running on Manual?
        </motion.h2>

        {/* 3. SUBTITLE */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-slate-500 font-normal max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          These six problems appear in almost every business we audit — and every
          one of them is quietly draining your conversion rate.
        </motion.p>

        {/* 4. 6-CARD GRID */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left mb-14"
        >
          {problems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#2BB673]/40 transition-all flex flex-col justify-start"
            >
              {/* ICON CONTAINER */}
              <div
                className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${item.iconBg}`}
              >
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-bold text-[#002B66] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* 5. BOTTOM CALLOUT & CTA BUTTON */}
        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-base sm:text-lg text-slate-700 font-semibold">
            Sound familiar? Here&apos;s exactly how we fix all of it.
          </p>

          <motion.a
            href="#free-audit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-2.5 rounded-xl bg-[#002B66] hover:bg-[#001D47] text-white font-bold text-base shadow-lg shadow-[#2BB673]/25 transition-all group"
          >
            <span>Fix My Automation — Free Audit</span>
            <svg
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
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
        </motion.div>
      </motion.div>
    </section>
  );
}