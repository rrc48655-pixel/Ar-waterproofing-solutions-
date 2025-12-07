import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { ADDRESS, COMPANY_NAME, EMAIL_ADDRESS, NAV_ITEMS, PHONE_NUMBER, SOCIAL_LINKS, SERVICE_AREAS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 tracking-wide">{COMPANY_NAME}</h3>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              India's trusted waterproofing experts. We provide guaranteed solutions for residential, commercial, and industrial properties using advanced chemical technology.
            </p>
            <div className="flex gap-4">
              {/* Facebook Icon */}
              <a 
                href={SOCIAL_LINKS.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg border border-transparent hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden" 
                aria-label="Visit our Facebook Page"
                title="Facebook"
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <Facebook size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              
              {/* Instagram Icon */}
              <a 
                href={SOCIAL_LINKS.instagram}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#fdf497] via-[#f09433] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white shadow-lg border border-transparent hover:shadow-pink-500/30 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden" 
                aria-label="Visit our Instagram Profile"
                title="Instagram"
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <Instagram size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>

              {/* YouTube Icon */}
              <a 
                href={SOCIAL_LINKS.youtube} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF0000] text-white shadow-lg border border-transparent hover:shadow-red-500/30 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden" 
                aria-label="Visit our YouTube Channel"
                title="YouTube"
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <Youtube size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-brand-500 transition-colors text-sm flex items-center gap-2">
                    <ArrowRight size={14} className="text-slate-600" /> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">Terrace Waterproofing</Link></li>
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">Bathroom Leakage Repair</Link></li>
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">Wall Crack Filling</Link></li>
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">Basement Treatments</Link></li>
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">Industrial Flooring</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 text-brand-500 mt-1" size={18} />
                <span className="text-slate-400">{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="flex-shrink-0 text-brand-500" size={18} />
                <a href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, '')}`} className="hover:text-white transition-colors font-medium">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="flex-shrink-0 text-brand-500" size={18} />
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white transition-colors">{EMAIL_ADDRESS}</a>
              </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-slate-800">
               <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Service Areas</h4>
               <p className="text-xs text-slate-600 leading-relaxed">
                  {SERVICE_AREAS.join(", ")}
               </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex gap-6">
             <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;