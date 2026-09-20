"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  // ১. টেক্সটের জন্য ফেড-ইন এবং নিচ থেকে উপরে উঠার এনিমেশন ভ্যারিয়েন্ট
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: customDelay,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  // ২. ডানপাশের ইমেজের জন্য হালকা স্মুথ ফ্লোটিং/মুভমেন্ট এনিমেশন
  const floatingAnimation = {
    animate: {
      y: [-8, 8, -8],
      rotate: [-0.5, 0.5, -0.5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f4faf7] to-white pt-15 pb-10 md:pt-20 md:pb-20 w-full">
      
      {/* Background Decorative Glow (Gradient) */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-[#2BB673]/10 to-transparent blur-3xl" />
      <div className="absolute bottom-10 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#002B66]/5 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Badge */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="inline-flex items-center gap-2 bg-[#eaf7f1] border border-[#2BB673]/20 px-4 py-2 rounded-full mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#2BB673] animate-pulse" />
              <p className="text-xs sm:text-sm font-semibold text-[#002B66] tracking-wide">
                All-In-One Sales & Marketing Platform
              </p>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002B66] leading-[1.1] tracking-tight mb-6"
            >
              We Help Brands Scale<br/> With Our{" "}
              <span className="block mt-2">
                All-In-One Sales &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BB673] to-[#1e8553]">
                  AI <br/> Marketing
                </span>
              </span>{" "}
              Technology
            </motion.h1>

            {/* Subparagraph Description */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.5}
              className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mb-8"
            >
              PINIOLA AI is the first-ever all-in-one platform that gives you unlimited marketing automation, lead generation, CRM management, and white-label solutions to scale your business.
            </motion.p>

            {/* Call to Actions (Buttons) */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.7}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link
                href="#pricing"
                className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#002B66] to-[#0052B4] rounded-xl shadow-lg hover:from-[#001D47] hover:to-[#003C8A] hover:shadow-xl hover:scale-[1.02] active:scale-100 transition-all duration-200"
              >
                Pricing
              </Link>
              <Link
                href="#services"
                className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-[#002B66] bg-white border-2 border-[#002B66]/30 hover:border-[#2BB673] rounded-xl hover:text-[#2BB673] hover:bg-[#2BB673]/5 hover:scale-[1.02] active:scale-100 transition-all duration-200"
              >
                Our Services
              </Link>
            </motion.div>

          </div>

          {/* Right Visual Image/Mockup with Animation */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="lg:col-span-5 relative w-full h-[400px] md:h-[500px] flex items-center justify-center"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-[#2BB673]/20 to-[#002B66]/10 blur-[100px] -z-10 rounded-full" />
            
            {/* Floating Image / Container */}
            <motion.div
              variants={floatingAnimation}
              animate="animate"
              className="relative w-full h-full border border-gray-100/50 rounded-2xl bg-white/60 backdrop-blur-md shadow-2xl p-4 overflow-hidden"
            >
              <div className="h-6 w-full flex gap-1.5 items-center border-b border-gray-100 pb-3 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              
              {/* Analytics Preview Skeleton */}
              <div className="space-y-4">
                <div className="h-10 w-2/3 bg-gray-100 rounded-lg animate-pulse" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-24 bg-[#eaf7f1] border border-[#2BB673]/10 rounded-xl p-3 flex flex-col justify-between">
                    <span className="text-xs text-[#002B66] font-semibold">Leads Captured</span>
                    <span className="text-xl font-bold text-[#2BB673]">1,482</span>
                  </div>
                  <div className="h-24 bg-[#002B66]/5 rounded-xl p-3 flex flex-col justify-between">
                    <span className="text-xs text-[#002B66] font-semibold">Conversations</span>
                    <span className="text-xl font-bold text-[#002B66]">94%</span>
                  </div>
                  <div className="h-24 bg-gray-50 rounded-xl p-3 flex flex-col justify-between">
                    <span className="text-xs text-gray-500">Bookings</span>
                    <span className="text-xl font-bold text-gray-800">412</span>
                  </div>
                </div>
                <div className="h-32 bg-gray-50 rounded-xl border border-dashed border-gray-200 flex items-center justify-center">
                  <span className="text-xs text-gray-400">Campaign Automation visual preview</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}