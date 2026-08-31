"use client";

import { motion } from "framer-motion";
import { Scroll } from "lucide-react";

export default function ThemeSection() {
  return (
    <section id="tema" className="py-24 bg-[#1A0B0B] text-[#F7F1E8] relative overflow-hidden border-b border-[#C5A059]/30">
      {/* Dark paper texture grid */}
      <div className="absolute inset-0 bg-dark-paper opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge (Space Grotesk) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5A0B14] border border-[#C5A059]/40 mb-6 font-subheading"
        >
          <Scroll className="w-4 h-4 text-[#C5A059]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
            Tema Utama
          </span>
        </motion.div>

        {/* Section Heading (Requirement 4: <h2>Tema Kegiatan</h2>) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#C5A059] tracking-wide mb-4 leading-tight max-w-4xl mx-auto uppercase drop-shadow-sm"
        >
          Tema Kegiatan
        </motion.h2>
        <div className="w-20 h-1 bg-[#C5A059] mx-auto rounded-full mb-6" />

        {/* Theme Title */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="font-subheading text-2xl sm:text-4xl md:text-5xl font-bold text-[#F7F1E8] mb-6 uppercase"
        >
          "Politrik: Seni Berkuasa dengan Propaganda"
        </motion.h3>

        {/* Description (Space Grotesk Font) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-subheading max-w-3xl mx-auto text-base sm:text-lg text-[#F7F1E8]/90 leading-relaxed font-medium"
        >
          Tema ini menjadi gagasan utama SERENTAK 5.0 X RBB 2026 yang diselenggarakan oleh Departemen Kajian Aksi dan Strategis Ormawa Eksekutif PKU, menghadirkan ruang literasi mahasiswa dan diskusi kritis atas dinamika isu sosial-politik mahasiswa.
        </motion.p>
      </div>
    </section>
  );
}
