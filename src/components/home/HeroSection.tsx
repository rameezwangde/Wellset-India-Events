"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroStats } from "./HeroStats";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-cream min-h-[980px] h-[980px] [@media(min-width:1600px)]:min-h-[1020px] [@media(min-width:1600px)]:h-[1020px] [@media(min-width:1024px)_and_(max-width:1439px)]:min-h-[900px] [@media(min-width:1024px)_and_(max-width:1439px)]:h-[900px]">

      {/* Full-width background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/wellset hero.png"
          alt="Wellset India nationwide event activation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* Subtle left-side gradient for text readability */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: "linear-gradient(90deg, rgba(250, 246, 240, 0.86) 0%, rgba(250, 246, 240, 0.72) 26%, rgba(250, 246, 240, 0.18) 45%, rgba(250, 246, 240, 0) 58%)"
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-8 lg:px-12 xl:px-14 h-full">

        {/* Content Box aligned upper-left */}
        <div className="w-[100%] max-w-[500px] flex flex-col items-start pt-[38px]">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex items-center mb-[16px]"
          >
            <div className="bg-burgundy text-white font-bold uppercase text-[12px] tracking-wider px-4 py-1.5 flex items-center justify-center relative w-[110px] h-[28px] rounded-sm">
              <span className="relative z-10">SINCE 2006</span>
              <div className="absolute -right-2 top-0 h-full flex flex-col justify-between py-[2px]">
                <div className="w-[3px] h-[11px] bg-burgundy transform rotate-[20deg]" />
                <div className="w-[3px] h-[11px] bg-burgundy transform rotate-[20deg]" />
              </div>
            </div>
          </motion.div>

          {/* Heading */}
          <div className="flex flex-col mb-1 w-full">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="font-condensed font-bold text-[clamp(54px,4vw,66px)] leading-[0.9] tracking-[-0.03em] text-charcoal whitespace-nowrap uppercase block"
            >
              REAL CONNECTIONS.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="font-condensed font-bold text-[clamp(54px,4vw,66px)] leading-[0.9] tracking-[-0.03em] text-burgundy whitespace-nowrap uppercase block"
            >
              REAL IMPACT.
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              className="mt-[4px] relative inline-block self-start"
            >
              <h3 className="font-script text-[clamp(56px,4.4vw,72px)] leading-[0.95] text-burgundy -rotate-2">
                Across India.
              </h3>
              <svg
                className="absolute -bottom-1 left-0 w-[95%] h-[6px] text-burgundy"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M2,10 Q100,0 194,8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="text-muted-text text-[16px] leading-[1.6] max-w-[500px] mt-[18px]"
          >
            For over 20 years, Wellset India Events and Promotions has been taking brands, messages and experiences to people—wherever they are.
          </motion.p>

          {/* Stats Row */}
          <HeroStats />

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            className="w-full mt-[22px] mb-12"
          >
            <button className="group flex items-center justify-center gap-3 bg-burgundy text-white text-[13px] font-bold uppercase tracking-wide rounded-md w-[380px] h-[52px] shadow-sm hover:bg-burgundy-dark hover:-translate-y-0.5 transition-all duration-300">
              LET’S TALK ABOUT YOUR NEXT CAMPAIGN
              <ArrowRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Trusted By Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-6 border-t border-burgundy/10 pt-6 w-full max-w-[600px]"
          >
            <p className="text-[11px] font-bold text-burgundy uppercase tracking-widest mb-4">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap gap-8 items-center mt-2">
              <img 
                src="https://is4-ssl.mzstatic.com/image/thumb/Purple71/v4/c3/70/1d/c3701d0b-e506-190c-db3a-4ec366c4447e/source/512x512bb.jpg" 
                alt="Honda" 
                className="h-16 w-auto object-contain"
              />
              <img 
                src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20260314105353.jpg" 
                alt="Ministry of Petroleum and Natural Gas" 
                className="h-20 w-auto object-contain"
              />
              <img 
                src="https://e1.pxfuel.com/desktop-wallpaper/953/301/desktop-wallpaper-delhi-police-logo-police-logo.jpg" 
                alt="Delhi Police" 
                className="h-20 w-auto object-contain"
              />
              <img 
                src="https://tse1.mm.bing.net/th/id/OIP.WKaWZhi1msRjSsFFZEkEiwHaEu?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" 
                alt="Tata Motors" 
                className="h-14 w-auto object-contain"
              />
            </div>
            <div className="mt-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-burgundy/20 to-transparent" />
              <span className="text-burgundy/70 italic text-[13px] font-medium tracking-wide">
                ...and many more shaping India's growth
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-burgundy/20 to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
