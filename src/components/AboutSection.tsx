"use client";

import { motion } from "framer-motion";
import { Compass, BookOpen, Volume2, Target, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const objectives = [
    {
      id: "01",
      title: "Wadah Pengembangan Diri",
      text: "Menyediakan wadah pengembangan diri dan berekspresi bagi mahasiswa.",
    },
    {
      id: "02",
      title: "Kesadaran Isu Strategis",
      text: "Meningkatkan kesadaran dan pemahaman mahasiswa terhadap isu-isu strategis dan kemahasiswaan.",
    },
    {
      id: "03",
      title: "Budaya Literasi Kritis",
      text: "Mendorong budaya literasi serta berpikir kritis di lingkungan KM PKU IPB University Angkatan 63.",
    },
  ];

  return (
    <section id="tentang" className="py-24 bg-[#F7F1E8] relative text-[#1F1F1F] border-b border-[#C5A059]/30">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-paper-texture opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#5A0B14] pb-6 mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-subheading font-bold uppercase tracking-widest text-[#5A0B14] mb-2">
              <Compass className="w-4 h-4 text-[#5A0B14]" />
              <span>INFORMASI PROGRAM & LANDASAN</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#5A0B14] uppercase tracking-tight">
              Tentang SERENTAK
            </h2>
          </div>
          <span className="font-subheading text-xs font-bold uppercase tracking-widest text-[#6B3E2E]">
            BAGIAN I — TENTANG KEGIATAN
          </span>
        </div>

        {/* 1. Main About Article (Magazine Two-Column Spread) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-20 items-start font-body"
        >
          {/* Lead Editorial Paragraph */}
          <div className="lg:col-span-6 space-y-5 text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
            <p className="font-medium text-lg sm:text-xl text-[#5A0B14] italic">
              <strong className="text-[#5A0B14] font-semibold">SERENTAK 5.0 X RBB 2026</strong> merupakan program kerja resmi dari <strong className="text-[#5A0B14]">Departemen Kajian Aksi dan Strategis Ormawa Eksekutif PKU</strong> yang hadir sebagai ruang literasi mahasiswa, tempat ekspresi, dan sarana pengembangan diri.
            </p>

            <p>
              Melalui kolaborasi dengan Ruang Baca Bicara (RBB), ajang <strong className="text-[#5A0B14]">kompetisi mahasiswa IPB</strong> dan <strong className="text-[#5A0B14]">lomba mahasiswa</strong> ini menjadi wadah strategis bagi mahasiswa KM PKU IPB University untuk mendalami isu sosial-politik mahasiswa, membangun gagasan kritis, serta menyuarakan aspirasi publik secara bertanggung jawab.
            </p>
          </div>

          {/* Secondary Editorial Paragraph */}
          <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-[#1F1F1F]/90 leading-relaxed lg:border-l border-[#C5A059]/30 lg:pl-10">
            <p>
              SERENTAK 5.0 dikolaborasikan dengan Ruang Baca Bicara (RBB) 2026 yang menghadirkan konsep kegiatan luar ruangan yang lebih santai, edukatif, dan interaktif.
            </p>

            <p>
              Selain sebagai ajang kompetisi, kegiatan ini menjadi sarana pengembangan pola pikir kritis, kemampuan berargumentasi, serta keberanian dalam menyampaikan gagasan.
            </p>

            <div className="pt-4 border-t border-[#C5A059]/20 font-subheading text-xs uppercase tracking-widest text-[#5A0B14] font-bold">
              KOLABORASI: DEPARTEMEN KAJIAN AKSI & STRATEGIS X RUANG BACA BICARA
            </div>
          </div>
        </motion.div>

        {/* 2. Event Name Explanation Section (Institutional Editorial Dark Box) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 bg-[#1A0B0B] text-[#F7F1E8] border border-[#C5A059]/40 mb-20 relative overflow-hidden shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#C5A059]/30 pb-4 mb-8 gap-2">
            <span className="text-xs font-subheading font-bold uppercase tracking-widest text-[#C5A059]">
              FILOSOFI & NAMA NAMA
            </span>
            <span className="text-xs font-subheading font-bold uppercase tracking-widest text-[#F7F1E8]/60">
              SERENTAK 5.0 X RBB 2026
            </span>
          </div>

          <h3 className="font-heading text-3xl sm:text-4xl text-[#C5A059] mb-8 uppercase tracking-wide">
            Filosofi & Nilai Kolektivitas
          </h3>

          <div className="space-y-6 font-body text-sm sm:text-base text-[#F7F1E8]/90 leading-relaxed">
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
            <div className="p-6 sm:p-8 bg-[#5A0B14] border border-[#C5A059]/40 my-8 space-y-6">
              <p className="font-subheading font-bold text-[#C5A059] text-sm sm:text-base uppercase tracking-wide">
                RBB (Ruang Baca Bicara) — Dua Tahapan Kesadaran Kritis:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 bg-[#1A0B0B] border border-[#C5A059]/30 flex items-start gap-4">
                  <div className="p-3 bg-[#C5A059]/20 text-[#C5A059] shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-subheading font-bold text-[#C5A059] text-sm uppercase tracking-wider mb-1">BACA</h4>
                    <p className="font-body text-xs sm:text-sm text-[#F7F1E8]/80">Menyerap dan menelaah realitas sosial-politik yang ada secara mendalam.</p>
                  </div>
                </div>

                <div className="p-5 bg-[#1A0B0B] border border-[#C5A059]/30 flex items-start gap-4">
                  <div className="p-3 bg-[#C5A059]/20 text-[#C5A059] shrink-0">
                    <Volume2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-subheading font-bold text-[#C5A059] text-sm uppercase tracking-wider mb-1">BICARA</h4>
                    <p className="font-body text-xs sm:text-sm text-[#F7F1E8]/80">Keberanian untuk menyuarakan gagasan secara kritis dan bermakna.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="pt-4 italic text-[#F7F1E8] font-medium border-t border-[#C5A059]/30">
              Kolaborasi SERENTAK 5.0 X RBB 2026 merupakan perpaduan antara semangat kolektif dan kedalaman intelektual dalam membentuk mahasiswa yang tidak hanya peka, tetapi juga berani mengambil peran terhadap isu-isu di sekitar mereka.
            </p>
          </div>
        </motion.div>

        {/* 3. Objectives Section (Tujuan Kegiatan - Editorial Manifesto Row List) */}
        <div>
          <div className="flex items-center justify-between border-b-2 border-[#5A0B14] pb-4 mb-10">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-[#5A0B14]" />
              <h3 className="font-heading text-2xl sm:text-3xl text-[#5A0B14] uppercase">
                Tujuan Utama Kegiatan
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {objectives.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 bg-[#FFFDF9] border border-[#C5A059]/40 hover:border-[#5A0B14] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-subheading font-bold text-lg text-[#5A0B14] uppercase mb-3 pb-3 border-b border-[#C5A059]/30">
                    {item.title}
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#1F1F1F] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
