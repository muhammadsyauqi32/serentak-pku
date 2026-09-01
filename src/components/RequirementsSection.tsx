"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardCheck, CheckCircle2, UserCheck, FileCheck2, ChevronDown } from "lucide-react";

export default function RequirementsSection() {
  // Desktop Tab State
  const [activeTab, setActiveTab] = useState<"general" | "administrative">("general");

  // Mobile Accordion State (stores expanded category IDs)
  const [openAccordions, setOpenAccordions] = useState<string[]>(["general"]);

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = [
    {
      id: "general",
      label: "Persyaratan Peserta",
      icon: UserCheck,
      items: [
        "Mahasiswa aktif KM PKU IPB University Angkatan 63.",
        "Melakukan pendaftaran peserta pada rentang tanggal 1 - 13 September 2026.",
        "Wajib mengikuti Technical Meeting pada tanggal 16 September 2026.",
        "Bersedia mengikuti seluruh tahapan babak penyisihan (19 Sept), semifinal (20 Sept), hingga final (26 Sept 2026).",
        "Menjaga integritas, objektivitas, serta etika selama merangkaikan karya debat maupun orasi.",
      ],
    },
    {
      id: "administrative",
      label: "Ketentuan Perlombaan",
      icon: FileCheck2,
      items: [
        "Pendaftaran dilakukan secara kolektif / individu melalui formulir resmi yang disediakan panitia.",
        "Peserta mengikuti perlombaan cabang Debat atau Orasi sesuai ketentuan teknis yang disampaikan pada Technical Meeting.",
        "Pelaksanaan perlombaan bertempat di area kampus KM PKU IPB University.",
        "Penilaian juri dilakukan secara transparan berdasarkan rubrik argumentasi, retorika, dan pemahaman isu sosial-politik.",
      ],
    },
  ];

  return (
    <section id="syarat" className="py-16 sm:py-24 bg-[#F7F1E8] relative text-[#1F1F1F] border-b border-[#C5A059]/30">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-paper-texture opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#5A0B14] pb-4 sm:pb-6 mb-8 sm:mb-12 gap-2 sm:gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-subheading font-bold uppercase tracking-widest text-[#5A0B14] mb-2">
              <ClipboardCheck className="w-4 h-4 text-[#5A0B14]" />
              <span>REGULASI KEMAHASISWAAN</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl text-[#5A0B14] uppercase tracking-tight">
              Persyaratan & Ketentuan
            </h2>
          </div>
          <span className="font-subheading text-xs font-bold uppercase tracking-widest text-[#6B3E2E]">
            BAGIAN IV — KETENTUAN RESMI
          </span>
        </div>

        {/* ================================================================== */}
        {/* DESKTOP VIEW (md:block) - Maintained Original Tabs & Sheet         */}
        {/* ================================================================== */}
        <div className="hidden md:block">
          {/* Tab Navigation Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-8 font-subheading">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id as any)}
                  className={`flex items-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                    isActive
                      ? "bg-[#5A0B14] text-[#C5A059] border-[#C5A059]"
                      : "bg-[#FFFDF9] text-[#6B3E2E] border-[#C5A059]/40 hover:border-[#5A0B14]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-10 bg-[#FFFDF9] border border-[#C5A059]/40 relative font-body shadow-sm"
          >
            <div className="space-y-3">
              {categories
                .find((cat) => cat.id === activeTab)
                ?.items.map((req, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-[#F7F1E8] border border-[#C5A059]/30">
                    <CheckCircle2 className="w-5 h-5 text-[#5A0B14] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#1F1F1F] leading-relaxed font-medium">{req}</p>
                  </div>
                ))}
            </div>

            <div className="mt-8 p-4 bg-[#5A0B14] text-[#F7F1E8] border border-[#C5A059]/40 flex items-center gap-3 font-subheading">
              <p className="text-xs font-bold text-[#C5A059] tracking-wider uppercase">
                Catatan Penting: Seluruh peserta wajib menjaga ketertiban, integritas, dan objektivitas intelektual selama perlombaan berlangsung.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================================================================== */}
        {/* MOBILE VIEW (md:hidden) - Native Clean Accordion Experience        */}
        {/* ================================================================== */}
        <div className="block md:hidden space-y-4 font-body">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isOpen = openAccordions.includes(cat.id);

            return (
              <div
                key={cat.id}
                className="bg-[#FFFDF9] border border-[#C5A059]/40 shadow-xs overflow-hidden transition-all duration-200"
              >
                {/* Full-width Clickable Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(cat.id)}
                  aria-expanded={isOpen}
                  className="w-full min-h-[52px] p-4 flex items-center justify-between text-left bg-[#FFFDF9] active:bg-[#F4EBDC] transition-colors cursor-pointer border-b border-[#C5A059]/20"
                >
                  <div className="flex items-center gap-3 pr-2">
                    <div className="p-2 bg-[#5A0B14] text-[#C5A059] shrink-0 border border-[#C5A059]/40">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-subheading text-base font-bold text-[#5A0B14] uppercase tracking-wide">
                      {cat.label}
                    </span>
                  </div>

                  {/* Expand Indicator Chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="p-1 text-[#5A0B14] shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-[#5A0B14]" />
                  </motion.div>
                </button>

                {/* Animated Accordion Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 bg-[#FAF6F0] space-y-3 border-t border-[#C5A059]/20">
                        {cat.items.map((req, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-3.5 bg-[#FFFDF9] border border-[#C5A059]/30 rounded-none shadow-2xs"
                          >
                            <CheckCircle2 className="w-5 h-5 text-[#5A0B14] shrink-0 mt-0.5" />
                            <p className="text-sm text-[#1F1F1F] leading-relaxed font-medium text-left">
                              {req}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Mobile Catatan Penting Banner */}
          <div className="p-4 bg-[#5A0B14] text-[#F7F1E8] border border-[#C5A059]/40 font-subheading mt-6 shadow-sm">
            <p className="text-xs font-bold text-[#C5A059] tracking-wider uppercase leading-relaxed text-left">
              Catatan Penting: Seluruh peserta wajib menjaga ketertiban, integritas, dan objektivitas intelektual selama perlombaan berlangsung.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
