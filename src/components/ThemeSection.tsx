"use client";

import { motion } from "framer-motion";
import { Scroll, Quote } from "lucide-react";

export default function ThemeSection() {
  return (
    <section id="tema" className="py-24 bg-[#1A0B0B] text-[#F7F1E8] relative overflow-hidden border-b border-[#C5A059]/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Publication Manifesto Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-14 border-2 border-[#C5A059]/40 bg-[#5A0B14]/40 relative text-center shadow-2xl"
        >
          {/* Subtle Corner Accents */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#C5A059]" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#C5A059]" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#C5A059]" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#C5A059]" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#1A0B0B] border border-[#C5A059]/50 mb-8 font-subheading">
            <Scroll className="w-4 h-4 text-[#C5A059]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              TEMA UTAMA KEGIATAN
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#C5A059] tracking-wide mb-6 uppercase drop-shadow-sm">
            Tema Kegiatan
          </h2>

          <div className="relative my-8 py-6 border-y border-[#C5A059]/40 max-w-4xl mx-auto">
            <Quote className="w-10 h-10 text-[#C5A059]/40 mx-auto mb-2" />
            <h3 className="font-subheading text-2xl sm:text-4xl md:text-5xl font-bold text-[#F7F1E8] uppercase tracking-wide leading-tight">
              "Politrik: Seni Berkuasa dengan Propaganda"
            </h3>
          </div>

          <p className="font-body max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-[#F7F1E8]/90 leading-relaxed">
            Tema ini menjadi gagasan utama SERENTAK 5.0 X RBB 2026 yang diselenggarakan oleh Departemen Kajian Aksi dan Strategis Ormawa Eksekutif PKU, menghadirkan ruang literasi mahasiswa dan diskusi kritis atas dinamika isu sosial-politik mahasiswa.
          </p>

          <div className="mt-10 pt-6 border-t border-[#C5A059]/20 font-subheading text-xs uppercase tracking-widest text-[#C5A059] font-bold">
            DEPARTEMEN KAJIAN AKSI DAN STRATEGIS • ORMAWA EKSEKUTIF PKU 2026
          </div>
        </motion.div>

      </div>
    </section>
  );
}
