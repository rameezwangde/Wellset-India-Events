"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const row1Logos = [
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872828/Tang_vftt0d.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872828/Gail_gqromt.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872821/TCI_q6hpjb.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872821/tata_swatch_b4ohqh.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872820/Tata_power_pswa75.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872820/SOny_euf8c8.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872820/pnb_bank_pgqymi.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872819/Silica_2_svgzte.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872819/Nicklodeon_sz5s1k.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872818/Oil_India_fok39z.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872817/National_Health_Mission_kbgmsa.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872817/NBCC_w00egi.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785911639/new_railways_qexq8i.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872816/Mountain_Dew_jhnyw3.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872815/MCI_Delhi_wmbozk.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785874309/Dairy_mjqxm1.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785874711/nsdc_uh93t3.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785911134/Bharat_sv7ccc.png"
];

const row2Logos = [
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872815/Jal_Shakti_mwemya.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872814/Hp_petrol_khfnxj.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872814/Indian_oil_qefnsy.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872813/Dove_k2zqm4.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872813/India_post_sgloau.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872812/Honda_wpxvqg.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872811/ghaziabad_q1hiqf.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872811/Dell_fdltie.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872810/Delhi_police_osvnjr.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872809/Colgate_isjtym.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872810/Bureau_ru4g8c.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872810/Celebrity_uxy4xs.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872809/Cadbury_zv1qgp.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872809/BSES_wpmnsy.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785872808/Apollo_vpjtby.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785875048/tret_xfn8ki.png"
];

export function OurClientsSection() {
  const getLogoClassName = (url: string) => {
    let baseClass = "w-full h-full object-contain";
    if (url.includes("new_railways")) {
      return `${baseClass} scale-90 md:scale-100`;
    } else if (url.includes("Bharat_sv7ccc")) {
      return `${baseClass} scale-[1.2] md:scale-[1.4]`;
    }
    return `${baseClass} scale-[1.3] md:scale-[1.5]`;
  };

  const getContainerClassName = () => {
    let baseClass = "w-[216px] h-[108px] md:w-[288px] md:h-[144px] flex items-center justify-center shrink-0 transition-transform hover:scale-105 duration-300";
    return baseClass;
  };

  return (
    <section className="pt-24 pb-8 bg-cream overflow-hidden">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-12 xl:px-14 mb-12 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-burgundy font-bold uppercase tracking-[0.2em] text-[12px] lg:text-[14px] mb-4 block"
        >
          Our Clients
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-charcoal font-bold text-[36px] md:text-[48px] leading-[1.1] tracking-tight"
        >
          Trusted by Industry Leaders
        </motion.h2>
      </div>

      <div className="flex flex-col gap-4 relative before:absolute before:left-0 before:top-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-cream before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-cream after:to-transparent after:z-10">
        {/* Row 1 */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[1, 2].map((set) => (
            <div key={set} className="flex w-max shrink-0 gap-4 md:gap-6 pr-4 md:pr-6" aria-hidden={set === 2 ? "true" : undefined}>
              {row1Logos.map((url, idx) => (
                <div key={`${set}-${idx}`} className={getContainerClassName()}>
                  <Image src={url} alt="Client Logo" width={320} height={160} className={getLogoClassName(url)} />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          {[1, 2].map((set) => (
            <div key={set} className="flex w-max shrink-0 gap-4 md:gap-6 pr-4 md:pr-6" aria-hidden={set === 2 ? "true" : undefined}>
              {row2Logos.map((url, idx) => (
                <div key={`${set}-${idx}`} className={getContainerClassName()}>
                  <Image src={url} alt="Client Logo" width={320} height={160} className={getLogoClassName(url)} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
