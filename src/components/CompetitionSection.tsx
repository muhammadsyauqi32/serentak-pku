"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, FileText, ArrowUpRight, X, Mic, Users } from "lucide-react";

interface CompetitionProps {
  onOpenRegister: (categoryName?: string) => void;
}

interface CompetitionModalData {
  title: string;
  category: string;
  tagline: string;
  description: string;
  eligibility: string[];
  rules: string[];
}

export default function CompetitionSection({ onOpenRegister }: CompetitionProps) {
  const [selectedModal, setSelectedModal] = useState<CompetitionModalData | null>(null);

  const competitions = [
    {
      id: "debat",
      title: "Kompetisi Debat",
      category: "KM PKU Angkatan 63",
      icon: Users,
      shortDesc: "Wadah kompetisi debat bagi mahasiswa KM PKU Angkatan 63 untuk mengasah kemampuan berpikir kritis, argumentatif, serta keberanian dalam menyampaikan gagasan terkait isu sosial dan politik.",
      details: {
        title: "Kompetisi Debat",
        category: "KM PKU IPB University Angkatan 63",
        tagline: "Mengasah Berpikir Kritis & Kemampuan Berargumentasi",
        description:
          "Kompetisi Debat SERENTAK 5.0 X RBB 2026 menguji daya nalar, kepekaan isu strategis, serta keberanian mahasiswa dalam menyampaikan argumen kritis dan solutif terhadap isu sosial-politik.",
        eligibility: [
          "Mahasiswa aktif KM PKU IPB University Angkatan 63",
          "Telah mendaftar sesuai lini masa pendaftaran (1 - 13 September 2026)",
        ],
        rules: [
          "Setiap tim beranggotakan mahasiswa KM PKU Angkatan 63.",
          "Mengikuti Technical Meeting pada tanggal 16 September 2026.",
          "Babak Penyisihan dilaksanakan pada 19 September 2026.",
          "Babak Semifinal dilaksanakan pada 20 September 2026 dan Babak Final pada 26 September 2026.",
        ],
      },
    },
    {
      id: "orasi",
      title: "Kompetisi Orasi",
      category: "KM PKU Angkatan 63",
      icon: Mic,
      shortDesc: "Wadah penyampaian gagasan dan retorika bagi mahasiswa KM PKU Angkatan 63 untuk menyuarakan aspirasi dan pandangan terhadap isu sosial-politik secara persuasif.",
      details: {
        title: "Kompetisi Orasi",
        category: "KM PKU IPB University Angkatan 63",
        tagline: "Keberanian Menyuarakan Gagasan dan Aspirasi",
        description:
          "Kompetisi Orasi SERENTAK 5.0 X RBB 2026 menjadi panggung penyampaian gubahan pesan dan retorika kritis mahasiswa dalam merespons realitas sosial dan politik di masyarakat.",
        eligibility: [
          "Mahasiswa aktif KM PKU IPB University Angkatan 63",
          "Telah mendaftar sesuai lini masa pendaftaran (1 - 13 September 2026)",
        ],
        rules: [
          "Peserta bersifat perorangan / wakil mahasiswa KM PKU Angkatan 63.",
          "Mengikuti Technical Meeting pada tanggal 16 September 2026.",
          "Penyisihan dilaksanakan pada 19 September 2026.",
          "Semifinal dilaksanakan pada 20 September 2026 dan Final pada 26 September 2026.",
        ],
      },
    },
  ];

  return (
    <section id="lomba" className="py-24 bg-[#F7F1E8] relative text-[#1F1F1F] border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5A0B14]/10 border border-[#5A0B14]/20 mb-4 font-subheading">
            <Trophy className="w-4 h-4 text-[#5A0B14]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#5A0B14]">
              Cabang Perlombaan
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#5A0B14] mb-4 uppercase">
            Kompetisi SERENTAK 5.0
          </h2>
          <p className="font-body text-sm sm:text-base text-[#6B3E2E] max-w-2xl mx-auto">
            Wadah pengembangan berpikir kritis, berargumentasi, serta penyampaian gagasan bagi mahasiswa KM PKU IPB University Angkatan 63.
          </p>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto rounded-full mt-6" />
        </div>

        {/* Competition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {competitions.map((comp) => {
            const Icon = comp.icon;
            return (
              <motion.div
                key={comp.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-[#FFFDF9] border border-[#C5A059]/30 hover:border-[#C5A059] shadow-sm transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-subheading px-3 py-1 rounded-md bg-[#5A0B14]/10 text-[#5A0B14] text-xs font-bold uppercase tracking-wider">
                      {comp.category}
                    </span>
                    <div className="w-12 h-12 rounded-lg bg-[#5A0B14] border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-subheading text-2xl font-bold text-[#1F1F1F] mb-3 group-hover:text-[#5A0B14] transition-colors uppercase">
                    {comp.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[#6B3E2E] leading-relaxed mb-8">
                    {comp.shortDesc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center gap-3 font-subheading">
                  <button
                    onClick={() => setSelectedModal(comp.details)}
                    className="w-full sm:w-1/2 py-3 rounded-md bg-[#F7F1E8] hover:bg-[#EBE0D0] text-[#1F1F1F] font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059]/30"
                  >
                    <FileText className="w-4 h-4 text-[#5A0B14]" />
                    <span>Detail Syarat</span>
                  </button>

                  <button
                    onClick={() => onOpenRegister(comp.title)}
                    className="w-full sm:w-1/2 py-3 rounded-md bg-[#C5A059] hover:bg-[#E5C378] text-[#1A0B0B] font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059]"
                  >
                    <span>Daftar Lomba</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Modal Detail */}
      <AnimatePresence>
        {selectedModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 text-[#1F1F1F] shadow-2xl border border-[#C5A059]/40 max-h-[90vh] overflow-y-auto font-body"
            >
              <button
                onClick={() => setSelectedModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-[#1F1F1F]/60 hover:text-[#5A0B14] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-block px-3 py-1 rounded bg-[#5A0B14]/10 text-[#5A0B14] font-subheading text-xs font-bold uppercase tracking-wider mb-3">
                {selectedModal.category}
              </div>

              <h3 className="font-heading text-2xl text-[#5A0B14] mb-2 uppercase">
                {selectedModal.title}
              </h3>

              <p className="font-subheading text-xs sm:text-sm text-[#6B3E2E] font-semibold mb-6">
                "{selectedModal.tagline}"
              </p>

              <p className="font-body text-xs sm:text-sm text-[#1F1F1F] leading-relaxed mb-6">
                {selectedModal.description}
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <h4 className="font-subheading font-bold text-[#5A0B14] mb-2 uppercase">Ketentuan Peserta:</h4>
                  <ul className="list-disc list-inside space-y-1 text-[#6B3E2E]">
                    {selectedModal.eligibility.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-subheading font-bold text-[#5A0B14] mb-2 uppercase">Jadwal Perlombaan:</h4>
                  <ul className="list-disc list-inside space-y-1 text-[#6B3E2E]">
                    {selectedModal.rules.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#C5A059]/20 flex justify-end font-subheading">
                <button
                  onClick={() => {
                    const compTitle = selectedModal.title;
                    setSelectedModal(null);
                    onOpenRegister(compTitle);
                  }}
                  className="px-6 py-3 rounded-md bg-[#C5A059] hover:bg-[#E5C378] text-[#1A0B0B] font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer"
                >
                  Daftar Sekarang
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
