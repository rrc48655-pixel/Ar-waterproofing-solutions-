import React, { useState, useEffect, useRef } from 'react';
import { Phone, MapPin, Send, Clock, AlertTriangle, Shield, CheckCircle, Info } from 'lucide-react';
import { ADDRESS, PHONE_NUMBER, WORKING_HOURS, WHATSAPP_LINK, SERVICE_AREAS } from '../constants';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import SEO from '../components/SEO';

// Add global type definition for Leaflet 'L'
declare global {
  interface Window {
    L: any;
  }
}

interface FormErrors {
  name?: string;
  phone?: string;
  location?: string;
  service?: string;
}

interface LocationCoords {
  name: string;
  lat: number;
  lng: number;
  radius: number;
  description: string;
}

const LOCATIONS: LocationCoords[] = [
  { name: 'Hyderabad (HQ)', lat: 17.3850, lng: 78.4867, radius: 25000, description: 'Central Hub - 24/7 Emergency Teams Available' },
  { name: 'Secunderabad', lat: 17.4399, lng: 78.4983, radius: 10000, description: 'Residential & Commercial Specialists' },
  { name: 'Warangal', lat: 17.9689, lng: 79.5941, radius: 15000, description: 'Regional Service Center for North Telangana' },
  { name: 'Visakhapatnam', lat: 17.6868, lng: 83.2185, radius: 15000, description: 'Coastal Waterproofing & Marine Concrete Repair' },
  { name: 'Vijayawada', lat: 16.5062, lng: 80.6480, radius: 12000, description: 'Expert Sump & Tank Waterproofing Hub' },
  { name: 'Gachibowli', lat: 17.4401, lng: 78.3489, radius: 5000, description: 'IT Corridor Commercial Solutions' }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', location: '', service: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [activeArea, setActiveArea] = useState<LocationCoords | null>(null);
  
  const mapRef = useRef<any>(null);
  const mapInstance = useRef<any>(null);

  // Initialize Map
  useEffect(() => {
    // Check if Leaflet L is available on window
    if (!window.L) return;

    if (!mapInstance.current) {
      // Fix: Access L from window to satisfy TypeScript
      mapInstance.current = window.L.map('service-map').setView([17.3850, 78.4867], 7);
      
      window.L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      }).addTo(mapInstance.current);

      LOCATIONS.forEach(loc => {
        // Add Marker
        const marker = window.L.marker([loc.lat, loc.lng]).addTo(mapInstance.current);
        
        // Add Service Radius Circle
        window.L.circle([loc.lat, loc.lng], {
          color: '#C5A059',
          fillColor: '#C5A059',
          fillOpacity: 0.1,
          radius: loc.radius
        }).addTo(mapInstance.current);

        marker.on('click', () => {
          mapInstance.current.setView([loc.lat, loc.lng], 11);
          setActiveArea(loc);
        });
      });
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  const validateForm = (): boolean => {
    let tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Full Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      tempErrors.name = "Name must be at least 3 characters";
      isValid = false;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/\D/g, '');
    
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone Number is required";
      isValid = false;
    } else if (!phoneRegex.test(cleanPhone) || cleanPhone.length !== 10) {
      tempErrors.phone = "Please enter a valid 10-digit mobile number";
      isValid = false;
    }

    if (!formData.location.trim()) {
      tempErrors.location = "Location/Area is required";
      isValid = false;
    }

    if (!formData.service) {
      tempErrors.service = "Please select a problem type";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const getWhatsAppUrl = () => {
    const message = `*New Inspection Request*
      
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Location:* ${formData.location}
*Issue Type:* ${formData.service}
*Message:* ${formData.message || 'N/A'}`;

    const encodedMessage = encodeURIComponent(message);
    const cleanPhoneNumber = PHONE_NUMBER.replace(/[^\d]/g, '');
    return `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  const resetMap = () => {
    if (mapInstance.current) {
      mapInstance.current.setView([17.3850, 78.4867], 7);
      setActiveArea(null);
    }
  };

  return (
    <div className="pt-20 font-sans">
      <SEO 
        title="Contact AR Waterproofing | Best Services in Hyderabad"
        description="Get a free quote for waterproofing services in Hyderabad. Contact AR Waterproofing Solutions for expert leak detection and permanent structural repairs."
        keywords="contact waterproofing Hyderabad, free inspection Hyderabad, AR Waterproofing contact"
      />
      <div className="bg-slate-900 py-24 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Get a Free Inspection</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4 text-lg">Call us or fill the form. Our engineers will visit your site within 24 hours.</p>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-red-50 border border-red-100 rounded-xl p-6 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-full text-red-600">
                   <AlertTriangle size={24} />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-red-900">Urgent Active Leak?</h3>
                   <p className="text-red-700 text-sm">Don't wait. Call our emergency line for immediate assistance.</p>
                </div>
             </div>
             <a href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, '')}`} className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-colors whitespace-nowrap">
                Call {PHONE_NUMBER}
             </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                 Our team is available Monday to Saturday to answer your technical queries and schedule site visits across Hyderabad & Telangana.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-5 group">
                  <div className="bg-brand-50 p-4 rounded-2xl text-brand-600 flex-shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">Head Office</h3>
                    <p className="text-slate-600 max-w-xs text-sm leading-relaxed">{ADDRESS}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="bg-brand-50 p-4 rounded-2xl text-brand-600 flex-shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">Phone Number</h3>
                    <p className="text-slate-600 text-sm mb-1">Direct Line (No Bots)</p>
                    <a href={`tel:${PHONE_NUMBER}`} className="text-xl font-bold text-brand-600 hover:text-brand-700 transition-colors">{PHONE_NUMBER}</a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="bg-brand-50 p-4 rounded-2xl text-brand-600 flex-shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">Working Hours</h3>
                    <p className="text-slate-600 text-sm">{WORKING_HOURS}</p>
                  </div>
                </div>
              </div>

               <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
                  <div className="bg-white p-2 rounded-lg shadow-sm shrink-0">
                     <img 
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${WHATSAPP_LINK}`} 
                        alt="WhatsApp QR Code" 
                        className="w-32 h-32"
                     />
                  </div>
                  <div className="text-center sm:text-left">
                     <h4 className="font-bold text-slate-900 mb-2 flex items-center justify-center sm:justify-start gap-2">
                        <WhatsAppIcon size={20} className="text-green-500" /> Scan to Chat
                     </h4>
                     <p className="text-slate-500 text-sm mb-4">Instant WhatsApp connection. Send us photos of your leakage for a quick estimate.</p>
                     <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-brand-600 font-bold text-sm hover:underline">Open in WhatsApp Web &rarr;</a>
                  </div>
               </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl relative overflow-hidden flex flex-col h-full">
               <div className="absolute top-0 left-0 w-full h-2 bg-brand-600"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Appointment</h3>
              <p className="text-slate-500 mb-8 text-sm">Please fill in the details below.</p>

              {submitted ? (
                <div className="bg-green-50 text-green-700 p-8 rounded-2xl text-center border border-green-200 flex-grow flex flex-col items-center justify-center animate-in fade-in duration-500">
                   <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                      <CheckCircle size={40} />
                   </div>
                  <h4 className="font-bold text-2xl mb-4 text-green-900">Successfully Submitted!</h4>
                  <p className="text-green-800 mb-8 max-w-xs mx-auto leading-relaxed">
                    Your request is ready. Click below to send the details to our team on WhatsApp immediately.
                  </p>
                  <a 
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center justify-center gap-3 transition-transform hover:scale-105 w-full"
                  >
                    <WhatsAppIcon size={24} /> Send via WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                     <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                        <input 
                           type="text" 
                           className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all bg-gray-50 focus:bg-white ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-brand-500 focus:border-brand-500'}`}
                           placeholder="John Doe"
                           value={formData.name}
                           onChange={(e) => {
                             setFormData({...formData, name: e.target.value});
                             if (errors.name) setErrors({...errors, name: undefined});
                           }}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
                     </div>
                     <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                        <input 
                           type="tel" 
                           className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all bg-gray-50 focus:bg-white ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-brand-500 focus:border-brand-500'}`}
                           placeholder="98765 43210"
                           value={formData.phone}
                           onChange={(e) => {
                             setFormData({...formData, phone: e.target.value});
                             if (errors.phone) setErrors({...errors, phone: undefined});
                           }}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
                     </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Area / Location <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all bg-gray-50 focus:bg-white ${errors.location ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-brand-500 focus:border-brand-500'}`}
                      placeholder="e.g. Hitech City, Gachibowli"
                      value={formData.location}
                      onChange={(e) => {
                        setFormData({...formData, location: e.target.value});
                        if (errors.location) setErrors({...errors, location: undefined});
                      }}
                    />
                    {errors.location && <p className="text-red-500 text-xs mt-1 font-medium">{errors.location}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Problem Type <span className="text-red-500">*</span></label>
                    <select 
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all bg-gray-50 focus:bg-white ${errors.service ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-brand-500 focus:border-brand-500'}`}
                      value={formData.service}
                      onChange={(e) => {
                        setFormData({...formData, service: e.target.value});
                        if (errors.service) setErrors({...errors, service: undefined});
                      }}
                    >
                      <option value="">Select issue...</option>
                      <option value="Terrace">Terrace Leakage</option>
                      <option value="Bathroom">Bathroom Seepage</option>
                      <option value="Wall">Wall Dampness/Cracks</option>
                      <option value="Basement">Basement Water</option>
                      <option value="Tank">Water Tank</option>
                      <option value="Industrial">Industrial Project</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1 font-medium">{errors.service}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea 
                      rows={3} 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="Describe the issue briefly..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-brand-600 text-white font-bold py-4 rounded-lg hover:bg-brand-700 transition-colors flex items-center justify-center gap-2 shadow-lg mt-2 text-lg"
                  >
                    Submit Request <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Interactive Map Section */}
          <div className="mt-16 bg-gray-50 rounded-[2.5rem] p-4 md:p-12 border border-gray-100 shadow-inner">
             <div className="text-center mb-12">
                <span className="text-accent-500 font-bold tracking-widest uppercase text-xs">Coverage</span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-2">Our Primary Service Hubs</h2>
                <p className="text-slate-500 mt-4 max-w-xl mx-auto">Click on a marker to see service details for that specific region.</p>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 relative">
                   <div id="service-map" className="shadow-2xl border-4 border-white"></div>
                   
                   {/* Floating Reset Control */}
                   <button 
                      onClick={resetMap}
                      className="absolute top-4 right-4 z-[1000] bg-white text-slate-900 px-4 py-2 rounded-lg font-bold text-xs shadow-xl border border-gray-200 hover:bg-gray-50 transition-colors"
                   >
                      Reset View
                   </button>
                </div>

                <div className="space-y-6">
                   {activeArea ? (
                      <div className="bg-white p-8 rounded-3xl shadow-xl border border-accent-500/20 animate-in fade-in slide-in-from-right-4 duration-300">
                         <div className="w-12 h-12 bg-brand-600 text-white rounded-2xl flex items-center justify-center mb-6">
                            <MapPin size={24} />
                         </div>
                         <h3 className="text-2xl font-bold text-brand-900 mb-2">{activeArea.name}</h3>
                         <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-6">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            Operational Hub
                         </div>
                         <p className="text-slate-600 mb-8 leading-relaxed italic border-l-4 border-accent-500 pl-4">
                            "{activeArea.description}"
                         </p>
                         <div className="space-y-4">
                            <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                               <Clock size={16} className="text-accent-500" />
                               <span>24h Turnaround Time</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                               <Shield size={16} className="text-accent-500" />
                               <span>Local Service Warranty</span>
                            </div>
                         </div>
                         <button 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="w-full mt-10 bg-brand-900 text-white py-4 rounded-xl font-bold hover:bg-accent-500 transition-colors shadow-lg"
                         >
                            Book in this Region
                         </button>
                      </div>
                   ) : (
                      <div className="bg-brand-900 text-white p-8 rounded-3xl shadow-xl border border-white/5 flex flex-col items-center text-center justify-center h-full min-h-[400px]">
                         <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                            <Info size={40} className="text-accent-500" />
                         </div>
                         <h3 className="text-xl font-bold mb-4">Select an Area</h3>
                         <p className="text-brand-100 text-sm leading-relaxed mb-6">
                            We currently operate in {SERVICE_AREAS.length} major districts across Telangana and Andhra Pradesh. Click a map marker to view localized response details.
                         </p>
                         <div className="flex flex-wrap gap-2 justify-center opacity-60">
                            {SERVICE_AREAS.slice(0, 4).map(s => (
                               <span key={s} className="bg-white/10 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest">{s}</span>
                            ))}
                         </div>
                      </div>
                   )}
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;