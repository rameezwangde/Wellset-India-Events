"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Target, MapPin, Users, BarChart2, Sparkles, Calendar, Globe, Award, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: MapPin,
    title: "Local Expertise",
    desc: "Deep understanding of regional nuances and cultural contexts.",
  },
  {
    icon: Users,
    title: "People-First Approach",
    desc: "Authentic connections that truly resonate with your core audience.",
  },
  {
    icon: BarChart2,
    title: "End-to-End Delivery",
    desc: "From concept to on-ground execution with measurable results.",
  },
  {
    icon: Sparkles,
    title: "Creative Activations",
    desc: "Captivating audiences through interactive formats like Nukkad Nataks and roadshows.",
  },
  {
    icon: Target,
    title: "Strategic Impact",
    desc: "Data-driven campaigns designed to maximize engagement and ROI.",
  },
];

const stats = [
  { value: "Pan India", label: "Reach", icon: Globe },
  { value: "2,500+", label: "Towns & Cities Covered", icon: MapPin },
  { value: "150+", label: "Brands Served", icon: Award },
  { value: "300+", label: "Campaigns Executed", icon: TrendingUp },
];

const images = {
  img01: { src: "/images/illustrations/ngo_campaign_ill_1785325380269.png", alt: "Wellset NGO campaign" },
  img02: { src: "/images/illustrations/conference_event_ill_1785325426980.png", alt: "Wellset conference" },
  img03: { src: "/images/illustrations/btl_activation_ill_1785325326209.png", alt: "Wellset BTL activation" },
  img04: { src: "/images/illustrations/canopy_activation_ill_1785325294026.png", alt: "Wellset canopy activation" },
  img05: { src: "/images/illustrations/nukkad_natak_ill_1785325352350.png", alt: "Wellset Nukkad Natak" },
};

// Map each feature to a specific image
const featureImages = [
  images.img02, // Local Expertise
  images.img04, // People-First Approach
  images.img01, // End-to-End Delivery
  images.img05, // Creative Activations
  images.img03, // Strategic Impact
];

// ─── Component ───────────────────────────────────────────────────────────────

