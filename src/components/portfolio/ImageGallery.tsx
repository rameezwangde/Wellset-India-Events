"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface GalleryImage {
  url: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  // Close lightbox on escape key and handle arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        setDirection(-1);
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
      }
      if (e.key === "ArrowRight") {
        setDirection(1);
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
      }
    };
    
    // Prevent scrolling when lightbox is open
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, images.length]);

  const handleNext = () => {
    if (selectedIndex !== null) {
      setDirection(1);
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setDirection(-1);
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  if (images.length === 0) {
    return (
      <div className="py-20 text-center bg-gray-50 rounded-2xl border border-gray-100">
        <p className="text-gray-500">No images found for this project yet.</p>
      </div>
    );
  }

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => {
          const imageUrl = img.url;
          return (
            <div
              key={index}
              onClick={() => {
                setDirection(0);
                setSelectedIndex(index);
              }}
              className="relative aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group bg-gray-100 cursor-pointer"
            >
              <Image
                src={imageUrl}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white p-2 z-50 transition-colors bg-black/20 hover:bg-black/40 rounded-full"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 text-white/70 hover:text-white p-3 z-50 transition-all bg-black/20 hover:bg-black/40 hover:scale-110 rounded-full"
            >
              <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>

            <div 
              className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center overflow-hidden" 
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={selectedIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 }
                  }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={images[selectedIndex].url}
                    alt={`Gallery image ${selectedIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 text-white/70 hover:text-white p-3 z-50 transition-all bg-black/20 hover:bg-black/40 hover:scale-110 rounded-full"
            >
              <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
