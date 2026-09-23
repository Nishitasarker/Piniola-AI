'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Shield, 
  TrendingUp, 
  Clock 
} from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Zap,
    title: 'Everything in One Platform',
    description: 'No more switching between 10+ tools. CRM, SEO, automation, ads, and scheduling all in one dashboard.',
  },
  {
    id: 2,
    icon: Shield,
    title: 'AI-First from Day One',
    description: 'Every service we deliver is powered by AI — from chatbots to content calendars to creative ad testing.',
  },
  {
    id: 3,
    icon: TrendingUp,
    title: 'Measurable Outcomes',
    description: "We tie every deliverable to a KPI. Monthly reports show exactly what's working and what's next.",
  },
  {
    id: 4,
    icon: Clock,
    title: 'Fast, Structured Onboarding',
    description: 'Most clients are fully launched within 2–4 weeks. We move fast without cutting corners.',
  },
];

const checklistItems = [
  'No more tool-hopping — one dashboard for everything',
  'AI-powered across every service, not just marketing',
  'Transparent monthly reporting tied to real KPIs',
  'Launch-ready in 2–4 weeks from onboarding',
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#f4faf7] to-white  font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* --- CENTERED HEADER SECTION --- */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block bg-[#2BB673]/10 border border-[#2BB673]/20 px-4 py-1.5 rounded-full shadow-sm">
            <span className="text-xs font-bold tracking-wider text-[#2BB673] uppercase">
              WHY CHOOSE US
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#002B66] tracking-tight leading-tight">
            One Agency. Every Tool. <br className="hidden sm:inline" /> Real Results.
          </h2>
        </div>

        {/* --- CONTENT & CARDS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Description & Checklist */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Most agencies specialize in one or two channels. <strong className="font-semibold text-[#002B66]">Piniola AI</strong> delivers your entire growth stack — built, integrated, and managed in one place so you never have to juggle vendors again.
            </p>

            {/* Checklist */}
            <ul className="space-y-3.5 pt-2">
              {checklistItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2BB673] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center gap-2 bg-[#002B66] hover:bg-[#001D47] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-[#002B66]/20 transition-all duration-200 text-sm sm:text-base"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Side: 2x2 Feature Cards Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg shadow-slate-200/40 hover:shadow-xl transition-all duration-300 space-y-3 flex flex-col justify-start"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-[#2BB673]/10 text-[#2BB673] flex items-center justify-center">
                    <IconComponent className="w-5 h-5 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#002B66] tracking-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}