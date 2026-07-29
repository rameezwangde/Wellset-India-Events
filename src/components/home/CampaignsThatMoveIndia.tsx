"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { 
  Users, ShoppingBag, GraduationCap, Truck, Building2, Gift, Landmark, 
  Megaphone, ArrowRight, Sparkles, MapPin, BarChart, Handshake
} from "lucide-react";

// --- Data ---
const campaigns = [
  {
    id: 1,
    title: "Rural Marketing",
    description: ["Deep reach.", "Real conversations."],
    image: null,
    imageAlt: "Wellset rural marketing activation",
    icon: Users,
    rotation: -2,
    translateY: 14,
  },
  {
    id: 2,
    title: "Mall Activations",
    description: ["High footfall.", "High impact."],
    image: null,
    imageAlt: "Wellset mall activation",
    icon: ShoppingBag,
    rotation: 1,
    translateY: 2,
  },
  {
    id: 3,
    title: "School Contact Programs",
    description: ["Shaping young minds.", "Building connections."],
    image: null,
    imageAlt: "Wellset school contact program",
    icon: GraduationCap,
    rotation: -1,
    translateY: 8,
  },
  {
    id: 4,
    title: "Van Activations",
    description: ["High-impact brand activations", "on wheels that travel far and wide."],
    image: null,
    imageAlt: "Wellset van activation",
    icon: Truck,
    rotation: 0,
    translateY: -10,
    isFeatured: true,
  },
  {
    id: 5,
    title: "RWA Engagement",
    description: ["Stronger communities.", "Stronger brands."],
    image: null,
    imageAlt: "Wellset RWA engagement",
    icon: Building2,
    rotation: 1,
    translateY: -4,
  },
  {
    id: 6,
    title: "Product Sampling",
    description: ["Trial today.", "Trust forever."],
    image: null,
    imageAlt: "Wellset product sampling",
    icon: Gift,
    rotation: -1,
    translateY: 8,
  },
  {
    id: 7,
    title: "Government IEC Campaigns",
    description: ["Spreading awareness.", "Creating change."],
    image: null,
    imageAlt: "Wellset government IEC campaign",
    icon: Landmark,
    rotation: 1,
    translateY: 2,
  },
  {
    id: 8,
    title: "Brand Promotions",
    description: ["Amplify visibility.", "Build loyalty."],
    image: null,
    imageAlt: "Wellset brand promotions",
    icon: Megaphone,
    rotation: -2,
    translateY: 12,
  },
];

const stats = [
  { value: "20+", label: "Years of Experience", icon: Users },
  { value: "500+", label: "Cities & Towns Covered", icon: MapPin },
  { value: "1000+", label: "Successful Campaigns", icon: BarChart },
  { value: "300+", label: "Happy Clients", icon: Handshake },
];


// --- Subcomponents ---

function ServiceImagePlaceholder({ title }: { title: string }) {
  return (
    <div 
      className="w-full h-full relative flex items-end justify-start p-3"
      style={{
        background: `
          linear-gradient(145deg, rgba(255,255,255,0.4), rgba(158,27,27,0.10)),
          repeating-linear-gradient(-45deg, rgba(158,27,27,0.025) 0, rgba(158,27,27,0.025) 1px, transparent 1px, transparent 9px),
          #eadccf
        `
      }}
    >
      <div className="bg-white/70 backdrop-blur-sm rounded-full px-3 py-2 border border-white flex items-center shadow-sm max-w-[calc(100%-20px)]">
        <span className="text-[#9E1B1B] text-[9px] font-bold tracking-wider uppercase leading-[1.25] line-clamp-2">
          CLIENT IMAGE — {title}
        </span>
      </div>
    </div>
  );
}

