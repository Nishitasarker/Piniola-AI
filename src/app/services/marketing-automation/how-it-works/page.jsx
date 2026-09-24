'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  GitFork,
  Mail,
  Settings,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

const steps = [
  {
    step: '01',
    days: 'DAYS 1–3',
    icon: Search,
    title: 'Automation Audit & Strategy',
    description:
      'We map your complete customer journey — from first touch to repeat purchase — and identify every point where automation can speed up conversion, reduce churn, or save your team time.',
  },
  {
    step: '02',
    days: 'DAYS 4–6',
    icon: GitFork,
    title: 'Workflow Architecture Design',
    description:
      'A full visual blueprint of every automation — triggers, conditions, branches, delays, and outcomes — designed and presented for your approval before we write a single line of copy.',
  },
  {
    step: '03',
    days: 'DAYS 7–14',
    icon: Mail,
    title: 'Copy, Creative & Sequence Build',
    description:
      'We write all email and SMS copy, design the email templates to match your brand, and build every workflow inside your platform — fully personalised and ready to test.',
  },
  {
    step: '04',
    days: 'DAYS 15–18',
    icon: Settings,
    title: 'Integration, Testing & QA',
    description:
      'Every workflow is connected to your CRM, website forms, and lead sources, then tested end-to-end with real test leads. We check every trigger, branch, and personalisation tag before going live.',
  },
  {
    step: '05',
    days: 'DAYS 19–21+',
    icon: TrendingUp,
    title: 'Launch, Train & Optimise',
    description:
      "We go live, walk your team through the full automation map, and monitor performance for the first 30 days. We then iterate on sequences that aren't converting at target.",
  },
];

// Container animation settings
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Individual Card animation settings
const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function HowItWorksSection() {
  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 text-[#002B66] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block"
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#2BB673]/10 text-[#2BB673] border border-[#2BB673]/20 mb-4 inline-block">
              HOW IT WORKS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#002B66] mb-5 leading-tight"
          >
            From Scattered Emails to a Full Automation Engine in 3 Weeks
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 leading-relaxed"
          >
            A clear five-step process — strategy first, build second, launch with confidence.
          </motion.p>
        </div>

        {/* 5-Step Process Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Top Bar with Icon & Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[#2BB673]/10 text-[#2BB673] flex items-center justify-center transition-colors group-hover:bg-[#2BB673] group-hover:text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-3xl font-black text-slate-400 group-hover:text-gray-400 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  {/* Day Tag */}
                  <div className="text-[11px] font-extrabold tracking-widest text-[#2BB673] uppercase mb-2">
                    {item.days}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#002B66] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Card */}
       
      </div>
    </section>
  );
}