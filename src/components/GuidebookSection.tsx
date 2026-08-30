"use client";

import { motion } from "framer-motion";
import { Download, FileText, CheckCircle2, ShieldAlert, Sparkles, BookOpenCheck } from "lucide-react";

interface GuidebookSectionProps {
  onOpenGuidebook: () => void;
}

export default function GuidebookSection({ onOpenGuidebook }: GuidebookSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-[#2A050A] via-[#58000E] to-[#3D030D] text-[#FAF6F0] relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute inset-0 bg-motif-dark opacity-30 pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-80 h-80 bg-[#C5A059]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#2A050A]/80 border-2 border-[#C5A059]/50 backdrop-blur-xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Text Block */}
          <div className="space-y-4 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B0000]/60 border border-[#C5A059]/40 text-[#E5C378] text-xs font-bold uppercase tracking-wider">
              <BookOpenCheck className="w-4 h-4" />
              <span>Dokumen Panduan Resmi</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black gold-gradient-text">
              Panduan Perlombaan
            </h2>

            <p className="text-sm sm:text-base text-[#FAF6F0]/85 leading-relaxed">
              Pelajari seluruh ketentuan teknis, naskah puisi wajib, regulasi poster propaganda, rubrik penilaian juri, serta lampiran surat pernyataan melalui guidebook resmi SERENTAK 2026.
            </p>

            {/* Checklist inside banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#FAF6F0]/90 font-medium">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#E5C378] shrink-0" />
                <span>Naskah 5 Puisi Wajib Pilihan Juri</span>
              </div>

              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#E5C378] shrink-0" />
                <span>Template Surat Pernyataan Materai</span>
              </div>

              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#E5C378] shrink-0" />
                <span>Rincian Rubrik Penilaian Dewan Juri</span>
              </div>

              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#E5C378] shrink-0" />
                <span>Panduan Teknis Pengumpulan Drive</span>
              </div>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0 w-full lg:w-auto">
            <button
              onClick={onOpenGuidebook}
              className="w-full lg:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#E5C378] via-[#C5A059] to-[#9E7B35] text-[#3D030D] hover:brightness-110 font-bold uppercase tracking-widest text-sm shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 border border-[#FFF3C4]/60 cursor-pointer active:scale-95"
            >
              <Download className="w-5 h-5" />
              <span>Download Guidebook (PDF)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
