"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mic, MessageSquare, Lock, Calendar, ArrowUpRight, Radio, Phone, Copy, Check } from "lucide-react";

// ============================================================================
// CONFIGURATION & GOOGLE FORM LINKS
// Ubah IS_REGISTRATION_OPEN menjadi true ketika pendaftaran resmi dibuka (3 Sept 2026).
// Ganti MC_FORM_URL dan MODERATOR_FORM_URL dengan tautan Google Form resmi.
// ============================================================================
export const IS_REGISTRATION_OPEN = false;

export const MC_FORM_URL = "https://ipb.link/sayembara-mc-serentak-2026";
export const MODERATOR_FORM_URL = "https://ipb.link/sayembara-moderator-serentak-2026";

export default function TalentSection() {
  const [copiedCP, setCopiedCP] = useState(false);

  const handleCopyCP = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCP(true);
    setTimeout(() => setCopiedCP(false), 2000);
  };

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

        {/* Contact Person Box for Sayembara */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 p-6 sm:p-8 bg-[#5A0B14]/40 border border-[#C5A059]/40 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start sm:items-center gap-4 w-full md:w-auto">
            <div className="p-3 bg-[#1A0B0B] border border-[#C5A059] text-[#C5A059] shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-subheading font-bold uppercase tracking-widest text-[#C5A059] block mb-0.5">
                CONTACT PERSON SAYEMBARA
              </span>
              <h4 className="font-subheading text-lg font-bold text-[#F7F1E8]">
                Sasikirana — <span className="text-[#C5A059]">+62 831-0052-9494</span>
              </h4>
              <p className="font-body text-xs text-[#F7F1E8]/70 mt-0.5">
                Pertanyaan seputar alur pendaftaran, berkas, & persyaratan Sayembara MC & Moderator.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0 font-subheading">
            <button
              onClick={() => handleCopyCP("+6283100529494")}
              className="w-full sm:w-auto px-5 py-3 bg-[#1A0B0B] hover:bg-[#2A1212] border border-[#C5A059]/50 text-[#C5A059] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {copiedCP ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedCP ? "Tersalin!" : "Salin No. WA"}</span>
            </button>

            <a
              href="https://wa.me/6283100529494"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-[#C5A059] hover:bg-[#E5C378] text-[#1A0B0B] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors border border-[#C5A059] shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Hubungi WhatsApp</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
