'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function ServicesCta() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.15,
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#002252] relative overflow-hidden font-sans">
      
      {/* Background Decorative Glow Effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#2BB673]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#2BB673]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-block">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full shadow-inner">
              <Sparkles className="w-4 h-4 text-[#2BB673]" />
              <span className="text-xs font-bold tracking-wider text-white uppercase">
                READY TO SCALE?
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Let's Build Your Growth System Together
          </motion.h2>

          {/* Subtitle / Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Book a free 30-minute strategy call. We'll audit your current setup and show you exactly which services will move the needle most for your business.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary White Button */}
            <motion.div 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.97 }} 
              className="w-full sm:w-auto"
            >
              <Link
                href="/book-strategy-call"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#002B66] hover:bg-slate-100 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all duration-200 text-sm sm:text-base group"
              >
                <span>Book Your Free Strategy Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 text-[#002B66]" />
              </Link>
            </motion.div>

            {/* Secondary Transparent/Outlined Button */}
            <motion.div 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.97 }} 
              className="w-full sm:w-auto"
            >
              <Link
                href="/free-ai-audit"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 text-sm sm:text-base backdrop-blur-sm"
              >
                Get a Free AI Audit First
              </Link>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}