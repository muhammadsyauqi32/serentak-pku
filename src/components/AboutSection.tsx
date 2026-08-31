"use client";

import { motion } from "framer-motion";
import { Compass, BookOpen, Volume2, Target, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const objectives = [
    {
      id: "01",
      text: "Menyediakan wadah pengembangan diri dan berekspresi bagi mahasiswa.",
    },
    {
      id: "02",
      text: "Meningkatkan kesadaran dan pemahaman mahasiswa terhadap isu-isu strategis dan kemahasiswaan.",
    },
    {
      id: "03",
      text: "Mendorong budaya literasi serta berpikir kritis di lingkungan KM PKU IPB University Angkatan 63.",
    },
  ];

  return (
    <section id="tentang" className="py-24 bg-[#F7F1E8] relative text-[#1F1F1F] border-b border-[#C5A059]/20">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-paper-texture opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5A0B14]/10 border border-[#5A0B14]/20 mb-4 font-subheading">
            <Compass className="w-4 h-4 text-[#5A0B14]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#5A0B14]">
              Informasi Program
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#5A0B14] mb-4 uppercase tracking-tight">
            About SERENTAK
          </h2>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto rounded-full mb-6" />
        </div>

        {/* 1. Main About Description Paragraphs (Inter Body Font) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-2xl bg-[#FFFDF9] border border-[#C5A059]/30 shadow-sm mb-16 space-y-4 font-body text-sm sm:text-base text-[#1F1F1F] leading-relaxed"
        >
          <p>
            <strong className="text-[#5A0B14] font-semibold">SERENTAK 5.0 X RBB 2026</strong> merupakan program kerja resmi dari <strong className="text-[#5A0B14]">Departemen Kajian Aksi dan Strategis Ormawa Eksekutif PKU</strong> yang hadir sebagai ruang literasi mahasiswa, tempat ekspresi, dan sarana pengembangan diri.
          </p>

          <p>
            Melalui kolaborasi dengan Ruang Baca Bicara (RBB), ajang <strong className="text-[#5A0B14]">kompetisi mahasiswa IPB</strong> dan <strong className="text-[#5A0B14]">lomba mahasiswa</strong> ini menjadi wadah strategis bagi mahasiswa KM PKU IPB University untuk mendalami isu sosial-politik mahasiswa, membangun gagasan kritis, serta menyuarakan aspirasi publik secara bertanggung jawab.
          </p>

          <p>
            SERENTAK 5.0 dikolaborasikan dengan Ruang Baca Bicara (RBB) 2026 yang menghadirkan konsep kegiatan luar ruangan yang lebih santai, edukatif, dan interaktif.
          </p>

          <p>
            Selain sebagai ajang kompetisi, kegiatan ini menjadi sarana pengembangan pola pikir kritis, kemampuan berargumentasi, serta keberanian dalam menyampaikan gagasan.
          </p>
        </motion.div>

        {/* 2. Event Name Explanation Section (Dark Editorial Box) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 rounded-2xl bg-[#1A0B0B] text-[#F7F1E8] border border-[#C5A059]/40 shadow-md mb-16 relative overflow-hidden"
        >
          <div className="flex items-center gap-2 text-xs font-subheading font-bold uppercase tracking-widest text-[#C5A059] mb-3">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>Makna Nama SERENTAK 5.0 X RBB 2026</span>
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl text-[#C5A059] mb-6 uppercase">
            Filosofi & Nilai Kolektivitas
          </h3>

          <div className="space-y-5 font-body text-xs sm:text-sm md:text-base text-[#F7F1E8]/90 leading-relaxed">
            <p>
              Nama <strong className="text-[#C5A059]">SERENTAK</strong> dipilih karena mencerminkan semangat kolektivitas, bahwa KM PKU Angkatan 63 bergerak bersama dalam satu langkah yang selaras untuk merespons isu sosial-politik di sekitar mereka.
            </p>

            <p>
              Kata <strong className="text-[#C5A059]">"Semarak"</strong> menggambarkan upaya menghadirkan isu-isu yang kerap dianggap berat menjadi sesuatu yang menarik dan membumi, sementara frasa <strong className="text-[#C5A059]">"Untuk Bergerak"</strong> menegaskan bahwa kegiatan ini berorientasi bukan hanya pada kesadaran, tetapi pada aksi nyata.
            </p>

            <p>
              Angka <strong className="text-[#C5A059]">5.0</strong> menandai edisi kelima dari kegiatan ini sebagai simbol keberlanjutan dan komitmen dalam menghadirkan ruang edukasi sosial-politik bagi mahasiswa.
            </p>

            {/* RBB Breakdown */}
            <div className="p-6 rounded-xl bg-[#5A0B14]/80 border border-[#C5A059]/30 my-6 space-y-4">
              <p className="font-subheading font-bold text-[#C5A059] text-sm sm:text-base">
                RBB (Ruang Baca Bicara) hadir sebagai ruang yang menawarkan dua tahapan penting dalam proses kesadaran kritis:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#1A0B0B] border border-[#C5A059]/20 flex items-start gap-3">
                  <div className="p-2 rounded bg-[#C5A059]/20 text-[#C5A059] shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-subheading font-bold text-[#C5A059] text-xs sm:text-sm uppercase tracking-wider mb-1">Baca</h4>
                    <p className="font-body text-xs text-[#F7F1E8]/80">menyerap dan menelaah realitas sosial-politik yang ada.</p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#1A0B0B] border border-[#C5A059]/20 flex items-start gap-3">
                  <div className="p-2 rounded bg-[#C5A059]/20 text-[#C5A059] shrink-0">
                    <Volume2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-subheading font-bold text-[#C5A059] text-xs sm:text-sm uppercase tracking-wider mb-1">Bicara</h4>
                    <p className="font-body text-xs text-[#F7F1E8]/80">keberanian untuk menyuarakan gagasan secara kritis dan bermakna.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="pt-2 italic text-[#F7F1E8]/95 font-medium border-t border-[#C5A059]/30">
              Kolaborasi SERENTAK 5.0 X RBB 2026 merupakan perpaduan antara semangat kolektif dan kedalaman intelektual dalam membentuk mahasiswa yang tidak hanya peka, tetapi juga berani mengambil peran terhadap isu-isu di sekitar mereka.
            </p>
          </div>
        </motion.div>

        {/* 3. Objectives Section (Tujuan Kegiatan) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5A0B14]/10 border border-[#5A0B14]/20 mb-3 font-subheading">
              <Target className="w-4 h-4 text-[#5A0B14]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#5A0B14]">
                Tujuan Utama
              </span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl text-[#5A0B14] uppercase">
              Tujuan Kegiatan
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {objectives.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-[#FFFDF9] border border-[#C5A059]/30 hover:border-[#C5A059] shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#5A0B14] border border-[#C5A059] flex items-center justify-center text-[#C5A059] font-heading text-xl mb-6">
                    {item.id}
                  </div>
                  <p className="font-body text-sm sm:text-base text-[#1F1F1F] font-medium leading-relaxed">
                    {item.text}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#C5A059]/20 flex items-center gap-2 text-xs font-subheading font-bold text-[#5A0B14]">
                  <CheckCircle2 className="w-4 h-4 text-[#5A0B14]" />
                  <span>Komitmen KM PKU 63</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
