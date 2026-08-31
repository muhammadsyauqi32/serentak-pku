"use client";

import { motion } from "framer-motion";
import { Layers, Sparkles, Trophy, BookOpen, Mic } from "lucide-react";

export default function EventSeriesSection() {
  const series = [
    {
      step: "01",
      title: "Opening Ceremony dan Babak Penyisihan",
      icon: Mic,
      desc: "Kegiatan pembukaan yang dilanjutkan dengan pelaksanaan awal perlombaan berupa kompetisi debat dan orasi. Kegiatan ini menjadi wadah bagi peserta KM PKU Angkatan 63 untuk mengasah kemampuan berpikir kritis, argumentatif, serta keberanian dalam menyampaikan gagasan terkait isu sosial dan politik.",
    },
    {
      step: "02",
      title: "Babak Lanjutan dan Semifinal",
      icon: Trophy,
      desc: "Pelaksanaan lanjutan perlombaan debat dan orasi yang berfokus pada tahap penyisihan hingga menuju babak final.",
    },
    {
      step: "03",
      title: "Closing Ceremony dan Ruang Baca Bicara (RBB)",
      icon: BookOpen,
      desc: "Penutupan kegiatan SERENTAK 5.0 X RBB 2026 yang diisi dengan pameran buku dalam Ruang Baca Bicara (RBB) 2026, aktivitas luar ruangan interaktif, final perlombaan, talkshow, dan awarding kepada para pemenang lomba.",
    },
  ];

  return (
    <section id="rangkaian" className="py-24 bg-[#F7F1E8] relative text-[#1F1F1F] border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5A0B14]/10 border border-[#5A0B14]/20 mb-4 font-subheading">
            <Layers className="w-4 h-4 text-[#5A0B14]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#5A0B14]">
              Rangkaian Acara
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#5A0B14] mb-4 uppercase">
            Tahapan Rangkaian Kegiatan
          </h2>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto rounded-full mt-4" />
        </div>

        {/* Series Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {series.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-[#FFFDF9] border border-[#C5A059]/30 hover:border-[#C5A059] shadow-sm transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading text-3xl text-[#5A0B14]">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-lg bg-[#5A0B14] border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-subheading text-xl font-bold text-[#1F1F1F] mb-4 leading-snug group-hover:text-[#5A0B14] transition-colors uppercase">
                    {item.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[#6B3E2E] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#C5A059]/20 flex items-center gap-2 text-xs font-subheading font-bold text-[#5A0B14]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Tahap {item.step} SERENTAK 2026</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
