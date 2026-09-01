"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

interface HeroSectionProps {
  onOpenRegister: () => void;
  onOpenGuidebook: () => void;
}

function HeroMascot({ sizeClass, imageScaleClass = "scale-100" }: { sizeClass: string; imageScaleClass?: string }) {
  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      {/* Background Glow & Aura (Desktop Only) */}
      <div className="hidden lg:block absolute inset-0 m-auto w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-[#C5A059]/40 via-[#9E1B28]/30 to-transparent blur-3xl pointer-events-none scale-125 -z-10" />

      {/* Rotating Ornate Golden Decorative Rings (Desktop Only) */}
      <div className="hidden lg:flex absolute inset-0 m-auto w-[80%] h-[80%] rounded-full border border-dashed border-[#C5A059]/40 pointer-events-none -z-10 items-center justify-center animate-spin-slow">
        <div className="w-[80%] h-[80%] rounded-full border border-dotted border-[#C5A059]/30" />
      </div>

      {/* Radial Sunburst Rays (Desktop Only) */}
      <div className="hidden lg:flex absolute inset-0 m-auto w-[85%] h-[85%] opacity-25 pointer-events-none -z-10 items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#C5A059]">
          <g fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3">
            {[...Array(16)].map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="100"
                x2={100 + 95 * Math.cos((i * Math.PI) / 8)}
                y2={100 + 95 * Math.sin((i * Math.PI) / 8)}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Mascot Image Showcase */}
      <div className={`relative ${sizeClass} flex items-center justify-center py-2 group z-10 animate-mascot-float gpu-layer`}>
        <Image
          src="/images/mascot_stand.webp"
          alt="Maskot SERENTAK 5.0 X RBB 2026"
          fill
          sizes="(max-width: 768px) 320px, (max-width: 1200px) 500px, 600px"
          className={`object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] ${imageScaleClass} transition-transform duration-300 group-hover:scale-105`}
          priority
        />
      </div>
    </div>
  );
}

export default function HeroSection({ onOpenRegister, onOpenGuidebook }: HeroSectionProps) {
  return (
    <section id="home" className="relative pt-22 sm:pt-24 md:pt-20 lg:pt-22 pb-8 md:pb-12 flex flex-col justify-start items-center bg-[#5A0B14] text-[#F7F1E8] overflow-hidden border-b border-[#C5A059]/40">
      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* Left Column: Headline, Tagline, [Mobile Mascot], Description, CTA Buttons */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* 1. Main Event Title (Huge Editorial Typography) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-5xl sm:text-7xl lg:text-7xl xl:text-8xl text-[#C5A059] tracking-tight leading-none mb-2 uppercase drop-shadow-md"
            >
              SERENTAK 5.0 X RBB 2026
            </motion.h1>

            {/* 2. Subtitle / Theme Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="my-1.5 py-1 border-y border-[#C5A059]/40 w-full"
            >
              <p className="font-subheading text-xl sm:text-2xl md:text-3xl font-bold text-[#F7F1E8] tracking-wide uppercase">
                "Politrik: Seni Berkuasa dengan Propaganda"
              </p>
            </motion.div>

            {/* 3. Mobile Mascot Showcase (Posisi: Judul -> Tema -> Mascot -> Deskripsi -> CTA) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="lg:hidden flex flex-col items-center justify-center my-4 mx-auto w-full"
            >
              <HeroMascot sizeClass="w-[250px] h-[310px] sm:w-[280px] sm:h-[350px] md:w-[320px] md:h-[390px]" imageScaleClass="scale-100" />
            </motion.div>

            {/* 4. Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-sm sm:text-base md:text-lg text-[#F7F1E8]/90 leading-relaxed mb-6 mt-2 max-w-2xl text-balance"
            >
              Program kerja Departemen Kajian Aksi dan Strategis Ormawa Eksekutif PKU yang menghadirkan ruang kompetisi mahasiswa IPB, literasi, dan ekspresi kritis mahasiswa melalui ajang lomba mahasiswa 2026.
            </motion.p>

            {/* 5. CTA Buttons (Sharp, Bold Editorial Style) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-subheading flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-2"
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
            className="hidden lg:flex lg:col-span-6 flex-col items-center justify-center relative py-0"
          >
            <HeroMascot sizeClass="w-[380px] h-[460px] lg:w-[440px] lg:h-[540px] xl:w-[500px] xl:h-[600px]" imageScaleClass="scale-100" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
