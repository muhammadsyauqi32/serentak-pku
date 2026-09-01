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
      code: "01",
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
      code: "02",
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
    <section id="lomba" className="py-24 bg-[#F7F1E8] relative text-[#1F1F1F] border-b border-[#C5A059]/30">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-paper-texture opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#5A0B14] pb-6 mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-subheading font-bold uppercase tracking-widest text-[#5A0B14] mb-2">
              <Trophy className="w-4 h-4 text-[#5A0B14]" />
              <span>AJANG UNJUK GAGASAN & RETORIKA</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#5A0B14] uppercase tracking-tight">
              Kompetisi Utama
            </h2>
          </div>
          <span className="font-subheading text-xs font-bold uppercase tracking-widest text-[#6B3E2E]">
            BAGIAN II — CABANG LOMBA
          </span>
        </div>

        <p className="font-body text-sm sm:text-base text-[#6B3E2E] max-w-3xl mb-12 leading-relaxed">
          Ajang <strong className="text-[#5A0B14]">kompetisi mahasiswa IPB</strong> dan <strong className="text-[#5A0B14]">lomba mahasiswa 2026</strong> yang menghadirkan ruang kompetisi debat, retorika orasi, serta ekspresi kreatif meliputi <strong className="text-[#5A0B14]">lomba puisi mahasiswa</strong> dan <strong className="text-[#5A0B14]">lomba propaganda mahasiswa</strong>.
        </p>

        {/* Editorial Catalogue Spread Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {competitions.map((comp) => {
            const Icon = comp.icon;
            return (
              <motion.div
                key={comp.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 sm:p-10 bg-[#FFFDF9] border border-[#C5A059]/40 hover:border-[#5A0B14] transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#C5A059]/30 pb-4 mb-6">
                    <span className="font-subheading text-xs font-bold uppercase tracking-widest text-[#5A0B14]">
                      {comp.code} • {comp.category}
                    </span>
                    <div className="w-9 h-9 bg-[#5A0B14] border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-subheading text-2xl sm:text-3xl font-bold text-[#1F1F1F] mb-4 group-hover:text-[#5A0B14] transition-colors uppercase tracking-wide">
                    {comp.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[#6B3E2E] leading-relaxed mb-8">
                    {comp.shortDesc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center gap-3 font-subheading">
                  <button
                    onClick={() => setSelectedModal(comp.details)}
                    className="w-full sm:w-1/2 py-3 bg-[#F7F1E8] hover:bg-[#EBE0D0] text-[#1F1F1F] font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059]/40 uppercase tracking-wider"
                  >
                    <FileText className="w-4 h-4 text-[#5A0B14]" />
                    <span>Detail Syarat</span>
                  </button>

                  <a
                    href="https://ipb.link/registrasi-lomba-serentak-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 py-3 bg-[#C5A059] hover:bg-[#E5C378] text-[#1A0B0B] font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059] uppercase tracking-wider shadow-sm"
                  >
                    <span>Daftar Lomba</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Modal Detail (Institutional Official Sheet Layout) */}
      <AnimatePresence>
        {selectedModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#FFFDF9] p-6 sm:p-10 text-[#1F1F1F] shadow-2xl border-2 border-[#C5A059] max-h-[90vh] overflow-y-auto font-body"
            >
              <button
                onClick={() => setSelectedModal(null)}
                className="absolute top-5 right-5 p-2 text-[#1F1F1F]/60 hover:text-[#5A0B14] transition-colors cursor-pointer"
                aria-label="Tutup modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="border-b-2 border-[#5A0B14] pb-4 mb-6">
                <span className="font-subheading text-xs font-bold uppercase tracking-widest text-[#5A0B14] block mb-1">
                  LEMBAR REGULASI RESMI • {selectedModal.category}
                </span>
                <h3 className="font-heading text-3xl text-[#5A0B14] uppercase">
                  {selectedModal.title}
                </h3>
              </div>

              <p className="font-subheading text-sm text-[#6B3E2E] font-bold italic mb-6">
                "{selectedModal.tagline}"
              </p>

              <p className="font-body text-xs sm:text-sm text-[#1F1F1F] leading-relaxed mb-6">
                {selectedModal.description}
              </p>

              <div className="space-y-6 text-xs sm:text-sm">
                <div className="p-4 bg-[#F7F1E8] border border-[#C5A059]/30">
                  <h4 className="font-subheading font-bold text-[#5A0B14] mb-2 uppercase tracking-wider">Ketentuan Peserta:</h4>
                  <ul className="list-disc list-inside space-y-1 text-[#6B3E2E]">
                    {selectedModal.eligibility.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-[#F7F1E8] border border-[#C5A059]/30">
                  <h4 className="font-subheading font-bold text-[#5A0B14] mb-2 uppercase tracking-wider">Jadwal & Tahapan Perlombaan:</h4>
                  <ul className="list-disc list-inside space-y-1 text-[#6B3E2E]">
                    {selectedModal.rules.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#C5A059]/30 flex justify-end font-subheading">
                <button
                  onClick={() => {
                    const compTitle = selectedModal.title;
                    setSelectedModal(null);
                    onOpenRegister(compTitle);
                  }}
                  className="px-8 py-3.5 bg-[#C5A059] hover:bg-[#E5C378] text-[#1A0B0B] font-bold text-xs uppercase tracking-widest shadow-md transition-colors cursor-pointer border border-[#C5A059]"
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
