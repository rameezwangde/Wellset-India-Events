"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, PhoneCall } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fbf6ef] py-24 lg:py-32 isolate">
      {/* Container */}
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full rounded-[32px] overflow-hidden p-10 lg:p-16 flex flex-col items-center text-center shadow-[0_20px_50px_rgba(158,27,27,0.15)]"
          style={{
            background: "linear-gradient(135deg, #a40d16 0%, #c72a32 50%, #7d0710 100%)",
          }}
        >
          {/* Decorative Elements inside the box */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/20 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
          
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 left-12 text-white/40"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
          
          {/* Content */}
          <span className="text-white/90 font-bold uppercase tracking-[0.2em] text-[12px] lg:text-[14px] mb-4">
            Let's work together
          </span>
          
          <h2 className="text-white font-bold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-tight max-w-[800px] mb-6">
            Ready to Build Your Next <span className="font-script text-[#ffcc00] font-normal text-[1.2em] relative inline-block -rotate-2">Campaign?</span>
          </h2>
          
          <p className="text-white/80 text-[16px] lg:text-[18px] leading-relaxed max-w-[600px] mb-10">
            Partner with Wellset India Events & Promotions to create unforgettable, nationwide brand experiences that truly resonate with your audience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className="group relative overflow-hidden bg-white text-[#9E1B1B] rounded-full px-8 py-4 font-bold text-[16px] transition-transform hover:scale-105 shadow-lg flex items-center gap-3">
              <span className="relative z-10">Get a Proposal</span>
              <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-[#fffbf6] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <button className="group rounded-full px-8 py-4 font-semibold text-white border border-white/30 transition-all hover:bg-white/10 flex items-center gap-3">
              <PhoneCall className="w-5 h-5" />
              <span>Contact Us</span>
            </button>
          </div>
          
        </motion.div>
      </div>
      
      {/* Background Decorative lines for the section */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M 0,200 Q 500,400 1000,100" stroke="#a40d16" strokeWidth="2" fill="none" />
          <path d="M 0,400 Q 500,600 1000,300" stroke="#a40d16" strokeWidth="1" fill="none" strokeDasharray="10 10" />
        </svg>
      </div>
    </section>
  );
}
