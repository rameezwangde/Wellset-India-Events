'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function WhyClientsTrustUs() {
  return (
    <section className="relative w-full bg-soft-ivory text-pure-charcoal pt-12 pb-24 md:pt-16 md:pb-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          
          {/* Left Visual Area */}
          <motion.div 
            className="relative h-[600px] w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Timeline Edge */}
            <div className="absolute left-0 top-12 bottom-12 w-12 border-l-2 border-primary-red/20 z-30 flex flex-col justify-between py-8">
              <div className="relative -left-[27px] flex items-center gap-4">
                <div className="w-4 h-[2px] bg-primary-red" />
                <span className="text-xs font-bold uppercase tracking-widest text-deep-burgundy rotate-90 transform origin-left w-32 translate-y-16">2006 — The Journey Began</span>
              </div>
              <div className="relative -left-[27px] flex items-center gap-4 mt-32">
                <div className="w-4 h-[2px] bg-primary-red" />
                <span className="text-xs font-bold uppercase tracking-widest text-deep-burgundy rotate-90 transform origin-left w-40 translate-y-20">20 Years — Consistent Execution</span>
              </div>
              <div className="relative -left-[27px] flex items-center gap-4 mt-32">
                <div className="w-4 h-[2px] bg-primary-red" />
                <span className="text-xs font-bold uppercase tracking-widest text-deep-burgundy rotate-90 transform origin-left w-40 translate-y-20">Today — Trusted Across Sectors</span>
              </div>
            </div>

            {/* Main Design Block */}
            <div className="absolute top-0 right-0 bottom-0 left-16 shadow-2xl bg-pure-white border-r-8 border-primary-red flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #761B24 10px, #761B24 11px)' }} />
              <div className="w-32 h-32 rounded-full border-4 border-primary-red flex items-center justify-center mb-8 relative z-10 bg-soft-ivory shadow-inner">
                <span className="text-4xl font-bold text-deep-burgundy">20</span>
              </div>
              <h3 className="text-3xl font-condensed font-bold text-pure-charcoal tracking-wide relative z-10 text-center px-4">
                YEARS
              </h3>
              
            </div>

            {/* Smaller Detail Blocks - Staggered without overlap */}
            <div className="absolute -right-4 top-4 w-48 h-24 shadow-lg border-4 border-soft-ivory z-20 bg-dark-wine flex items-center justify-center text-center p-4 hover:scale-105 transition-transform">
              <span className="text-warm-beige font-condensed font-bold text-lg tracking-widest uppercase">Precision<br/>Planning</span>
            </div>
            <div className="absolute right-32 top-[256px] w-48 h-24 shadow-lg border-4 border-soft-ivory z-20 bg-deep-burgundy flex items-center justify-center text-center p-4 hover:scale-105 transition-transform">
              <span className="text-soft-ivory font-condensed font-bold text-lg tracking-widest uppercase">Pan-India<br/>Scale</span>
            </div>
            <div className="absolute right-48 top-[384px] w-48 h-24 shadow-lg border-4 border-soft-ivory z-20 bg-dark-wine flex items-center justify-center text-center p-4 hover:scale-105 transition-transform">
              <span className="text-warm-beige font-condensed font-bold text-lg tracking-widest uppercase">Consistent<br/>Impact</span>
            </div>
            <div className="absolute right-64 bottom-4 w-48 h-24 shadow-lg border-4 border-soft-ivory z-20 bg-primary-red flex items-center justify-center text-center p-4 hover:scale-105 transition-transform">
              <span className="text-pure-white font-condensed font-bold text-xl tracking-widest uppercase">Flawless<br/>Execution</span>
            </div>
          </motion.div>

          {/* Right Content Area */}
          <motion.div 
            className="flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeUpVariant} className="text-primary-red font-bold text-xl mb-4 block">03</motion.span>
            <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-condensed font-bold mb-6">Why Clients Trust Us</motion.h2>
            <motion.div variants={fadeUpVariant} className="w-16 h-[2px] bg-primary-red mb-12" />

            <motion.p variants={fadeUpVariant} className="text-lg text-pure-charcoal leading-relaxed mb-8">
              Twenty years in a relationship-driven industry is its own credential. Businesses don't stay in this line of work for two decades without consistently delivering what they promise, and clients don't come back to an agency they don't trust. Our work spans both the private sector, where brands rely on us for visibility and consumer engagement, and the public sector, where government bodies and NGOs trust us to carry sensitive, high-stakes messages responsibly into real communities. That dual credibility, commercial and public-sector, is uncommon in this industry, and it's a large part of why clients continue to choose us over newer, narrower players.
            </motion.p>

            <motion.div variants={fadeUpVariant} className="my-12 bg-deep-burgundy text-pure-white p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 text-[120px] text-primary-red/30 font-serif leading-none -mt-4 mr-4 select-none">"</div>
              <p className="text-2xl md:text-3xl font-condensed font-medium leading-snug relative z-10 mb-6">
                Would we be proud to show its results to the client who trusted us with it?
              </p>
              <div className="h-[1px] w-full bg-primary-red/50 mb-4" />
              <p className="text-sm font-medium tracking-wider uppercase text-warm-beige">The question that guides every Wellset campaign.</p>
            </motion.div>

            <motion.p variants={fadeUpVariant} className="text-lg text-pure-charcoal leading-relaxed">
              Every campaign we run is planned around one question: would we be proud to show its results to the client who trusted us with it? Twenty years on, that question still guides how we work - and it's why our clients keep asking us back.
            </motion.p>
          </motion.div>
        </div>

        {/* Trust Pillars */}
        <motion.div 
          className="border-t border-muted-grey/20 pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {[
            "Consistent Delivery",
            "Pan-India Accountability",
            "Private and Public Sector Experience",
            "Responsible Community Engagement"
          ].map((pillar, index) => (
            <motion.div key={index} variants={fadeUpVariant} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 flex items-center justify-center border border-primary-red/30 rounded-full mb-6 group-hover:bg-primary-red group-hover:border-primary-red transition-colors duration-300">
                <span className="text-deep-burgundy font-bold group-hover:text-pure-white transition-colors">0{index + 1}</span>
              </div>
              <h4 className="text-lg font-bold font-condensed text-pure-charcoal">{pillar}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
