"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

interface HeroSectionProps {
  onOpenRegister: () => void;
  onOpenGuidebook: () => void;
}

function HeroMascot({ sizeClass }: { sizeClass: string }) {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`relative ${sizeClass} flex items-center justify-center py-2 group z-10`}
      >
        <Image
          src="/images/mascot_stand.png"
          alt="Maskot SERENTAK 5.0 X RBB 2026"
          fill
          sizes="(max-width: 768px) 320px, 550px"
          className="object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </motion.div>
    </div>
  );
}

export default function HeroSection({ onOpenRegister, onOpenGuidebook }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center justify-center bg-[#5A0B14] text-[#F7F1E8] overflow-hidden border-b border-[#C5A059]/40">
      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Headline, Tagline, [Mobile Mascot], Description, CTA Buttons */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* 1. Main Event Title (Huge Editorial Typography) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-5xl sm:text-7xl lg:text-7xl xl:text-8xl text-[#C5A059] tracking-tight leading-none mb-4 uppercase drop-shadow-md"
            >
              SERENTAK 5.0 X RBB 2026
            </motion.h1>

            {/* 2. Subtitle / Theme Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="my-3 py-2 border-y border-[#C5A059]/40 w-full"
            >
              <p className="font-subheading text-xl sm:text-2xl md:text-3xl font-bold text-[#F7F1E8] tracking-wide uppercase">
                "Politrik: Seni Berkuasa dengan Propaganda"
              </p>
            </motion.div>

            {/* 3. Mobile Mascot Showcase (Order: Judul -> Tema -> Mascot -> Deskripsi -> CTA) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="lg:hidden flex flex-col items-center justify-center my-4 w-full"
            >
              <HeroMascot sizeClass="w-64 h-64 sm:w-80 sm:h-80" />
            </motion.div>

            {/* 4. Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-sm sm:text-base md:text-lg text-[#F7F1E8]/90 leading-relaxed mb-8 mt-3 max-w-2xl text-balance"
            >
              Program kerja Departemen Kajian Aksi dan Strategis Ormawa Eksekutif PKU yang menghadirkan ruang kompetisi mahasiswa IPB, literasi, dan ekspresi kritis mahasiswa melalui ajang lomba mahasiswa 2026.
            </motion.p>

            {/* 5. CTA Buttons (Sharp, Bold Editorial Style) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-subheading flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-4"
            >
              <a
                href="https://ipb.link/registrasi-lomba-serentak-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1A0B0B] bg-[#C5A059] hover:bg-[#E5C378] transition-colors flex items-center justify-center gap-3 cursor-pointer border border-[#C5A059] shadow-md"
              >
                <span>Daftar Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenGuidebook}
                className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#F7F1E8] bg-[#1A0B0B] hover:bg-[#2A1212] border border-[#C5A059]/60 transition-colors flex items-center justify-center gap-2.5 cursor-pointer shadow-md"
              >
                <FileText className="w-4 h-4 text-[#C5A059]" />
                <span>Lihat Guidebook Lomba</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Desktop Hero Mascot Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center relative py-4"
          >
            <HeroMascot sizeClass="w-80 h-80 sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px]" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
