"use client";

import { motion } from "framer-motion";
import { Sparkles, PenTool, Lightbulb, Palette, Compass, Lock, ArrowUpRight, Calendar, FileText } from "lucide-react";

// ============================================================================
// CONFIGURATION & GOOGLE FORM LINK
// Ubah IS_KARYA_REGISTRATION_OPEN menjadi true ketika pendaftaran dibuka.
// Ganti KARYA_FORM_URL dengan tautan Google Form resmi Sayembara Karya.
// ============================================================================
export const IS_KARYA_REGISTRATION_OPEN = false;
export const KARYA_FORM_URL = "https://ipb.link/sayembara-karya-serentak-2026";

export default function KaryaSection() {
  const highlights = [
    {
      title: "Kreativitas",
      englishTitle: "Creativity",
      icon: Palette,
      description: "Ruang kebebasan berekspresi melalui seni, karya visual, dan eksplorasi bentuk karya.",
    },
    {
      title: "Gagasan & Perspektif",
      englishTitle: "Ideas",
      icon: Lightbulb,
      description: "Wadah menuangkan pemikiran solutif, ide konseptual, dan sudut pandang mahasiswa.",
    },
    {
      title: "Ekspresi Mandiri",
      englishTitle: "Expression",
      icon: PenTool,
      description: "Penyaluran orisinalitas aspirasi serta artikulasi gagasan dalam merespons realitas.",
    },
    {
      title: "Pemikiran Kritis",
      englishTitle: "Critical Thinking",
      icon: Compass,
      description: "Refleksi dan daya nalar mendalam mengenai isu sosial-politik serta kemahasiswaan.",
    },
  ];

  return (
    <section id="karya" className="py-24 bg-[#140808] relative text-[#F7F1E8] border-b border-[#C5A059]/40 overflow-hidden">
      {/* Background Subtle Editorial Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#C5A059]/40 pb-6 mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-subheading font-bold uppercase tracking-widest text-[#C5A059] mb-2">
              <span>OPEN REGISTRATION • SAYEMBARA KARYA</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#C5A059] uppercase tracking-tight">
              Sayembara Karya
            </h2>
          </div>

          {!IS_KARYA_REGISTRATION_OPEN && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#5A0B14] border border-[#C5A059]/50 text-[#C5A059] font-subheading text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-4 h-4 shrink-0 text-[#C5A059]" />
              <span>COMING SOON</span>
            </div>
          )}
        </div>

        {/* Main Editorial Card / Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">

          {/* Left Column: Description & Artwork Document Visual (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#1A0B0B] border-2 border-[#C5A059]/40 p-8 sm:p-12 flex flex-col justify-between relative shadow-2xl"
          >
            {/* Corner Decorative Accents */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#C5A059]" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#C5A059]" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#C5A059]" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#C5A059]" />

            <div>
              <div className="flex items-center justify-between border-b border-[#C5A059]/30 pb-4 mb-6">
                <span className="font-subheading text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                  PROGRAM KHUSUS • SERENTAK 5.0 X RBB 2026
                </span>
                <span className="text-[11px] font-subheading px-2.5 py-0.5 border border-[#C5A059]/40 text-[#F7F1E8]/70 uppercase tracking-widest">
                  KARYA MAHASISWA
                </span>
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl text-[#F7F1E8] mb-6 leading-tight">
                Ruang Artikulasi & Ekspresi Mahasiswa
              </h3>

              <p className="font-body text-sm sm:text-base text-[#F7F1E8]/90 leading-relaxed mb-8">
                Sayembara Karya SERENTAK 5.0 X RBB 2026 merupakan ruang bagi mahasiswa untuk menuangkan gagasan, kreativitas, dan perspektif melalui karya yang berkaitan dengan isu sosial-politik serta kemahasiswaan.
              </p>

              {/* Subtle Document / Artwork Visual Component */}
              <div className="p-6 bg-[#5A0B14]/30 border border-[#C5A059]/30 relative overflow-hidden mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#1A0B0B] border border-[#C5A059] text-[#C5A059] shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-subheading text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-1">
                      PUBLIKASI & MEDIA ESPRESI MAHASISWA
                    </h4>
                    <p className="font-body text-xs text-[#F7F1E8]/80 leading-normal">
                      Mengajak setiap mahasiswa menyalurkan gagasan kritis dan estetis dalam format publikasi karya intelektual maupun dokumentasi kreatif.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Action Button */}
            <div className="pt-6 border-t border-[#C5A059]/30 font-subheading">
              {IS_KARYA_REGISTRATION_OPEN ? (
                <a
                  href={KARYA_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#C5A059] hover:bg-[#E5C378] text-[#1A0B0B] font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059] shadow-md"
                >
                  <span>Daftar Sayembara Karya</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <button
                  disabled
                  className="w-full py-4 bg-[#140808] text-[#F7F1E8]/40 border border-[#C5A059]/20 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-not-allowed select-none"
                >
                  <Lock className="w-4 h-4 text-[#F7F1E8]/40" />
                  <span>Coming Soon</span>
                </button>
              )}
            </div>
          </motion.div>

          {/* Right Column: 4 Highlight Pillars Cards (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-1 gap-4"
          >
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 bg-[#1A0B0B]/80 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="p-3 bg-[#5A0B14]/50 border border-[#C5A059]/40 text-[#C5A059] shrink-0 group-hover:bg-[#C5A059] group-hover:text-[#1A0B0B] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-subheading text-base font-bold text-[#F7F1E8] uppercase tracking-wide">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-subheading uppercase tracking-widest text-[#C5A059]/70 font-semibold">
                        {item.englishTitle}
                      </span>
                    </div>
                    <p className="font-body text-xs text-[#F7F1E8]/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
