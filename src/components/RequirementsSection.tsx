"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, CheckCircle2, UserCheck, FileCheck2 } from "lucide-react";

export default function RequirementsSection() {
  const [activeTab, setActiveTab] = useState<"general" | "administrative">("general");

  const categories = [
    { id: "general", label: "Syarat Peserta", icon: UserCheck },
    { id: "administrative", label: "Ketentuan Perlombaan", icon: FileCheck2 },
  ];

  const generalRequirements = [
    "Mahasiswa aktif KM PKU IPB University Angkatan 63.",
    "Melakukan pendaftaran peserta pada rentang tanggal 1 - 13 September 2026.",
    "Wajib mengikuti Technical Meeting pada tanggal 16 September 2026.",
    "Bersedia mengikuti seluruh tahapan babak penyisihan (19 Sept), semifinal (20 Sept), hingga final (26 Sept 2026).",
    "Menjaga integritas, objektivitas, serta etika selama merangkaikan karya debat maupun orasi.",
  ];

  const adminRequirements = [
    "Pendaftaran dilakukan secara kolektif / individu melalui formulir resmi yang disediakan panitia.",
    "Peserta mengikuti perlombaan cabang Debat atau Orasi sesuai ketentuan teknis yang disampaikan pada Technical Meeting.",
    "Pelaksanaan perlombaan bertempat di area kampus KM PKU IPB University.",
    "Penilaian juri dilakukan secara transparan berdasarkan rubrik argumentasi, retorika, dan pemahaman isu sosial-politik.",
  ];

  return (
    <section id="syarat" className="py-24 bg-[#F7F1E8] relative text-[#1F1F1F] border-b border-[#C5A059]/30">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-paper-texture opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#5A0B14] pb-6 mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-subheading font-bold uppercase tracking-widest text-[#5A0B14] mb-2">
              <ClipboardCheck className="w-4 h-4 text-[#5A0B14]" />
              <span>REGULASI KEMAHASISWAAN</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#5A0B14] uppercase tracking-tight">
              Persyaratan & Ketentuan
            </h2>
          </div>
          <span className="font-subheading text-xs font-bold uppercase tracking-widest text-[#6B3E2E]">
            BAGIAN IV — KETENTUAN RESMI
          </span>
        </div>

        {/* Tab Navigation (Sharp Editorial Buttons) */}
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

        {/* Tab Content Display (Official Document Sheet Layout) */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-8 sm:p-10 bg-[#FFFDF9] border border-[#C5A059]/40 relative font-body shadow-sm"
        >
          <div className="space-y-3">
            {activeTab === "general" &&
              generalRequirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-[#F7F1E8] border border-[#C5A059]/30">
                  <CheckCircle2 className="w-5 h-5 text-[#5A0B14] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#1F1F1F] leading-relaxed font-medium">{req}</p>
                </div>
              ))}

            {activeTab === "administrative" &&
              adminRequirements.map((req, idx) => (
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
    </section>
  );
}
