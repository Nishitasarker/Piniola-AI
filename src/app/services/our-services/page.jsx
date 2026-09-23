'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Globe,
  Users,
  Zap,
  Search,
  Share2,
  Target,
  Filter,
  Star,
  Calendar,
  BarChart3,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 1,
    tag: 'WEB',
    title: 'AI-Powered Website Design',
    description: 'Custom, conversion-optimized websites built with AI that load fast, rank high, and turn visitors into leads.',
    href: '/services/web-design',
    icon: Globe,
    borderColor: 'border-t-blue-500',
    iconBg: 'bg-blue-50 text-blue-600',
  },
  {
    id: 2,
    tag: 'CRM',
    title: 'CRM & Pipeline Management',
    description: 'Centralize your leads, automate follow-ups, and track every deal from first touch to closed customer.',
    href: '/services/crm',
    icon: Users,
    borderColor: 'border-t-emerald-500',
    iconBg: 'bg-emerald-50 text-emerald-600',
  },
  {
    id: 3,
    tag: 'AUTOMATION',
    title: 'Marketing Automation',
    description: 'Smart email, SMS, and multi-channel workflows that nurture leads 24/7 without manual effort.',
    href: '/services/automation',
    icon: Zap,
    borderColor: 'border-t-purple-500',
    iconBg: 'bg-purple-50 text-purple-600',
  },
  {
    id: 4,
    tag: 'SEO',
    title: 'SEO Services',
    description: 'Rank higher on Google with AI-assisted keyword research, on-page optimization, and strategic content.',
    href: '/services/seo',
    icon: Search,
    borderColor: 'border-t-amber-500',
    iconBg: 'bg-amber-50 text-amber-600',
  },
  {
    id: 5,
    tag: 'SOCIAL',
    title: 'Social Media Management',
    description: 'Consistent branded content across LinkedIn, TikTok, YouTube Shorts, and more — planned and scheduled for you.',
    href: '/services/social-media',
    icon: Share2,
    borderColor: 'border-t-rose-500',
    iconBg: 'bg-rose-50 text-rose-600',
  },
  {
    id: 6,
    tag: 'ADS',
    title: 'Paid Advertising (PPC)',
    description: 'Full-service ad management across Meta, Google & LinkedIn with AI-driven creative testing and ROI tracking.',
    href: '/services/ppc-ads',
    icon: Target,
    borderColor: 'border-t-red-500',
    iconBg: 'bg-red-50 text-red-600',
  },
  {
    id: 7,
    tag: 'LEADS',
    title: 'Lead Generation',
    description: 'AI chatbots, smart forms, and automated capture systems that qualify and deliver high-intent leads to your pipeline.',
    href: '/services/lead-generation',
    icon: Filter,
    borderColor: 'border-t-cyan-500',
    iconBg: 'bg-cyan-50 text-cyan-600',
  },
  {
    id: 8,
    tag: 'REVIEWS',
    title: 'Reputation Management',
    description: 'Monitor, respond to, and amplify your reviews across platforms to build trust and dominate local search.',
    href: '/services/reputation-management',
    icon: Star,
    borderColor: 'border-t-amber-400',
    iconBg: 'bg-amber-50 text-amber-500',
  },
  {
    id: 9,
    tag: 'SCHEDULING',
    title: 'Booking & Appointment Scheduling',
    description: 'A fully integrated scheduling system synced with your CRM that automates confirmations and reminders.',
    href: '/services/scheduling',
    icon: Calendar,
    borderColor: 'border-t-teal-500',
    iconBg: 'bg-teal-50 text-teal-600',
  },
  {
    id: 10,
    tag: 'ANALYTICS',
    title: 'Analytics & Reporting',
    description: 'Monthly dashboards tracking organic traffic, paid ROI, CRM performance, and social — all in one clear view.',
    href: '/services/analytics',
    icon: BarChart3,
    borderColor: 'border-t-indigo-500',
    iconBg: 'bg-indigo-50 text-indigo-600',
  },
];

export default function ServicesList() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-block bg-blue-50 text-blue-600 border border-blue-200/60 text-[11px] font-bold tracking-widest px-3.5 py-1 rounded-full uppercase">
            OUR SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002B66] tracking-tight">
            10 Specialized Services, One Unified Platform
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Click any service to learn more about how we deliver results in that area for your business.
          </p>
        </div>

        {/* Services Grid (lg:grid-cols-4 for 4 cards per row) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`bg-white rounded-2xl p-6 border border-slate-200/80 border-t-4 ${service.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5`}
              >
                <div className="space-y-4">
                  {/* Top Header: Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl ${service.iconBg}`}>
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#002B66] leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Learn More Link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002B66] hover:text-[#2BB673] transition-colors duration-200 group pt-2"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}