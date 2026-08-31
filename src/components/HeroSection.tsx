"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles, Clock, Landmark, Trophy, Users, ShieldCheck } from "lucide-react";

interface HeroSectionProps {
  onOpenRegister: () => void;
  onOpenGuidebook: () => void;
}

export default function HeroSection({ onOpenRegister, onOpenGuidebook }: HeroSectionProps) {
  // Countdown Timer Logic to Target Date (e.g. 15 Oktober 2026)
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-10-15T23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center justify-center bg-gradient-to-b from-[#2A050A] via-[#38070F] to-[#4A0E17] text-[#FAF6F0] overflow-hidden">
      {/* Background Indonesian Geometric Motif & Ambient Lights */}
      <div className="absolute inset-0 bg-motif-dark opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8B0000]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Elegant Golden Border Frames & Cultural Motifs */}
      <div className="absolute top-10 left-6 hidden lg:block opacity-30">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="#C5A059">
          <path d="M0,0 L30,0 L0,30 Z" fill="#C5A059" opacity="0.3" />
          <path d="M0,0 L100,0 L0,100" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="40" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="absolute bottom-10 right-6 hidden lg:block opacity-30 rotate-180">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="#C5A059">
          <path d="M0,0 L30,0 L0,30 Z" fill="#C5A059" opacity="0.3" />
          <path d="M0,0 L100,0 L0,100" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="40" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">


        {/* Main Event Title */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-serif text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none mb-4">
          <span className="gold-gradient-text drop-shadow-md">SERENTAK 5.0 </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#FAF6F0] tracking-wide mb-6 text-balance">
          "Ruang Ekspresi dan Kompetisi Mahasiswa"
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-[#FAF6F0]/85 font-normal leading-relaxed mb-10 text-balance"
        >
          SERENTAK merupakan wadah kompetisi bergengsi tingkat tinggi yang dirancang untuk menginspirasi, menguji intelegensi, seni sastra, serta keberanian mahasiswa dalam menyampaikan gagasan kritis dan karya terbaik bagi kemajuan bangsa.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#3D030D] bg-gradient-to-r from-[#E5C378] via-[#C5A059] to-[#9E7B35] rounded-xl shadow-2xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer border border-[#FFF3C4]/60"
          >
            <span>Daftar Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenGuidebook}
            className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-[#FAF6F0] bg-[#58000E]/70 hover:bg-[#8B0000]/60 border border-[#C5A059]/50 rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#E5C378]" />
            <span>Lihat Guidebook Lomba</span>
          </button>
        </motion.div>

        {/* Countdown Timer Widget */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-2xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#2A050A]/70 border border-[#C5A059]/30 backdrop-blur-xl shadow-2xl mb-14"
        >
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#C5A059] font-bold mb-4">
            <Clock className="w-4 h-4 text-[#E5C378]" />
            <span>Batas Pendaftaran Gelombang 1 Berakhir Dalam:</span>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            <div className="bg-[#58000E]/80 border border-[#C5A059]/20 rounded-xl p-3 text-center">
              <span className="block font-serif text-2xl sm:text-4xl font-extrabold text-[#E5C378]">{String(timeLeft.days).padStart(2, "0")}</span>
              <span className="text-[10px] sm:text-xs text-[#FAF6F0]/70 uppercase tracking-wider">Hari</span>
            </div>

            <div className="bg-[#58000E]/80 border border-[#C5A059]/20 rounded-xl p-3 text-center">
              <span className="block font-serif text-2xl sm:text-4xl font-extrabold text-[#E5C378]">{String(timeLeft.hours).padStart(2, "0")}</span>
              <span className="text-[10px] sm:text-xs text-[#FAF6F0]/70 uppercase tracking-wider">Jam</span>
            </div>

            <div className="bg-[#58000E]/80 border border-[#C5A059]/20 rounded-xl p-3 text-center">
              <span className="block font-serif text-2xl sm:text-4xl font-extrabold text-[#E5C378]">{String(timeLeft.minutes).padStart(2, "0")}</span>
              <span className="text-[10px] sm:text-xs text-[#FAF6F0]/70 uppercase tracking-wider">Menit</span>
            </div>

            <div className="bg-[#58000E]/80 border border-[#C5A059]/20 rounded-xl p-3 text-center">
              <span className="block font-serif text-2xl sm:text-4xl font-extrabold text-[#E5C378]">{String(timeLeft.seconds).padStart(2, "0")}</span>
              <span className="text-[10px] sm:text-xs text-[#FAF6F0]/70 uppercase tracking-wider">Detik</span>
            </div>
          </div>
        </motion.div> */}

      </div>
    </section>
  );
}
