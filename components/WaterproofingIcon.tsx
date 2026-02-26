import React from 'react';
import { Shield, Droplets } from 'lucide-react';

interface WaterproofingIconProps {
  size?: number;
  className?: string;
}

export const WaterproofingIcon: React.FC<WaterproofingIconProps> = ({ size = 24, className = "" }) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center ${className}`} 
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Outer Shield representing structural protection */}
      <Shield 
        size={size} 
        strokeWidth={1.5} 
        className="opacity-100"
      />
      
      {/* Inner Droplets representing water management */}
      <div className="absolute inset-0 flex items-center justify-center pt-1">
        <Droplets 
          size={size * 0.45} 
          strokeWidth={2.5}
          className="fill-current opacity-90"
          style={{ transform: 'translateY(10%)' }}
        />
      </div>
    </div>
  );
};