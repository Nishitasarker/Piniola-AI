'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Automation Tools List
const tools = [
  {
    name: 'n8n',
    category: 'Workflow Automation',
    iconBg: 'bg-[#2BB673]/10 text-[#2BB673]',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    name: 'GoHighLevel',
    category: 'CRM + Email + SMS',
    iconBg: 'bg-[#2BB673]/10 text-[#2BB673]',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 6l4 14H4L8 6h8z" />
      </svg>
    ),
  },
  {
    name: 'Make',
    category: 'Visual Workflows',
    iconBg: 'bg-[#2BB673]/10 text-[#2BB673]',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zm-10 10h6v6H4v-6zm10 0h6v6h-6v-6z" />
      </svg>
    ),
  },
  {
    name: 'Zapier',
    category: 'App Integrations',
    iconBg: 'bg-[#2BB673]/10 text-[#2BB673]',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    name: 'ActiveCampaign',
    category: 'Email + CRM',
    iconBg: 'bg-[#2BB673]/10 text-[#2BB673]',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    name: 'Klaviyo',
    category: 'eCommerce Email',
    iconBg: 'bg-[#2BB673]/10 text-[#2BB673]',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3z" />
      </svg>
    ),
  },
];

// Continuous marquee loop support-er jnne double array
const duplicatedTools = [...tools, ...tools];

export default function AutomationStackSection() {
  return (
    <section className="bg-gray-100 py-15 overflow-hidden text-[#002B66]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block"
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#2BB673]/10 text-[#2BB673] border border-[#2BB673]/20 mb-4 inline-block">
              OUR AUTOMATION STACK
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#002B66] mb-3 leading-tight"
          >
            We Use the Best Tool for Your Job — Not Just One
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 leading-relaxed"
          >
            Unlike agencies locked into a single platform, we select and combine the right tools based on your existing stack, complexity, and budget.
          </motion.p>
        </div>
      </div>

      {/* Infinite Moving Marquee Container (Right to Left) */}
      <div className="relative w-full overflow-hidden ">
        {/* Left & Right Gradient Blur Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Moving Track */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {duplicatedTools.map((item, index) => (
            <div
              key={index}
              className="mx-3 flex items-center gap-4 bg-white border border-slate-200/80 rounded-2xl px-6 py-4 shadow-sm hover:shadow-md transition-all duration-300 min-w-[280px]"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg}`}>
                {item.svg}
              </div>
              <div className="text-left">
                <h4 className="text-base font-bold text-[#002B66] leading-snug">
                  {item.name}
                </h4>
                <p className="text-xs font-medium text-slate-500">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="max-w-7xl mx-auto px-4 mt-8 text-center">
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
          Also integrates with <span className="font-semibold text-[#002B66]">HubSpot</span>, <span className="font-semibold text-[#002B66]">Mailchimp</span>, <span className="font-semibold text-[#002B66]">Pipedrive</span>, <span className="font-semibold text-[#002B66]">Stripe</span>, <span className="font-semibold text-[#002B66]">Calendly</span>, <span className="font-semibold text-[#002B66]">Typeform</span>, <span className="font-semibold text-[#002B66]">Airtable</span>, and 500+ other platforms via API and webhook.
        </p>
      </div>

      {/* Tailored Tailwind CSS Keyframe Animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}