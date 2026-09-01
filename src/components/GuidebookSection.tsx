"use client";

import { ExternalLink, BookOpenCheck, CheckCircle2 } from "lucide-react";
import { GUIDEBOOK_DRIVE_URL } from "./GuidebookModal";

interface GuidebookSectionProps {
  onOpenGuidebook: () => void;
}

export default function GuidebookSection({ onOpenGuidebook }: GuidebookSectionProps) {
  return (
    <section id="guidebook" className="py-24 bg-[#5A0B14] text-[#F7F1E8] relative overflow-hidden border-b border-[#C5A059]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 bg-[#1A0B0B] border-2 border-[#C5A059]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Text Block */}
          <div className="space-y-5 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#5A0B14] border border-[#C5A059]/40 text-[#C5A059] font-subheading text-xs font-bold uppercase tracking-wider">
              <BookOpenCheck className="w-4 h-4" />
              <span>DOKUMEN RESMI PANDUAN</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#C5A059] uppercase tracking-tight">
              Panduan Perlombaan
            </h2>

            <p className="font-body text-sm sm:text-base text-[#F7F1E8]/90 leading-relaxed">
              Pelajari seluruh ketentuan teknis perlombaan Debat dan Orasi, alur babak penyisihan hingga final, serta regulasi Ruang Baca Bicara (RBB) 2026 melalui guidebook resmi SERENTAK yang tersedia di Google Drive.
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

          {/* Right Action Buttons */}
          <div className="shrink-0 w-full lg:w-auto font-subheading flex flex-col sm:flex-row lg:flex-col gap-3">
            <button
              onClick={onOpenGuidebook}
              className="w-full lg:w-auto px-8 py-4 bg-[#C5A059] hover:bg-[#E5C378] text-[#1A0B0B] font-bold uppercase tracking-widest text-xs shadow-lg transition-colors flex items-center justify-center gap-3 border border-[#C5A059] cursor-pointer"
            >
              <BookOpenCheck className="w-5 h-5" />
              <span>Pratinjau Guidebook</span>
            </button>

            <a
              href={GUIDEBOOK_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto px-6 py-3.5 bg-[#1A0B0B] hover:bg-[#2A1212] text-[#C5A059] font-bold uppercase tracking-widest text-xs transition-colors flex items-center justify-center gap-2 border border-[#C5A059]/50 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Buka di Google Drive</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
