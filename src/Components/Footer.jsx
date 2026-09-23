'use client';

import Link from 'next/link';
import { FaFacebookSquare,  FaWhatsappSquare, FaLinkedin } from 'react-icons/fa';
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = '8801602030870'; 
  const defaultMessage = encodeURIComponent('Hello Piniola AI, I would like to get more information about your services.');

  return (
    <footer className="bg-[#001026] text-white pt-16 pb-8 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Logo & Description Section */}
          <div className="lg:col-span-1 space-y-6">
            {/* Piniola Logo */}
            <div className="flex items-center space-x-3">
              {/* Dynamic AI Logo Icon */}
              <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-tr from-[#2BB673] to-emerald-400 p-2 shadow-lg shadow-[#2BB673]/20">
                 <Image src="/Piniola-Logo.jpeg"
                alt="PINIOLA AI Logo" fill className="object-contain" priority />
                </div>
                <div className="flex flex-col">
                     <span className="font-extrabold text-xl tracking-tight text-[#adbacd] leading-none">
                     PINIOLA <span className="text-[#2BB673]">AI</span>
                 </span>
                <span className="text-[8px] tracking-widest text-[#adbacd]/70 font-bold uppercase mt-1">
                 Business Beyond Limits </span> </div> </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-xs">
              All-in-one CRM, sales, and marketing automation platform for smart businesses.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 text-slate-400">
              <Link href="https://www.facebook.com/share/p/1DiduiGRmn" className="hover:text-[#2BB673] transition-colors p-1.5 hover:bg-white/5 rounded-lg">
                <FaFacebookSquare className="w-5 h-5" />
              </Link>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#2BB673] transition-colors p-1.5 hover:bg-white/5 rounded-lg "
                title="Chat on WhatsApp"
              >
                <FaWhatsappSquare className="w-5 h-5" />
              </a>
              <Link href="https://www.linkedin.com/company/piniolaglobal/" className="hover:text-[#2BB673] transition-colors p-1.5 hover:bg-white/5 rounded-lg">
                <FaLinkedin className="w-5 h-5" />
              </Link>
              {/* <Link href="#" className="hover:text-[#2BB673] transition-colors p-1.5 hover:bg-white/5 rounded-lg">
                <Instagram className="w-5 h-5" />
              </Link> */}
            </div>
          </div>

          {/* Services Column 1 */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide">Services</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {['AI Website Design', 'CRM & Pipeline', 'Marketing Automation', 'SEO Services', 'Social Media'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[#2BB673] transition-colors duration-200 block">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 2 */}
          <div className="lg:mt-10 space-y-4">
            <ul className="space-y-2.5 text-sm text-slate-300">
              {['Paid Advertising', 'Lead Generation', 'Reputation Management', 'Appointment Scheduling', 'Analytics & Reporting'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[#2BB673] transition-colors duration-200 block">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Column */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide">Product</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {['All-in-One CRM', 'Pipelines & Forms', 'Automation Workflows', 'Reviews & Reporting'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[#2BB673] transition-colors duration-200 block">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide">Company</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {['About Us', 'Case Studies', 'Blog', 'Careers', 'Contact', 'Client Support'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[#2BB673] transition-colors duration-200 block">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Bottom / Divider Section */}
        <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-xs text-slate-400">
          <p>© {currentYear} PINIOLA LLC. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}