"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Menu } from "lucide-react";

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-warm-white border-b border-border shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
    >
      <div className="mx-auto w-full max-w-[1480px] px-8 lg:px-12 xl:px-14 h-[84px] flex items-center justify-between grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr]">
        
        {/* Logo */}
        <div className="flex items-center justify-start">
          <Link href="/" className="flex flex-col text-burgundy w-[145px] lg:w-[160px]">
            <span className="font-sans font-bold text-xl lg:text-2xl leading-none tracking-tight flex items-center gap-1">
              WELLSET
              <span className="text-yellow-500 text-sm -translate-y-1">✦</span>
            </span>
            <span className="font-sans font-medium text-[8px] lg:text-[10.5px] uppercase tracking-wider leading-[1.1] text-charcoal mt-1">
              India Events & Promotions
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-[36px]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative group py-2"
              >
                <span
                  className={`text-[15px] font-medium transition-colors duration-200 ${
                    isActive ? "text-burgundy" : "text-charcoal hover:text-burgundy"
                  }`}
                >
                  {link.name}
                </span>
                {isActive && (
                  <span className="absolute bottom-1 left-0 w-full h-[1px] bg-burgundy rounded-full" />
                )}
                {!isActive && (
                  <span className="absolute bottom-1 left-0 w-0 h-[1px] bg-burgundy rounded-full transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center justify-end">
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-2 bg-burgundy text-white text-[14px] font-medium rounded-md h-[46px] px-[24px] shadow-sm hover:bg-burgundy-dark hover:-translate-y-0.5 transition-all duration-300"
          >
            Start a Campaign
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden justify-end">
          <button className="p-2 text-charcoal hover:text-burgundy transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
