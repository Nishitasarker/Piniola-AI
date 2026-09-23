"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProblemSection() {
  // Container animation with staggered children
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

  // Item fade-up animation
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // 6 Problem Cards Data
  const problems = [
    {
      title: "Slow Loading Speed",
      desc: "If your site takes more than 3 seconds to load, 53% of mobile visitors leave — and Google drops your ranking simultaneously.",
      bgColor: "bg-red-50",
      iconColor: "text-red-500",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Not Ranking on Google",
      desc: "Without a technical SEO foundation built in from day one, your site is invisible to the clients actively searching for your service.",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-500",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: "No Clear Conversion Path",
      desc: "Visitors read your homepage and leave without calling or booking — because there's no guided journey to the next step.",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Disconnected from Your CRM",
      desc: "Every lead that submits a form but doesn't get followed up on is a lost sale. Without CRM integration, this happens constantly.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Outdated Design",
      desc: "Your design is the first thing visitors judge. An outdated site signals an outdated business — before a single word is read.",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-500",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Can't Update It Yourself",
      desc: "Paying a developer for every text change, image update, or blog post is slow, expensive, and completely unnecessary.",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-500",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-gray-100 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* 1. BADGE */}
        <motion.div variants={itemVariants} className="inline-block mb-4">
          <span className="px-4 py-1.5 rounded-full bg-red-100/60 border border-red-200/50 text-red-600 font-bold text-xs uppercase tracking-wider">
            THE PROBLEM
          </span>
        </motion.div>

        {/* 2. HEADING */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl  font-extrabold text-[#002B66] tracking-tight leading-tight mb-4 max-w-3xl mx-auto"
        >
          Is Your Website Quietly Losing You Clients?
        </motion.h2>

        {/* 3. SUBTITLE */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-gray-600 font-normal max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Most business websites have at least 3 of these problems — and every one of
          them is costing you leads every single day.
        </motion.p>

        {/* 4. 6-CARD GRID */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left mb-10"
        >
          {problems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* ICON CONTAINER */}
                <div
                  className={`w-10 h-10 rounded-xl ${item.bgColor} ${item.iconColor} flex items-center justify-center mb-5`}
                >
                  {item.icon}
                </div>

                {/* CARD TITLE */}
                <h3 className="text-base font-bold text-[#002B66] mb-3">
                  {item.title}
                </h3>

                {/* CARD DESCRIPTION */}
                <p className="text-xs text-gray-500 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 5. BOTTOM TEXT & CALL TO ACTION */}
        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-base sm:text-lg font-semibold text-gray-600">
            Sound familiar? Here&apos;s everything we fix — and everything we include.
          </p>

          <Link
            href="/free-audit"
            className="inline-flex items-center justify-center gap-2 bg-[#002B66] hover:bg-[#001D47] text-white font-semibold text-base px-8 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            <span>Fix My Website — Book a Free Audit</span>
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
        </motion.div>
      </motion.div>
    </section>
  );
}