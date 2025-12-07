import React from 'react';
import { Phone } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_NUMBER } from '../constants';
import { WhatsAppIcon } from './WhatsAppIcon';

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 z-50 flex flex-row gap-3 justify-center md:justify-end items-center pointer-events-none">
      {/* Call Button */}
      <a
        href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, '')}`}
        className="pointer-events-auto flex-1 md:flex-none min-w-[140px] bg-brand-600 hover:bg-brand-700 text-white px-6 py-4 md:py-3 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2 font-bold text-lg md:text-base"
        aria-label="Call Us"
        title="Call Now"
      >
        <Phone size={24} className="animate-pulse" />
        <span>Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex-1 md:flex-none min-w-[140px] bg-green-500 hover:bg-green-600 text-white px-6 py-4 md:py-3 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2 font-bold text-lg md:text-base"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon size={24} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;