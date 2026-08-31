"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Search } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      question: "Siapa saja yang dapat mengikuti SERENTAK 5.0 X RBB 2026?",
      answer:
        "Kegiatan ini merupakan kegiatan perlombaan sekaligus event interaktif yang melibatkan partisipasi aktif mahasiswa KM PKU IPB University Angkatan 63.",
      category: "Peserta",
    },
    {
      question: "Apa saja cabang perlombaan yang diselenggarakan?",
      answer:
        "Terdapat dua cabang perlombaan utama, yaitu Kompetisi Debat dan Kompetisi Orasi, yang mengasah kemampuan berpikir kritis, berargumentasi, serta keberanian dalam menyampaikan gagasan sosial-politik.",
      category: "Perlombaan",
    },
    {
      question: "Kapan jadwal rentang pendaftaran dibuka?",
      answer:
        "Pendaftaran peserta dibuka pada tanggal 1 - 13 September 2026. Dilanjutkan dengan Technical Meeting pada 16 September 2026.",
      category: "Jadwal",
    },
    {
      question: "Bagaimana alur tahapan pelaksanaan perlombaan?",
      answer:
        "Tahapan meliputi Opening Ceremony dan Babak Penyisihan (19 September 2026), Babak Lanjutan dan Semifinal (20 September 2026), serta Closing Ceremony dan Babak Final (26 September 2026).",
      category: "Rangkaian",
    },
    {
      question: "Apa itu Ruang Baca Bicara (RBB) 2026?",
      answer:
        "RBB 2026 adalah ruang luar ruangan yang santai, edukatif, dan interaktif yang menawarkan dua tahapan proses kesadaran kritis: 'Baca' (menyerap realitas sosial-politik) dan 'Bicara' (keberanian menyuarakan gagasan). Penutupan diisi dengan pameran buku, talkshow, final perlombaan, dan awarding.",
      category: "RBB",
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-[#F7F1E8] relative text-[#1F1F1F] border-b border-[#C5A059]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5A0B14]/10 border border-[#5A0B14]/20 mb-4 font-subheading">
            <HelpCircle className="w-4 h-4 text-[#5A0B14]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#5A0B14]">
              Tanya Jawab (FAQ)
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#5A0B14] mb-4 uppercase">
            Pertanyaan Sering Diajukan
          </h2>
          <p className="font-body text-sm sm:text-base text-[#6B3E2E]">
            Informasi seputar pelaksanaan SERENTAK 5.0 X RBB 2026.
          </p>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto rounded-full mt-6" />
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 font-subheading">
          <Search className="w-5 h-5 text-[#5A0B14] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari pertanyaan... (contoh: jadwal, debat, orasi, RBB)"
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#FFFDF9] border border-[#C5A059]/30 focus:border-[#5A0B14] text-sm text-[#1F1F1F] shadow-sm outline-none transition-colors placeholder:text-[#6B3E2E]/60"
          />
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-xl bg-[#FFFDF9] border border-[#C5A059]/30 overflow-hidden shadow-sm transition-colors"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-subheading font-bold text-sm sm:text-base text-[#1F1F1F] hover:text-[#5A0B14] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#5A0B14] shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#5A0B14] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 pt-1 font-body text-xs sm:text-sm text-[#6B3E2E] leading-relaxed border-t border-[#C5A059]/20">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 font-body text-xs sm:text-sm text-[#6B3E2E]">
              Tidak ditemukan pertanyaan yang cocok dengan pencarian Anda.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
