"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [activeHoverMenu, setActiveHoverMenu] = useState(null); // Desktop Hover State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile Menu State
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // Mobile Services Accordion
  const [mobileCaseStudiesOpen, setMobileCaseStudiesOpen] = useState(false); // Mobile Case Studies Accordion

  // 1. SERVICES DATA
  const servicesList = [
    {
      title: "AI Website Design",
      desc: "Conversion-optimized AI websites",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      href: "/services/ai-website-design",
    },
    {
      title: "CRM & Pipeline",
      desc: "Centralize leads & automate follow-ups",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      href: "/services/crm-pipeline",
    },
    {
      title: "Marketing Automation",
      desc: "Smart email & SMS workflows",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      href: "/services/marketing-automation",
    },
    {
      title: "SEO Services",
      desc: "Rank higher on Google organically",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      href: "/services/seo-services",
    },
    {
      title: "Social Media",
      desc: "Multi-platform content management",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
      href: "/services/social-media",
    },
    {
      title: "Paid Advertising",
      desc: "Meta, Google & LinkedIn ads",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      href: "/services/paid-advertising",
    },
    {
      title: "Lead Generation",
      desc: "AI chatbots & smart capture",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      ),
      href: "/services/lead-generation",
    },
    {
      title: "Reputation Management",
      desc: "Reviews & local SEO",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      href: "/services/reputation-management",
    },
    {
      title: "Appointment Scheduling",
      desc: "Integrated booking system",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      href: "/services/appointment-scheduling",
    },
    {
      title: "Analytics & Reporting",
      desc: "Monthly performance dashboards",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      href: "/services/analytics-reporting",
    },
  ];

  // 2. CASE STUDIES DATA
  const caseStudiesList = [
    {
      company: "Premier HVAC Solutions",
      result: "+312% organic traffic in 6 months",
      badge: "SEO",
      badgeStyle: "bg-amber-100 text-amber-800",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      href: "/case-studies/hvac-solutions",
    },
    {
      company: "Bloom Boutique",
      result: "4.8× ROAS · $340K revenue in 90 days",
      badge: "Paid Ads",
      badgeStyle: "bg-rose-100 text-rose-700",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        </svg>
      ),
      href: "/case-studies/bloom-boutique",
    },
    {
      company: "TechStack Pro",
      result: "$2.1M pipeline · +284% qualified leads",
      badge: "Lead Gen",
      badgeStyle: "bg-sky-100 text-sky-700",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      ),
      href: "/case-studies/techstack-pro",
    },
    {
      company: "Fresh Roots Kitchen",
      result: "0 to 24.8K followers · $91K revenue",
      badge: "Social",
      badgeStyle: "bg-pink-100 text-pink-700",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
      href: "/case-studies/fresh-roots-kitchen",
    },
    {
      company: "Apex Wellness Group",
      result: "+217% bookings · $180K recovered",
      badge: "Automation",
      badgeStyle: "bg-purple-100 text-purple-700",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      href: "/case-studies/apex-wellness",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* BRAND LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-9 h-9">
                <Image
                  src="/piniola-logo.png"
                  alt="PINIOLA AI Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-[#002B66] leading-none">
                  PINIOLA <span className="text-[#2BB673]">AI</span>
                </span>
                <span className="text-[8px] tracking-widest text-[#002B66]/70 font-bold uppercase mt-1">
                  Business Beyond Limits
                </span>
              </div>
            </Link>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* SERVICES HOVER */}
            <div
              className="relative py-6"
              onMouseEnter={() => setActiveHoverMenu("services")}
              onMouseLeave={() => setActiveHoverMenu(null)}
            >
              <button className="flex items-center gap-1.5 text-[15px] font-semibold text-[#002B66] hover:text-[#2BB673] transition-colors">
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeHoverMenu === "services" ? "rotate-180 text-[#2BB673]" : "text-gray-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeHoverMenu === "services" && (
                <div className="absolute top-[85%] left-[-20px] w-[680px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50">
                  <div className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-4 px-2">
                    Our Services
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {servicesList.map((service, idx) => (
                      <Link
                        key={idx}
                        href={service.href}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#002B66]/5 transition-all group"
                      >
                        <div className="p-2 rounded-lg bg-gray-50 text-[#002B66] group-hover:bg-[#002B66] group-hover:text-white transition-colors flex-shrink-0">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#002B66] group-hover:text-[#2BB673] transition-colors leading-tight">
                            {service.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-0.5 leading-snug">{service.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/brand-onboarding" className="text-[15px] font-semibold text-[#002B66] hover:text-[#2BB673] transition-colors">
              Brand Onboarding
            </Link>

            <Link href="/free-audit" className="text-[15px] font-semibold text-[#002B66] hover:text-[#2BB673] transition-colors">
              Free Audit
            </Link>

            {/* CASE STUDIES HOVER */}
            <div
              className="relative py-6"
              onMouseEnter={() => setActiveHoverMenu("case-studies")}
              onMouseLeave={() => setActiveHoverMenu(null)}
            >
              <button className="flex items-center gap-1.5 text-[15px] font-semibold text-[#002B66] hover:text-[#2BB673] transition-colors">
                Case Studies
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeHoverMenu === "case-studies" ? "rotate-180 text-[#2BB673]" : "text-gray-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeHoverMenu === "case-studies" && (
                <div className="absolute top-[85%] left-[-80px] w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 z-50">
                  <div className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-3 px-2">
                    Case Studies
                  </div>
                  <div className="space-y-1">
                    {caseStudiesList.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#002B66]/5 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-gray-50 text-[#002B66] group-hover:bg-[#002B66] group-hover:text-white transition-colors flex-shrink-0">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#002B66] group-hover:text-[#2BB673] transition-colors leading-tight">
                              {item.company}
                            </h4>
                            <p className="text-xs text-gray-400 font-medium mt-0.5">
                              {item.result}
                            </p>
                          </div>
                        </div>
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${item.badgeStyle}`}>
                          {item.badge}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-[15px] font-semibold text-[#002B66] hover:text-[#2BB673] transition-colors">
              Blog
            </Link>
            <Link href="/careers" className="text-[15px] font-semibold text-[#002B66] hover:text-[#2BB673] transition-colors">
              Careers
            </Link>
            <Link href="/book-consultation" className="text-[15px] font-semibold text-[#002B66] hover:text-[#2BB673] transition-colors">
              Book a Consultation
            </Link>
          </nav>

          {/* RIGHT ACTION BUTTON (DESKTOP) */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/login"
              className="bg-[#002B66] hover:bg-[#001D47] text-white font-semibold text-sm px-6 py-2.5 rounded-xl shadow-md transition-all"
            >
              Login to App
            </Link>
          </div>

          {/* MOBILE TOGGLE BUTTON (HAMBURGER OR CLOSE ICON) */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#002B66] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6 text-[#002B66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7 text-[#002B66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* ========================================== */}
      {/* MOBILE COMPACT MODAL (Fits Content + Allows Page Scroll) */}
      {/* ========================================== */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white w-full border-t border-gray-100 shadow-xl px-6 py-5 transition-all duration-300">
          
          {/* MENU LINKS CONTAINER */}
          <div className="space-y-1 text-[#002B66]">
            
            {/* 1. SERVICES ACCORDION */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-2 text-[16px] font-semibold text-[#002B66] hover:text-[#2BB673] transition-colors"
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 text-[#002B66]/60 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180 text-[#002B66]" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileServicesOpen ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"} />
                </svg>
              </button>

              {/* SERVICES SUB-MENU (EXPANDS IN PLACE WITH BRAND DARK BLUE BORDER) */}
              {mobileServicesOpen && (
                <div className="mt-2 ml-2 pl-4 border-l-2 border-[#002B66]/20 space-y-3">
                  {servicesList.map((service, idx) => (
                    <Link
                      key={idx}
                      href={service.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 py-1 text-[#002B66]/80 hover:text-[#002B66] font-medium text-[15px] transition-colors"
                    >
                      <span className="text-[#002B66]">{service.icon}</span>
                      <span>{service.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 2. BRAND ONBOARDING */}
            <div>
              <Link
                href="/brand-onboarding"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-[16px] font-semibold text-[#002B66] hover:text-[#2BB673] transition-colors"
              >
                Brand Onboarding
              </Link>
            </div>

            {/* 3. FREE AUDIT */}
            <div>
              <Link
                href="/free-audit"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-[16px] font-semibold text-[#002B66] hover:text-[#2BB673] transition-colors"
              >
                Free Audit
              </Link>
            </div>

            {/* 4. CASE STUDIES ACCORDION */}
            <div>
              <button
                onClick={() => setMobileCaseStudiesOpen(!mobileCaseStudiesOpen)}
                className="w-full flex items-center justify-between py-2 text-[16px] font-semibold text-[#002B66] hover:text-[#2BB673] transition-colors"
              >
                <span>Case Studies</span>
                <svg
                  className={`w-4 h-4 text-[#002B66]/60 transition-transform duration-200 ${
                    mobileCaseStudiesOpen ? "rotate-180 text-[#002B66]" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileCaseStudiesOpen ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"} />
                </svg>
              </button>

              {/* CASE STUDIES SUB-MENU */}
              {mobileCaseStudiesOpen && (
                <div className="mt-2 ml-2 pl-4 border-l-2 border-[#002B66]/20 space-y-3">
                  {caseStudiesList.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between py-1 text-[#002B66]/80 hover:text-[#002B66] font-medium text-[15px] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-[#002B66]">{item.icon}</span>
                        <span>{item.company}</span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badgeStyle}`}>
                        {item.badge}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 5. BLOG */}
            <div>
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-[16px] font-semibold text-[#002B66] hover:text-[#2BB673] transition-colors"
              >
                Blog
              </Link>
            </div>

            {/* 6. CAREERS */}
            <div>
              <Link
                href="/careers"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-[16px] font-semibold text-[#002B66] hover:text-[#2BB673] transition-colors"
              >
                Careers
              </Link>
            </div>

            {/* 7. BOOK A CONSULTATION */}
            <div>
              <Link
                href="/book-consultation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-[16px] font-semibold text-[#002B66] hover:text-[#2BB673] transition-colors"
              >
                Book a Consultation
              </Link>
            </div>

          </div>

          {/* DARK BLUE BUTTON */}
          <div className="pt-6 pb-2">
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full py-3.5 text-center font-bold text-white bg-[#002B66] hover:bg-[#001D47] rounded-xl shadow-md transition-all text-base"
            >
              Login to App
            </Link>
          </div>

        </div>
      )}

    </header>
  );
}