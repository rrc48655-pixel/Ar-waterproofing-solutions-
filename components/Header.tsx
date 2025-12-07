import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Droplets } from 'lucide-react';
import { COMPANY_NAME, NAV_ITEMS, PHONE_NUMBER } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-600 p-2 rounded-lg group-hover:bg-brand-700 transition-colors">
              <Droplets className="text-white" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-800 leading-tight tracking-tight">
                AR Waterproofing
              </span>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                  location.pathname === item.path ? 'text-brand-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="hidden lg:flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-brand-600 transition-colors text-sm font-medium"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col p-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-base font-medium py-2 border-b border-gray-50 ${
                  location.pathname === item.path ? 'text-brand-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2 bg-brand-600 text-white px-4 py-3 rounded-md font-medium"
            >
              <Phone size={18} />
              <span>{PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;