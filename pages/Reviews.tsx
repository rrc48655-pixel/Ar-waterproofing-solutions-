import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import SEO from '../components/SEO';

const Reviews: React.FC = () => {
  return (
    <div className="pt-20 font-sans">
      <SEO 
        title="Customer Reviews | AR Waterproofing Solutions"
        description="Read what our clients in Hyderabad have to say about our waterproofing services, 10-year warranty, and professional team."
        keywords="waterproofing reviews Hyderabad, AR Waterproofing testimonials, customer feedback waterproofing"
      />
      
      {/* Header */}
      <div className="bg-slate-900 py-24 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Client Testimonials</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4 text-lg">See why hundreds of homeowners trust us for their waterproofing needs.</p>
      </div>

      {/* Reviews Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-gray-50 p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-xl flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                   <div className="flex text-accent-500">
                     {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                   </div>
                   <span className="text-xs text-slate-400 font-medium">{t.date}</span>
                </div>
                <p className="text-slate-600 italic mb-6 text-sm leading-relaxed flex-grow">"{t.content}"</p>
                <div className="flex items-center gap-3 mt-auto border-t border-gray-200 pt-4">
                   <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {t.name.charAt(0)}
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">{t.name}</h4>
                      <p className="text-xs text-slate-500 uppercase">{t.location}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
