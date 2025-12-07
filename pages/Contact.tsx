import React, { useState } from 'react';
import { Phone, MapPin, Send, Clock, AlertTriangle, Shield, CheckCircle } from 'lucide-react';
import { ADDRESS, PHONE_NUMBER, WORKING_HOURS, WHATSAPP_LINK } from '../constants';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

interface FormErrors {
  name?: string;
  phone?: string;
  location?: string;
  service?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', location: '', service: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    let tempErrors: FormErrors = {};
    let isValid = true;

    // Name Validation
    if (!formData.name.trim()) {
      tempErrors.name = "Full Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      tempErrors.name = "Name must be at least 3 characters";
      isValid = false;
    }

    // Phone Validation (Indian Format)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/\D/g, '');
    
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone Number is required";
      isValid = false;
    } else if (!phoneRegex.test(cleanPhone) || cleanPhone.length !== 10) {
      tempErrors.phone = "Please enter a valid 10-digit mobile number";
      isValid = false;
    }

    // Location Validation
    if (!formData.location.trim()) {
      tempErrors.location = "Location/Area is required";
      isValid = false;
    }

    // Service Validation
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
      // The data is now ready to be sent via the WhatsApp button in the success view
    }
  };

  return (
    <div className="pt-20 font-sans">
      <div className="bg-slate-900 py-24 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Get a Free Inspection</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4 text-lg">Call us or fill the form. Our engineers will visit your site within 24 hours.</p>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Emergency Banner */}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info Side */}
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

               {/* QR Code Section */}
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
                     <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-brand-600 font-bold text-sm hover:underline">Open in WhatsApp Web &rarr;</a>
                  </div>
               </div>
            </div>

            {/* Form Side */}
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
                  <p className="text-xs text-green-600 mt-4">
                    *This ensures we get your exact location and details instantly.
                  </p>
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
                  <p className="text-xs text-center text-slate-400 mt-4 flex items-center justify-center gap-1">
                     <Shield size={12} /> Your data is secure. We never spam.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;