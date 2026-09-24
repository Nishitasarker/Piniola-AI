'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Smartphone,
  GitFork,
  Filter,
  RefreshCw,
  Settings,
  Zap,
  BarChart2,
} from 'lucide-react';

const automationFeatures = [
  {
    id: 1,
    icon: Mail,
    title: 'Email Drip & Nurture Sequences',
    description:
      'Multi-step email sequences built around your buyer journey — from first touch to purchase-ready. Every email is written, designed, and scheduled for you, personalised by lead source and behaviour.',
  },
  {
    id: 2,
    icon: Smartphone,
    title: 'SMS & Voicemail Drop Workflows',
    description:
      'Two-way SMS automations that send at the right moment — appointment reminders, lead follow-ups, re-engagement nudges — all compliant and coordinated with your email sequences.',
  },
  {
    id: 3,
    icon: GitFork,
    title: 'Behavioural Trigger Automations',
    description:
      'Workflows that fire based on what leads actually do — clicking a link, visiting a pricing page, abandoning a booking, or going silent for 7 days. Relevance at every step.',
  },
  {
    id: 4,
    icon: Filter,
    title: 'Lead Segmentation & Tagging',
    description:
      'Contacts automatically segmented by source, behaviour, stage, and intent. The right message goes to the right person — and your list stays clean and actionable over time.',
  },
  {
    id: 5,
    icon: RefreshCw,
    title: 'Re-engagement & Win-Back Campaigns',
    description:
      "Automatically identify cold leads and dead pipeline deals, then trigger a targeted re-engagement sequence designed to revive interest before they're lost forever.",
  },
  {
    id: 6,
    icon: Settings,
    title: 'CRM & Pipeline Automation',
    description:
      'Workflow triggers that move leads through your CRM pipeline automatically — updating stages, assigning owners, sending alerts, and booking appointments without anyone clicking a button.',
  },
  {
    id: 7,
    icon: Zap,
    title: 'Broadcast Campaign Management',
    description:
      'Monthly promotional emails, offer campaigns, and newsletters — planned, written, designed, and sent by our team. Every broadcast is segmented and A/B tested for best performance.',
  },
  {
    id: 8,
    icon: BarChart2,
    title: 'Automation Reporting & Optimisation',
    description:
      'Monthly performance reports covering open rates, click rates, conversion rates, revenue attributed, and sequence health — with recommendations to improve results each quarter.',
  },
];

// Container Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Item Animation Variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function AutomationSection() {
  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 text-[#002B66] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block"
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#2BB673]/10 text-[#2BB673] border border-[#2BB673]/20 mb-4 inline-block">
              WHAT'S INCLUDED
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#002B66] mb-6 leading-tight"
          >
            Eight Automation Systems That Work While You Sleep
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 leading-relaxed"
          >
            Every Piniola AI marketing automation engagement includes these eight core
            deliverables — fully built, copy-written, and tested.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {automationFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Container with Green Accent */}
                  <div className="w-12 h-12 rounded-xl bg-[#2BB673]/10 text-[#2BB673] flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#002B66] mb-3 leading-snug">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}