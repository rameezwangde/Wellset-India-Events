'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function AboutHero() {
  const scrollToExpertise = () => {
    document.getElementById('our-expertise')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-soft-ivory text-pure-charcoal pt-8 pb-24 md:pt-12 md:pb-32 px-6 md:px-12 lg:px-24">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, var(--color-muted-grey) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Top Hero Section - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Left Column */}
          <motion.div 
            className="flex flex-col justify-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeUpVariant} className="text-sm tracking-widest uppercase font-semibold text-primary-red mb-6 block">
              About Wellset India
            </motion.span>
            
            <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-6xl lg:text-7xl font-condensed font-bold leading-tight mb-8">
              Experiences That <span className="text-deep-burgundy">Move</span> Beyond the Screen
            </motion.h1>

            <motion.p variants={fadeUpVariant} className="text-lg md:text-xl text-muted-grey mb-12 max-w-[600px] leading-relaxed">
              Two decades of connecting brands, institutions and communities across India.
            </motion.p>

            <motion.div variants={fadeUpVariant} className="flex items-center gap-6 mb-12">
              <div className="flex items-center">
                <span className="font-bold text-deep-burgundy">2006</span>
                <div className="h-[1px] w-8 md:w-12 bg-primary-red mx-4" />
                <span className="font-bold text-deep-burgundy">20 Years</span>
                <div className="h-[1px] w-8 md:w-12 bg-primary-red mx-4" />
                <span className="font-bold text-deep-burgundy">Pan-India</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <button 
                onClick={scrollToExpertise}
                className="group relative px-8 py-4 bg-deep-burgundy text-pure-white font-medium overflow-hidden transition-all duration-300 hover:bg-dark-wine"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Our Expertise
                  <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Typographic & Geometric Design */}
          <motion.div 
            className="relative h-[500px] md:h-[600px] w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Main Dominant Design Block */}
            <div className="absolute top-0 right-0 w-[80%] h-[70%] z-10 overflow-hidden shadow-2xl bg-deep-burgundy flex flex-col items-start justify-between p-8 md:p-12 border-b-8 border-primary-red">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px)' }} />
              <div className="relative z-10">
                <span className="text-primary-red/50 text-[120px] font-condensed font-bold leading-none absolute -top-12 -left-8 select-none">W</span>
                <h3 className="text-4xl md:text-5xl font-condensed font-bold text-pure-white leading-tight mt-12 relative z-10">
                  IMPACT<br/>AT SCALE
                </h3>
              </div>
              <div className="relative z-10 self-end">
                <div className="w-24 h-[2px] bg-primary-red mb-4" />
                <p className="text-sm tracking-widest text-warm-beige uppercase">Beyond The Screen</p>
              </div>
            </div>

            {/* Bottom Left Supporting Block */}
            <div className="absolute bottom-0 left-0 w-[55%] h-[45%] z-20 shadow-xl border-4 border-soft-ivory bg-pure-charcoal p-6 flex flex-col justify-end">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-muted-grey/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary-red animate-pulse" />
              </div>
              <span className="text-primary-red font-bold font-condensed text-3xl mb-1">01.</span>
              <p className="text-muted-grey text-sm uppercase tracking-wider font-semibold">Execution</p>
              <p className="text-pure-white text-sm uppercase tracking-wider font-semibold">Excellence</p>
            </div>

            {/* Floating Seal */}
            <div className="absolute top-[50%] right-[70%] transform -translate-y-1/2 z-30 bg-soft-ivory border-2 border-primary-red text-deep-burgundy p-4 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-lg hover:bg-primary-red hover:text-pure-white transition-colors duration-500">
              <span className="text-3xl font-condensed font-bold leading-none mb-1">20</span>
              <span className="text-[10px] font-bold uppercase tracking-wider leading-tight">Years of<br/>On-Ground<br/>Impact</span>
            </div>
          </motion.div>
        </div>

        {/* Company Story Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <motion.div 
            className="lg:col-span-3 flex flex-col relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="absolute top-0 left-0 -z-10 text-[200px] leading-none font-bold text-warm-beige opacity-40 -mt-16 -ml-8 select-none">20</div>
            <motion.span variants={fadeUpVariant} className="text-primary-red font-bold text-xl mb-4">01</motion.span>
            <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-condensed font-bold mb-6">Our Story</motion.h2>
          </motion.div>

          <motion.div 
            className="lg:col-span-9 max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUpVariant} className="text-lg text-pure-charcoal leading-relaxed mb-8 max-w-[65ch]">
              Founded in 2006, Wellset India Events and Promotions set out with a simple vision: to help brands and institutions connect with people through real, on-ground experiences, not just messages on a screen. That vision has stayed consistent even as our capabilities, network, and reach have grown steadily over the years.
            </motion.p>

            <motion.div variants={fadeUpVariant} className="my-16 pl-8 md:pl-12 border-l-2 border-primary-red relative bg-warm-beige/30 p-8">
              <span className="absolute -top-4 -left-4 text-6xl text-primary-red opacity-40 font-serif">"</span>
              <p className="text-2xl md:text-3xl font-condensed font-medium text-deep-burgundy leading-snug">
                Helping brands and institutions connect with people through real, on-ground experiences, not just messages on a screen.
              </p>
            </motion.div>

            <motion.p variants={fadeUpVariant} className="text-lg text-pure-charcoal leading-relaxed mb-8 max-w-[65ch]">
              Over the last 20 years, Wellset India Events and Promotions has grown into a full-spectrum BTL and activation agency, providing specialized marketing and communication solutions across urban, semi-urban, and rural India. Our work today spans nukkad natak, BTL and van activations, mall and retail activations, canopy setups, RWA and society engagement, road shows, wall paintings, festival and market activations, school programs, corporate events and exhibitions, and government and NGO IEC awareness campaigns - the full range of how a brand or a public message can reach people where they actually are.
            </motion.p>

            <motion.p variants={fadeUpVariant} className="text-lg text-pure-charcoal leading-relaxed mb-16 max-w-[65ch]">
              Backed by our own execution teams, on-ground operational infrastructure, and two decades of understanding diverse Indian markets, Wellset India Events and Promotions continues to deliver campaigns with pan-India consistency, scale, and accountability - helping brands, government bodies, and NGOs create meaningful impact across every corner of India.
            </motion.p>
          </motion.div>
        </div>

        {/* Supporting Statistics Strip */}
        <motion.div 
          className="w-full border-y border-muted-grey/20 py-8 mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-muted-grey/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-4xl md:text-5xl font-condensed font-bold text-deep-burgundy mb-2">2006</span>
            <span className="text-sm font-medium text-muted-grey uppercase tracking-wider">Founded</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-4xl md:text-5xl font-condensed font-bold text-deep-burgundy mb-2">20 Years</span>
            <span className="text-sm font-medium text-muted-grey uppercase tracking-wider">Industry Experience</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-4xl md:text-5xl font-condensed font-bold text-deep-burgundy mb-2">Pan-India</span>
            <span className="text-sm font-medium text-muted-grey uppercase tracking-wider">Execution Network</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-4xl md:text-5xl font-condensed font-bold text-deep-burgundy mb-2">Urban to Rural</span>
            <span className="text-sm font-medium text-muted-grey uppercase tracking-wider">Market Reach</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
