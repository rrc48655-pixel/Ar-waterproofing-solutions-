import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, PHONE_NUMBER } from '../constants';

import logo from '../Waterproofing - 1 (1)1.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Check on mount to set correct state if page is already scrolled
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-white/95 backdrop-blur-md py-3 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group" aria-label="Home">
            <div className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-14'}`}>
              <img 
                src={logo} 
                alt="AR Waterproofing" 
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-sm font-semibold transition-colors relative group ${
                  location.pathname === item.path ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            <a 
              href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, '')}`}
              className="hidden lg:flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg hover:bg-brand-600 transition-all duration-300 text-sm font-bold shadow-sm hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${isOpen ? 'opacity-100 scale-y-100 max-h-[400px]' : 'opacity-0 scale-y-0 max-h-0 overflow-hidden'}`}>
          <div className="flex flex-col p-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-base font-semibold px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === item.path 
                    ? 'bg-brand-50 text-brand-600' 
                    : 'text-slate-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-gray-100">
              <a 
                href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, '')}`}
                className="flex items-center justify-center gap-2 bg-brand-600 text-white px-4 py-3 rounded-lg font-bold hover:bg-brand-700 transition-colors"
              >
                <Phone size={18} />
                <span>{PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
      </div>
    </header>
  );
};

export default Header;