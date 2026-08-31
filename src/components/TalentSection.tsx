"use client";

import { motion } from "framer-motion";
import { Mic, MessageSquare, Lock, Calendar, ArrowUpRight, Radio } from "lucide-react";

// ============================================================================
// CONFIGURATION & GOOGLE FORM LINKS
// Ubah IS_REGISTRATION_OPEN menjadi true ketika pendaftaran resmi dibuka (3 Sept 2026).
// Ganti MC_FORM_URL dan MODERATOR_FORM_URL dengan tautan Google Form resmi.
// ============================================================================
export const IS_REGISTRATION_OPEN = false;

export const MC_FORM_URL = "https://ipb.link/sayembara-mc-serentak-2026";
export const MODERATOR_FORM_URL = "https://ipb.link/sayembara-moderator-serentak-2026";

export default function TalentSection() {
  const talents = [
    {
      id: "sayembara-mc",
      title: "Sayembara MC",
      badge: "Master of Ceremony",
      icon: Mic,
      description:
        "Kesempatan bagi mahasiswa untuk mengembangkan kemampuan public speaking dan pengalaman sebagai pembawa acara.",
      buttonActiveText: "Daftar Sekarang",
      buttonDisabledText: "Segera Hadir",
      link: MC_FORM_URL,
    },
    {
      id: "sayembara-moderator",
      title: "Sayembara Moderator",
      badge: "Pemandu Diskusi",
      icon: MessageSquare,
      description:
        "Kesempatan bagi mahasiswa untuk memandu diskusi dan membangun ruang dialog yang kritis.",
      buttonActiveText: "Daftar Sekarang",
      buttonDisabledText: "Segera Hadir",
      link: MODERATOR_FORM_URL,
    },
  ];

  return (
    <section id="sayembara" className="py-20 bg-[#1A0B0B] relative text-[#F7F1E8] border-b border-[#C5A059]/30 overflow-hidden">
      {/* Editorial Grid Background */}
      <div className="absolute inset-0 bg-editorial-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5A0B14] border border-[#C5A059]/40 mb-4 font-subheading"
          >
            <Radio className="w-4 h-4 text-[#C5A059]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              Open Registration
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#C5A059] mb-3 uppercase tracking-wide drop-shadow-sm"
          >
            Sayembara MC & Moderator
          </motion.h2>

          {/* Locked Date Highlight Banner */}
          {!IS_REGISTRATION_OPEN && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#5A0B14]/80 border border-[#C5A059]/50 text-[#C5A059] font-subheading text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-md"
            >
              <Calendar className="w-4 h-4 shrink-0 text-[#C5A059]" />
              <span>Pendaftaran Dibuka 3 September 2026</span>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-xs sm:text-sm md:text-base text-[#F7F1E8]/85 leading-relaxed space-y-3 max-w-2xl mx-auto text-balance"
          >
            <p>
              SERENTAK 5.0 X RBB 2026 membuka kesempatan bagi mahasiswa untuk berpartisipasi sebagai MC dan Moderator dalam rangkaian kegiatan.
            </p>
            <p>
              Tunjukkan kemampuan public speaking, komunikasi, dan kemampuan membangun ruang diskusi melalui kesempatan ini.
            </p>
          </motion.div>

          <div className="w-20 h-1 bg-[#C5A059] mx-auto rounded-full mt-8" />
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {talents.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-8 rounded-2xl bg-[#5A0B14]/40 border ${
                  IS_REGISTRATION_OPEN ? "border-[#C5A059]/40 hover:border-[#C5A059]" : "border-[#C5A059]/30"
                } shadow-xl backdrop-blur-sm transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-subheading px-3 py-1 rounded-md bg-[#1A0B0B] border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
                      {item.badge}
                    </span>

                    {!IS_REGISTRATION_OPEN ? (
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#1A0B0B]/80 border border-[#C5A059]/40 text-[#C5A059] text-[11px] font-subheading font-bold uppercase tracking-wider">
                        <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>Segera Hadir</span>
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-[#1A0B0B] border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
                        <Icon className="w-5 h-5" />
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-[#1A0B0B] border border-[#C5A059]/40 text-[#C5A059] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-subheading text-2xl font-bold text-[#F7F1E8] uppercase tracking-wide">
                      {item.title}
                    </h3>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-[#F7F1E8]/80 leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Footer Action Button */}
                <div className="pt-6 border-t border-[#C5A059]/20 font-subheading">
                  {IS_REGISTRATION_OPEN ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-lg bg-[#C5A059] hover:bg-[#E5C378] text-[#1A0B0B] font-bold text-xs uppercase tracking-widest shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059]"
                    >
                      <span>{item.buttonActiveText}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full py-3.5 rounded-lg bg-[#1A0B0B]/60 text-[#F7F1E8]/40 border border-[#C5A059]/20 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-not-allowed select-none"
                    >
                      <Lock className="w-3.5 h-3.5 text-[#F7F1E8]/40" />
                      <span>{item.buttonDisabledText}</span>
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
