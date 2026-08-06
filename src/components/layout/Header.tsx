"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div className="flex items-center justify-start h-full py-1">
          <Link href="/" className="relative flex items-center h-[74px] md:h-[78px] lg:h-[78px] w-auto">
             <Image src="/images/Wellset India.png" alt="Wellset India Events & Promotions" width={320} height={90} className="h-full w-auto object-contain scale-[1.25] md:scale-[1.35] origin-left" />
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
                  className={`text-[15px] font-medium transition-colors duration-200 ${isActive ? "text-burgundy" : "text-charcoal hover:text-burgundy"
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
          <button
            className="p-2 text-charcoal hover:text-burgundy transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-[84px] left-0 w-full bg-warm-white border-b border-border shadow-lg overflow-hidden flex flex-col"
          >
            <nav className="flex flex-col py-6 px-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-[18px] font-medium transition-colors ${pathname === link.href ? "text-burgundy" : "text-charcoal hover:text-burgundy"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border/50">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-burgundy text-white text-[16px] font-medium rounded-md h-[54px] shadow-sm active:bg-burgundy-dark transition-colors"
                >
                  Start a Campaign
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
