'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: '1. What is Piniola AI?',
    answer: 'Piniola AI is an all-in-one CRM, sales communication and marketing automation platform operated by PINIOLA LLC, USA. It helps businesses capture leads, manage conversations, organize pipelines, schedule appointments and automate approved follow-up from one connected workspace.'
  },
  {
    question: '2. Is Piniola AI suitable for small businesses?',
    answer: 'Yes. Piniola AI is designed for owner-led businesses and small teams that want a clearer and more consistent way to manage leads, customer conversations and follow-up. The right plan depends on your users, contacts, locations, channels and automation needs.'
  },
  {
    question: '3. Which tools can Piniola AI replace?',
    answer: 'Depending on the selected plan and enabled services, Piniola AI can consolidate functions such as CRM, pipelines, forms, landing pages, calendars, email, SMS, workflow automation, review management and reporting into one connected system.'
  },
  {
    question: '4. Do I need technical experience to use Piniola AI?',
    answer: 'Not necessarily. Everyday workflows are designed to be manageable without advanced technical skills. Guided or done-for-you setup can be used for migrations, integrations and more advanced automation requirements.'
  },
  {
    question: '5. Is onboarding included?',
    answer: 'Onboarding depends on the selected plan and implementation package. Before purchase, Piniola AI will clearly explain what is included, what may require a setup fee and what requires custom implementation.'
  },
  {
    question: '6. Can you migrate my existing CRM and contacts?',
    answer: 'Migration may be available after reviewing your existing platform, data format, record volume, fields and workflow requirements. Data cleanup, complex mapping or rebuilding existing automations may require a separate implementation service.'
  },
  {
    question: '7. Are SMS, phone, email, WhatsApp and AI usage included?',
    answer: 'Platform features and communication or AI usage are treated separately where applicable. Phone numbers, messaging, AI usage and certain third-party services may involve additional usage-based charges. Exact costs depend on the selected services and providers.'
  },
  {
    question: '8. Can I use my own domain and business phone number?',
    answer: 'Custom domains and business phone configurations may be supported, subject to the selected plan, provider requirements, country availability, verification and number-porting rules.'
  },
  {
    question: '9. Does Piniola AI support multiple users or locations?',
    answer: 'Yes, selected plans can support additional users, teams or locations. The applicable limits and any additional charges depend on the plan and configuration.'
  },
  {
    question: '10. What integrations are available?',
    answer: 'Available integrations depend on the enabled platform capabilities and connected providers. Piniola AI will publish and support only integrations that have been confirmed for the applicable service and plan.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-200 border-y border-gray-100 py-16 px-4 sm:px-6 lg:px-8  w-full">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-[#2BB673] font-semibold text-sm tracking-wider uppercase bg-[#2BB673]/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Customer-Facing FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002B66]">
            PINIOLA AI — Frequently Asked Questions
          </h2>
          <p className="mt-3 text-lg text-slate-600 font-medium">
            Business Beyond Limits
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-[#2BB673] shadow-md bg-white' 
                    : 'border-slate-200 bg-white hover:border-[#002B66]/30'
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 sm:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-bold pr-4 transition-colors duration-200 ${
                    isOpen ? 'text-[#2BB673]' : 'text-[#002B66]'
                  }`}>
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-full transition-transform duration-300 ${
                    isOpen ? 'bg-[#2BB673]/10 text-[#2BB673] rotate-180' : 'bg-slate-100 text-[#002B66]'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Answer Box */}
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-slate-600 leading-relaxed text-sm sm:text-base border-t border-slate-100 mt-2 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-xs text-center text-slate-400 italic">
          Note: Pricing, usage charges, integrations and service levels should be confirmed against the current Piniola AI offer before publication.
        </p>

      </div>
    </section>
  );
}