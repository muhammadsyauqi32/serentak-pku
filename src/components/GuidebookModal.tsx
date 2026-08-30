"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, CheckCircle2, Bookmark, ExternalLink, Sparkles, BookOpen } from "lucide-react";

interface GuidebookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GuidebookModal({ isOpen, onClose }: GuidebookModalProps) {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    }, 1500);
  };

  const guidebookChapters = [
    { num: "BAB I", title: "Pengantar & Visi Kompetisi SERENTAK 2026", pages: "Halaman 1 - 3" },
    { num: "BAB II", title: "Ketentuan Umum & Hak Kewajiban Peserta", pages: "Halaman 4 - 6" },
    { num: "BAB III", title: "Teknis Lomba Baca Puisi & Naskah Wajib", pages: "Halaman 7 - 12" },
    { num: "BAB IV", title: "Teknis Lomba Propaganda & Ketentuan Poster", pages: "Halaman 13 - 17" },
    { num: "BAB V", title: "Rubrik & Kriteria Penilaian Dewan Juri", pages: "Halaman 18 - 20" },
    { num: "LAMPIRAN", title: "Template Surat Pernyataan Orisinalitas (Materai)", pages: "Halaman 21 - 22" },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-3xl bg-[#FFFDF9] border-2 border-[#C5A059] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#181512] max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-[#5C3D2E] hover:text-[#8B0000] bg-[#FAF6F0] rounded-full transition-colors"
            aria-label="Tutup Guidebook"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B0000]/10 text-[#8B0000] text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-4 h-4" />
            <span>Preview Guidebook Resmi (PDF 2.4 MB)</span>
          </div>

          <h2 className="font-serif text-3xl font-extrabold text-[#3D030D] mb-2">
            Panduan & Ketentuan Lomba
          </h2>
          <p className="text-xs sm:text-sm text-[#5C3D2E] leading-relaxed mb-6">
            Buku panduan resmi berisi regulasi komprehensif, daftar puisi wajib pilihan juri, pedoman poster propaganda, serta formulir surat pernyataan.
          </p>

          {/* Table of Contents Grid */}
          <div className="mb-8">
            <h3 className="font-serif text-base font-bold text-[#8B0000] mb-3 flex items-center gap-2">
              <Bookmark className="w-4 h-4" /> Daftar Isi Buku Panduan
            </h3>
            <div className="space-y-2.5">
              {guidebookChapters.map((ch, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-[#FAF6F0] border border-[#EBE0D0] flex items-center justify-between gap-4 text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-serif font-extrabold text-[#8B0000] text-xs">{ch.num}</span>
                    <span className="font-medium text-[#3D030D]">{ch.title}</span>
                  </div>
                  <span className="text-[11px] text-[#5C3D2E] shrink-0 italic">{ch.pages}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Download Notification Banner */}
          {downloadSuccess && (
            <div className="p-4 mb-6 rounded-2xl bg-green-900/10 border border-green-600/30 text-green-800 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
              <span>Guidebook Resmi SERENTAK 2026 berhasil diunduh ke perangkat Anda!</span>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-6 border-t border-[#EBE0D0] flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-[#5C3D2E]/40 text-[#5C3D2E] text-xs font-semibold"
            >
              Tutup Preview
            </button>

            <button
              onClick={handleDownload}
              disabled={downloading}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#8B0000] to-[#58000E] text-[#E5C378] text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059]/40 hover:brightness-110 disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{downloading ? "Mengunduh Berkas PDF..." : "Unduh PDF Guidebook (Resmi)"}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
