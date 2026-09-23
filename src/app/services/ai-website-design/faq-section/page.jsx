"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  // Track open accordion item (default index 0 open)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Section Animation Variants
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // 8 Questions Data
  const faqs = [
    {
      question: "How long does it take to build and launch our website?",
      answer:
        "Our standard build process takes between 2 to 4 weeks from kick-off to official launch, depending on the complexity of your custom requirements and integrations.",
    },
    {
      question: "Do I need to provide the content and copy?",
      answer:
        "No, we handle both conversion copywriting and asset structuring using our AI-assisted copywriting framework, which is then polished by expert human editors.",
    },
    {
      question: "Will my website rank on Google?",
      answer:
        "Yes! Every website we build includes technical SEO foundations built in from day one, including optimized meta structures, fast load speeds, and clean schema markup.",
    },
    {
      question: "Can I update the website myself after launch?",
      answer:
        "Absolutely. We build on user-friendly CMS platforms and provide a full hands-on video walkthrough so you can edit text, swap images, or add blog posts effortlessly.",
    },
    {
      question: "Does the website connect to my CRM?",
      answer:
        "Yes, we integrate your forms and lead capture channels directly with your CRM (e.g., HubSpot, Salesforce, GoHighLevel, or custom webhooks) from day one.",
    },
    {
      question: "What makes 'AI-powered' different from a regular website?",
      answer:
        "Our AI-powered workflow optimizes layouts, page speed, and conversion pathways based on data from high-performing industry sites, delivering faster builds and higher lead conversions.",
    },
    {
      question: "What if I need changes after launch?",
      answer:
        "We include 30 to 60 days of post-launch hands-on support to ensure everything operates smoothly and any necessary fine-tuning is completed.",
    },
    {
      question: "Is there a monthly fee after the website is built?",
      answer:
        "No hidden recurring agency fees! You only pay standard third-party domain/hosting costs directly, unless you choose an optional ongoing maintenance retainer with us.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-10 md:py-15 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* 1. FAQ BADGE (#2BB673 Green accent) */}
        <motion.div variants={itemVariants} className="inline-block mb-4">
          <span className="px-4 py-1.5 rounded-full bg-[#2BB673]/10 border border-[#2BB673]/30 text-[#2BB673] font-bold text-xs uppercase tracking-wider">
            FAQ
          </span>
        </motion.div>

        {/* 2. MAIN HEADING (#002B66 Dark Blue) */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl  font-extrabold text-[#002B66] tracking-tight leading-tight mb-4"
        >
          Common Questions
        </motion.h2>

        {/* 3. SUBTITLE */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-slate-500 font-normal max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Everything you need to know before booking a call.
        </motion.p>

        {/* 4. ACCORDION LIST */}
        <motion.div variants={itemVariants} className="space-y-3.5 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#002B66]/[0.03] border-[#2BB673]/50 shadow-sm"
                    : "bg-slate-50/70 border-slate-200/80 hover:bg-[#002B66]/[0.02] hover:border-slate-300"
                }`}
              >
                {/* ACCORDION HEADER */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base md:text-lg font-bold pr-4 transition-colors ${
                      isOpen ? "text-[#002B66]" : "text-slate-800"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* ANIMATED CHEVRON (#2BB673 Green for Active, Dark Blue for Inactive) */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className={`flex-shrink-0 p-1 rounded-full ${
                      isOpen
                        ? "text-[#2BB673] bg-[#2BB673]/10"
                        : "text-[#002B66] bg-slate-200/60"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </button>

                {/* ACCORDION CONTENT */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 md:px-6 pt-0 text-sm md:text-base text-slate-600 leading-relaxed border-t border-[#2BB673]/20 mt-1">
                        <p className="pt-3">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}