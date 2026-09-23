"use client";

import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const comparisonData = [
  { feature: "CRM & PIPELINE MANAGEMENT", replaces: "Pipedrive, HubSpot", otherPrice: "$99/MONTHLY", piniola: true },
  { feature: "UNLIMITED SALES FUNNELS", replaces: "Leadpages, Unbounce", otherPrice: "$297/MONTHLY", piniola: true },
  { feature: "WEBSITE BUILDER", replaces: "Webflow, Wix, Wordpress", otherPrice: "$29/MONTHLY", piniola: true },
  { feature: "SURVEYS & FORMS", replaces: "Typeform, JotForm, Wufoo", otherPrice: "$49/MONTHLY", piniola: true },
  { feature: "EMAIL MARKETING", replaces: "Mailchimp, ConvertKit", otherPrice: "$99/MONTHLY", piniola: true },
  { feature: "2-WAY SMS MARKETING", replaces: "Twilio, SimpleTexting", otherPrice: "$99/MONTHLY", piniola: true },
  { feature: "BOOKING & APPOINTMENTS", replaces: "Calendly, Acuity", otherPrice: "$29/MONTHLY", piniola: true },
  { feature: "WORKFLOW AUTOMATIONS", replaces: "Zapier, Integromat", otherPrice: "$169/MONTHLY", piniola: true },
  { feature: "COURSES/PRODUCTS", replaces: "Teachable, Kajabi", otherPrice: "$99/MONTHLY", piniola: true },
  { feature: "CALL TRACKING", replaces: "CallRail, Nomorobo", otherPrice: "$49/MONTHLY", piniola: true },
  { feature: "REPUTATION MANAGEMENT", replaces: "BrightLocal, Yext", otherPrice: "$159/MONTHLY", piniola: true },
  { feature: "TRACKING & ANALYTICS", replaces: "Mixpanel", otherPrice: "$299/MONTHLY", piniola: true },
  { feature: "COMMUNITIES", replaces: "Circle, Mighty Networks", otherPrice: "$89/MONTHLY", piniola: true },
  { feature: "DOCUMENT SIGNING", replaces: "Docusign, HelloSign", otherPrice: "$47/MONTHLY", piniola: true },
  { feature: "GRAY LABELED MOBILE APP", replaces: "—", otherPrice: "UNIQUE TO HIGHLEVEL", piniola: true },
  { feature: "WHITE LABELED DESKTOP APP", replaces: "—", otherPrice: "$5K + $499/MONTHLY", piniola: "Optional Add-On" },
  { feature: "SEO (Rank #1 Search Engine)", replaces: "Semrush, SE Ranking", otherPrice: "$3500/MONTHLY", piniola: true},
  { feature: "Lead Generation", replaces: "Facebook Ads, Google Ads", otherPrice: "$4500/MONTHLY", piniola: true}
];

