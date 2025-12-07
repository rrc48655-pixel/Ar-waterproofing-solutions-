import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Phone, ChevronDown, ChevronUp, ShieldCheck, AlertTriangle, ChevronLeft, ChevronRight } from 'lucide-react';
import { SERVICES, TESTIMONIALS, PROCESS_STEPS, FAQS, PHONE_NUMBER, WHATSAPP_LINK, KEY_STATS, BRAND_PILLARS } from '../constants';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

const HERO_IMAGES = [
  "https://picsum.photos/id/196/1600/900", // Abstract/texture
  "https://picsum.photos/id/129/1600/900", // People working
  "https://picsum.photos/id/175/1600/900", // Roof/Structure
  "https://picsum.photos/id/352/1600/900"  // Construction detail
];

const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200",
    title: "Terrace Waterproofing",
    description: "Multi-layer protection for long-lasting durability"
  },
  {
    url: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
    title: "Bathroom Leakage Repair",
    description: "Epoxy grouting without breaking tiles"
  },
  {
    url: "https://images.unsplash.com/photo-1599708153386-fa2e2bc1356e?auto=format&fit=crop&q=80&w=1200",
    title: "Exterior Wall Coatings",
    description: "Weather-proof paint solutions"
  },
  {
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
    title: "Industrial Solutions",
    description: "Heavy-duty protection for factories"
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const galleryTimer = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 4000);
    return () => clearInterval(galleryTimer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const nextGallerySlide = () => {
    setGalleryIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const prevGallerySlide = () => {
    setGalleryIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  return (
    <div className="flex flex-col font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center justify-center pt-24 pb-20 overflow-hidden bg-slate-900">
        
        {/* Carousel Backgrounds */}
        {HERO_IMAGES.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img 
              src={slide} 
              alt={`Waterproofing Project ${index + 1}`} 
              className="w-full h-full object-cover scale-105"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-0"></div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center lg:text-left">
          <div className="lg:w-4/5">
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-600/20 border border-brand-500/30 text-brand-300 font-bold text-xs md:text-sm mb-6 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-3 uppercase tracking-wider">
              ★ Trusted Experts in Hyderabad & Telangana
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-sm">
              Permanent Solutions for <br className="hidden md:block"/> <span className="text-brand-500">Persistent Leaks</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150 leading-relaxed font-light">
              Don't let water damage destroy your property. We combine <strong>advanced thermal scanning</strong> with premium chemical coatings to give you a 100% leak-free home.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              <a 
                href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, '')}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white text-lg font-bold rounded-lg shadow-lg hover:shadow-brand-500/30 transition-all transform hover:-translate-y-1 min-w-[200px]"
              >
                <Phone size={20} className="mr-2" /> Call Now
              </a>
              <Link 
                to="/contact" 
                className="flex-1 sm:flex-none inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-slate-900 text-lg font-bold rounded-lg shadow-lg transition-all transform hover:-translate-y-1 min-w-[240px]"
              >
                Book Free Inspection
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 justify-center lg:justify-start text-gray-300 text-sm font-semibold animate-in fade-in slide-in-from-bottom-7 delay-500">
               <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-brand-500" /> 10-Year Warranty</div>
               <div className="flex items-center gap-2"><CheckCircle size={18} className="text-brand-500" /> GST Verified</div>
               <div className="flex items-center gap-2"><CheckCircle size={18} className="text-brand-500" /> Authorized Applicators</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-600 text-white py-12 relative z-20 -mt-2">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-brand-500/50">
               {KEY_STATS.map((stat, idx) => (
                  <div key={idx} className="text-center px-2">
                     <div className="flex justify-center mb-2 text-brand-200">
                        <stat.icon size={32} />
                     </div>
                     <div className="text-3xl md:text-4xl font-extrabold mb-1">{stat.value}</div>
                     <div className="text-sm md:text-base font-medium text-brand-100">{stat.label}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Brand Pillars / Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">Why We Are Different</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">The AR Waterproofing Standard</h2>
              <div className="w-20 h-1.5 bg-brand-500 mx-auto mt-4 rounded-full"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {BRAND_PILLARS.map((pillar, idx) => (
                 <div key={idx} className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 text-center group">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform text-brand-600 group-hover:text-brand-700">
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
             <div>
               <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">Our Expertise</span>
               <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Specialized Services</h2>
             </div>
             <Link 
               to="/services" 
               className="inline-flex items-center font-bold text-brand-600 hover:text-brand-800 transition-colors"
             >
               View All Solutions <ArrowRight size={20} className="ml-2" />
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.slice(0, 4).map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full border border-gray-100">
                <div className="relative h-56 overflow-hidden">
                   <img 
                     src={service.image} 
                     alt={service.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-800 flex items-center gap-1 shadow-sm">
                      <service.icon size={14} /> {service.title}
                   </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm">{service.fullDescription.substring(0, 120)}...</p>
                  
                  <div className="space-y-3 mb-6">
                     {service.problemsSolved.slice(0, 2).map((prob, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-500 font-medium">
                           <AlertTriangle size={14} className="text-amber-500 shrink-0 mt-0.5" />
                           <span>Fixes: {prob}</span>
                        </div>
                     ))}
                  </div>

                  <Link to="/services" className="w-full inline-flex items-center justify-center px-4 py-3 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-brand-600 transition-colors">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Carousel */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
              <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">Our Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Recent Projects Gallery</h2>
           </div>
           
           <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[600px] group bg-slate-100">
              {GALLERY_IMAGES.map((slide, index) => (
                 <div 
                   key={index} 
                   className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === galleryIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                 >
                    <img src={slide.url} alt={slide.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
                       <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 transform translate-y-0 transition-transform duration-500">{slide.title}</h3>
                       <p className="text-slate-200 text-lg">{slide.description}</p>
                    </div>
                 </div>
              ))}
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevGallerySlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Previous slide"
              >
                 <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextGallerySlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                 aria-label="Next slide"
              >
                 <ChevronRight size={24} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                 {GALLERY_IMAGES.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setGalleryIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${idx === galleryIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Why Waterproofing Fails Section (Educational) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full filter blur-3xl opacity-10 translate-x-1/2 -translate-y-1/2"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                   <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Why Do 80% of Repairs Fail Within a Year?</h2>
                   <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                      Most contractors focus on "hiding" the leak with cheap paint or putty. This traps moisture inside, causing faster structural decay.
                   </p>
                   <div className="space-y-6">
                      <div className="flex gap-4">
                         <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center font-bold text-xl shrink-0">X</div>
                         <div>
                            <h4 className="font-bold text-white text-lg">The Wrong Way</h4>
                            <p className="text-slate-400 text-sm">Applying coating without removing algae or repairing cracks. Using diluted chemicals to save cost.</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center font-bold text-xl shrink-0"><CheckCircle size={24} /></div>
                         <div>
                            <h4 className="font-bold text-white text-lg">The AR Way</h4>
                            <p className="text-slate-400 text-sm">We open V-grooves in cracks, grind the surface, apply primer, and use fiber mesh reinforcement for permanent bonding.</p>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                   <h3 className="text-xl font-bold mb-6">Our Inspection Checklist</h3>
                   <ul className="space-y-4 text-sm text-slate-300">
                      {[
                         "Thermal Scanning to find moisture path",
                         "Checking slope levels of terrace",
                         "Sound test for hollow tiles",
                         "pH test of concrete surface",
                         "Measuring crack width for correct filler selection"
                      ].map((item, i) => (
                         <li key={i} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                            {item}
                         </li>
                      ))}
                   </ul>
                   <div className="mt-8 pt-6 border-t border-white/10">
                      <Link to="/contact" className="w-full block text-center bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition-colors">
                         Schedule a Technical Inspection
                      </Link>
                   </div>
                </div>
             </div>
          </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">Process</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">From Leak to Leak-Free in 5 Steps</h2>
            <div className="w-20 h-1.5 bg-brand-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
             <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-slate-100 z-0 mx-12"></div>
              {PROCESS_STEPS.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center group relative z-10">
                  <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-brand-500 group-hover:shadow-lg transition-all duration-300">
                    <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center text-brand-600">
                      <step.icon size={32} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-[200px]">{step.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                   <div className="flex text-yellow-400">
                     {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                   </div>
                   <span className="text-xs text-slate-400 font-medium">{t.date}</span>
                </div>
                <p className="text-slate-600 italic mb-6 text-sm leading-relaxed line-clamp-4">"{t.content}"</p>
                <div className="flex items-center gap-3 mt-auto">
                   <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 font-bold text-xs">
                      {t.name.charAt(0)}
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                      <p className="text-xs text-slate-500">{t.location}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Expert Answers</h2>
            <p className="text-slate-600 mt-2">Common questions about waterproofing process and costs.</p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-all hover:border-brand-300">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-gray-50 focus:outline-none"
                >
                  <span className="font-bold text-slate-800 text-lg">{faq.question}</span>
                  {openFaq === index ? <ChevronUp className="text-brand-600" /> : <ChevronDown className="text-gray-400" />}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-2 bg-gray-50/50 text-slate-600 leading-relaxed border-t border-gray-100">
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
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
         <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
         
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Building Needs Protection Today.</h2>
          <p className="text-brand-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
             Waiting only increases the damage and the cost. Get a professional opinion from Hyderabad's most trusted team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-brand-900 px-10 py-4 rounded-lg font-bold hover:bg-brand-50 transition-colors shadow-lg text-lg">
              Book Free Site Visit
            </Link>
            <a href={WHATSAPP_LINK} className="bg-green-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-green-700 transition-colors shadow-lg flex items-center justify-center gap-2 text-lg">
              <WhatsAppIcon size={24} /> Chat on WhatsApp
            </a>
          </div>
          <p className="mt-8 text-sm text-brand-300 font-medium">
             <ShieldCheck size={16} className="inline mr-1" /> 100% Free Inspection • No Obligation Quote
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;