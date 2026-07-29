"use client";

import { motion, Variants } from "framer-motion";
import { Calendar, MapPin, Users, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    title: "20+",
    subtitle: "Years of\nExperience",
  },
  {
    icon: MapPin,
    title: "500+",
    subtitle: "Cities & Towns\nCovered",
  },
  {
    icon: Users,
    title: "Thousands",
    subtitle: "of Successful\nCampaigns",
  },
  {
    icon: ShieldCheck,
    title: "Trusted by",
    subtitle: "Brands, Government\n& NGOs",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.8 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function HeroStats() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="mt-[22px] w-full max-w-[500px]"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 relative">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const isLastDesktop = index === stats.length - 1;
          const isRightColMobile = index % 2 === 1;

          const isSmallTitle = stat.title === "Thousands" || stat.title === "Trusted by";

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col items-center text-center relative px-1 w-full`}
            >
              <div className="w-[38px] h-[38px] rounded-full border border-burgundy/20 flex items-center justify-center mb-2 text-burgundy">
                <Icon strokeWidth={1.5} className="w-[20px] h-[20px]" />
              </div>
              <h4
                className={`font-sans font-bold leading-[1.1] mb-1 ${isSmallTitle
                    ? "text-burgundy text-[19px]" // Kept slightly smaller for these two specific words so they don't break the column width
                    : "text-charcoal text-[21px]"
                  }`}
              >
                {stat.title}
              </h4>
              <p className="text-muted-text text-[12px] leading-[1.35] whitespace-pre-line font-medium">
                {stat.subtitle}
              </p>

              {/* Vertical Separator */}
              {!isLastDesktop && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[112px] bg-border" />
              )}
              {/* Mobile border */}
              {!isRightColMobile && (
                <div className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[112px] bg-border" />
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
