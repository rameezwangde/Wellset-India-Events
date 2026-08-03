'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  {
    title: 'Brand Activations',
    items: [
      { id: 'btl', name: 'BTL and Van Activations', image: 'expertiseBrandActivation' },
      { id: 'mall', name: 'Mall and Retail Activations', image: 'expertiseBrandActivation' },
      { id: 'canopy', name: 'Canopy Setups', image: 'expertiseBrandActivation' },
      { id: 'road', name: 'Road Shows', image: 'expertiseBrandActivation' },
    ]
  },
  {
    title: 'Community Engagement',
    items: [
      { id: 'nukkad', name: 'Nukkad Natak', image: 'expertiseCommunity' },
      { id: 'rwa', name: 'RWA and Society Engagement', image: 'expertiseCommunity' },
      { id: 'festival', name: 'Festival, Haat and Market Activations', image: 'expertiseCommunity' },
      { id: 'school', name: 'School Programs', image: 'expertiseCommunity' },
      { id: 'wall', name: 'Wall Paintings and Wall Branding', image: 'expertiseCommunity' },
    ]
  },
  {
    title: 'Corporate and Public Sector',
    items: [
      { id: 'corporate', name: 'Corporate Events and Conferences', image: 'expertiseCorporate' },
      { id: 'exhibitions', name: 'Exhibitions', image: 'expertiseCorporate' },
      { id: 'ngo', name: 'Government and NGO IEC Campaigns', image: 'expertiseCorporate' },
    ]
  }
];

export default function OurExpertise() {
  const [activeItemId, setActiveItemId] = useState(categories[0].items[0].id);

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
            <h2 className="text-4xl md:text-5xl font-condensed font-bold mb-8">Our Expertise</h2>
            <div className="w-[1px] h-24 bg-primary-red opacity-30 mb-8" />
            <p className="text-sm tracking-widest uppercase font-semibold text-muted-grey">
              From city centres to remote communities, we build campaigns around where the audience already is.
            </p>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-warm-beige leading-relaxed max-w-[75ch]">
              Two decades of continuous, pan-India, on-ground execution have given us a depth of capability that's hard to build quickly. We work across the full spectrum of activation formats, from mobile van and canopy campaigns that travel to where an audience already gathers, to mall and retail activations in high-footfall urban spaces, to society and RWA engagement within residential communities. We take brands into festivals, haats, and rural markets, into schools, and onto city roads through road shows and wall branding. On the corporate side, we manage events, conferences, and exhibitions with the same discipline. And for government departments and NGOs, we run IEC activation campaigns that carry public health, welfare, and awareness messages into communities that mass media often struggles to reach.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative">
          {/* List Area */}
          <div className="lg:col-span-7 flex flex-col gap-16">
            {categories.map((category, catIndex) => (
              <div key={category.title} className="flex flex-col">
                <h3 className="text-2xl font-condensed font-bold text-deep-burgundy mb-6 pb-4 border-b border-muted-grey/30">
                  {category.title}
                </h3>
                <div className="flex flex-col">
                  {category.items.map((item, index) => (
                    <div 
                      key={item.id}
                      className="group flex items-center justify-between py-6 border-b border-muted-grey/10 cursor-pointer transition-colors hover:border-primary-red/50"
                      onMouseEnter={() => setActiveItemId(item.id)}
                    >
                      <div className="flex items-center gap-6">
                        <span className="text-sm font-medium text-muted-grey w-6 opacity-50 group-hover:opacity-100 transition-opacity">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xl md:text-2xl font-light tracking-wide group-hover:text-primary-red transition-colors">
                          {item.name}
                        </span>
                      </div>
                      <svg 
                        className="w-6 h-6 text-muted-grey opacity-0 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary-red transition-all duration-300" 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Design Area */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="sticky top-32 w-full aspect-[3/4] rounded-sm overflow-hidden bg-deep-burgundy shadow-2xl flex flex-col justify-center items-center p-12 border-l-8 border-primary-red relative">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItemId}
                  className="relative z-10 text-center flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="w-16 h-16 border-2 border-primary-red rounded-full flex items-center justify-center mb-8 bg-dark-wine/50">
                    <svg className="w-8 h-8 text-pure-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  
                  <span className="text-primary-red text-sm uppercase tracking-widest font-bold mb-4">Focus Area</span>
                  
                  <h4 className="text-4xl lg:text-5xl font-condensed font-bold text-pure-white leading-tight">
                    {categories.flatMap(c => c.items).find(i => i.id === activeItemId)?.name || 'Activating Communities'}
                  </h4>
                  
                  <div className="w-12 h-1 bg-primary-red mt-12 opacity-50" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
