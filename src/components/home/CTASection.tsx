"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, PhoneCall, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
      className="relative w-full overflow-hidden pt-12 pb-28 lg:pt-16 lg:pb-40 isolate flex items-center justify-center text-center"
    >
      
      {/* Solid Cream Background */}
      <div className="absolute inset-0 z-0 bg-cream" />

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
          className="text-burgundy font-bold uppercase tracking-[0.2em] text-[12px] lg:text-[14px] mb-4"
        >
          Let's work together
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-charcoal font-bold text-[40px] md:text-[52px] lg:text-[64px] leading-[1.1] tracking-tight mb-6"
        >
          Ready to Build Your Next <span className="font-script text-burgundy font-normal text-[1.2em] relative inline-block -rotate-2">Campaign?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-muted-text text-[18px] lg:text-[20px] leading-relaxed max-w-[700px] mb-10"
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
          <Link href="/contact" className="group relative overflow-hidden bg-burgundy text-white rounded-full px-10 py-4 font-bold text-[16px] transition-transform hover:scale-105 shadow-[0_10px_30px_rgba(218,47,29,0.25)] flex items-center gap-3">
            <span className="relative z-10">Get a Proposal</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-burgundy-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
          
          <Link href="https://wa.me/919310996542" target="_blank" rel="noopener noreferrer" className="group rounded-full px-10 py-4 font-semibold text-white bg-[#da2f1d] border border-[#da2f1d] transition-all hover:bg-burgundy hover:border-burgundy flex items-center gap-3 shadow-sm hover:shadow-md">
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Contact Us</span>
          </Link>
        </motion.div>
        
      </motion.div>
    </section>
  );
}

