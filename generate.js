const fs = require('fs');
const urls = JSON.parse(fs.readFileSync('urls.json'));
const row1 = urls.slice(0, 20);
const row2 = urls.slice(20, 40);

const componentCode = `"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const row1Logos = ${JSON.stringify(row1, null, 2)};

const row2Logos = ${JSON.stringify(row2, null, 2)};

export function OurClientsSection() {
  return (
    <section className="py-24 bg-cream overflow-hidden">
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
            <div key={idx} className="w-[160px] md:w-[200px] h-[100px] mx-6 flex items-center justify-center shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image src={url} alt="Client Logo" width={140} height={80} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex w-max animate-marquee-reverse">
          {[...row2Logos, ...row2Logos].map((url, idx) => (
            <div key={idx} className="w-[160px] md:w-[200px] h-[100px] mx-6 flex items-center justify-center shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image src={url} alt="Client Logo" width={140} height={80} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('src/components/home/OurClientsSection.tsx', componentCode);