export default function WhyChooseUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    whatsapp: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();

    // আপনার হোয়াটসঅ্যাপ নম্বর (বাংলাদেশি কান্ট্রি কোড +88 সহ)
    const myWhatsAppNumber = "8801602030870";

    // মেসেজ ফরম্যাট করা
    const text = `*New Lead from Piniola AI*%0A%0A` +
      `*Name:* ${formData.firstName} ${formData.lastName}%0A` +
      `*WhatsApp:* ${formData.whatsapp}%0A` +
      `*Message:* ${formData.message || "N/A"}`;

    // সরাসরি হোয়াটসঅ্যাপ ওপেন করার ইউআরএল
    const whatsappUrl = `https://wa.me/${myWhatsAppNumber}?text=${text}`;

    // নতুন ট্যাবে হোয়াটসঅ্যাপ ওপেন হবে
    window.open(whatsappUrl, '_blank');

    // মোডাল বন্ধ ও ফর্ম রিসেট
    setIsModalOpen(false);
    setFormData({ firstName: '', lastName: '', whatsapp: '', message: '' });
  };

  return (
    <section className="bg-slate-50 text-slate-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans w-full">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[#002B66]/10 text-[#002B66] mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#002B66] mb-4">
            Compare Other Tools Pricing With <span className="text-[#2BB673]">Piniola AI</span>
          </h2>
          <p className="text-lg sm:text-xl font-medium text-slate-600 max-w-3xl mx-auto">
            Save Over <span className="text-[#2BB673] font-bold">$12,000+</span> Each Month On Sales & Marketing Tools
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xl bg-white">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#002B66] text-xs uppercase tracking-wider text-slate-100">
                <th className="py-5 px-6 font-bold">Features</th>
                <th className="py-5 px-6 font-bold text-slate-400">Replaces</th>
                <th className="py-5 px-6 font-bold text-slate-400">Other Tools</th>
                <th className="py-5 px-6 font-bold text-center text-[#2BB673] bg-[#002B66] border-l border-r border-[#2BB673]">
                  Piniola AI
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {comparisonData.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-800 uppercase tracking-wide">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-slate-500 font-medium">
                    {row.replaces}
                  </td>
                  <td className="py-4 px-6 text-slate-700 font-semibold">
                    {row.otherPrice}
                  </td>
                  <td className="py-4 px-6 text-center bg-emerald-50/50 border-l border-r border-emerald-100">
                    {row.piniola === true ? (
                      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-600">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    ) : (
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                        {row.piniola}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

            {/* Table Footer / Pricing Breakdown */}
            <tfoot>
              <tr className="bg-[#002B66] border-t-2 border-[#2BB673]">
                <td colSpan={2} className="py-6 px-6 text-lg font-black uppercase tracking-wider text-white">
                  Overall Price
                </td>
                <td className="py-6 px-6 text-lg font-bold text-rose-400 line-through decoration-2">
                  $15,111 / MONTH
                </td>
                <td className="py-6 px-6 text-center bg-[#002B66] border-l border-r border-[#2BB673]">
                  <div className="text-2xl font-black text-white">
                    <span className="text-[#2BB673]">$297 - $797</span> <span className="text-xs font-normal text-slate-300 block sm:inline">/ MONTH</span>
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-1 uppercase tracking-wider font-semibold">
                    Starting From Automate Tier
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Action Button Section */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#002B66] hover:bg-[#001D47] text-white font-bold text-xl sm:text-2xl px-5 py-3 rounded-2xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Join Piniola AI Today!
          </button>
          <p className="mt-4 text-slate-700 font-medium text-base sm:text-lg">
            Automate 90% Of Your Sales & Marketing Process
          </p>
        </div>
      </div>

      {/* WhatsApp Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-100 p-6 sm:p-8 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Contact Us</h3>
              <p className="text-slate-500 text-sm mt-1">
                Quick contact form — we'll reach out shortly.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleWhatsAppSend} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  placeholder="First name *"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#005c9e] focus:ring-2 focus:ring-[#005c9e]/20 outline-none text-slate-800 placeholder-slate-400 transition-all text-sm font-medium"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  placeholder="Last name *"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#005c9e] focus:ring-2 focus:ring-[#005c9e]/20 outline-none text-slate-800 placeholder-slate-400 transition-all text-sm font-medium"
                />
              </div>

              {/* WhatsApp Number Field */}
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                required
                placeholder="WhatsApp Number *"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#005c9e] focus:ring-2 focus:ring-[#005c9e]/20 outline-none text-slate-800 placeholder-slate-400 transition-all text-sm font-medium"
              />

              {/* Message Field */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Message"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#005c9e] focus:ring-2 focus:ring-[#005c9e]/20 outline-none text-slate-800 placeholder-slate-400 transition-all text-sm font-medium resize-y"
              ></textarea>

              {/* Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-[#005c9e] hover:bg-[#004a80] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md"
                >
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm px-6 py-3 rounded-xl border border-slate-200 transition-all"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}