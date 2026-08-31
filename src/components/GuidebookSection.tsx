"use client";

import { Download, BookOpenCheck, CheckCircle2 } from "lucide-react";

interface GuidebookSectionProps {
  onOpenGuidebook: () => void;
}

export default function GuidebookSection({ onOpenGuidebook }: GuidebookSectionProps) {
  return (
    <section id="guidebook" className="py-20 bg-[#5A0B14] text-[#F7F1E8] relative overflow-hidden border-b border-[#C5A059]/30">
      {/* Editorial Grid */}
      <div className="absolute inset-0 bg-editorial-grid opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#1A0B0B] border border-[#C5A059]/40 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Text Block */}
          <div className="space-y-4 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5A0B14] border border-[#C5A059]/40 text-[#C5A059] text-xs font-subheading font-bold uppercase tracking-wider">
              <BookOpenCheck className="w-4 h-4" />
              <span>Dokumen Panduan Resmi</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#C5A059] uppercase tracking-tight">
              Panduan Perlombaan
            </h2>

            <p className="font-body text-sm sm:text-base text-[#F7F1E8]/90 leading-relaxed">
              Pelajari seluruh ketentuan teknis perlombaan Debat dan Orasi, alur babak penyisihan hingga final, serta regulasi Ruang Baca Bicara (RBB) 2026 melalui guidebook resmi SERENTAK.
            </p>

            {/* Checklist inside banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-body text-[#F7F1E8]/90 font-medium">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Regulasi Teknis Kompetisi Debat</span>
              </div>

              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Ketentuan Penampilan Orasi</span>
              </div>

              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Rubrik Penilaian & Bobot Argumen</span>
              </div>

              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Jadwal Lengkap Rangkaian RBB 2026</span>
              </div>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0 w-full lg:w-auto font-subheading">
            <button
              onClick={onOpenGuidebook}
              className="w-full lg:w-auto px-8 py-4 rounded-md bg-[#C5A059] hover:bg-[#E5C378] text-[#1A0B0B] font-bold uppercase tracking-widest text-xs shadow-lg transition-colors flex items-center justify-center gap-3 border border-[#C5A059] cursor-pointer"
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
