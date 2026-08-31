"use client";

import { motion } from "framer-motion";
import { Sparkles, Award, Target, Flame, Lightbulb, Compass, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      icon: Lightbulb,
      title: "Kreativitas & Orisinalitas",
      description: "Menghidupkan imajinasi serta kebebasan berekspresi secara intelektual dan estetik di kalangan mahasiswa.",
    },
    {
      icon: Target,
      title: "Integritas & Kritis",
      description: "Mendorong keberanian gagasan propaganda positif yang konstruktif dan solutif terhadap isu sosial bangsa.",
    },
    {
      icon: Award,
      title: "Prestasi Nasional",
      description: "Menyediakan panggung kehormatan berskala nasional untuk mengukir jejak jejak prestasi mahakarya perguruan tinggi.",
    },
  ];

  return (
    <section id="tentang" className="py-24 bg-[#FAF6F0] relative overflow-hidden text-[#181512]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-batik-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B0000]/10 border border-[#8B0000]/20 mb-4">
            <Compass className="w-4 h-4 text-[#8B0000]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B0000]">
              Tentang SERENTAK
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#3D030D] mb-6">
            Mewadahi Talenta & Menyuarakan Aspirasi Mahasiswa
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8B0000] via-[#C5A059] to-[#8B0000] mx-auto rounded-full mb-6" />
        </div>

        {/* Two-Column Grid: Left Text Block, Right Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Description Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A0E17] leading-snug">
              Ruang Kolaboratif Bagi Pembawa Perubahan dan Pegiat Seni Mahasiswa
            </h3>

            <p className="text-sm sm:text-base text-[#181512]/80 leading-relaxed">
              <strong className="text-[#8B0000]">SERENTAK 2026</strong> adalah acara kompetisi mahasiswa internal dan antar-perguruan tinggi yang dirancang secara profesional oleh organisasi mahasiswa untuk menyatukan beragam potensi pemuda dari seluruh pelosok negeri.
            </p>

            <p className="text-sm sm:text-base text-[#181512]/80 leading-relaxed">
              Nama <em>"SERENTAK"</em> melambangkan langkah bersama, ritme harmoni, dan kebangkitan intelektual pemuda Indonesia. Melalui lomba Seni Baca Puisi dan Lomba Poster/Naskah Propaganda, kami percaya bahwa kata dan visual adalah senjata ampuh dalam menggerakkan kesadaran publik serta menyalakan semangat kemajuan bangsa.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8B0000] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#3D2418] font-medium">
                  <strong>Penilaian Profesional:</strong> Didewanjuri oleh pakar sastra, akademisi, dan praktisi industri kreatif terkemuka.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8B0000] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#3D2418] font-medium">
                  <strong>Akreditasi & Sertifikasi:</strong> Sertifikat resmi yang diakui sebagai penunjang Satuan Kredit Kegiatan Mahasiswa (SKKM).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8B0000] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#3D2418] font-medium">
                  <strong>Akses Transparan:</strong> Proses pendaftaran terintegrasi cepat via Google Form dan pemantauan transparan.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Frame Card */}

        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-8 rounded-2xl bg-[#FFFDF9] border border-[#EBE0D0] hover:border-[#C5A059] shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#58000E] border border-[#C5A059] flex items-center justify-center text-[#E5C378] mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#3D030D] mb-3 group-hover:text-[#8B0000] transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#5C3D2E] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
