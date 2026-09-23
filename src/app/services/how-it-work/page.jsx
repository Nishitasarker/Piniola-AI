'use client';

import { motion } from 'framer-motion';
import { Search, Zap, TrendingUp, Target } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description:
      'We audit your current stack, identify gaps, and map a custom strategy aligned with your growth goals.',
    icon: Search,
    iconBg: 'bg-blue-50 text-blue-600',
    borderColor: 'border-slate-100 hover:border-blue-200',
  },
  {
    number: '02',
    title: 'Strategy & Build',
    description:
      'Our team builds your systems — website, CRM, automations, and content — all in one integrated platform.',
    icon: Zap,
    iconBg: 'bg-purple-50 text-purple-600',
    borderColor: 'border-slate-100 hover:border-purple-200',
  },
  {
    number: '03',
    title: 'Launch & Optimize',
    description:
      'We go live, monitor performance, and continuously optimize for better leads and lower acquisition costs.',
    icon: TrendingUp,
    iconBg: 'bg-emerald-50 text-emerald-600',
    borderColor: 'border-slate-100 hover:border-emerald-200',
  },
  {
    number: '04',
    title: 'Scale & Grow',
    description:
      'As results come in, we expand to paid ads, new channels, and higher targets — compounding your growth.',
    icon: Target,
    iconBg: 'bg-amber-50 text-amber-600',
    borderColor: 'border-slate-100 hover:border-amber-200',
  },
];

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* --- HEADER --- */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-block bg-[#2BB673]/10 border border-[#2BB673]/20 px-4 py-1.5 rounded-full shadow-sm">
            <span className="text-xs font-bold tracking-wider text-[#2BB673] uppercase">
              HOW IT WORKS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#002B66] tracking-tight">
            From Onboarding toGrowth in <br/>  4 Steps
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            A structured process that gets you from zero to a fully running growth system — fast.
          </p>
        </div>

        {/* --- STEPS GRID --- */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
          >
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={stepVariants}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`bg-white rounded-2xl p-7 border ${step.borderColor} shadow-lg shadow-slate-200/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6`}
                >
                  {/* Top Bar: Icon & Step Number */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl ${step.iconBg}`}>
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-3xl font-black text-slate-400 tracking-tight">
                      {step.number}
                    </span>
                  </div>

                  {/* Body Text */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#002B66] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}