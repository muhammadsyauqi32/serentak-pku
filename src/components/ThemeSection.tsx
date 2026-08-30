"use client";

import { motion } from "framer-motion";
import { Sparkles, Scroll, Feather, Flame, Award, Lightbulb } from "lucide-react";

export default function ThemeSection() {
  const subThemes = [
    {
      title: "GEMA KEMANUSIAAN DAN SOSIAL",
      desc: "Menyuarkan kepekaan empati, perjuangan keadilan, dan solidaritas sosial melalui narasi sastra & visual.",
      icon: Feather,
    },
    {
      title: "INOVASI & KEMAJUAN BANGLA",
      desc: "Menggelorakan semangat pembaharuan, sains, serta visi strategis generasi muda menuju Indonesia Emas.",
      icon: Lightbulb,
    },
    {
      title: "KEBUDAYAAN & INTEGRITAS NUSANTARA",
      desc: "Merawat warisan leluhur dan memperkokoh jati diri kebangsaan di tengah arus modernisasi global.",
      icon: Flame,
    },
  ];

  return (
    <section id="tema" className="py-24 bg-gradient-to-b from-[#2A050A] via-[#3D030D] to-[#26160C] text-[#FAF6F0] relative overflow-hidden">
      {/* Background motif and decorative glow */}
      <div className="absolute inset-0 bg-motif-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#8B0000]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#58000E] border border-[#C5A059]/40 mb-6"
        >
          <Scroll className="w-4 h-4 text-[#E5C378]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#E5C378]">
            Tema Utama SERENTAK 2026
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-black gold-gradient-text tracking-wide mb-6 leading-tight max-w-4xl mx-auto"
        >
          "Nusantara Berkarya: Menyuarakan Aspirasi, Mengukir Prestasi Masa Depan"
        </motion.h2>

        {/* Main Philosophy Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-[#FAF6F0]/85 leading-relaxed mb-16 text-balance font-normal"
        >
          Tema ini memanggil seluruh mahasiswa Indonesia untuk bergerak dari sekadar penonton menjadi aktor perubahan. Melalui harmoni bait puisi dan daya gugah karya propaganda, kita bersatu menggelorakan optimisme, keberanian berpendapat, dan kejayaan intelektual muda.
        </motion.p>

        {/* Sub-Themes Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {subThemes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.15 }}
                className="p-6 rounded-2xl bg-[#58000E]/50 border border-[#C5A059]/30 backdrop-blur-md hover:border-[#E5C378] hover:bg-[#8B0000]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2A050A] border border-[#C5A059] flex items-center justify-center text-[#E5C378] mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#E5C378] mb-2 tracking-wider">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#FAF6F0]/75 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
