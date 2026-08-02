"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const row1Logos = [
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682430/Delhi_Police_Logo_qnqmqx.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682428/logo-mother-dairy-milk-dairy-products-ice-cream-png-favpng-ygpsPcxwDpKTYjDYDYgEtn2pS_nljqo3.jpg",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682426/Hindustan_Petroleum_Logo.svg_wuxa7e.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682424/1361973_mclcw9.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682422/iocl20logo20high20res_xwm5nn.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682421/Seal_of_the_Municipal_Corporation_Of_Delhi.svg_uzb0gp.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682419/BSES_NEW-a153f0cb_jpgtej.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682417/treet_jmushe.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682414/honda-logo-1_qh73e3.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682413/2017-logo-Tata-Motors_yrx5s9.jpg",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682411/Ministry-of-Jal-Shakti_trdnej.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682408/png-transparent-logo-bureau-of-indian-standards-brand-symbol-indian-architecture-angle-text-triangle_gikotm.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682406/MSME_Logo_uer8sz.svg",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682404/NPCC-Preview_lxvda6.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682403/cii_uuazmc.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682401/Screenshot_2026-05-14_174910_tielpy.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682399/unnamed_snzi0u.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682396/NBCC_ANNUAL_REPORT_2014_15.svg_bxd4bd.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682395/1bd4fba9fcb7949c2de8ad604b8414a4_tbha32.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682393/India_Post_Dak_Sewa_Jan_Sewa_New_Logo_Final_kk0gyb.png"
];

const row2Logos = [
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682392/Oil_India-Logo.wine_wsbyql.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682390/Screenshot_2026-05-14_180714_awkxum.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682388/channels4_profile_z9ukjr.jpg",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682386/ff51b7b049893eae43a610ba035395df_vtfuat.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785682384/Sony_TV_new_piubnz.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681680/Mountain_Dew_logo__international_gtbrqv.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681678/Cadbury-Logo.wine_hskl7t.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681676/Dove-Logo-1969-2004_ykwyqc.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681674/Tang-Logo-2015_yr95vv.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681663/Punjab_National_Bank_new_logo.svg_ary5wb.webp",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681655/Silica_Logo_1_ereuzf.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681653/Colgate-Logo-2004_fzhklv.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681652/Nickelodeon_gssmh7.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681650/Dell-Logo_ztve6u.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681648/Gail_Logo_pfekce.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681646/Celeb_Fitness_Logo_rntfhy.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681645/Apollo_Hospitals_Logo_xohhqk.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681643/National_Health_Mission_Logo_brhnql.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681333/TCI_Logo_bcnhts.png",
  "https://res.cloudinary.com/crw5jo8x/image/upload/v1785681331/TPDDL_Logo_2_tidfjv.png"
];

export function OurClientsSection() {
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

      <div className="flex flex-col gap-12 relative before:absolute before:left-0 before:top-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-cream before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-cream after:to-transparent after:z-10">
        {/* Row 1 */}
        <div className="flex w-max animate-marquee">
          {[...row1Logos, ...row1Logos].map((url, idx) => (
            <div key={idx} className="w-[160px] md:w-[200px] h-[100px] mx-6 flex items-center justify-center shrink-0 transition-transform hover:scale-105 duration-300">
              <Image src={url} alt="Client Logo" width={140} height={80} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex w-max animate-marquee-reverse">
          {[...row2Logos, ...row2Logos].map((url, idx) => (
            <div key={idx} className="w-[160px] md:w-[200px] h-[100px] mx-6 flex items-center justify-center shrink-0 transition-transform hover:scale-105 duration-300">
              <Image src={url} alt="Client Logo" width={140} height={80} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
