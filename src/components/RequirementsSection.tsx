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
    <section id="syarat" className="py-24 bg-[#F7F1E8] relative text-[#1F1F1F] border-b border-[#C5A059]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5A0B14]/10 border border-[#5A0B14]/20 mb-4 font-subheading">
            <ClipboardCheck className="w-4 h-4 text-[#5A0B14]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#5A0B14]">Regulasi Peserta</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#5A0B14] mb-4 uppercase">
            Persyaratan & Ketentuan
          </h2>
          <p className="font-body text-sm sm:text-base text-[#6B3E2E]">
            Ketentuan utama bagi mahasiswa KM PKU IPB University Angkatan 63 dalam mengikuti SERENTAK 5.0 X RBB 2026.
          </p>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto rounded-full mt-6" />
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 font-subheading">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-colors cursor-pointer ${
                  isActive
                    ? "bg-[#5A0B14] text-[#C5A059] border border-[#C5A059]/50 shadow-sm"
                    : "bg-[#FFFDF9] border border-[#C5A059]/30 text-[#6B3E2E] hover:border-[#C5A059]"
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
          className="p-8 sm:p-10 rounded-2xl bg-[#FFFDF9] border border-[#C5A059]/30 shadow-sm relative font-body"
        >
          <div className="space-y-4">
            {activeTab === "general" &&
              generalRequirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-[#F7F1E8] border border-[#C5A059]/20">
                  <CheckCircle2 className="w-5 h-5 text-[#5A0B14] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#1F1F1F] leading-relaxed">{req}</p>
                </div>
              ))}

            {activeTab === "administrative" &&
              adminRequirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-[#F7F1E8] border border-[#C5A059]/20">
                  <CheckCircle2 className="w-5 h-5 text-[#5A0B14] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#1F1F1F] leading-relaxed">{req}</p>
                </div>
              ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-[#5A0B14]/10 border border-[#5A0B14]/20 flex items-center gap-3 font-subheading">
            <p className="text-xs text-[#5A0B14] font-bold">
              Catatan Penting: Seluruh peserta wajib menjaga ketertiban, objektivitas, dan objektivitas intelektual selama perlombaan berlangsung.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
