"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Target, MapPin, Users, BarChart2, Sparkles, Calendar, Globe, Award, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: Target,
    title: "Nationwide Execution",
    desc: "Consistent brand experiences across metros and remote regions alike.",
  },
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
];

const stats = [
  { value: "20+", label: "Years of Experience", icon: Calendar },
  { value: "500+", label: "Cities Covered", icon: Globe },
  { value: "1000+", label: "Campaigns Done", icon: Award },
  { value: "300+", label: "Happy Clients", icon: TrendingUp },
];

const images = {
  img01: { src: "/images/Government & NGO Awareness Campaigns.JPG", alt: "Wellset NGO campaign" },
  img02: { src: "/images/Conference, Events & Exhibition.JPG", alt: "Wellset conference" },
  img03: { src: "/images/BTL Activations.jpg", alt: "Wellset BTL activation" },
  img04: { src: "/images/Mall Activation.jpg", alt: "Wellset mall activation" },
  img05: { src: "/images/Nukkad Natak.JPG", alt: "Wellset Nukkad Natak" },
};

// ─── Component ───────────────────────────────────────────────────────────────

export function WhoWeAreSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const [activeFeature, setActiveFeature] = useState(0);
  
  // Map each feature to a specific image
  const featureImages = [
    images.img03, // Nationwide Execution
    images.img02, // Local Expertise
    images.img04, // People-First Approach
    images.img01, // End-to-End Delivery
    images.img05, // Creative Activations
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#f7f0e7]"
    >
      {/* Section Header */}
      <div className="relative w-full max-w-[1400px] mx-auto px-8 lg:px-20 pt-10 lg:pt-12 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          {/* Left: Heading */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-[#9E1B1B] font-bold uppercase tracking-[0.2em] text-[16px] lg:text-[18px]">Who We Are</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bold text-[clamp(36px,5vw,72px)] leading-[0.95] tracking-tight max-w-[700px]"
            >
              <span className="text-[#181818] block">NATIONWIDE REACH.</span>
              <span className="text-[#9E1B1B] block mt-1">MEANINGFUL IMPACT.</span>
            </motion.h2>
          </div>

          {/* Right: Intro text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5 pb-2"
          >
            <p className="text-[#181818] text-[20px] lg:text-[22px] leading-[1.7] font-medium">
              Wellset India Events & Promotions is a premium activation partner specializing in{" "}
              <span className="text-[#9E1B1B] font-bold">unforgettable brand experiences</span>.
            </p>
            <p className="text-[#5E5E5E] text-[17px] lg:text-[18px] leading-[1.9]">
              We understand that real impact happens on the ground — where real people interact with your message. Our expansive network enables us to execute flawlessly from bustling urban centers to the most remote rural villages.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          PART 2: STORY — Split scroll narrative
          ══════════════════════════════════════════ */}
      <div className="relative w-full max-w-[1400px] mx-auto px-8 lg:px-20 pt-8 lg:pt-12 pb-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Sticky image stack */}
          <div className="relative lg:sticky lg:top-24">
            <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
              {/* Main image */}
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full h-full rounded-[28px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.18)]"
              >
                <Image
                  src={featureImages[activeFeature].src}
                  alt={featureImages[activeFeature].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </motion.div>



              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-white/80 z-30 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#9E1B1B]/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#9E1B1B]" />
                </div>
                <div>
                  <div className="font-bold text-[20px] text-[#181818] leading-none">100%</div>
                  <div className="text-[10px] font-bold text-[#9E1B1B] uppercase tracking-widest mt-0.5">Commitment</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Narrative content */}
          <div className="flex flex-col gap-12 lg:pt-8">
            {/* Feature list */}
            <div className="space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className={`group flex items-start gap-5 p-5 rounded-2xl border transition-all duration-400 cursor-default ${
                    activeFeature === i 
                      ? "bg-white border-[#9E1B1B]/15 shadow-[0_12px_35px_rgba(83,28,21,0.08)]" 
                      : "bg-white/50 border-white/60 hover:bg-white/80"
                  }`}
                  onMouseEnter={() => setActiveFeature(i)}
                >
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                    activeFeature === i
                      ? "bg-[#9E1B1B] border-transparent"
                      : "bg-[#9E1B1B]/8 border-[#9E1B1B]/15"
                  }`}>
                    <feature.icon className={`w-5 h-5 transition-colors duration-300 ${
                      activeFeature === i ? "text-white" : "text-[#9E1B1B]"
                    }`} strokeWidth={1.5} />
                  </div>
                  <div className="pt-0.5">
                    <h4 className={`font-bold text-[17px] mb-1 transition-colors duration-300 ${
                      activeFeature === i ? "text-[#9E1B1B]" : "text-[#181818]"
                    }`}>
                      {feature.title}
                    </h4>
                    <p className="text-[#5E5E5E] text-[15px] leading-[1.6]">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <button className="group flex items-center gap-3 bg-[#9E1B1B] hover:bg-[#7d0f14] text-white rounded-full px-8 py-4 font-bold text-[16px] transition-all duration-300 hover:shadow-[0_14px_40px_rgba(158,27,27,0.35)] hover:scale-105">
                Learn More About Us
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          PART 3: TRUST — Stats bar
          ══════════════════════════════════════════ */}
      <div className="relative w-full px-8 lg:px-20 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-[1200px] mx-auto rounded-[32px] overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #7c0710 0%, #a61720 50%, #c4212b 100%)",
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
                  <span className="text-white font-bold text-[40px] md:text-[36px] lg:text-[48px] xl:text-[56px] leading-[1.1] block tracking-tight shadow-black/10 drop-shadow-sm group-hover:translate-y-[-2px] transition-transform duration-300">
                    {stat.value}
                  </span>
                  <span className="text-white/80 font-semibold text-[11px] lg:text-[13px] uppercase tracking-[0.2em] mt-2 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════
          PART 4: PROOF — Image mosaic strip
          ══════════════════════════════════════════ */}
      <div className="relative w-full overflow-hidden pb-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex gap-3 items-stretch"
          style={{ height: 280 }}
        >
          {[images.img01, images.img02, images.img03, images.img04].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="relative flex-1 overflow-hidden group"
              style={{ borderRadius: i === 0 ? "24px 0 0 0" : i === 3 ? "0 24px 0 0" : "0" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-[#9E1B1B]/0 group-hover:bg-[#9E1B1B]/20 transition-colors duration-500" />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
              >
                <CheckCircle className="w-5 h-5 text-white/80" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
