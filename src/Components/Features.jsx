"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FeaturesPage() {
  const featuresList = [
    {
      title: "Create Full Websites, Funnels & Landing Pages",
      desc: "Our intuitive platform allows you to create full featured websites with custom menus. Create high-performing and captivating landing pages all in one place!",
      icon: (
        <svg className="w-8 h-8 text-[#2BB673]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      badge: "Page Builder",
    },
    {
      title: "Drag & Drop Surveys and Forms",
      desc: "Built right in is the ability to capture leads through Surveys and capture forms. You can integrate directly with our page builder or embed them on your own sites.",
      icon: (
        <svg className="w-8 h-8 text-[#2BB673]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      badge: "Lead Capture",
    },
    {
      title: "Online Appointment Scheduling",
      desc: "Capture appointments and request appointments. We've built our own calendar application so you can capture the appointment all in one straightforward flow.",
      icon: (
        <svg className="w-8 h-8 text-[#2BB673]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      badge: "Calendar",
    },
    {
      title: "Multi-Channel Follow-up Campaigns",
      desc: "Our Multi-channel follow up campaigns allow you to automate engaging follow ups and capture engaged responses from your leads.",
      icon: (
        <svg className="w-8 h-8 text-[#2BB673]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      badge: "Automation",
    },
    {
      title: "Two-Way Communication on Any Device",
      desc: "Our full featured mobile app allows you to communicate with your leads on all devices through Phone, SMS, Email, and Facebook Messenger.",
      icon: (
        <svg className="w-8 h-8 text-[#2BB673]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      badge: "Omnichannel",
    },
    {
      title: "Fully Automated Lead Management",
      desc: "Automatically nurture leads into customers with AI-powered conversations and customizable messaging workflows.",
      icon: (
        <svg className="w-8 h-8 text-[#2BB673]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      badge: "AI Powered",
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white text-[#002B66] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-20 py-10 bg-gradient-to-b from-[#002B66]/5 via-white to-white px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[#002B66]/10 text-[#002B66] mb-6">
            Platform Features
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002B66] tracking-tight leading-tight">
            Powerful Features{" "}
            <span className="text-[#2BB673]"> Built For Growth</span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Everything you need to capture, nurture, and close leads without the complexity.
          </p>
        </motion.div>
      </section>

      {/* FEATURES GRID SECTION */}
      <section className="py-5 lg:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuresList.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#2BB673]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#002B66]/5 group-hover:bg-[#002B66] transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#2BB673]/10 text-[#2BB673]">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#002B66] group-hover:text-[#2BB673] transition-colors duration-300 mb-3 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-normal">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}