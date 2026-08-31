"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Volume2, ChevronUp } from "lucide-react";

interface SectionPersonality {
  id: string;
  name: string;
  pose: "/images/mascot_sleep.png" | "/images/mascot_stand.png";
  badge: string;
  message: string;
}

const SECTION_DATA: Record<string, SectionPersonality> = {
  home: {
    id: "home",
    name: "Utama",
    pose: "/images/mascot_sleep.png",
    badge: "Selamat Datang!",
    message: "Halo! Selamat datang di SERENTAK 5.0 X RBB 2026 partisipasi aktif mahasiswa KM PKU IPB University Angkatan 63!",
  },
  tentang: {
    id: "tentang",
    name: "Tentang",
    pose: "/images/mascot_stand.png",
    badge: "Semarak Untuk Bergerak",
    message: "SERENTAK 5.0 dikolaborasikan dengan Ruang Baca Bicara (RBB) 2026 menghadirkan konsep edukatif, santai, dan interaktif!",
  },
  tema: {
    id: "tema",
    name: "Tema Acara",
    pose: "/images/mascot_stand.png",
    badge: "Tema Utama",
    message: "Politrik: Seni Berkuasa dengan Propaganda — gagasan utama SERENTAK 5.0 X RBB 2026!",
  },
  rangkaian: {
    id: "rangkaian",
    name: "Rangkaian",
    pose: "/images/mascot_sleep.png",
    badge: "Tahapan Acara",
    message: "Dari Opening, Debat, Orasi, hingga Closing & RBB dengan Pameran Buku dan Talkshow!",
  },
  lomba: {
    id: "lomba",
    name: "Cabang Lomba",
    pose: "/images/mascot_sleep.png",
    badge: "Kompetisi",
    message: "Siapkan gagasan terbaikmu di Kompetisi Debat dan Kompetisi Orasi KM PKU Angkatan 63!",
  },
  jadwal: {
    id: "jadwal",
    name: "Timeline",
    pose: "/images/mascot_stand.png",
    badge: "Catat Tanggal",
    message: "Pendaftaran dibuka 1 - 13 September 2026. Jangan sampai terlewat ya!",
  },
  syarat: {
    id: "syarat",
    name: "Persyaratan",
    pose: "/images/mascot_stand.png",
    badge: "Ketentuan",
    message: "Pastikan kamu mahasiswa aktif KM PKU IPB University Angkatan 63!",
  },
  guidebook: {
    id: "guidebook",
    name: "Buku Panduan",
    pose: "/images/mascot_stand.png",
    badge: "Guidebook Resmi",
    message: "Unduh Buku Panduan resmi untuk membaca regulasi lengkap perlombaan!",
  },
  faq: {
    id: "faq",
    name: "Tanya Jawab",
    pose: "/images/mascot_sleep.png",
    badge: "FAQ & Bantuan",
    message: "Ada pertanyaan seputar pendaftaran? Temukan jawabannya di FAQ!",
  },
  kontak: {
    id: "kontak",
    name: "Contact Person",
    pose: "/images/mascot_sleep.png",
    badge: "Helpdesk",
    message: "Tim Panitia SERENTAK siap membantu pertanyaan pendaftaranmu!",
  },
};

export default function InteractiveMascot() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [showSpeechBubble, setShowSpeechBubble] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showSpeechBubble) {
      timer = setTimeout(() => {
        setShowSpeechBubble(false);
      }, 7000);
    }
    return () => clearTimeout(timer);
  }, [showSpeechBubble, activeSection]);

  useEffect(() => {
    const sectionIds = Object.keys(SECTION_DATA);
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0.2,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (SECTION_DATA[id]) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const currentPersonality = SECTION_DATA[activeSection] || SECTION_DATA.home;

  const handleMascotClick = () => {
    if (isMinimized) {
      setIsMinimized(false);
      setShowSpeechBubble(true);
    } else {
      setShowSpeechBubble((prev) => !prev);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end pointer-events-none select-none">
      {/* Speech Bubble Container */}
      <AnimatePresence>
        {showSpeechBubble && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto mb-3 max-w-[280px] sm:max-w-xs p-4 rounded-xl bg-[#5A0B14] text-[#F7F1E8] border border-[#C5A059]/60 shadow-xl relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowSpeechBubble(false)}
              className="absolute top-2.5 right-2.5 p-1 rounded-full text-[#F7F1E8]/70 hover:text-[#C5A059] transition-colors cursor-pointer"
              aria-label="Tutup pesan"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Header Badge (Space Grotesk) */}
            <div className="flex items-center gap-1.5 mb-2 pr-5 font-subheading">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059]">
                {currentPersonality.badge}
              </span>
            </div>

            {/* Message Body (Inter) */}
            <p className="font-body text-xs sm:text-sm leading-relaxed text-[#F7F1E8] font-normal">
              "{currentPersonality.message}"
            </p>

            {/* Speech Bubble Tail */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-[#5A0B14] border-r border-b border-[#C5A059]/60 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover Tooltip when speech bubble is closed */}
      <AnimatePresence>
        {isHovered && !showSpeechBubble && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 3 }}
            className="pointer-events-auto mb-2 px-3 py-1.5 rounded-md bg-[#1A0B0B] text-[#C5A059] border border-[#C5A059]/50 text-[11px] font-subheading font-bold shadow-md flex items-center gap-1.5"
          >
            <Volume2 className="w-3 h-3 text-[#C5A059]" />
            <span>Klik aku!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mascot Main Interactive Trigger */}
      <motion.div
        className="pointer-events-auto relative group cursor-pointer"
        onClick={handleMascotClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {isMinimized ? (
          /* Minimized State Icon */
          <div className="relative w-12 h-12 rounded-full bg-[#1A0B0B] border-2 border-[#C5A059] flex items-center justify-center shadow-xl">
            <Image
              src={currentPersonality.pose}
              alt="Mascot Avatar"
              width={36}
              height={36}
              className="object-contain"
            />
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C5A059] border border-[#1A0B0B] flex items-center justify-center">
              <ChevronUp className="w-2.5 h-2.5 text-[#1A0B0B]" />
            </div>
          </div>
        ) : (
          /* Full Mascot Widget */
          <div className="relative flex flex-col items-center">
            {/* Mascot Base Stand Graphic */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24">
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full relative flex items-center justify-center"
              >
                <Image
                  src={currentPersonality.pose}
                  alt="SERENTAK 5.0 Mascot"
                  fill
                  sizes="(max-width: 640px) 80px, 96px"
                  className="object-contain drop-shadow-md"
                  priority
                />
              </motion.div>
            </div>

            {/* Minimize button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMinimized(true);
                setShowSpeechBubble(false);
              }}
              className="absolute -top-1 -left-1 opacity-0 group-hover:opacity-100 p-1 rounded-full bg-[#1A0B0B] text-[#F7F1E8]/70 hover:text-[#C5A059] border border-[#C5A059]/40 transition-opacity cursor-pointer"
              title="Kecilkan Maskot"
            >
              <X className="w-3 h-3" />
            </button>

            {/* Section Indicator Pill */}
            <div className="mt-1 px-2.5 py-0.5 rounded-md bg-[#1A0B0B] border border-[#C5A059]/50 text-[10px] font-subheading font-bold text-[#C5A059] tracking-wider uppercase shadow-md flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span>{currentPersonality.name}</span>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
