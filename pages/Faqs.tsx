import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../constants';
import SEO from '../components/SEO';

const Faqs: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-20 font-sans">
      <SEO 
        title="Frequently Asked Questions | AR Waterproofing Solutions"
        description="Find answers to common questions about our waterproofing services, processes, warranties, and costs in Hyderabad."
        keywords="waterproofing FAQ, waterproofing questions, AR Waterproofing FAQ, waterproofing cost Hyderabad"
      />
      
      {/* Header */}
      <div className="bg-slate-900 py-24 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Frequently Asked Questions</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4 text-lg">Everything you need to know about our waterproofing services.</p>
      </div>

      {/* FAQ Content */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 overflow-hidden transition-all hover:border-brand-300 shadow-sm rounded-lg">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-slate-800 text-sm md:text-base">{faq.question}</span>
                  {openFaq === index ? <ChevronUp className="text-accent-500" /> : <ChevronDown className="text-gray-400" />}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed border-t border-gray-50 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
