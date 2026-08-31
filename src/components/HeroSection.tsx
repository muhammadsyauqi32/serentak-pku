"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onOpenRegister: () => void;
  onOpenGuidebook: () => void;
}

export default function HeroSection({ onOpenRegister, onOpenGuidebook }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center justify-center bg-[#5A0B14] text-[#F7F1E8] overflow-hidden border-b border-[#C5A059]/30">
      {/* Editorial Grid Background */}
      <div className="absolute inset-0 bg-editorial-grid opacity-25 pointer-events-none" />

      {/* Decorative Golden Hairline Borders */}
      <div className="absolute top-10 left-6 hidden lg:block opacity-40">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="#C5A059">
          <path d="M0,0 L30,0 L0,30 Z" fill="#C5A059" opacity="0.4" />
          <path d="M0,0 L100,0 L0,100" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="absolute bottom-10 right-6 hidden lg:block opacity-40 rotate-180">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="#C5A059">
          <path d="M0,0 L30,0 L0,30 Z" fill="#C5A059" opacity="0.4" />
          <path d="M0,0 L100,0 L0,100" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* Main Grid Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Title, Subtitle, Description, CTA Buttons */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Event Header Pill (Space Grotesk) */}


            {/* Main Event Title (Bungee Font) */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-5xl sm:text-7xl lg:text-7xl xl:text-8xl text-[#C5A059] tracking-tight leading-none mb-4 uppercase drop-shadow-sm"
            >
              SERENTAK 5.0
            </motion.h1>

            {/* Subtitle (Space Grotesk) */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-subheading text-xl sm:text-2xl md:text-3xl font-bold text-[#F7F1E8] tracking-wide mb-6 text-balance uppercase"
            >
              "Politrik: Seni Berkuasa dengan Propaganda"
            </motion.h2>

            {/* Description (Inter Font) */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-sm sm:text-base md:text-lg text-[#F7F1E8]/90 leading-relaxed mb-8 max-w-2xl text-balance"
            >
              Kegiatan perlombaan sekaligus event interaktif yang melibatkan partisipasi aktif mahasiswa KM PKU IPB University Angkatan 63 dalam merespons isu sosial-politik melalui wadah edukatif dan kritis.
            </motion.p>

            {/* CTA Buttons (Space Grotesk) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-subheading flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-4"
            >
              <button
                onClick={onOpenRegister}
                className="w-full sm:w-auto px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#1A0B0B] bg-[#C5A059] hover:bg-[#E5C378] rounded-md shadow-lg transition-colors flex items-center justify-center gap-3 cursor-pointer border border-[#C5A059]"
              >
                <span>Daftar Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenGuidebook}
                className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-[#F7F1E8] bg-[#1A0B0B]/80 hover:bg-[#1A0B0B] border border-[#C5A059]/50 rounded-md transition-colors flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#C5A059]" />
                <span>Lihat Guidebook Lomba</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Hero Mascot Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative py-4"
          >
            {/* Solid Editorial Frame Backdrop */}


            {/* Floating Idle Mascot Illustration */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-80 h-80 sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px] flex items-center justify-center py-6 group">
              <Image
                src="/images/mascot_stand.png"
                alt="SERENTAK 5.0 Event Mascot"
                fill
                sizes="(max-width: 768px) 320px, 350px"
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </motion.div>

            {/* Mascot Greeting Speech Pill */}
            {/* <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative z-10 my-4 mx-4 px-5 py-3 rounded-xl bg-[#1A0B0B] border border-[#C5A059]/60 text-[#F7F1E8] text-center max-w-xs"
            >
              <div className="flex items-center justify-center gap-1.5 text-[11px] font-subheading font-bold text-[#C5A059] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Maskot Resmi SERENTAK</span>
              </div>
              <p className="font-body text-xs text-[#F7F1E8]/90 leading-relaxed font-normal">
                "Halo! Siap membaca isu, menyuarakan gagasan, dan bergerak bersama?"
              </p>
            </motion.div> */}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
