"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Lock, BookOpen, CheckCircle, Trophy, Sparkles, FileText, ArrowUpRight, X, UserCheck, Calendar } from "lucide-react";

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
  submission: string[];
  prizes: { rank: string; reward: string }[];
  contactPerson: string;
}

export default function CompetitionSection({ onOpenRegister }: CompetitionProps) {
  const [selectedModal, setSelectedModal] = useState<CompetitionModalData | null>(null);

  const competitions = [
    {
      id: "puisi",
      title: "Kompetisi Baca Puisi",
      category: "Seni & Sastra Mahasiswa",
      status: "OPEN",
      badgeText: "Pendaftaran Buka",
      icon: BookOpen,
      shortDesc: "Lomba pembacaan puisi kebangsaan dan sastra modern untuk menguji artikulasi, penghayatan, gestur, serta daya jiwa dalam mengekspresikan kedalaman bait karya sastra.",
      prizes: "Rp 3.500.000 + Trofi Rektor + Sertifikat Juara",
      details: {
        title: "Kompetisi Baca Puisi Mahasiswa",
        category: "Seni & Sastra",
        tagline: "Ekspresikan Jiwa, Suarakan Bait-Bait Perjuangan Bangsa",
        description:
          "Kompetisi Baca Puisi SERENTAK 2026 menantang peserta untuk mengeksplorasi teknik olah vokal, dinamika intonasi, penghayatan makna, serta penjiwaan rasa dalam membawakan teks puisi wajib dan pilihan bertema kebangsaan.",
        eligibility: [
          "Mahasiswa aktif D3/D4/S1 seluruh perguruan tinggi di Indonesia (dibuktikan dengan KTM)",
          "Peserta bersifat perorangan (individu)",
          "Telah melakukan pendaftaran dan melunasi biaya registrasi",
        ],
        rules: [
          "Peserta membawakan 1 Puisi Wajib dan 1 Puisi Pilihan dari daftar yang disediakan panitia.",
          "Durasi penampilan maksimal 7 menit tanpa alat musik pengiring (acapella vocal poetry).",
          "Kriteria penilaian: Penghayatan (35%), Artikulasi & Intonasi (35%), Penampilan & Gestur (30%).",
          "Keputusan Dewan Juri bersifat mutlak dan tidak dapat diganggu gugat.",
        ],
        submission: [
          "Format rekaman video MP4 High Quality 1080p tanpa lip-sync atau editing vokal berlebih.",
          "Video diunggah ke Google Drive pribadi dan tautannya dimasukkan ke Google Form pendaftaran.",
        ],
        prizes: [
          { rank: "Juara 1", reward: "Rp 1.500.000 + Trofi Bergilir + Sertifikat Cetak" },
          { rank: "Juara 2", reward: "Rp 1.000.000 + Trofi + Sertifikat Cetak" },
          { rank: "Juara 3", reward: "Rp 600.000 + Trofi + Sertifikat Cetak" },
          { rank: "Juara Favorit", reward: "Rp 400.000 + Plakat + Sertifikat" },
        ],
        contactPerson: "LO Baca Puisi: +62 812-3456-7890 (Kharisma)",
      },
    },
    {
      id: "propaganda",
      title: "Kompetisi Propaganda (Poster & Narasi)",
      category: "Desain Karya & Ideologi",
      status: "OPEN",
      badgeText: "Pendaftaran Buka",
      icon: Award,
      shortDesc: "Lomba pembuatan karya poster visual propaganda dan naskah ajakan positif untuk menggerakkan kesadaran kritis mahasiswa terhadap isu-isu kebangsaan dan kemanusiaan.",
      prizes: "Rp 4.000.000 + Trofi Rektor + Sertifikat Juara",
      details: {
        title: "Kompetisi Propaganda Mahasiswa",
        category: "Desain Visual & Gagasan",
        tagline: "Gugah Kesadaran Publik Melalui Karya Visual Memikat dan Konstruktif",
        description:
          "Kompetisi Propaganda SERENTAK 2026 menjadi panggung bagi mahasiswa yang mahir memadukan keindahan desain grafis dengan ketajaman narasi persuasif untuk mempromosikan aksi nyata, persatuan, dan kritik sosial yang membangun.",
        eligibility: [
          "Mahasiswa aktif D3/D4/S1 seluruh Indonesia",
          "Dapat diikuti secara Individu maupun Tim (maksimal 2 orang per tim)",
          "Karya bersifat orisinal dan belum pernah menjuarai lomba sejenis",
        ],
        rules: [
          "Karya terdiri dari 1 Poster Digital (A3 Ratio) dan 1 Naskah Penjelas (PDF max 300 kata).",
          "Karya tidak boleh mengandung unsur SARA berlebih, pornografi, atau ujaran kebencian destruktif.",
          "Kriteria penilaian: Orisinalitas & Kedalaman Gagasan (40%), Visual & Komposisi (35%), Daya Gugah Narasi (25%).",
        ],
        submission: [
          "Format Poster: JPG/PNG High Resolution (300 DPI) + file PDF Naskah Penjelas.",
          "File dikemas dalam folder ZIP/RAR dan diunggah melalui formulir pendaftaran Google Form.",
        ],
        prizes: [
          { rank: "Juara 1", reward: "Rp 1.800.000 + Trofi Rektor + Sertifikat" },
          { rank: "Juara 2", reward: "Rp 1.200.000 + Trofi + Sertifikat" },
          { rank: "Juara 3", reward: "Rp 700.000 + Trofi + Sertifikat" },
          { rank: "Best Visual Concept", reward: "Rp 300.000 + Plakat + Sertifikat" },
        ],
        contactPerson: "LO Propaganda: +62 821-9876-5432 (Bagas)",
      },
    },
    {
      id: "coming-soon",
      title: "Orasi Kebangsaan & Esai Inovasi",
      category: "Kompetisi Mendatang (Gelombang 2)",
      status: "LOCKED",
      badgeText: "Coming Soon",
      icon: Lock,
      shortDesc: "Cabang perlombaan orasi publik dan penulisan esai kritis mahasiswa yang akan segera dibuka pada gelombang pendaftaran berikutnya. Nantikan pengumuman resminya!",
      prizes: "Total Hadiah Rp 5.000.000+",
      details: null,
    },
  ];

  return (
    <section id="lomba" className="py-24 bg-[#FAF6F0] relative text-[#181512]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B0000]/10 border border-[#8B0000]/20 mb-4">
            <Trophy className="w-4 h-4 text-[#8B0000]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B0000]">
              Kategori Perlombaan
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#3D030D] mb-4">
            Pilih Cabang Kompetisi Anda
          </h2>
          <p className="text-sm sm:text-base text-[#5C3D2E]">
            Tunjukkan bakat terbaikmu dan raih trofi kehormatan serta sertifikat tingkat nasional.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8B0000] via-[#C5A059] to-[#8B0000] mx-auto rounded-full mt-6" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competitions.map((comp, idx) => {
            const Icon = comp.icon;
            const isLocked = comp.status === "LOCKED";

            return (
              <motion.div
                key={comp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  isLocked
                    ? "bg-[#EBE0D0]/60 border-2 border-dashed border-[#C5A059]/40 opacity-80"
                    : "bg-[#FFFDF9] border-2 border-[#EBE0D0] hover:border-[#C5A059] shadow-xl hover:shadow-2xl"
                }`}
              >
                <div>
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#8B0000]">
                      {comp.category}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                        isLocked
                          ? "bg-[#3D2418] text-[#E5C378]"
                          : "bg-[#8B0000] text-[#E5C378] border border-[#C5A059]/40"
                      }`}
                    >
                      {comp.badgeText}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8B0000] to-[#58000E] border border-[#C5A059] flex items-center justify-center text-[#E5C378] mb-6 shadow-md">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#3D030D] mb-3">
                    {comp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C3D2E] leading-relaxed mb-6">
                    {comp.shortDesc}
                  </p>

                  {/* Prize Banner */}
                  <div className="p-3.5 rounded-xl bg-[#FAF6F0] border border-[#C5A059]/30 flex items-center gap-3 mb-8">
                    <Trophy className="w-5 h-5 text-[#8B0000] shrink-0" />
                    <div>
                      <span className="block text-[10px] text-[#8B0000] uppercase font-bold tracking-wider">
                        Apresiasi Pemenang
                      </span>
                      <span className="text-xs font-semibold text-[#181512]">
                        {comp.prizes}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4 border-t border-[#EBE0D0]">
                  {isLocked ? (
                    <button
                      disabled
                      className="w-full py-3.5 px-4 rounded-xl bg-[#3D2418]/20 text-[#3D2418]/60 text-xs font-bold uppercase tracking-wider cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <Lock className="w-4 h-4" />
                      <span>Belum Dibuka</span>
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => comp.details && setSelectedModal(comp.details)}
                        className="w-full py-3 px-4 rounded-xl border border-[#8B0000]/40 text-[#8B0000] hover:bg-[#8B0000]/5 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Syarat & Ketentuan</span>
                      </button>

                      <button
                        onClick={() => onOpenRegister(comp.title)}
                        className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#8B0000] to-[#58000E] text-[#E5C378] hover:brightness-110 text-xs font-bold uppercase tracking-widest shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer border border-[#C5A059]/40"
                      >
                        <span>Daftar {comp.title.split(" ")[1]}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detailed Competition Modal Drawer */}
      <AnimatePresence>
        {selectedModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FFFDF9] border-2 border-[#C5A059] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#181512]"
            >
              {/* Close Modal Button */}
              <button
                onClick={() => setSelectedModal(null)}
                className="absolute top-5 right-5 p-2 text-[#5C3D2E] hover:text-[#8B0000] bg-[#FAF6F0] rounded-full transition-colors"
                aria-label="Tutup Modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="inline-block px-3 py-1 rounded-full bg-[#8B0000]/10 text-[#8B0000] text-xs font-bold uppercase tracking-wider mb-3">
                {selectedModal.category}
              </div>

              <h3 className="font-serif text-3xl font-extrabold text-[#3D030D] mb-2">
                {selectedModal.title}
              </h3>
              <p className="text-sm font-medium text-[#C5A059] italic mb-6">
                "{selectedModal.tagline}"
              </p>

              <div className="space-y-6 text-sm text-[#181512]/80 leading-relaxed border-t border-[#EBE0D0] pt-6">
                <div>
                  <h4 className="font-serif text-base font-bold text-[#8B0000] mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> Deskripsi Cabang Lomba
                  </h4>
                  <p>{selectedModal.description}</p>
                </div>

                <div>
                  <h4 className="font-serif text-base font-bold text-[#8B0000] mb-2 flex items-center gap-2">
                    <UserCheck className="w-4 h-4" /> Persyaratan Peserta
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-2">
                    {selectedModal.eligibility.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-serif text-base font-bold text-[#8B0000] mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Ketentuan & Penilaian
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-2">
                    {selectedModal.rules.map((rule, i) => (
                      <li key={i}>{rule}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-serif text-base font-bold text-[#8B0000] mb-2 flex items-center gap-2">
                    <Trophy className="w-4 h-4" /> Hadiah & Penghargaan
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedModal.prizes.map((pz, i) => (
                      <div key={i} className="p-3 bg-[#FAF6F0] rounded-xl border border-[#C5A059]/30">
                        <span className="block text-xs font-bold text-[#8B0000]">{pz.rank}</span>
                        <span className="text-xs text-[#3D2418]">{pz.reward}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 bg-[#8B0000]/10 rounded-xl text-xs text-[#8B0000] font-semibold">
                  {selectedModal.contactPerson}
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="mt-8 pt-6 border-t border-[#EBE0D0] flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedModal(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-[#5C3D2E]/40 text-[#5C3D2E] text-xs font-semibold"
                >
                  Tutup
                </button>
                <button
                  onClick={() => {
                    const categoryTitle = selectedModal.title;
                    setSelectedModal(null);
                    onOpenRegister(categoryTitle);
                  }}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-[#8B0000] to-[#58000E] text-[#E5C378] text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Daftar {selectedModal.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
