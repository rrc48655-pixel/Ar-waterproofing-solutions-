import React from 'react';
import { Shield, Users, Clock, Target, Award, HardHat, HeartHandshake, Check, Wrench, Microscope, Briefcase } from 'lucide-react';
import { COMPANY_NAME, MAINTENANCE_TIPS, IMAGES } from '../constants';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="pt-20 font-sans">
      <SEO 
        title="About AR Waterproofing Solutions | Hyderabad's Trusted Experts"
        description="Leading waterproofing specialists in Hyderabad with 12+ years of experience. We use advanced chemical technology to provide permanent, guaranteed leak-proof solutions for residential and commercial properties."
        keywords="about AR Waterproofing, waterproofing experts Hyderabad, structural protection Hyderabad, professional waterproofing contractors, AR Waterproofing company profile"
      />
      {/* Header */}
      <div className="bg-slate-900 py-24 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">About {COMPANY_NAME}</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4 text-lg">Your partners in structural protection and restoration since 2013.</p>
      </div>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">To Make Every Structure Leak-Free</h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                At {COMPANY_NAME}, we believe that waterproofing is not just about applying chemicals—it's about engineering a permanent barrier against nature.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                 We realized early on that 90% of waterproofing failures happen due to poor surface preparation and incorrect material selection. That's why we adopted a <strong>"Root Cause Analysis"</strong> approach. We don't just patch cracks; we use <strong>digital moisture meters</strong> to understand <em>why</em> the leak is happening.
              </p>
              
              <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-8 mt-8">
                <div>
                   <h3 className="text-3xl font-extrabold text-brand-600">500+</h3>
                   <p className="text-sm text-slate-500 font-medium">Projects Done</p>
                </div>
                <div>
                   <h3 className="text-3xl font-extrabold text-brand-600">12+</h3>
                   <p className="text-sm text-slate-500 font-medium">Years Active</p>
                </div>
                <div>
                   <h3 className="text-3xl font-extrabold text-brand-600">100%</h3>
                   <p className="text-sm text-slate-500 font-medium">Success Rate</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gray-100 rounded-3xl transform -rotate-2"></div>
              <img 
                src={IMAGES.about.mission} 
                alt="Engineers working" 
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute bottom-8 right-8 bg-white p-6 rounded-lg shadow-xl max-w-xs hidden lg:block border-l-4 border-brand-500">
                 <p className="text-slate-800 font-bold italic">"Quality is never an accident. It is always the result of intelligent effort."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech & Tools */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Advanced Technology</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">We use modern diagnostic tools to ensure precision.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <Microscope className="text-brand-600 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Concrete Analysis</h3>
                <p className="text-slate-600 text-sm">pH testing and acoustic sounding to assess the structural integrity of the concrete slab.</p>
             </div>
             <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <Wrench className="text-brand-600 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Moisture Meters</h3>
                <p className="text-slate-600 text-sm">Digital meters to measure the exact percentage of water saturation in concrete slabs.</p>
             </div>
             <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <Briefcase className="text-brand-600 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Injection Pumps</h3>
                <p className="text-slate-600 text-sm">High-pressure industrial pumps to inject PU grout deep into micro-cracks.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Values / Why Trust Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Why Clients Trust Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Genuine Materials", desc: "We use factory-sealed products from authorized brands only. No adulteration." },
              { icon: Users, title: "In-House Team", desc: "Our applicators are on our payroll, trained, and insured. We don't outsource critical tasks." },
              { icon: Target, title: "Technical Diagnosis", desc: "We use moisture meters and expert inspection to detect hidden leaks accurately." },
              { icon: Clock, title: "On-Time Completion", desc: "We stick to the schedule provided in our proposal. Strict penalties for delays." },
              { icon: Award, title: "Certified Applicators", desc: "Authorized by Dr. Fixit, Fosroc, and Sika for specialized coating applications." },
              { icon: HeartHandshake, title: "Transparent Pricing", desc: "Detailed quotations with no hidden costs. You pay for what you approve." },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white text-brand-600 rounded-lg flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                   <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-24 bg-brand-900 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                   <h2 className="text-3xl font-bold mb-6">Expert Maintenance Tips</h2>
                   <p className="text-brand-100 mb-8">Waterproofing is an investment. Here is how you can protect it and extend its life.</p>
                   <ul className="space-y-4">
                      {MAINTENANCE_TIPS.map((tip, i) => (
                         <li key={i} className="flex items-start gap-4">
                            <CheckCircle size={20} className="text-green-400 shrink-0 mt-1" />
                            <span className="text-slate-200">{tip}</span>
                         </li>
                      ))}
                   </ul>
                </div>
                <div className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-sm">
                   <h3 className="text-xl font-bold mb-4">Need a Health Check?</h3>
                   <p className="text-sm text-slate-300 mb-6">
                      If you notice any of these signs, call us immediately:
                      <br/>• Peeling paint
                      <br/>• Musty smell
                      <br/>• Hollow sound in tiles
                   </p>
                   <Link to="/contact" className="w-full block text-center bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition-colors">
                      Book a Health Check
                   </Link>
                </div>
             </div>
         </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
               <div className="md:w-1/2">
                  <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wide mb-6 border border-yellow-200">
                     <HardHat size={16} /> Safety First Policy
                  </div>
                  <h2 className="text-3xl font-bold mb-6 text-slate-900">Zero Accidents, Zero Compromise</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                     Waterproofing often involves working at heights or with potent chemicals. We strictly adhere to industrial safety standards to protect our workers and your property.
                  </p>
                  <ul className="space-y-4 text-slate-700">
                     <li className="flex items-center gap-3">
                        <Check className="text-green-500" /> All workers equipped with PPE (Helmets, Harnesses).
                     </li>
                     <li className="flex items-center gap-3">
                        <Check className="text-green-500" /> Safety nets used for high-rise exterior work.
                     </li>
                     <li className="flex items-center gap-3">
                        <Check className="text-green-500" /> Low-VOC eco-friendly chemicals for interiors.
                     </li>
                  </ul>
               </div>
               <div className="md:w-1/2">
                  <img src={IMAGES.about.safety} alt="Safety First" className="rounded-2xl shadow-lg" />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

// Helper component
const CheckCircle = ({size, className}: {size: number, className: string}) => (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
)

export default About;