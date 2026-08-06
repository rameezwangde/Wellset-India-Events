"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroStats } from "./HeroStats";

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: image moves slower than scroll
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  // Fade content as user scrolls past
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, 60]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-cream h-auto min-h-[100vh] pb-16 lg:pb-0 lg:min-h-[980px] lg:h-[980px] [@media(min-width:1600px)]:min-h-[1020px] [@media(min-width:1600px)]:h-[1020px] [@media(min-width:1024px)_and_(max-width:1439px)]:min-h-[900px] [@media(min-width:1024px)_and_(max-width:1439px)]:h-[900px]"
    >

      {/* Full-width background with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image
          src="/images/wellset hero.png"
          alt="Wellset India nationwide event activation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_top] lg:object-top"
        />
        {/* Mobile overlay for text readability, desktop gradient */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cream/60 via-cream/30 to-transparent lg:hidden" />
        <div
          className="absolute inset-0 w-full h-full hidden lg:block"
          style={{
            background: "linear-gradient(90deg, rgba(250, 246, 240, 0.86) 0%, rgba(250, 246, 240, 0.72) 26%, rgba(250, 246, 240, 0.18) 45%, rgba(250, 246, 240, 0) 58%)"
          }}
        />
      </motion.div>

      {/* Content container — fades on scroll */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-[1480px] px-8 lg:px-12 xl:px-14 h-full"
        style={{ opacity: contentOpacity, y: contentY }}
      >

        {/* Content Box aligned upper-left */}
        <div className="w-[100%] max-w-[500px] flex flex-col items-start pt-[38px]">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-center mb-[16px]"
          >
            <div className="bg-burgundy text-white font-bold uppercase text-[12px] tracking-wider px-4 py-1.5 flex items-center justify-center relative w-[110px] h-[28px] rounded-sm">
              <span className="relative z-10">SINCE 2006</span>
            </div>
          </motion.div>

          {/* Heading — clip-path reveal effect */}
          <div className="flex flex-col mb-1 w-full">
            <motion.span
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-condensed font-bold text-[clamp(46px,8vw,66px)] leading-[0.9] tracking-[-0.03em] text-charcoal uppercase block break-words drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] lg:drop-shadow-none"
            >
              REAL CONNECTIONS.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-condensed font-bold text-[clamp(46px,8vw,66px)] leading-[0.9] tracking-[-0.03em] text-burgundy uppercase block break-words drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] lg:drop-shadow-none"
            >
              REAL IMPACT.
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 25, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-[4px] relative inline-block self-start drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] lg:drop-shadow-none"
            >
              <h3 className="font-script text-[clamp(56px,4.4vw,72px)] leading-[0.95] text-burgundy -rotate-2">
                Across India.
              </h3>
              <motion.svg
                className="absolute -bottom-1 left-0 w-[95%] h-[6px] text-burgundy"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.0, ease: "easeOut" }}
              >
                <motion.path
                  d="M2,10 Q100,0 194,8"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 1.0, ease: "easeOut" }}
                />
              </motion.svg>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="text-charcoal lg:text-muted-text font-medium lg:font-normal text-[16px] leading-[1.6] max-w-[500px] mt-[18px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] lg:drop-shadow-none font-semibold lg:font-normal"
          >
            For over 20 years, Wellset India Events and Promotions has been taking brands, messages and experiences to people—wherever they are.
          </motion.p>

          {/* Stats Row */}
          <HeroStats />

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
            className="w-full mt-[22px] mb-6 lg:mb-12"
          >
            <button className="group flex items-center justify-center gap-3 bg-burgundy text-white text-[13px] font-bold uppercase tracking-wide rounded-md w-[100%] max-w-[380px] h-[52px] shadow-sm hover:bg-burgundy-dark hover:-translate-y-0.5 transition-all duration-300">
              LET'S TALK ABOUT YOUR NEXT CAMPAIGN
              <ArrowRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Catchy Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-2 lg:mt-6 border-t border-burgundy/10 pt-5 lg:pt-6 w-full max-w-[600px]"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-burgundy/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:border-burgundy/30 transition-colors">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-burgundy to-[#f95945]" />
              <h4 className="text-[16px] sm:text-[18px] font-bold text-burgundy mb-2">Driving India's Brand Stories</h4>
              <p className="text-charcoal/80 text-[14px] sm:text-[15px] leading-relaxed font-medium italic">
                "From bustling metro malls to the deepest rural markets, we deliver end-to-end activation strategies that capture attention, build unshakeable trust, and ignite real action."
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

