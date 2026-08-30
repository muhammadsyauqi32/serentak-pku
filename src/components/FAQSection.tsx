"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Search, MessageSquare, Sparkles } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      question: "Siapa saja yang dapat mengikuti kompetisi SERENTAK 2026?",
      answer:
        "Kompetisi terbuka bagi seluruh mahasiswa aktif program Diploma (D3/D4) dan Sarjana (S1) dari Perguruan Tinggi Negeri (PTN) maupun Perguruan Tinggi Swasta (PTS) di seluruh Indonesia. Keikutsertaan dibuktikan dengan melampirkan scan/foto Kartu Tanda Mahasiswa (KTM) aktif.",
      category: "Umum",
    },
    {
      question: "Bagaimana mekanisme tata cara melakukan pendaftaran?",
      answer:
        "Pendaftaran dilakukan secara online melalui tombol 'Daftar Sekarang' di situs ini yang terhubung langsung ke Google Form Resmi. Peserta mengisi data diri, mengunggah berkas administrasi (KTM & Bukti Pembayaran), serta menyertakan tautan Google Drive karya.",
      category: "Pendaftaran",
    },
    {
      question: "Apakah seluruh peserta akan mendapatkan sertifikat?",
      answer:
        "Ya! Seluruh peserta yang terdaftar secara sah dan mengumpulkan karya sesuai ketentuan akan menerima e-Sertifikat Nasional Peserta. Para Juara 1, 2, 3, dan Favorit akan menerima Sertifikat Cetak Kehormatan beserta Trofi dan Uang Pembinaan.",
      category: "Penghargaan",
    },
    {
      question: "Bagaimana mekanisme teknis pengumpulan karya lomba?",
      answer:
        "Karya (Video untuk Baca Puisi atau Poster & Naskah untuk Propaganda) diunggah ke Google Drive pribadi peserta. Pastikan hak akses folder diatur menjadi 'Siapa saja yang memiliki link dapat melihat' (Public Access), kemudian salin tautan folder tersebut ke formulir pendaftaran Google Form.",
      category: "Karya",
    },
    {
      question: "Berapa biaya registrasi pendaftaran lomba di SERENTAK?",
      answer:
        "Biaya registrasi Pendaftaran Gelombang 1 (Early Bird) adalah Rp 35.000/karya dan Gelombang 2 (Normal) adalah Rp 50.000/karya. Biaya registrasi digunakan untuk pengelolaan sertifikat, trofi, serta operasional dewan juri profesional.",
      category: "Pendaftaran",
    },
    {
      question: "Bolehkah peserta mendaftar lebih dari satu cabang lomba?",
      answer:
        "Boleh! Seorang mahasiswa diperkenankan mendaftar di lebih dari satu cabang lomba (misalnya mengikuti Baca Puisi sekaligus Propaganda) dengan ketentuan mengisi formulir pendaftaran secara terpisah untuk masing-masing cabang lomba.",
      category: "Umum",
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-[#FAF6F0] relative text-[#181512]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B0000]/10 border border-[#8B0000]/20 mb-4">
            <HelpCircle className="w-4 h-4 text-[#8B0000]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B0000]">
              Tanya Jawab (FAQ)
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#3D030D] mb-4">
            Pertanyaan Yang Sering Diajukan
          </h2>
          <p className="text-sm sm:text-base text-[#5C3D2E]">
            Temukan jawaban cepat mengenai prosedur pendaftaran, penilaian, dan administrasi lomba.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8B0000] via-[#C5A059] to-[#8B0000] mx-auto rounded-full mt-6" />
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="w-5 h-5 text-[#8B0000] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari pertanyaan... (contoh: sertifikat, biaya, drive)"
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#FFFDF9] border border-[#EBE0D0] focus:border-[#8B0000] text-sm text-[#181512] shadow-sm outline-none transition-all placeholder:text-[#5C3D2E]/50"
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
                  className="rounded-2xl bg-[#FFFDF9] border-2 border-[#EBE0D0] overflow-hidden shadow-sm hover:shadow-md transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-[#3D030D] hover:text-[#8B0000] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#8B0000] shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#8B0000] shrink-0 transition-transform duration-300 ${
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
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5C3D2E] leading-relaxed border-t border-[#EBE0D0]/60">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-xs sm:text-sm text-[#5C3D2E]">
              Tidak ditemukan pertanyaan yang cocok dengan pencarian Anda. Silakan hubungi Helpdesk Panitia.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
