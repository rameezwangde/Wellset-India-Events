"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { Compass, HeartHandshake, Route, Flame, LineChart } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: Compass,
    title: "Local Expertise",
    desc: "Deep understanding of regional nuances and cultural contexts.",
  },
  {
    icon: HeartHandshake,
    title: "People-First Approach",
    desc: "Authentic connections that truly resonate with your core audience.",
  },
  {
    icon: Route,
    title: "End-to-End Delivery",
    desc: "From concept to on-ground execution with measurable results.",
  },
  {
    icon: Flame,
    title: "Creative Activations",
    desc: "Captivating audiences through Nukkad Nataks, roadshows & interactive formats.",
  },
  {
    icon: LineChart,
    title: "Strategic Impact",
    desc: "Data-driven campaigns designed to maximize engagement and ROI.",
  },
];

// ─── Subcomponents ───────────────────────────────────────────────────────────

function PremiumAbstractGraphic() {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center opacity-95">
      <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
        <defs>
          <radialGradient id="sphere" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#ffffff" />
            <stop offset="80%" stopColor="#fde0df" />
            <stop offset="100%" stopColor="#f5adaa" />
          </radialGradient>
          <pattern id="dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#da2f1d" opacity="0.18" />
          </pattern>
          <mask id="dotsMask">
            <rect x="0" y="0" width="400" height="400" fill="url(#maskGrad)" />
          </mask>
          <linearGradient id="maskGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="40%" stopColor="transparent" />
            <stop offset="90%" stopColor="white" />
          </linearGradient>
        </defs>

        {/* Dotted Pattern Background */}
        <rect x="0" y="0" width="400" height="400" fill="url(#dots)" mask="url(#dotsMask)" />

        <g className="origin-center animate-[spin_45s_linear_infinite]">
          {/* Full Rings */}
          <circle cx="200" cy="200" r="175" fill="none" stroke="#e5e5e5" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="130" fill="none" stroke="#f0f0f0" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="145" fill="none" stroke="#da2f1d" strokeWidth="0.5" opacity="0.3" />

          {/* Dark Gray Sweep Arc */}
          <path d="M 90,83 A 160 160 0 0 0 250,352" fill="none" stroke="#777" strokeWidth="0.5" />
          {/* Nodes on Gray Sweep */}
          <circle cx="90" cy="83" r="4.5" fill="#333" />
          <circle cx="150" cy="352" r="4.5" fill="#333" />
          <circle cx="360" cy="190" r="4.5" fill="#333" />

          {/* Top Red Arc */}
          <path d="M 230,55 A 148 148 0 0 0 105,87" fill="none" stroke="#da2f1d" strokeWidth="1.5" />
          <circle cx="230" cy="55" r="5" fill="#da2f1d" />

          {/* Left Red Arc */}
          <path d="M 70,190 A 131 131 0 0 0 115,300" fill="none" stroke="#da2f1d" strokeWidth="1" />
          <circle cx="70" cy="190" r="4.5" fill="#da2f1d" />

          {/* Right Dashed Red Arc */}
          <path d="M 290,325 A 155 155 0 0 0 350,240" fill="none" stroke="#da2f1d" strokeWidth="1.5" strokeDasharray="6 5" />
          
          {/* Right Red Arc */}
          <path d="M 330,125 A 150 150 0 0 1 345,240" fill="none" stroke="#da2f1d" strokeWidth="0.75" />
          <circle cx="345" cy="240" r="4.5" fill="#da2f1d" />

          {/* Faint Pink Node */}
          <circle cx="310" cy="100" r="3.5" fill="#d4b4b2" />
        </g>

        {/* Central Sphere */}
        <circle cx="200" cy="200" r="105" fill="url(#sphere)" style={{ filter: 'drop-shadow(0px 15px 35px rgba(218, 47, 29, 0.2))' }} />
      </svg>
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export function WhoWeAreSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1, y: 0,
      transition: { staggerChildren: 0.1, duration: 0.8, ease: "easeOut" },
    }
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section
      ref={sectionRef}
      id="who-we-are"
      className="relative w-full bg-[#fdfbf9] pt-20 lg:pt-32 pb-10 lg:pb-16 overflow-hidden"
    >
      {/* Top 3-Column Layout */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-16 mb-12 lg:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (40%) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative mb-6">
              <div className="absolute -top-3 left-0 w-8 h-[2px] bg-[#da2f1d]" />
              <span className="text-[#da2f1d] font-bold uppercase tracking-[0.2em] text-[13px]">
                WHO WE ARE
              </span>
            </div>
            
            <h2 className="font-bold text-[clamp(44px,5vw,72px)] leading-[1.05] tracking-tight mb-8">
              <span className="text-[#181818] block">NATIONWIDE</span>
              <span className="text-[#181818] block">REACH.</span>
              <span className="text-[#da2f1d] block mt-1">MEANINGFUL</span>
              <span className="text-[#da2f1d] block">IMPACT.</span>
            </h2>
            
            <p className="text-[15px] lg:text-[16px] leading-[1.6] text-[#4a4a4a] max-w-[400px]">
              Wellset India Events & Promotions is a premium activation partner specializing in <span className="text-[#da2f1d] font-bold">unforgettable brand experiences.</span>
            </p>
          </motion.div>

          {/* Middle Column (25%) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-3 lg:pl-10 lg:border-l border-[#da2f1d]/20"
          >
            <div className="space-y-6 text-[14px] lg:text-[15px] text-[#4a4a4a] leading-[1.8]">
              <p>
                We understand that real impact happens on the ground — where real people interact with your message.
              </p>
              <p>
                Our expansive network enables us to execute flawlessly from bustling urban centers to the most remote rural villages.
              </p>
            </div>
          </motion.div>

          {/* Right Column (35%) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-4"
          >
            <PremiumAbstractGraphic />
          </motion.div>

        </div>
      </div>

      {/* Horizontal Divider */}
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-16 mb-12 lg:mb-16">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#da2f1d]/10 to-transparent" />
      </div>

      {/* Bottom Feature Strip (5 Pillars) */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-16 pb-12">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-y-12">
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="relative flex flex-col items-center text-center w-[100%] sm:w-[48%] lg:w-[18%] px-2 group"
            >
              {/* Icon Section - Mathematically precise alignment */}
              <div className="relative w-[110px] h-[97px] mx-auto mb-6">
                {/* Orbital Arc (Half Circle Top) */}
                <div className="absolute top-0 left-0 w-[110px] h-[55px] border border-[#da2f1d] border-b-0 rounded-t-[55px] opacity-80 group-hover:scale-105 transition-transform duration-500 origin-bottom">
                  <div className="absolute bottom-0 -left-[2.5px] w-[4px] h-[4px] rounded-full bg-[#da2f1d]" />
                  <div className="absolute bottom-0 -right-[2.5px] w-[4px] h-[4px] rounded-full bg-[#da2f1d]" />
                </div>
                
                {/* Icon Container (Perfectly centered: left 13px, top 13px makes its center exactly at y=55, x=55) */}
                <div className="absolute top-[13px] left-[13px] w-[84px] h-[84px] rounded-full bg-white shadow-[0_12px_35px_rgb(0,0,0,0.06)] flex items-center justify-center z-10 transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="w-[64px] h-[64px] rounded-full bg-gradient-to-br from-[#a61c16] to-[#7d130e] shadow-inner flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <h4 className="font-bold text-[13px] xl:text-[14px] uppercase tracking-wide text-[#181818] w-full max-w-[140px] mx-auto min-h-[40px] flex items-center justify-center">
                {feature.title}
              </h4>
              
              {/* Red Divider Dash */}
              <div className="w-6 h-[2px] bg-[#da2f1d] mt-2 mb-4 group-hover:w-10 transition-all duration-300" />
              
              <p className="text-[13px] text-[#4a4a4a] leading-[1.6] max-w-[200px]">
                {feature.desc}
              </p>

              {/* Vertical Separator (Hidden on last item and mobile) */}
              {i !== 4 && (
                <div className="hidden lg:block absolute right-0 top-[20%] w-[1px] h-[60%] bg-[#da2f1d]/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
