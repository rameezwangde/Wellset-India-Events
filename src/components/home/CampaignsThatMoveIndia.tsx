"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles, MapPin, BarChart, Handshake, Globe } from "lucide-react";

// --- Data ---
const servicesRow1 = [
  "Van Activation",
  "IEC Activation Campaigns",
  "Mall Activation",
  "Road Shows",
  "Canopy Activations",
  "Wall Paintings",
  "BTL Activations",
  "Corporate Gifting",
];

const servicesRow2 = [
  "Nukkad Natak",
  "Corporate, RWA & Retail Engagements",
  "Festival & Market Activations",
  "School Activation Programs",
  "Conference, Events & Exhibition",
  "Government & NGO Awareness Campaigns",
  "Stall Fabrication"
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
      <div className="absolute -top-5 left-0 w-full h-10 bg-cream rounded-b-[50%] z-10" />
      
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
    <section 
      className="relative w-full overflow-hidden flex flex-col pt-12 lg:pt-20 pb-0 min-h-screen lg:min-h-0 lg:h-auto bg-cream"
    >
      {/* Main Header */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-4 lg:px-[clamp(20px,4vw,80px)] mb-12 lg:mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-center gap-4 mb-[18px]"
        >
          <div className="h-[1px] w-[30px] bg-[#da2f1d]" />
          <span className="text-[#da2f1d] font-bold text-[12px] uppercase tracking-[0.2em]">WHAT WE DO</span>
          <div className="h-[1px] w-[30px] bg-[#da2f1d] relative flex justify-end items-center">
            <Sparkles className="w-3 h-3 text-[#da2f1d] absolute -right-3" />
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }} whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-sans font-bold text-[clamp(44px,4.8vw,76px)] [@media(min-width:1600px)]:text-[clamp(58px,5.1vw,88px)] leading-[0.88] tracking-[-0.045em] uppercase flex flex-col items-center"
        >
          <span className="text-[#171717]">CAMPAIGNS THAT</span>
          <span className="text-[#da2f1d] mt-1">MOVE INDIA.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-[#4a4a4a] text-[16px] lg:text-[18px] leading-[1.6] max-w-[700px] mt-[22px]"
        >
          From busy metros to the most remote villages, we create powerful brand experiences through strategic activations and real connections.
        </motion.p>
      </div>

      {/* Services Grid Area */}
      <div className="relative z-20 mx-auto w-full max-w-[1400px] px-6 lg:px-12 pb-16 lg:pb-24">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
          {[...servicesRow1, ...servicesRow2].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              className="group relative flex items-center justify-center text-center p-6 min-h-[140px] rounded-[20px] bg-white border border-[#da2f1d]/15 shadow-sm hover:shadow-[0_15px_30px_-5px_rgba(218,47,29,0.2)] hover:-translate-y-1 hover:bg-[#da2f1d] transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <span className="font-bold text-[16px] leading-[1.4] text-[#181818] group-hover:text-white transition-colors duration-300 relative z-10">
                {service}
              </span>
              
              {/* Subtle background glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/20 to-transparent pointer-events-none transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
      
      <CampaignStats />

    </section>
  );
}

