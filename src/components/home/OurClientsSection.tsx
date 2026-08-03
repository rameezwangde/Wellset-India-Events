"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const row1Logos = [
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682430/Delhi_Police_Logo_qnqmqx.png",
  "/images/clients/logo-mother-dairy-milk-dairy-products-ice-cream-png-favpng-ygpsPcxwDpKTYjDYDYgEtn2pS_nljqo3_transparent.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682426/Hindustan_Petroleum_Logo.svg_wuxa7e.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682424/1361973_mclcw9.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682422/iocl20logo20high20res_xwm5nn.png",
  "/images/clients/Seal_of_the_Municipal_Corporation_Of_Delhi_transparent.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682419/BSES_NEW-a153f0cb_jpgtej.png",
  "/images/clients/treet_jmushe_transparent.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682414/honda-logo-1_qh73e3.png",
  "/images/clients/2017-logo-Tata-Motors_yrx5s9_transparent.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682411/Ministry-of-Jal-Shakti_trdnej.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785759149/bureay_kb3e9g.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682406/MSME_Logo_uer8sz.svg",
  "/images/clients/NPCC-Preview_lxvda6_transparent.png",
  "/images/clients/cii_uuazmc_transparent.png",
  "/images/clients/Screenshot_2026-05-14_174910_tielpy_transparent.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682399/unnamed_snzi0u.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682396/NBCC_ANNUAL_REPORT_2014_15.svg_bxd4bd.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682395/1bd4fba9fcb7949c2de8ad604b8414a4_tbha32.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682393/India_Post_Dak_Sewa_Jan_Sewa_New_Logo_Final_kk0gyb.png"
];

const row2Logos = [
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682392/Oil_India-Logo.wine_wsbyql.png",
  "/images/clients/Screenshot_2026-05-14_180714_awkxum_transparent.png",
  "/images/clients/channels4_profile_z9ukjr_transparent.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682386/ff51b7b049893eae43a610ba035395df_vtfuat.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682384/Sony_TV_new_piubnz.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681680/Mountain_Dew_logo__international_gtbrqv.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681678/Cadbury-Logo.wine_hskl7t.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681676/Dove-Logo-1969-2004_ykwyqc.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681674/Tang-Logo-2015_yr95vv.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681663/Punjab_National_Bank_new_logo.svg_ary5wb.webp",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785758561/silica_xgvl8h.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681653/Colgate-Logo-2004_fzhklv.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681652/Nickelodeon_gssmh7.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681650/Dell-Logo_ztve6u.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681648/Gail_Logo_pfekce.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681646/Celeb_Fitness_Logo_rntfhy.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681645/Apollo_Hospitals_Logo_xohhqk.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681643/National_Health_Mission_Logo_brhnql.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785760299/ChatGPT_Image_Aug_3_2026_06_00_56_PM_acnwbl.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785758886/ChatGPT_Image_Aug_3_2026_05_37_41_PM_yjvoua.png"
];

export function OurClientsSection() {
  const getLogoClassName = (url: string) => {
    let baseClass = "w-auto h-full object-contain";
    if (url.toLowerCase().includes("nickelodeon")) return `${baseClass} scale-75 md:scale-50`;
    if (url.toLowerCase().includes("bureay_kb3e9g")) return `${baseClass} scale-125 md:scale-[1.4]`;
    if (url.toLowerCase().includes("silica")) return `${baseClass} scale-150 md:scale-[1.8]`;
    return baseClass;
  };

  const getContainerClassName = (url: string) => {
    let baseClass = "h-[110px] md:h-[145px] flex items-center justify-center shrink-0 transition-transform hover:scale-105 duration-300";
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

      <div className="flex flex-col gap-16 relative before:absolute before:left-0 before:top-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-cream before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-cream after:to-transparent after:z-10">
        {/* Row 1 */}
        <div className="flex w-max gap-12 md:gap-20 animate-marquee">
          {[...row1Logos, ...row1Logos].map((url, idx) => (
            <div key={idx} className={getContainerClassName(url)}>
              <Image src={url} alt="Client Logo" width={400} height={145} className={getLogoClassName(url)} />
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex w-max gap-12 md:gap-20 animate-marquee-reverse">
          {[...row2Logos, ...row2Logos].map((url, idx) => (
            <div key={idx} className={getContainerClassName(url)}>
              <Image src={url} alt="Client Logo" width={400} height={145} className={getLogoClassName(url)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
