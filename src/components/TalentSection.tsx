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
    <section id="sayembara" className="py-24 bg-[#1A0B0B] relative text-[#F7F1E8] border-b border-[#C5A059]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#C5A059]/40 pb-6 mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-subheading font-bold uppercase tracking-widest text-[#C5A059] mb-2">
              <Radio className="w-4 h-4 text-[#C5A059]" />
              <span>OPEN REGISTRATION • SAYEMBARA TALENT</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#C5A059] uppercase tracking-tight">
              Sayembara MC & Moderator
            </h2>
          </div>
          
          {!IS_REGISTRATION_OPEN && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#5A0B14] border border-[#C5A059]/50 text-[#C5A059] font-subheading text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-4 h-4 shrink-0 text-[#C5A059]" />
              <span>PENDAFTARAN DIBUKA 3 SEPTEMBER 2026</span>
            </div>
          )}
        </div>

        {/* Lead Editorial Description */}
        <div className="max-w-3xl mb-14 font-body text-sm sm:text-base text-[#F7F1E8]/90 leading-relaxed space-y-3">
          <p>
            SERENTAK 5.0 X RBB 2026 membuka kesempatan bagi mahasiswa untuk berpartisipasi sebagai MC dan Moderator dalam rangkaian kegiatan.
          </p>
          <p className="font-medium text-[#C5A059]">
            Tunjukkan kemampuan public speaking, komunikasi, dan kemampuan membangun ruang diskusi melalui kesempatan ini.
          </p>
        </div>

        {/* Program Editorial Spread Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {talents.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 sm:p-10 bg-[#5A0B14]/30 border border-[#C5A059]/40 hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#C5A059]/30 pb-4 mb-6">
                    <span className="font-subheading text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                      {item.badge}
                    </span>

                    {!IS_REGISTRATION_OPEN ? (
                      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#1A0B0B] border border-[#C5A059]/40 text-[#C5A059] text-[11px] font-subheading font-bold uppercase tracking-wider">
                        <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>SEGERA HADIR</span>
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-[#1A0B0B] border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
                        <Icon className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#1A0B0B] border border-[#C5A059]/40 text-[#C5A059] shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-subheading text-2xl sm:text-3xl font-bold text-[#F7F1E8] uppercase tracking-wide">
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
                      className="w-full py-3.5 bg-[#C5A059] hover:bg-[#E5C378] text-[#1A0B0B] font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059]"
                    >
                      <span>{item.buttonActiveText}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full py-3.5 bg-[#1A0B0B] text-[#F7F1E8]/40 border border-[#C5A059]/20 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-not-allowed select-none"
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
