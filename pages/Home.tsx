import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Phone, ChevronDown, ChevronUp, ShieldCheck, AlertTriangle, ChevronLeft, ChevronRight } from 'lucide-react';
import { SERVICES, TESTIMONIALS, PROCESS_STEPS, FAQS, PHONE_NUMBER, WHATSAPP_LINK, KEY_STATS, BRAND_PILLARS, HERO_IMAGES, PROJECTS, IMAGES } from '../constants';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_IMAGES.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col font-sans">
      <SEO 
        title="Best Waterproofing Services in Hyderabad | AR Solutions"
        description="Expert waterproofing services in Hyderabad for terraces, bathrooms & sumps. 10-year warranty & free inspection. Protect your home from leaks today!"
        keywords="waterproofing services in Hyderabad, terrace waterproofing, bathroom leakage repair, sump waterproofing, AR Waterproofing Solutions"
      />
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center pt-24 pb-20 overflow-hidden bg-brand-900 group">
        
        {/* Carousel Background with Overlay */}
        <div className="absolute inset-0 z-0">
          {HERO_IMAGES.map((img, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={img} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover opacity-30"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900/95 via-brand-900/80 to-brand-900/95"></div>
        </div>

        {/* Carousel Controls (Arrows) */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 z-20 text-white/50 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all hidden md:block"
          aria-label="Previous slide"
        >
          <ChevronLeft size={40} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 z-20 text-white/50 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all hidden md:block"
          aria-label="Next slide"
        >
          <ChevronRight size={40} />
        </button>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="max-w-4xl mx-auto">
            
            <div className="inline-block px-5 py-2 rounded-full bg-accent-500/10 border border-accent-500/30 text-accent-500 font-bold text-xs md:text-sm mb-8 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-3 uppercase tracking-widest">
              ★ Trusted Experts in Hyderabad & Telangana
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-sm font-sans tracking-tight">
              Expert Waterproofing Solutions for <span className="text-accent-500">Reliable Protection</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150 leading-relaxed font-light">
              Prevent costly damage with our proven, long-lasting waterproofing techniques. We combine <strong>expert technical diagnosis</strong> with premium chemical coatings to give you a 100% leak-free home.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              <a 
                href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, '')}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center px-7 py-4 bg-white text-brand-900 text-base font-bold rounded-xl shadow-xl hover:bg-brand-50 transition-all transform hover:-translate-y-1 min-w-[180px] border-b-4 border-gray-200 active:border-b-0 active:translate-y-0"
              >
                <Phone size={18} className="mr-2 text-brand-600" /> Call Now
              </a>
              <Link 
                to="/contact"
                className="flex-1 sm:flex-none inline-flex items-center justify-center px-7 py-4 bg-accent-500 text-brand-900 text-base font-bold rounded-xl shadow-xl hover:bg-accent-400 transition-all transform hover:-translate-y-1 min-w-[220px] border-b-4 border-accent-700 active:border-b-0 active:translate-y-0"
              >
                <ShieldCheck size={18} className="mr-2" /> Book Free Inspection
              </Link>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center px-7 py-4 bg-[#25D366] text-white text-base font-bold rounded-xl shadow-xl hover:bg-[#22c35e] transition-all transform hover:-translate-y-1 min-w-[180px] border-b-4 border-[#128C7E] active:border-b-0 active:translate-y-0"
              >
                <WhatsAppIcon size={18} className="mr-2" /> WhatsApp Chat
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 justify-center text-gray-400 text-sm font-semibold animate-in fade-in slide-in-from-bottom-7 delay-500 uppercase tracking-wider">
                <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-accent-500" /> 10-Year Warranty</div>
                <div className="flex items-center gap-2"><CheckCircle size={18} className="text-accent-500" /> GST Verified</div>
                <div className="flex items-center gap-2"><CheckCircle size={18} className="text-accent-500" /> Authorized Applicators</div>
            </div>

            {/* Carousel Indicators (Dots) */}
            <div className="flex justify-center gap-2 mt-12">
              {HERO_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-accent-500 w-8' : 'bg-white/20 w-2 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 relative z-20 border-b border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
               {KEY_STATS.map((stat, idx) => (
                  <div key={idx} className="text-center px-2">
                     <div className="flex justify-center mb-3 text-brand-600">
                        <stat.icon size={36} />
                     </div>
                     <div className="text-3xl md:text-4xl font-extrabold mb-1 text-slate-900">{stat.value}</div>
                     <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-500">{stat.label}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Brand Pillars / Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <span className="text-accent-500 font-bold tracking-widest uppercase text-xs">Why We Are Different</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">The AR Waterproofing Standard</h2>
              <div className="w-20 h-1 bg-accent-500 mx-auto mt-6"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {BRAND_PILLARS.map((pillar, idx) => (
                 <div key={idx} className="bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group">
                    <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-brand-600 transition-colors text-brand-600 group-hover:text-white">
                       <pillar.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{pillar.description}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
             <div>
               <span className="text-accent-500 font-bold tracking-widest uppercase text-xs">Our Expertise</span>
               <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">Specialized Services</h2>
             </div>
             <Link 
               to="/services" 
               className="inline-flex items-center font-bold text-brand-600 hover:text-brand-800 transition-colors uppercase tracking-wide text-sm"
             >
               View All Solutions <ArrowRight size={18} className="ml-2" />
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {SERVICES.slice(0, 4).map((service) => (
              <div key={service.id} className="bg-gray-50 rounded-xl overflow-hidden group flex flex-col h-full hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                   <img 
                     src={service.image} 
                     alt={service.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                   <div className="absolute top-4 left-4 bg-brand-900/90 backdrop-blur px-4 py-2 text-xs font-bold text-white flex items-center gap-2 shadow-lg uppercase tracking-wider">
                      <service.icon size={14} className="text-accent-500" /> {service.title}
                   </div>
                </div>
                <div className="p-8 flex flex-col flex-grow relative">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm">{service.fullDescription.substring(0, 120)}...</p>
                  
                  <div className="space-y-3 mb-8">
                     {service.problemsSolved.slice(0, 2).map((prob, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-500 font-medium uppercase tracking-wide">
                           <AlertTriangle size={14} className="text-accent-500 shrink-0 mt-0.5" />
                           <span>Fixes: {prob}</span>
                        </div>
                     ))}
                  </div>

                  <Link to="/services" className="w-full inline-flex items-center justify-center px-4 py-4 bg-white border border-gray-200 text-brand-900 rounded-lg text-sm font-bold hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all uppercase tracking-wide">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Grid */}
      <section className="py-24 bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <span className="text-accent-500 font-bold tracking-widest uppercase text-xs">Our Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-3">Recent Projects</h2>
              <div className="w-20 h-1 bg-accent-500 mx-auto mt-6"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROJECTS.slice(0, 2).map((project) => (
                 <ProjectCard key={project.id} project={project} />
              ))}
           </div>
           
           <div className="mt-16 text-center">
              <Link to="/projects" className="inline-flex items-center justify-center px-10 py-4 bg-accent-500 text-brand-900 hover:bg-white rounded-lg font-bold transition-colors uppercase tracking-widest text-sm">
                 View All Projects <ArrowRight size={18} className="ml-2" />
              </Link>
           </div>
        </div>
      </section>

      {/* Why Waterproofing Fails Section (Educational) */}
      <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                   <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900">Why Do 80% of Repairs Fail?</h2>
                   <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                      Most contractors focus on "hiding" the leak with cheap paint or putty. This traps moisture inside, causing faster structural decay.
                   </p>
                   <div className="space-y-8">
                      <div className="flex gap-6">
                         <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold text-xl shrink-0">X</div>
                         <div>
                            <h4 className="font-bold text-slate-900 text-lg">The Wrong Way</h4>
                            <p className="text-slate-500 text-sm mt-1">Applying coating without removing algae or repairing cracks. Using diluted chemicals to save cost.</p>
                         </div>
                      </div>
                      <div className="flex gap-6">
                         <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-bold text-xl shrink-0"><CheckCircle size={24} /></div>
                         <div>
                            <h4 className="font-bold text-slate-900 text-lg">The AR Way</h4>
                            <p className="text-slate-500 text-sm mt-1">We open V-grooves in cracks, grind the surface, apply primer, and use fiber mesh reinforcement for permanent bonding.</p>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="bg-brand-900 rounded-none p-10 md:p-12 shadow-2xl relative">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-accent-500 opacity-20 rounded-bl-full"></div>
                   <h3 className="text-2xl font-bold mb-8 text-white">Our Inspection Checklist</h3>
                   <ul className="space-y-5 text-sm text-gray-300">
                      {[
                         "Root cause analysis to find moisture path",
                         "Checking slope levels of terrace",
                         "Sound test for hollow tiles",
                         "pH test of concrete surface",
                         "Measuring crack width for correct filler selection"
                      ].map((item, i) => (
                         <li key={i} className="flex items-center gap-4">
                            <div className="w-2 h-2 bg-accent-500 shrink-0"></div>
                            {item}
                         </li>
                      ))}
                   </ul>
                   <div className="mt-10 pt-8 border-t border-white/10">
                      <Link to="/contact" className="w-full block text-center bg-accent-500 hover:bg-white hover:text-brand-900 text-brand-900 font-bold py-4 transition-colors uppercase tracking-widest text-xs">
                         Schedule a Technical Inspection
                      </Link>
                   </div>
                </div>
             </div>
          </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-accent-500 font-bold tracking-widest uppercase text-xs">Process</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">From Leak to Leak-Free in 5 Steps</h2>
            <div className="w-20 h-1 bg-accent-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
             <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gray-200 z-0 mx-20"></div>
              {PROCESS_STEPS.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center group relative z-10">
                  <div className="w-20 h-20 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-accent-500 group-hover:shadow-lg transition-all duration-300">
                    <div className="text-brand-600 group-hover:text-accent-500 transition-colors">
                      <step.icon size={28} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">{step.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-gray-50 p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                   <div className="flex text-accent-500">
                     {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                   </div>
                   <span className="text-xs text-slate-400 font-medium">{t.date}</span>
                </div>
                <p className="text-slate-600 italic mb-6 text-sm leading-relaxed line-clamp-4">"{t.content}"</p>
                <div className="flex items-center gap-3 mt-auto border-t border-gray-200 pt-4">
                   <div className="w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {t.name.charAt(0)}
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wide">{t.name}</h4>
                      <p className="text-[10px] text-slate-500 uppercase">{t.location}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Expert Answers</h2>
            <p className="text-slate-500 mt-2 text-sm">Common questions about waterproofing process and costs.</p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 overflow-hidden transition-all hover:border-brand-300">
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

      {/* Final CTA */}
      <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
         <div 
           className="absolute inset-0 opacity-10"
           style={{ backgroundImage: `url('${IMAGES.patterns.carbon}')` }}
         ></div>
         <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
         
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Building Needs Protection Today.</h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed font-light">
             Waiting only increases the damage and the cost. Get a professional opinion from Hyderabad's most trusted team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, '')}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-8 py-4 bg-white text-brand-900 text-base font-bold rounded-xl shadow-xl hover:bg-brand-50 transition-all transform hover:-translate-y-1 min-w-[180px] border-b-4 border-gray-200 active:border-b-0 active:translate-y-0"
            >
              <Phone size={18} className="mr-2 text-brand-600" /> Call Now
            </a>
            <Link 
              to="/contact" 
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-8 py-4 bg-accent-500 text-brand-900 text-base font-bold rounded-xl shadow-xl hover:bg-accent-400 transition-all transform hover:-translate-y-1 min-w-[220px] border-b-4 border-accent-700 active:border-b-0 active:translate-y-0"
            >
              <ShieldCheck size={18} className="mr-2" /> Book Free Site Visit
            </Link>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white text-base font-bold rounded-xl shadow-xl hover:bg-[#22c35e] transition-all transform hover:-translate-y-1 min-w-[180px] border-b-4 border-[#128C7E] active:border-b-0 active:translate-y-0"
            >
              <WhatsAppIcon size={18} className="mr-2" /> WhatsApp Chat
            </a>
          </div>
          <p className="mt-8 text-xs text-accent-500 font-bold uppercase tracking-widest">
             <ShieldCheck size={14} className="inline mr-2" /> 100% Free Inspection • No Obligation Quote
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;