'use client';

import React from 'react';
import { motion } from 'framer-motion';

const methodology = [
  {
    id: '01',
    title: 'Strategic Planning',
    description: 'Deep diving into brand objectives, demographic data, and regional nuances to identify the exact touchpoints where your audience gathers naturally.',
    icon: (
      <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: '02',
    title: 'Pan-India Mobilization',
    description: 'Leveraging our vast, localized network of vendors and field experts to rapidly deploy high-quality infrastructure from metropolitan hubs to remote rural haats.',
    icon: (
      <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: '03',
    title: 'Precision Execution',
    description: 'Flawless on-ground management ensuring every interaction, canopy setup, and roadshow perfectly aligns with your brand standards and public welfare guidelines.',
    icon: (
      <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: '04',
    title: 'Measurable Impact',
    description: 'Tracking engagement, footfall, and lead generation in real-time, delivering transparent ROI and clear metrics for every campaign we launch.',
    icon: (
      <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function OurExpertise() {
  return (
    <section id="our-expertise" className="relative w-full bg-[#191919] text-pure-white pt-24 pb-12 md:pt-32 md:pb-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Faint background line pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px)',
          backgroundSize: '20px 20px'
        }}
      />
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
          <div className="lg:col-span-4">
            <span className="text-primary-red font-bold text-xl mb-4 block">02</span>
            <h2 className="text-4xl md:text-5xl font-condensed font-bold mb-8">Our Approach</h2>
            <div className="w-[1px] h-24 bg-primary-red opacity-30 mb-8" />
            <p className="text-sm tracking-widest uppercase font-semibold text-muted-grey">
              Engineering on-ground experiences that command attention and drive action, anywhere in India.
            </p>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-warm-beige leading-relaxed max-w-[75ch]">
              We specialize in translating brand strategy into tangible, on-ground experiences that spark genuine connections. Whether navigating the logistical complexities of high-security government initiatives, orchestrating large-scale corporate summits, or penetrating deep rural markets where traditional media fades, our execution is precise and relentless. Our teams are deployed across India, transforming static spaces—from bustling urban malls to remote village haats—into dynamic touchpoints. We don't just set up infrastructure; we engineer immersive environments that capture attention, educate communities, and deliver measurable impact for iconic brands and public welfare programs alike.
            </p>
          </div>
        </div>

        {/* Methodology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodology.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#222222] border border-white/5 p-8 rounded-sm hover:border-primary-red/50 transition-colors group relative overflow-hidden"
            >

              
              <div className="w-16 h-16 rounded-full bg-[#151515] flex items-center justify-center mb-8 border border-white/10 group-hover:border-primary-red/30 transition-colors relative z-10">
                {step.icon}
              </div>
              
              <h3 className="text-2xl font-condensed font-bold mb-4 text-pure-white relative z-10 group-hover:text-primary-red transition-colors">
                {step.title}
              </h3>
              
              <p className="text-muted-grey leading-relaxed text-sm relative z-10">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