function CampaignRouteDecoration() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex flex-col items-center justify-center">
      <div 
        className="absolute inset-0 opacity-[0.025] mix-blend-multiply"
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
      />
      
      {/* 2 Shallow Ellipses wrapping the grid */}
      <svg className="absolute w-[120%] min-w-[1200px] h-full top-[10%]" viewBox="0 0 1000 600" preserveAspectRatio="none">
        <motion.ellipse 
          initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2.5, ease: "easeInOut" }}
          cx="500" cy="200" rx="460" ry="80" fill="none" stroke="rgba(158,27,27,0.08)" strokeWidth="1"
        />
        <motion.ellipse 
          initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
          cx="500" cy="450" rx="430" ry="70" fill="none" stroke="rgba(158,27,27,0.12)" strokeWidth="1.2"
        />
        
        {/* Nodes */}
        <circle cx="150" cy="150" r="3" fill="#a40d16" opacity="0.6" />
        <circle cx="350" cy="515" r="4" fill="#a40d16" />
        <circle cx="750" cy="140" r="3" fill="#a40d16" opacity="0.6" />
        <circle cx="850" cy="420" r="2" fill="#a40d16" opacity="0.4" />
      </svg>
    </div>
  );
}

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
        style={{ background: "linear-gradient(100deg, #7d0710 0%, #aa0f18 50%, #870810 100%)" }}
      >
        <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 lg:gap-5 relative group">
              {i !== 0 && (
                <div className="hidden lg:block absolute -left-4 top-1/2 -translate-y-1/2 w-[1px] h-[60%] bg-white/15" />
              )}
              
              <div className="w-[45px] h-[45px] lg:w-[55px] lg:h-[55px] rounded-full bg-[#fbf6ef] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                <stat.icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#9E1B1B]" strokeWidth={1.5} />
              </div>
              
              <div className="flex flex-col">
                <span className="text-white font-bold text-[28px] lg:text-[36px] leading-[1.1] tracking-tight">
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
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    }
  };

  return (
    <section 
      className="relative w-full overflow-hidden flex flex-col pt-[50px] pb-0 lg:pt-[70px] min-h-screen lg:min-h-0 lg:h-auto"
      style={{
        background: `
          radial-gradient(circle at 50% 45%, rgba(181, 32, 39, 0.045), transparent 34%),
          linear-gradient(180deg, #fbf6ef 0%, #f7ede4 100%)
        `
      }}
    >
      <CampaignRouteDecoration />

      {/* Main Header */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-4 lg:px-[clamp(20px,4vw,80px)] mb-[34px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-[18px]"
        >
          <div className="h-[1px] w-[30px] bg-[#a40d16]" />
          <span className="text-[#a40d16] font-bold text-[12px] uppercase tracking-[0.2em]">WHAT WE DO</span>
          <div className="h-[1px] w-[30px] bg-[#a40d16] relative flex justify-end items-center">
            <Sparkles className="w-3 h-3 text-[#a40d16] absolute -right-3" />
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans font-bold text-[clamp(44px,4.8vw,76px)] [@media(min-width:1600px)]:text-[clamp(58px,5.1vw,88px)] leading-[0.88] tracking-[-0.045em] uppercase flex flex-col items-center"
        >
          <span className="text-[#171717]">CAMPAIGNS THAT</span>
          <span className="text-[#a40d16] mt-1">MOVE INDIA.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#4a4a4a] text-[16px] lg:text-[18px] leading-[1.6] max-w-[700px] mt-[22px]"
        >
          From busy metros to the most remote villages, we create powerful brand experiences through strategic activations and real connections.
        </motion.p>
      </div>

      {/* Composition Area */}
      <div className="relative z-20 mx-auto w-full max-w-[1500px] px-4 xl:px-0 flex flex-col items-center pb-[34px]">
        
        {/* Editorial Row (Above Grid) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="w-[min(1180px,82vw)] mx-auto mb-[20px] hidden lg:flex justify-between items-end"
        >
          <div className="flex flex-col w-[180px]">
            <span className="font-script text-[#a40d16] text-[28px] -rotate-3 mb-1">Experiences</span>
            <h3 className="font-bold text-[#171717] text-[16px] leading-tight mb-2.5">That Engage<br/>Communities</h3>
            <div className="w-[30px] h-[2px] bg-[#a40d16]" />
          </div>

          <div className="flex flex-col w-[180px] text-right items-end">
            <span className="font-script text-[#a40d16] text-[28px] -rotate-3 mb-1">Impact</span>
            <h3 className="font-bold text-[#171717] text-[16px] leading-tight mb-2.5">That Drives<br/>Results</h3>
            <div className="w-[30px] h-[2px] bg-[#a40d16]" />
          </div>
        </motion.div>

        {/* Campaign Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:w-[min(1180px,82vw)] mx-auto flex overflow-x-auto snap-x snap-mandatory lg:overflow-visible lg:grid lg:grid-cols-4 gap-4 lg:gap-x-[30px] lg:gap-y-[26px] items-stretch pb-4 lg:pb-0"
          style={{ scrollbarWidth: "none" }}
        >
          {campaigns.map((camp, i) => {
            const isFeatured = camp.isFeatured;
            const delay = i * 0.1;

            return (
              <motion.div
                key={camp.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay, ease: "easeOut" }}
                className={`
                  snap-center shrink-0 w-[240px] md:w-auto md:min-w-[280px] lg:w-auto lg:min-w-0 group relative cursor-pointer
                  transition-all duration-300 ease-out z-20
                  hover:z-50 hover:!-translate-y-[10px] hover:!rotate-0 hover:!scale-[1.025]
                `}
                style={{
                  transform: `translateY(${camp.translateY}px) rotate(${camp.rotation}deg)`,
                  transformOrigin: "center center",
                }}
              >
                {/* Glow behind featured */}
                {isFeatured && (
                  <div className="hidden lg:block absolute inset-0 bg-[#a40d16] opacity-15 blur-[25px] rounded-full scale-105 pointer-events-none" />
                )}

                {/* Card Body */}
                <div 
                  className="w-full h-full relative flex flex-col min-h-[330px]"
                  style={{
                    background: "rgba(255, 251, 246, 0.96)",
                    border: isFeatured ? "1px solid rgba(158, 27, 27, 0.22)" : "1px solid rgba(145, 15, 24, 0.10)",
                    borderRadius: "24px",
                    boxShadow: isFeatured 
                      ? "0 28px 65px rgba(91, 24, 22, 0.16)"
                      : "0 24px 60px rgba(81, 31, 24, 0.12), 0 8px 20px rgba(81, 31, 24, 0.07)",
                  }}
                >
                  <div className="absolute inset-0 rounded-[24px] border border-white/60 pointer-events-none" />

                  {/* Image Area */}
                  <div 
                    className="relative w-full overflow-hidden shrink-0"
                    style={{
                      height: isFeatured ? "180px" : "165px",
                      borderRadius: "23px 23px 12px 12px"
                    }}
                  >
                    {camp.image ? (
                      <Image
                        src={camp.image}
                        alt={camp.imageAlt}
                        fill
                        sizes="(max-width: 768px) 82vw, 300px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <ServiceImagePlaceholder title={camp.title} />
                    )}
                    {camp.image && (
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                    )}
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 flex flex-col relative items-center text-center p-[18px] lg:px-[14px] lg:pt-[18px] lg:pb-[16px]">
                    
                    {/* Overlapping Icon Badge */}
                    <div className="absolute -top-[20px] left-1/2 -translate-x-1/2 w-[40px] h-[40px] bg-[#9E1B1B] rounded-full flex items-center justify-center shadow-md border-[3px] border-[#fffbf6] transition-transform duration-300 z-10">
                      <camp.icon className="w-4 h-4 text-white" />
                    </div>

                    <h4 className={`font-bold text-[#171717] mb-[6px] ${isFeatured ? 'text-[20px]' : 'text-[16px]'} leading-[1.12]`}>
                      {camp.title}
                    </h4>
                    
                    <div className={`text-[#666] leading-[1.4] flex flex-col items-center ${isFeatured ? 'text-[14px]' : 'text-[12px]'}`}>
                      <span>{camp.description[0]}</span>
                      <span>{camp.description[1]}</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Center Caption */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col items-center justify-center text-center mt-[34px] relative z-20 pointer-events-none"
        >
          <span className="font-script text-[#a40d16] text-[34px] -rotate-2">One Goal.</span>
          <span className="font-bold text-[#171717] text-[20px] mt-0 tracking-tight">Meaningful Connections.</span>
        </motion.div>

      </div>
      
      <CampaignStats />

    </section>
  );
}
