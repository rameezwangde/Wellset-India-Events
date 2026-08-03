"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const text = `*New Enquiry from Website*%0A%0A*Name:* ${formData.firstName} ${formData.lastName}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.interest}%0A*Message:* ${formData.message}`;
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/918447750546?text=${text}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative w-full pt-8 pb-12 lg:pt-12 lg:pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-burgundy/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-burgundy/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
            <div className="flex flex-col gap-6 items-center">
              <span className="text-burgundy font-bold uppercase tracking-[0.2em] text-[14px]">Get In Touch</span>
              <h1 className="font-sans font-bold text-[clamp(40px,5vw,72px)] leading-[1.05] tracking-tight text-charcoal">
                Let's Build <span className="text-burgundy">Something Great</span> Together.
              </h1>
              <p className="text-muted-text text-[18px] lg:text-[20px] leading-[1.7]">
                Whether you're planning a massive Pan-India campaign or a highly targeted local activation, our team is ready to bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area: Form + Info + Map */}
      <section className="relative w-full pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Contact Info & Map (Left Column) */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              
              {/* Info Cards */}
              <div className="bg-burgundy rounded-3xl p-8 lg:p-10 shadow-[0_20px_50px_rgba(218,47,29,0.15)] relative overflow-hidden flex flex-col gap-8">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

                <h3 className="text-[28px] font-bold text-white relative z-10">Contact Details</h3>
                
                <div className="flex flex-col gap-8 relative z-10">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-cream" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-white text-[18px]">Office Address</span>
                      <p className="text-cream/80 text-[15px] leading-relaxed mt-1">
                        3rd Floor, C-6/72, Pocket 3<br />
                        Sector 5, Rohini<br />
                        New Delhi, Delhi, 110085
                      </p>
                    </div>
                  </div>


                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-cream" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-white text-[18px]">Call Us</span>
                      <a href="tel:+919310996542" className="text-cream/80 hover:text-white transition-colors text-[16px] mt-1">+91 9310996542</a>
                      <a href="https://wa.me/918447750546" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cream/80 hover:text-[#25D366] transition-colors text-[16px] mt-1 font-medium group">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                        </svg>
                        WhatsApp: +91 8447750546
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-cream" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-white text-[18px]">Email Us</span>
                      <a href="mailto:wellset017@gmail.com" className="text-cream/80 hover:text-white transition-colors text-[16px] mt-1">wellset017@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="flex flex-col gap-3 mt-4">
                <span className="bg-white px-4 py-1.5 rounded-full text-[13px] font-bold text-burgundy shadow-sm border border-burgundy/10 w-fit">Office Address Location</span>
                <div className="bg-white rounded-3xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-burgundy/10 overflow-hidden w-full h-[350px] relative">
                  <iframe 
                    src="https://maps.google.com/maps?q=C-6/72,+Pocket+3,+Sector+5,+Rohini,+New+Delhi,+Delhi,+110085&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, borderRadius: '16px' }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                  ></iframe>
                </div>
              </div>

            </div>

            {/* Form (Right Column) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.08)] border-t-[6px] border-burgundy flex flex-col justify-start relative overflow-hidden">
                
                {/* Form Background Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-burgundy/[0.03] to-transparent rounded-bl-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-burgundy/[0.02] rounded-tr-full pointer-events-none" />
                
                <div className="mb-10 relative z-10 border-b border-border pb-8">
                  <h3 className="text-[32px] font-bold text-charcoal mb-2">Send an Enquiry</h3>
                  <p className="text-muted-text text-[16px]">Fill out the form below and our team will get back to you within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="firstName" className="text-[14px] font-bold text-charcoal ml-1">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        placeholder="John"
                        className="w-full px-5 py-4 rounded-xl border border-border bg-warm-white focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-colors text-charcoal placeholder:text-muted-text/50"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="lastName" className="text-[14px] font-bold text-charcoal ml-1">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName"
                        required 
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        placeholder="Doe"
                        className="w-full px-5 py-4 rounded-xl border border-border bg-warm-white focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-colors text-charcoal placeholder:text-muted-text/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[14px] font-bold text-charcoal ml-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@company.com"
                        className="w-full px-5 py-4 rounded-xl border border-border bg-warm-white focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-colors text-charcoal placeholder:text-muted-text/50"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-[14px] font-bold text-charcoal ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 98765 43210"
                        className="w-full px-5 py-4 rounded-xl border border-border bg-warm-white focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-colors text-charcoal placeholder:text-muted-text/50"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="interest" className="text-[14px] font-bold text-charcoal ml-1">Service of Interest</label>
                    <select 
                      id="interest"
                      required
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      className="w-full px-5 py-4 rounded-xl border border-border bg-warm-white focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-colors text-charcoal"
                    >
                      <option value="">Select a service...</option>
                      <option value="BTL Activations">BTL Activations</option>
                      <option value="Canopy Activations">Canopy Activations</option>
                      <option value="Nukkad Natak / Street Plays">Nukkad Natak / Street Plays</option>
                      <option value="NGO / Government Campaigns">NGO / Government Campaigns</option>
                      <option value="Rural Marketing">Rural Marketing</option>
                      <option value="Conferences & Events">Conferences & Events</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[14px] font-bold text-charcoal ml-1">Your Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your campaign goals..."
                      className="w-full px-5 py-4 rounded-xl border border-border bg-warm-white focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-colors text-charcoal placeholder:text-muted-text/50 resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="mt-4 flex items-center justify-center gap-3 bg-burgundy hover:bg-burgundy-dark text-white rounded-xl px-8 py-5 font-bold text-[16px] transition-all duration-300 shadow-[0_15px_30px_rgba(218,47,29,0.3)] hover:shadow-[0_20px_40px_rgba(218,47,29,0.4)] hover:-translate-y-1"
                  >
                    Send to WhatsApp
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
