"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Search } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      question: "Apa itu SERENTAK 5.0 X RBB 2026?",
      answer:
        "SERENTAK 5.0 X RBB 2026 merupakan program kerja Departemen Kajian Aksi dan Strategis Ormawa Eksekutif PKU yang menghadirkan ruang kompetisi, literasi, dan ekspresi mahasiswa melalui tema Politrik: Seni Berkuasa dengan Propaganda.",
      category: "Umum",
    },
    {
      question: "Siapa penyelenggara SERENTAK 5.0 X RBB 2026?",
      answer:
        "SERENTAK 5.0 X RBB 2026 diselenggarakan oleh Departemen Kajian Aksi dan Strategis Ormawa Eksekutif PKU IPB University.",
      category: "Penyelenggara",
    },
    {
      question: "Kapan kegiatan dilaksanakan?",
      answer:
        "Pendaftaran peserta dibuka pada 1 - 13 September 2026, dilanjutkan Technical Meeting pada 16 September 2026, Opening Ceremony & Penyisihan pada 19 September 2026, Semifinal pada 20 September 2026, serta Closing Ceremony & Babak Final pada 26 September 2026.",
      category: "Jadwal",
    },
    {
      question: "Bagaimana cara mengikuti kegiatan?",
      answer:
        "Mahasiswa dapat mendaftar secara online melalui tautan resmi pendaftaran SERENTAK 5.0 X RBB 2026 di ipb.link/registrasi-lomba-serentak-2026 dan mengunduh guidebook teknis pelaksanaan lomba.",
      category: "Pendaftaran",
    },
    {
      question: "Apa saja cabang lomba mahasiswa yang diselenggarakan?",
      answer:
        "Terdapat dua cabang perlombaan utama, yaitu Kompetisi Debat dan Kompetisi Orasi Mahasiswa, yang mengasah kemampuan berpikir kritis, retorika berargumentasi, serta keberanian menyampaikan gagasan sosial-politik.",
      category: "Perlombaan",
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-[#F7F1E8] relative text-[#1F1F1F] border-b border-[#C5A059]/30">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-paper-texture opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#5A0B14] pb-6 mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-subheading font-bold uppercase tracking-widest text-[#5A0B14] mb-2">
              <HelpCircle className="w-4 h-4 text-[#5A0B14]" />
              <span>TANYA JAWAB DOKUMEN & KANATOR</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#5A0B14] uppercase tracking-tight">
              Pertanyaan (FAQ)
            </h2>
          </div>
          <span className="font-subheading text-xs font-bold uppercase tracking-widest text-[#6B3E2E]">
            BAGIAN V — PERTANYAAN UMUM
          </span>
        </div>

        {/* Minimal Search Bar */}
        <div className="relative mb-10 font-subheading">
          <Search className="w-5 h-5 text-[#5A0B14] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari pertanyaan... (contoh: jadwal, debat, orasi, RBB)"
            className="w-full pl-12 pr-4 py-4 bg-[#FFFDF9] border border-[#C5A059]/40 text-sm text-[#1F1F1F] shadow-sm outline-none focus:border-[#5A0B14] transition-colors placeholder:text-[#6B3E2E]/60 font-body"
          />
        </div>

        {/* Editorial Accordion Row List (No floating SaaS cards) */}
        <div className="border-t border-[#C5A059]/40">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={idx} className="border-b border-[#C5A059]/30">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full py-5 text-left flex items-center justify-between gap-4 font-subheading font-bold text-sm sm:text-base text-[#1F1F1F] hover:text-[#5A0B14] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-heading text-xs text-[#C5A059]">0{idx + 1}</span>
                      <span className="uppercase tracking-wide">{faq.question}</span>
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
                        <div className="pb-6 pt-1 font-body text-xs sm:text-sm text-[#6B3E2E] leading-relaxed pl-8">
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
