"use client";

import { motion } from "framer-motion";
import { Scroll } from "lucide-react";

export default function ThemeSection() {
  return (
    <section id="tema" className="py-24 bg-[#1A0B0B] text-[#F7F1E8] relative overflow-hidden border-b border-[#C5A059]/30">
      {/* Dark paper texture grid */}
      <div className="absolute inset-0 bg-dark-paper opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge (Space Grotesk) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5A0B14] border border-[#C5A059]/40 mb-6 font-subheading"
        >
          <Scroll className="w-4 h-4 text-[#C5A059]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
            Tema Utama
          </span>
        </motion.div>

        {/* Title (Bungee Font) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl text-[#C5A059] tracking-wide mb-6 leading-tight max-w-4xl mx-auto uppercase drop-shadow-sm"
        >
          Politrik: Seni Berkuasa dengan Propaganda
        </motion.h2>

        {/* Description (Space Grotesk Font) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-subheading max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#F7F1E8]/90 leading-relaxed font-medium"
        >
          Tema ini menjadi gagasan utama SERENTAK 5.0 X RBB 2026.
        </motion.p>
      </div>
    </section>
  );
}
