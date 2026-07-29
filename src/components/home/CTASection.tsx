"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, PhoneCall } from "lucide-react";
import Image from "next/image";

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: background image moves slower than scroll
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  // Scale up content slightly as it enters view
  const contentScale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.95, 1, 1, 0.98]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-28 lg:py-40 isolate flex items-center justify-center text-center"
    >
      
      {/* Background Image & Overlay with parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div className="absolute inset-[-20%] z-0" style={{ y: bgY }}>
          <Image
            src="/images/Conference, Events & Exhibition.JPG"
            alt="CTA Background"
            fill
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-[900px] px-6 flex flex-col items-center"
        style={{ scale: contentScale }}
      >
        
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-white/90 font-bold uppercase tracking-[0.2em] text-[12px] lg:text-[14px] mb-4"
        >
          Let's work together
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-white font-bold text-[40px] md:text-[52px] lg:text-[64px] leading-[1.1] tracking-tight mb-6"
        >
          Ready to Build Your Next <span className="font-script text-[#ffcc00] font-normal text-[1.2em] relative inline-block -rotate-2">Campaign?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-white/80 text-[18px] lg:text-[20px] leading-relaxed max-w-[700px] mb-10"
        >
          Partner with Wellset India Events & Promotions to create unforgettable, nationwide brand experiences that truly resonate with your audience.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row gap-5 items-center justify-center"
        >
          <button className="group relative overflow-hidden bg-[#9E1B1B] text-white rounded-full px-10 py-4 font-bold text-[16px] transition-transform hover:scale-105 shadow-[0_10px_30px_rgba(158,27,27,0.4)] flex items-center gap-3">
            <span className="relative z-10">Get a Proposal</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-[#7c0710] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          
          <button className="group rounded-full px-10 py-4 font-semibold text-white border border-white/40 transition-all hover:bg-white/10 hover:border-white flex items-center gap-3 backdrop-blur-sm">
            <PhoneCall className="w-5 h-5" />
            <span>Contact Us</span>
          </button>
        </motion.div>
        
      </motion.div>
    </section>
  );
}

