"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Target, MapPin, Users, BarChart2, Play, Sparkles, Image as ImageIcon, Calendar, Globe, Award, TrendingUp } from "lucide-react";

export function WhoWeAreSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 20%"],
  });

  // Mouse parallax setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 80, mass: 1 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const xTransform = useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12]);
  const yTransform = useTransform(smoothMouseY, [-0.5, 0.5], [-12, 12]);
  
  const xTransformOpposite = useTransform(smoothMouseX, [-0.5, 0.5], [8, -8]);
  const yTransformOpposite = useTransform(smoothMouseY, [-0.5, 0.5], [8, -8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    if (window.innerWidth < 768) return; // Disable on mobile
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const features = [
    {
      icon: Target,
      title: "Nationwide Execution",
      desc: "Delivering consistent brand experiences across metros and remote regions alike.",
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      desc: "Deep understanding of regional nuances and cultural contexts for targeted impact.",
    },
    {
      icon: Users,
      title: "People-First Approach",
      desc: "Creating authentic connections that resonate with your core audience.",
    },
    {
      icon: BarChart2,
      title: "End-to-End Campaign Delivery",
      desc: "From concept to on-ground execution, ensuring measurable and lasting success.",
    },
  ];

  const stats = [
    { value: "20+", label: "Years", icon: Calendar },
    { value: "500+", label: "Cities", icon: Globe },
    { value: "1000+", label: "Campaigns", icon: Award },
    { value: "300+", label: "Clients", icon: TrendingUp },
  ];

  // Placeholder styling
  const placeholderStyle = {
    background: "linear-gradient(145deg, rgba(255,255,255,0.35), rgba(152,20,28,0.08)), #e8d9ca",
    border: "5px solid rgba(255, 250, 244, 0.96)",
    borderRadius: "22px",
    boxShadow: "0 24px 55px rgba(66, 20, 18, 0.18), 0 6px 18px rgba(66, 20, 18, 0.10)",
  };

  // Image Data configuration ready for real images
  const images = {
    img01: { src: "", alt: "Wellset India campaign main", position: "center center" },
    img02: { src: "", alt: "Wellset India campaign upper", position: "center center" },
    img03: { src: "", alt: "Wellset India campaign left", position: "center center" },
    img04: { src: "", alt: "Wellset India campaign right", position: "center center" },
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen overflow-x-clip overflow-y-visible py-24 lg:py-32"
      style={{
        background: `
          radial-gradient(circle at 26% 46%, rgba(167,19,28,0.08), transparent 32%),
          radial-gradient(circle at 77% 24%, rgba(193,72,60,0.05), transparent 27%),
          #f7f0e7
        `
      }}
    >
      {/* Decorative Texture / Contours */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply z-0" 
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-8 lg:px-12 flex flex-col justify-center h-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 lg:gap-8 items-center w-full mb-16 lg:mb-24">
          
          {/* Left Side: Creative Image Collage */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full isolate overflow-visible"
          style={{ height: "min(700px, 62vw)", maxHeight: "700px" }}
        >
          {/* Background Decorative Layer (z-1) */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center -translate-x-8 z-[1]">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, rotate: -20 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute w-[80%] h-[80%] rounded-full opacity-90"
              style={{
                background: "linear-gradient(145deg, #7d0710 0%, #a90d17 55%, #c72a32 100%)",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 20%, 80% 20%, 80% 80%, 20% 80%, 20% 0)" 
              }}
            />
            {/* India Map */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.14 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute w-[70%] h-[70%]"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full fill-[#7d0710]">
                <path d="M40,10 L50,5 L60,15 L70,30 L85,45 L80,60 L60,95 L45,95 L35,70 L15,50 L20,35 Z" stroke="none" />
              </svg>
            </motion.div>
          </div>

          {/* Orbit Lines (z-2) */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center -translate-x-8 z-[2]">
            <svg className="absolute w-[120%] h-[120%]" viewBox="0 0 100 100">
              <motion.ellipse 
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }}
                cx="50" cy="50" rx="45" ry="35" fill="none" stroke="#a90d17" strokeWidth="0.2" opacity="0.4" transform="rotate(-15 50 50)" 
              />
              <motion.ellipse 
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                cx="50" cy="50" rx="40" ry="40" fill="none" stroke="#a90d17" strokeWidth="0.15" opacity="0.3" 
              />
              <motion.ellipse 
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
                cx="50" cy="50" rx="50" ry="25" fill="none" stroke="#a90d17" strokeWidth="0.25" opacity="0.3" transform="rotate(10 50 50)" 
              />
              <circle cx="20" cy="30" r="1.5" fill="#c72a32" />
              <circle cx="80" cy="40" r="1" fill="#7d0710" />
              <circle cx="70" cy="80" r="1.5" fill="#a90d17" />
            </svg>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] right-[20%] text-[#c72a32]"
            >
              <Sparkles className="w-5 h-5 fill-current" />
            </motion.div>
          </div>

          {/* Connected Route Line */}
          <svg className="absolute w-[150%] h-full left-1/2 top-0 pointer-events-none z-[1] hidden lg:block" viewBox="0 0 500 500" preserveAspectRatio="none">
            <motion.path 
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2.5, ease: "easeInOut" }}
              d="M 100 250 Q 250 100 450 350" fill="none" stroke="rgba(158,27,27,0.14)" strokeWidth="1.5" strokeDasharray="6 8" 
            />
            <motion.circle r="3" fill="#9E1B1B">
              <animateMotion dur="15s" repeatCount="indefinite" path="M 100 250 Q 250 100 450 350" />
            </motion.circle>
          </svg>

          {/* Main Image 01 (z-10) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ x: xTransform, y: yTransform, width: "clamp(300px, 26vw, 430px)", aspectRatio: "4/5", left: "25%", top: "18%" }}
            className="absolute z-10 origin-center rotate-[0deg] max-md:w-[72vw] max-md:left-[14vw] max-md:top-[10%] max-md:!rotate-0 max-lg:left-[50%] max-lg:top-[50%] max-lg:-translate-x-[50%] max-lg:-translate-y-[50%]"
          >
            <motion.div
              style={placeholderStyle}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full h-full relative overflow-hidden"
            >
              {images.img01.src ? (
                <Image src={images.img01.src} alt={images.img01.alt} fill sizes="(max-width: 768px) 80vw, 35vw" className="object-cover" style={{ objectPosition: images.img01.position }} />
              ) : (
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 10px)" }} />
              )}
              {/* Inner Gradient Overlay */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(60, 10, 12, 0.16), transparent 35%)" }} />
              
              <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-white flex items-center gap-2 shadow-sm z-20">
                <ImageIcon className="w-3.5 h-3.5 text-[#9E1B1B]" />
                <span className="text-[#181818] text-[10px] font-bold tracking-widest uppercase">CLIENT CAMPAIGN 01</span>
              </div>
            </motion.div>

            {/* Play Button (z-40) */}
            <div 
              className="absolute z-40 flex items-center justify-center max-md:right-0 max-md:top-[50%]"
              style={{ top: "40%", right: "-28px" }}
            >
              <div className="relative flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-[#a60c16]"
                />
                <div className="w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] bg-[#a60c16] rounded-full flex items-center justify-center border-[6px] lg:border-[7px] border-[#fffaf4] shadow-[0_14px_35px_rgba(109,15,20,0.28)] relative z-10 pl-1">
                  <Play className="w-5 h-5 lg:w-6 lg:h-6 text-white fill-white" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Top Right Image 02 (z-30) */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ x: xTransformOpposite, y: yTransformOpposite, width: "clamp(220px, 19vw, 310px)", aspectRatio: "16/10", left: "57%", top: "7%", transform: "rotate(3deg)" }}
            className="absolute z-30 origin-bottom-left max-md:w-[42vw] max-md:top-[-5%] max-md:left-[60%] max-md:rotate-0 max-lg:top-[0%] max-lg:left-[65%]"
          >
            <motion.div
              style={placeholderStyle}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full h-full relative overflow-hidden"
            >
              {images.img02.src ? (
                <Image src={images.img02.src} alt={images.img02.alt} fill sizes="(max-width: 768px) 80vw, 35vw" className="object-cover" style={{ objectPosition: images.img02.position }} />
              ) : (
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 10px)" }} />
              )}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(60, 10, 12, 0.16), transparent 35%)" }} />
              <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white flex items-center gap-1.5 shadow-sm z-20">
                <ImageIcon className="w-3 h-3 text-[#9E1B1B]" />
                <span className="text-[#181818] text-[8px] font-bold tracking-widest uppercase">IMAGE 02</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Lower Left Image 03 (z-20) */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ x: xTransformOpposite, y: yTransformOpposite, width: "clamp(235px, 20vw, 330px)", aspectRatio: "16/10", left: "5%", top: "60%", transform: "rotate(-4deg)" }}
            className="absolute z-20 origin-top-right max-md:w-[46vw] max-md:top-[75%] max-md:left-[5%] max-md:rotate-0 max-lg:top-[75%] max-lg:left-[5%]"
          >
            <motion.div
              style={placeholderStyle}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full h-full relative overflow-hidden"
            >
              {images.img03.src ? (
                <Image src={images.img03.src} alt={images.img03.alt} fill sizes="(max-width: 768px) 80vw, 35vw" className="object-cover" style={{ objectPosition: images.img03.position }} />
              ) : (
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 10px)" }} />
              )}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(60, 10, 12, 0.16), transparent 35%)" }} />
              <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white flex items-center gap-1.5 shadow-sm z-20">
                <ImageIcon className="w-3 h-3 text-[#9E1B1B]" />
                <span className="text-[#181818] text-[8px] font-bold tracking-widest uppercase">IMAGE 03</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Lower Right Image 04 (z-25) */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ x: xTransform, y: yTransform, width: "clamp(215px, 18vw, 295px)", aspectRatio: "16/10", left: "57%", top: "70%", transform: "rotate(3deg)" }}
            className="absolute z-25 origin-top-left max-[420px]:hidden max-md:w-[40vw] max-md:top-[70%] max-md:left-[60%] max-md:rotate-0 max-lg:top-[70%] max-lg:left-[70%]"
          >
            <motion.div
              style={placeholderStyle}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full h-full relative overflow-hidden"
            >
              {images.img04.src ? (
                <Image src={images.img04.src} alt={images.img04.alt} fill sizes="(max-width: 768px) 80vw, 35vw" className="object-cover" style={{ objectPosition: images.img04.position }} />
              ) : (
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 10px)" }} />
              )}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(60, 10, 12, 0.16), transparent 35%)" }} />
              <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white flex items-center gap-1.5 shadow-sm z-20">
                <ImageIcon className="w-3 h-3 text-[#9E1B1B]" />
                <span className="text-[#181818] text-[8px] font-bold tracking-widest uppercase">IMAGE 04</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col relative z-30"
        >
          {/* Eyebrow Label */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#9E1B1B] text-[13px] font-bold uppercase tracking-[0.2em]">
              WHO WE ARE
            </span>
            <div className="h-[1px] w-[50px] bg-[#9E1B1B] relative flex items-center justify-end">
              <Sparkles className="w-3 h-3 text-[#9E1B1B] absolute -right-3" />
            </div>
          </div>

          {/* Heading */}
          <div className="relative mb-8">
            <span className="absolute -top-6 -left-4 text-[120px] font-bold text-[#181818] opacity-[0.025] select-none leading-none z-0">
              INDIA
            </span>
            <h2 className="relative z-10 font-sans font-bold text-[clamp(42px,5vw,72px)] leading-[0.95] tracking-tight">
              <span className="text-[#181818] block">NATIONWIDE REACH.</span>
              <span className="text-[#9E1B1B] block mt-1 relative inline-block">
                MEANINGFUL IMPACT.
                <svg className="absolute -bottom-2 left-0 w-full h-[8px] text-[#9E1B1B]" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M2,10 Q100,0 194,8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
          </div>

          {/* Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 text-[#5E5E5E] text-[18px] leading-[1.9] mb-12 max-w-[560px] relative z-10"
          >
            <p>
              Wellset India Events & Promotions is a premium activation partner specializing in
              unforgettable brand experiences. We understand that actual impact happens on the ground, 
              where real people interact with your message.
            </p>
            <p>
              Our expansive network enables us to execute flawlessly from bustling urban centers to the 
              most remote rural villages, building trust and delivering measurable results for every campaign.
            </p>
          </motion.div>

          {/* Vertical Timeline Features */}
          <div className="relative mb-16 max-w-[560px]">
            <div className="space-y-2">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + (0.1 * i) }}
                  className="group relative flex gap-6 items-start p-4 rounded-[16px] bg-white/30 border border-transparent transition-all duration-300 hover:bg-white/60 hover:border-[#9E1B1B]/10 hover:translate-x-[8px] hover:shadow-[0_12px_30px_rgba(83,28,21,0.06)]"
                >
                  {i !== features.length - 1 && (
                    <div className="absolute left-[39px] top-[48px] bottom-[-24px] w-[1.5px] bg-gradient-to-b from-[#9E1B1B]/30 to-[#9E1B1B]/10 overflow-visible">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#9E1B1B]/40" />
                    </div>
                  )}
                  <div className="absolute left-[54px] top-[34px] w-[20px] h-[1px] bg-gradient-to-r from-[#9E1B1B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10 shrink-0">
                    <div className="w-[46px] h-[46px] rounded-full border-[1.5px] border-[#9E1B1B]/20 flex items-center justify-center text-[#9E1B1B] bg-white group-hover:border-[#9E1B1B] group-hover:bg-[#fffaf4] group-hover:shadow-[0_0_15px_rgba(158,27,27,0.15)] transition-all duration-300">
                      <feature.icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                  </div>
                  <div className="pt-2.5">
                    <h4 className="text-[#181818] font-bold text-[17px] mb-1.5 group-hover:text-[#9E1B1B] transition-colors">{feature.title}</h4>
                    <p className="text-[#5E5E5E] text-[15px] leading-[1.6]">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
        </div>

        {/* Premium Statistics Panel - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="w-full relative z-20"
        >
          <div 
            className="w-full rounded-[28px] p-8 lg:p-10 flex items-center justify-between"
            style={{
              background: "linear-gradient(120deg, rgba(255,255,255,0.78), rgba(255,248,240,0.48))",
              border: "1px solid rgba(145,15,24,0.10)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 22px 50px rgba(80,28,22,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="group relative flex flex-col items-center justify-center w-1/4">
                {i !== 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-[70%] bg-gradient-to-b from-transparent via-[#9E1B1B]/15 to-transparent" />
                )}
                
                <stat.icon className="w-7 h-7 lg:w-8 lg:h-8 text-[#C73A3A] mb-4 opacity-80" strokeWidth={1.5} />
                
                <div className="relative">
                  <div className="absolute inset-0 bg-[#9E1B1B] opacity-0 blur-md group-hover:opacity-10 transition-opacity duration-300 rounded-full" />
                  <span className="relative text-[#9E1B1B] font-bold text-[clamp(32px,4vw,52px)] leading-none mb-3 block">
                    {stat.value}
                  </span>
                </div>
                
                <span className="text-[#181818] font-semibold text-[13px] lg:text-[14px] uppercase tracking-[0.15em] text-center mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
