'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ServicesList from './our-services/page';
import WhyChooseUs from './why-choose-us/page'; 
import HowItWorks from './how-it-work/page';
import ServicesCta from './ready-to-build/page'; 
import { 
  Sparkles, 
  ArrowRight, 
  ChevronRight, 
  Shield, 
  Zap, 
  TrendingUp, 
  CheckCircle2 
} from 'lucide-react';

const stats = [
  {
    id: 1,
    icon: Shield,
    value: '$12K+',
    label: 'Saved monthly vs. separate tools',
  },
  {
    id: 2,
    icon: Zap,
    value: '90%',
    label: 'Of sales & marketing automated',
  },
  {
    id: 3,
    icon: TrendingUp,
    value: '3x',
    label: 'Average lead increase in 90 days',
  },
  {
    id: 4,
    icon: CheckCircle2,
    value: '18+',
    label: 'Tools replaced by one platform',
  },
];

export default function ServicesSection() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <>
    <div className="bg-gradient-to-b from-white via-[#f4faf7] to-white font-sans overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="pt-20 pb-6 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-block">
            <div className="inline-flex items-center gap-2 bg-[#2BB673]/10 border border-[#2BB673]/20 px-4 py-1.5 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-[#2BB673]" />
              <span className="text-xs font-bold tracking-wider text-[#2BB673] uppercase">
                WHAT WE OFFER
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl  font-black text-[#002B66] tracking-tight leading-tight"
          >
            Every Service Your Business <br className="hidden sm:inline" />
            Needs to <span className="text-[#2BB673]">Grow Faster</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            From AI-powered websites and CRM to SEO, paid ads, and reputation management —{' '}
            <strong className="font-semibold text-[#002B66]">Piniola AI</strong> delivers a complete growth system under one roof, replacing $12,000+ worth of tools every month.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                href="/book-consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#002B66] hover:bg-[#001D47] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-[#002B66]/20 transition-all duration-200 text-base"
              >
                <span>Book a Free Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white border-2 border-[#002B66] text-[#002B66] hover:bg-[#002B66] hover:text-white font-bold px-7 py-3 rounded-xl transition-all duration-200 text-base"
              >
                <span>Browse Services</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  variants={itemVariants}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl py-8 text-center border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-[#2BB673]/10 transition-all duration-300 flex flex-col items-center justify-center space-y-3"
                >
                  {/* Icon */}
                  <div className="p-2.5 rounded-xl bg-[#002B66]/5 text-[#2BB673]">
                    <IconComponent className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  {/* Value */}
                  <h3 className="text-2xl sm:text-3xl font-black text-[#002B66] tracking-tight">
                    {stat.value}
                  </h3>

                  {/* Label */}
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed ">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

    </div>
    <ServicesList></ServicesList>
    <WhyChooseUs></WhyChooseUs>
    <HowItWorks></HowItWorks>
    <ServicesCta></ServicesCta>
    </>
  );
}