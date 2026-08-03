"use client";

import { motion, Variants } from "framer-motion";
import { 
  Truck, Megaphone, Store, Route, Tent, PaintRoller, 
  Presentation, Gift, VenetianMask, Users, 
  PartyPopper, School, Mic, Landmark, 
  LayoutTemplate, MapPin, BarChart, Handshake, Globe
} from "lucide-react";

// --- Data ---
const services = [
  { title: "Van Activation", icon: Truck },
  { title: "IEC Activation Campaigns", icon: Megaphone },
  { title: "Mall Activation", icon: Store },
  { title: "Road Shows", icon: Route },
  { title: "Canopy Activations", icon: Tent },
  { title: "Wall Paintings", icon: PaintRoller },
  { title: "BTL Activations", icon: Presentation },
  { title: "Corporate Gifting", icon: Gift },
  { title: "Nukkad Natak", icon: VenetianMask },
  { title: "Corporate, RWA &\nRetail Engagements", icon: Users },
  { title: "Festival & Market\nActivations", icon: PartyPopper },
  { title: "School Activation\nPrograms", icon: School },
  { title: "Conference, Events &\nExhibition", icon: Mic },
  { title: "Government & NGO\nAwareness Campaigns", icon: Landmark },
  { title: "Stall Fabrication", icon: LayoutTemplate },
];

const stats = [
  { value: "Pan India", label: "Reach", icon: Globe },
  { value: "2,500+", label: "Towns & Cities Covered", icon: MapPin },
  { value: "150+", label: "Brands Served", icon: Handshake },
  { value: "300+", label: "Campaigns Executed", icon: BarChart },
];

function CampaignStats() {
  return (
    <div className="w-full relative mt-[20px] shrink-0">
      <div className="absolute -top-5 left-0 w-full h-10 bg-[#f9f4ed] rounded-b-[50%] z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full py-10 lg:py-14 relative z-0"
        style={{ background: "linear-gradient(100deg, #7d0710 0%, #da2f1d 50%, #da2f1d 100%)" }}
      >
        <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 lg:gap-5 relative group">
              {i !== 0 && (
                <div className="hidden lg:block absolute -left-4 top-1/2 -translate-y-1/2 w-[1px] h-[60%] bg-white/15" />
              )}
              
              <div className="w-[45px] h-[45px] lg:w-[55px] lg:h-[55px] rounded-full bg-[#fbf6ef] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                <stat.icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#da2f1d]" strokeWidth={1.5} />
              </div>
              
              <div className="flex flex-col">
                <span className={`text-white font-bold ${stat.value === "Pan India" ? "text-[22px] lg:text-[28px]" : "text-[28px] lg:text-[36px]"} leading-[1.1] tracking-tight`}>
                  {stat.value}
                </span>
                <span className="text-white/80 font-medium text-[12px] lg:text-[13px]">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// --- Main Section ---

export function CampaignsThatMoveIndia() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col pt-16 lg:pt-20 pb-0 min-h-screen bg-[#F9F4ED]">
      
      {/* --- Background Decorative Elements --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Faded dotted gradient pattern left */}
        <div 
          className="absolute top-[10%] left-[-15%] w-[40%] h-[60%] opacity-[0.06]" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #da2f1d 2px, transparent 2px)', 
            backgroundSize: '20px 20px', 
            maskImage: 'radial-gradient(ellipse at center, white 10%, transparent 60%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, white 10%, transparent 60%)' 
          }} 
        />
        
        {/* Faded dotted gradient pattern bottom-right */}
        <div 
          className="absolute bottom-[0%] right-[-10%] w-[50%] h-[70%] opacity-[0.06]" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #da2f1d 2px, transparent 2px)', 
            backgroundSize: '20px 20px', 
            maskImage: 'radial-gradient(ellipse at center, white 10%, transparent 60%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, white 10%, transparent 60%)' 
          }} 
        />
        
        {/* Extremely subtle oversized circular outlines and radial arcs */}
        <div className="absolute top-[15%] right-[-15%] w-[800px] h-[800px] rounded-full border border-[#da2f1d] opacity-[0.05]" />
        <div className="absolute top-[25%] right-[-5%] w-[600px] h-[600px] rounded-full border border-[#da2f1d] opacity-[0.04]" />
        
        {/* Almost invisible soft glow */}
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#da2f1d] blur-[140px] opacity-[0.03]" />
      </div>

      {/* --- Hero Heading Area --- */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-6 mb-16 lg:mb-24">
        
        {/* Section Label */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-[30px] h-[1px] bg-[#da2f1d]/50" />
          <span className="text-[#da2f1d] uppercase tracking-[0.35em] text-[13px] font-bold">
            WHAT WE DO
          </span>
          <div className="w-[30px] h-[1px] bg-[#da2f1d]/50" />
        </motion.div>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-black text-[clamp(48px,6vw,84px)] leading-[0.95] tracking-tight max-w-[900px] text-[#111]"
        >
          <span className="block">CAMPAIGNS THAT</span>
          <span className="block text-[#da2f1d] mt-2">MOVE INDIA.</span>
        </motion.h2>

        {/* Decorative accent under heading */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex items-center gap-3 mt-8 mb-8"
        >
          <div className="w-[20px] h-[1px] bg-[#da2f1d]/40" />
          <div className="w-[3px] h-[3px] rounded-full bg-[#da2f1d]" />
          <div className="w-[20px] h-[1px] bg-[#da2f1d]/40" />
        </motion.div>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[#666] text-[16px] lg:text-[18px] leading-[1.8] max-w-[650px] font-medium"
        >
          From busy metros to the most remote villages, we create powerful brand experiences through strategic activations and real connections.
        </motion.p>
      </div>

      {/* --- Cards Grid Area --- */}
      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-4 lg:px-12 pb-10 lg:pb-12 flex justify-center">
        
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[12px] sm:gap-[24px] lg:gap-x-[32px] lg:gap-y-[24px] w-full">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
              className="group relative flex flex-col items-center justify-center text-center w-full h-[150px] sm:h-[170px] rounded-[18px] bg-white border border-transparent shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:border-[#da2f1d]/20 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition-all duration-400 ease-out hover:-translate-y-[10px] mx-auto px-2 sm:px-4 py-4"
            >
              {/* Icon Area */}
              <div className="relative w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border border-[#da2f1d]/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                <service.icon className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] text-[#da2f1d]" strokeWidth={1.5} />
                {/* Small red dot on the right edge */}
                <div className="absolute top-1/2 -translate-y-1/2 -right-[2.5px] w-[4px] h-[4px] sm:w-[5px] sm:h-[5px] rounded-full bg-[#da2f1d]" />
              </div>

              {/* Title */}
              <h4 className="font-semibold text-[13px] sm:text-[15px] xl:text-[16px] text-[#222] leading-[1.3] whitespace-pre-line">
                {service.title}
              </h4>

              {/* Tiny red line below text */}
              <div className="w-[16px] sm:w-[20px] h-[2px] bg-[#da2f1d] mt-2 sm:mt-3 opacity-80" />
            </motion.div>
          ))}
        </div>

      </div>
      
      <CampaignStats />

    </section>
  );
}

