'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ReadyToTalk() {
  return (
    <section className="relative w-full bg-deep-burgundy text-pure-white py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Images & Textures */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-2/3 lg:w-1/2 opacity-20 mix-blend-overlay flex justify-end overflow-hidden">
          {/* Abstract geometric background instead of an image */}
          <div className="w-[800px] h-[800px] rounded-full border-[40px] border-primary-red absolute -right-[200px] -top-[200px] opacity-30" />
          <div className="w-[600px] h-[600px] rounded-full border-[20px] border-warm-beige absolute -right-[100px] top-[100px] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-burgundy to-transparent z-10" />
        </div>
        
        {/* Fine grain texture */}
        <div 
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        />
        
        {/* Sweeping line motif */}
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 800C200 800 400 200 800 200C1200 200 1400 600 1600 600" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="10 10" />
          <path d="M-100 700C300 700 500 300 900 300C1300 300 1400 500 1600 500" stroke="#FFFFFF" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-warm-beige mb-6 block">Start A Conversation</span>
          <h2 className="text-5xl md:text-6xl font-condensed font-bold mb-8 text-pure-white">Ready to Talk?</h2>
          
          <p className="text-xl leading-relaxed text-soft-ivory mb-12">
            Whether you're planning a nationwide brand activation or a hyperlocal awareness drive, our two decades of on-ground experience are ready to work for you. <Link href="/contact" className="text-pure-white underline decoration-primary-red decoration-2 underline-offset-4 hover:text-primary-red transition-colors">Get in touch</Link> to discuss your next campaign.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
            <Link 
              href="/contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-pure-white text-deep-burgundy font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 hover:bg-warm-beige"
            >
              <span className="relative z-10">Get in touch</span>
              <svg className="w-5 h-5 relative z-10 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            
            {/* Fallback route for campaigns if it doesn't exist yet */}
            <Link 
              href="/portfolio" 
              className="group inline-flex items-center gap-2 px-6 py-3 border border-pure-white text-pure-white font-medium transition-colors hover:bg-pure-white hover:text-deep-burgundy"
            >
              Explore Our Campaigns
            </Link>
          </div>

          <div className="inline-flex items-center gap-3 border border-primary-red/50 bg-dark-wine/30 px-6 py-3 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-primary-red animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-soft-ivory">20 Years. One Execution Standard. Every Market.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
