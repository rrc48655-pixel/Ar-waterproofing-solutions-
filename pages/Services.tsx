import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, IMAGES } from '../constants';
import { Check, AlertTriangle, PenTool, HelpCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  return (
    <div className="pt-20 font-sans">
      <SEO 
        title="Our Waterproofing Services in Hyderabad | AR Solutions"
        description="Comprehensive waterproofing services in Hyderabad. From terrace leakage to bathroom repairs, we offer guaranteed protection for all structural needs."
        keywords="waterproofing services Hyderabad, terrace leakage repair, bathroom waterproofing Hyderabad"
      />
      {/* Header */}
      <div className="bg-slate-900 py-24 text-center relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url('${IMAGES.patterns.carbon}')` }}
        ></div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 relative z-10">Our Services</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4 text-lg relative z-10 leading-relaxed">
          Specialized waterproofing solutions tailored for Indian construction standards and climate conditions.
        </p>
      </div>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-24">
            {SERVICES.map((service, index) => (
              <div key={service.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col lg:flex-row group">
                
                {/* Image Section */}
                <div className={`lg:w-2/5 relative min-h-[300px] lg:min-h-full ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 md:p-12">
                     <div className="text-white relative z-10">
                        <div className="bg-brand-600/90 backdrop-blur w-fit p-3 rounded-xl mb-4 shadow-lg text-white">
                           <service.icon size={32} />
                        </div>
                        <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
                        <p className="text-gray-300 font-medium">{service.shortDescription}</p>
                     </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="mb-8">
                     <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-gray-100 pb-2">Overview</h3>
                     <p className="text-lg text-slate-600 leading-relaxed">
                        {service.fullDescription}
                     </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                     {/* Problems Solved */}
                     <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                        <h4 className="flex items-center gap-2 font-bold text-amber-900 mb-4 text-sm uppercase tracking-wide">
                           <AlertTriangle size={16} /> Common Problems Solved
                        </h4>
                        <ul className="space-y-3">
                           {service.problemsSolved.map((prob, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                                 <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                                 {prob}
                              </li>
                           ))}
                        </ul>
                     </div>

                     {/* Materials */}
                     <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <h4 className="flex items-center gap-2 font-bold text-brand-900 mb-4 text-sm uppercase tracking-wide">
                           <PenTool size={16} /> Technical Specs
                        </h4>
                        <ul className="space-y-3">
                           {service.materials.map((mat, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                                 <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0"></div>
                                 {mat}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  
                  {/* Benefits & Best For */}
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                     <div>
                        <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Key Benefits</h4>
                        <div className="space-y-2">
                           {service.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                                 <Check size={16} className="text-green-600 flex-shrink-0" />
                                 <span>{benefit}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Best Suited For</h4>
                        <div className="flex flex-wrap gap-2">
                           {service.bestFor.map((item, i) => (
                              <span key={i} className="bg-gray-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold border border-gray-200">
                                 {item}
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Micro FAQ */}
                  <div className="border-t border-gray-100 pt-8 mb-8">
                     <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                        <HelpCircle size={16} /> Service FAQ
                     </h4>
                     <div className="space-y-4">
                        {service.faqs.map((faq, i) => (
                           <div key={i}>
                              <p className="font-bold text-slate-800 text-sm mb-1">Q: {faq.question}</p>
                              <p className="text-slate-500 text-sm">A: {faq.answer}</p>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                     <Link 
                     to="/contact" 
                     className="inline-flex justify-center items-center bg-brand-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-brand-700 transition-colors shadow-lg hover:shadow-brand-500/25"
                     >
                     Get A Quote for {service.title}
                     </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 py-20 text-center text-white">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a custom solution?</h2>
            <p className="text-slate-300 mb-10 text-lg">Our senior engineers can visit your site to assess the specific structural challenges.</p>
            <Link to="/contact" className="inline-flex items-center bg-white text-brand-900 px-8 py-4 rounded-lg font-bold hover:bg-brand-50 transition-colors">
               Schedule Free Consultation <ArrowRight size={20} className="ml-2" />
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Services;