export function WhoWeAreSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeFeature, setActiveFeature] = useState(0);

  // Track scroll progress within the scroll-driven area
  const { scrollYProgress } = useScroll({
    target: scrollAreaRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress → active feature index
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const segmentSize = 1 / features.length;
    const newIndex = Math.min(
      features.length - 1,
      Math.floor(latest / segmentSize)
    );
    if (newIndex !== activeFeature) {
      setActiveFeature(newIndex);
    }
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#f7f0e7]"
    >
      {/* Section Header */}
      <div className="relative w-full max-w-[1400px] mx-auto px-8 lg:px-20 pt-10 lg:pt-12 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          {/* Left: Heading */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-4"
            >
              <span className="text-[#da2f1d] font-bold uppercase tracking-[0.2em] text-[16px] lg:text-[18px]">Who We Are</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-bold text-[clamp(36px,5vw,72px)] leading-[0.95] tracking-tight max-w-[700px]"
            >
              <span className="text-[#181818] block">NATIONWIDE REACH.</span>
              <span className="text-[#da2f1d] block mt-1">MEANINGFUL IMPACT.</span>
            </motion.h2>
          </div>

          {/* Right: Intro text */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="space-y-5 pb-2"
          >
            <p className="text-[#181818] text-[20px] lg:text-[22px] leading-[1.7] font-medium">
              Wellset India Events & Promotions is a premium activation partner specializing in{" "}
              <span className="text-[#da2f1d] font-bold">unforgettable brand experiences</span>.
            </p>
            <p className="text-[#5E5E5E] text-[17px] lg:text-[18px] leading-[1.9]">
              We understand that real impact happens on the ground — where real people interact with your message. Our expansive network enables us to execute flawlessly from bustling urban centers to the most remote rural villages.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          PART 2: STORY — Scroll-driven sticky narrative
          ══════════════════════════════════════════ */}
      <div
        ref={scrollAreaRef}
        className="relative w-full"
        style={{ height: `${features.length * 100}vh` }}
      >
        {/* Sticky container — stays pinned while user scrolls through features */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left: Image with crossfade */}
              <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.03 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute inset-0 rounded-[28px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.18)]"
                  >
                    <div className="absolute inset-0 bg-[#18181b] flex flex-col items-center justify-center overflow-hidden">
                      {/* Dynamic Gradient Background */}
                      <div className="absolute inset-0 opacity-40 transition-all duration-1000"
                        style={{
                          background: `radial-gradient(circle at ${activeFeature % 2 === 0 ? '0% 0%' : '100% 100%'}, #da2f1d 0%, transparent 70%)`
                        }}
                      />

                      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full w-full p-10">
                        <div className="mb-6 w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-2xl relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                          {(() => {
                            const Icon = features[activeFeature].icon;
                            return <Icon className="w-8 h-8 text-[#da2f1d] relative z-10" strokeWidth={1.5} />;
                          })()}
                        </div>

                        <div className="text-[160px] font-condensed font-bold text-white/5 leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                          0{activeFeature + 1}
                        </div>

                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight drop-shadow-lg relative z-10">
                          {features[activeFeature].title}
                        </h3>
                        <div className="w-12 h-1 bg-[#da2f1d] rounded-full mb-6 relative z-10 shadow-[0_0_15px_rgba(218,47,29,0.5)]" />
                        <p className="text-white/70 text-lg max-w-[85%] leading-relaxed relative z-10 font-medium">
                          {features[activeFeature].desc}
                        </p>
                      </div>

                      {/* Active feature label */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-center border-t border-white/10 pt-6"
                      >
                        <span className="text-white/40 text-[12px] font-bold uppercase tracking-[0.15em]">
                          {String(activeFeature + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}
                        </span>
                        <span className="text-[#da2f1d] text-[12px] font-bold uppercase tracking-[0.15em]">
                          Wellset India
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress dots */}
                <div className="absolute -right-6 lg:-right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
                  {features.map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-[6px] rounded-full transition-all duration-500"
                      animate={{
                        height: activeFeature === i ? 32 : 6,
                        backgroundColor: activeFeature === i ? "#da2f1d" : "rgba(158,27,27,0.2)",
                      }}
                    />
                  ))}
                </div>


              </div>

              {/* Right: Feature cards with scroll-driven highlight */}
              <div className="flex flex-col gap-4 lg:pt-0">
                {features.map((feature, i) => {
                  const isActive = activeFeature === i;
                  return (
                    <motion.div
                      key={i}
                      ref={(el) => { featureRefs.current[i] = el; }}
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className={`group relative flex items-start gap-5 p-6 rounded-2xl border transition-all duration-500 ease-out cursor-default overflow-hidden ${isActive
                          ? "bg-white border-[#da2f1d]/20 shadow-[0_20px_50px_-12px_rgba(218,47,29,0.15)] scale-[1.03]"
                          : "bg-white/40 backdrop-blur-md border-white/60 opacity-60 hover:opacity-80 hover:bg-white/50 scale-100 shadow-sm"
                        }`}
                    >
                      {/* Active indicator bar */}
                      <div
                        className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 rounded-r-full transition-all duration-500 ease-out ${isActive ? "h-1/2 bg-[#da2f1d] shadow-[2px_0_12px_rgba(218,47,29,0.6)] opacity-100" : "h-0 bg-transparent opacity-0"
                          }`}
                      />

                      {/* Icon container */}
                      <div className={`relative shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ease-out z-10 ${isActive
                          ? "bg-gradient-to-br from-[#da2f1d] to-[#aa1f12] text-white shadow-[0_8px_20px_rgba(218,47,29,0.35)] border-transparent"
                          : "bg-white border border-white text-[#da2f1d] shadow-sm shadow-black/5"
                        }`}>
                        {/* Subtle inner glow for active icon */}
                        {isActive && <div className="absolute inset-0 bg-white/20 rounded-2xl blur-md -z-10 mix-blend-overlay pointer-events-none" />}
                        <feature.icon className="w-6 h-6" strokeWidth={isActive ? 2 : 1.5} />
                      </div>

                      {/* Text content */}
                      <div className="pt-1 relative z-10">
                        <h4 className={`font-bold text-[18px] mb-1.5 transition-colors duration-500 ${isActive ? "text-[#da2f1d]" : "text-[#181818]"
                          }`}>
                          {feature.title}
                        </h4>
                        <p className={`text-[15px] leading-[1.6] transition-all duration-500 ${isActive ? "text-[#4a4a4a] opacity-100 transform translate-y-0" : "text-[#777] opacity-80 transform translate-y-1"
                          }`}>
                          {feature.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}


              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          PART 3: TRUST — Stats bar
          ══════════════════════════════════════════ */}
      <div className="relative w-full px-8 lg:px-20 pb-20 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-[1200px] mx-auto rounded-[32px] overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #da2f1d 0%, #da2f1d 50%, #da2f1d 100%)",
            boxShadow: "0 40px 100px -20px rgba(158,27,27,0.4), inset 0 1px 1px rgba(255,255,255,0.25)",
          }}
        >
          {/* Subtle noise pattern & decorative shapes for a premium feel */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-white/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-black/20 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 p-10 lg:p-14 gap-8 md:gap-4 lg:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 * i, ease: "easeOut" }}
                className="group relative flex flex-col items-center justify-center text-center py-4"
              >
                {/* Dividers */}
                {i !== 0 && (
                  <div className="hidden md:block absolute left-[-16px] lg:left-[-16px] xl:left-[-16px] top-1/2 -translate-y-1/2 w-px h-[70%] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                )}

                <div className="w-[56px] h-[56px] rounded-2xl bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-sm flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-400">
                  <stat.icon className="w-6 h-6 text-white drop-shadow-md" strokeWidth={1.5} />
                </div>

                <div className="flex flex-col items-center overflow-hidden">
                  <span className={`text-white font-bold ${stat.value === "Pan India" ? "text-[28px] md:text-[24px] lg:text-[32px] xl:text-[40px]" : "text-[40px] md:text-[36px] lg:text-[48px] xl:text-[56px]"} leading-[1.1] block tracking-tight shadow-black/10 drop-shadow-sm group-hover:translate-y-[-2px] transition-transform duration-300`}>
                    {stat.value}
                  </span>
                  <span className="text-white/80 font-semibold text-[11px] lg:text-[13px] uppercase tracking-[0.2em] mt-2 group-hover:text-white transition-colors duration-300 text-center">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>



    </section>
  );
}
