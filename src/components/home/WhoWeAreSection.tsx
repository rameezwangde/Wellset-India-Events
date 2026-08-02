"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
} from "framer-motion";
import { Target, MapPin, Users, BarChart2, Sparkles, Calendar, Globe, Award, TrendingUp, ArrowRight, CheckCircle, Compass, HeartHandshake, Route, Flame, LineChart } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: Compass,
    title: "Local Expertise",
    desc: "Deep understanding of regional nuances and cultural contexts.",
  },
  {
    icon: HeartHandshake,
    title: "People-First Approach",
    desc: "Authentic connections that truly resonate with your core audience.",
  },
  {
    icon: Route,
    title: "End-to-End Delivery",
    desc: "From concept to on-ground execution with measurable results.",
  },
  {
    icon: Flame,
    title: "Creative Activations",
    desc: "Captivating audiences through interactive formats like Nukkad Nataks and roadshows.",
  },
  {
    icon: LineChart,
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

// ─── Component ───────────────────────────────────────────────────────────────

export function WhoWeAreSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
          PART 2: FEATURES GRID
          ══════════════════════════════════════════ */}
      <div className="relative w-full pb-20 pt-10">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-20">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative flex flex-col items-start text-left p-8 lg:p-10 rounded-[24px] bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_-12px_rgba(218,47,29,0.15)] hover:-translate-y-2 transition-all duration-500 ease-out w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] overflow-hidden"
              >
                {/* Subtle bottom gradient on hover */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#da2f1d] to-[#aa1f12] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Watermark Number */}
                <div className="absolute top-4 right-6 text-[80px] font-bold text-[#da2f1d]/[0.03] select-none pointer-events-none font-condensed group-hover:text-[#da2f1d]/[0.06] transition-colors duration-500">
                  0{i + 1}
                </div>

                {/* Icon container */}
                <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ease-out z-10 bg-[#da2f1d]/5 border border-[#da2f1d]/10 shadow-sm group-hover:bg-[#da2f1d] group-hover:border-transparent mb-8 group-hover:scale-110 group-hover:shadow-[0_8px_20px_rgba(218,47,29,0.3)] origin-left">
                  <feature.icon className="w-6 h-6 text-[#da2f1d] group-hover:text-white transition-colors duration-500" strokeWidth={2} />
                </div>

                {/* Text content */}
                <h4 className="font-bold text-[22px] mb-3 text-[#181818] group-hover:text-[#da2f1d] transition-colors duration-500 relative z-10">
                  {feature.title}
                </h4>
                <p className="text-[16px] leading-[1.7] text-[#5e5e5e] relative z-10">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
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
