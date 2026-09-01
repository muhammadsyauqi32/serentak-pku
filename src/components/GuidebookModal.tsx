"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, BookOpen, ExternalLink, CheckCircle2 } from "lucide-react";

interface GuidebookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GuidebookModal({ isOpen, onClose }: GuidebookModalProps) {
  if (!isOpen) return null;

  const pdfUrl = "/guidebook-serentak-2026.pdf";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-5xl bg-[#FFFDF9] border-2 border-[#C5A059] p-5 sm:p-8 shadow-2xl text-[#181512] max-h-[92vh] flex flex-col font-body"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-[#1F1F1F]/60 hover:text-[#5A0B14] transition-colors cursor-pointer"
            aria-label="Tutup Guidebook"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Header */}
          <div className="border-b-2 border-[#5A0B14] pb-4 mb-4 shrink-0 pr-10">
            <div className="flex items-center gap-2 text-xs font-subheading font-bold uppercase tracking-widest text-[#5A0B14] mb-1">
              <BookOpen className="w-4 h-4 text-[#5A0B14]" />
              <span>DOKUMEN RESMI • GUIDEBOOK PDF</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl text-[#5A0B14] uppercase tracking-wide">
              Guidebook Lomba SERENTAK 5.0 X RBB 2026
            </h2>
            <p className="font-body text-xs sm:text-sm text-[#6B3E2E] mt-1">
              Pratinjau dokumen resmi regulasi teknis perlombaan, alur pelaksanaan, serta ketentuan umum kegiatan.
            </p>
          </div>

          {/* PDF Viewer Container */}
          <div className="flex-1 min-h-[380px] sm:min-h-[480px] w-full bg-[#1A0B0B] border border-[#C5A059]/40 relative overflow-hidden rounded-md mb-4">
            <iframe
              src={`${pdfUrl}#view=FitH`}
              className="w-full h-full min-h-[380px] sm:min-h-[480px] border-0"
              title="Pratinjau Guidebook PDF SERENTAK 2026"
            />
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 font-subheading">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#5A0B14]">
              <CheckCircle2 className="w-4 h-4 text-[#5A0B14]" />
              <span>Dokumen Resmi: Berkas PDF (.pdf)</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 sm:w-auto px-5 py-3 bg-[#F7F1E8] hover:bg-[#EBE0D0] text-[#1F1F1F] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059]/50"
              >
                <ExternalLink className="w-4 h-4 text-[#5A0B14]" />
                <span>Buka di Tab Baru</span>
              </a>

              <a
                href={pdfUrl}
                download="Guidebook-SERENTAK-5.0-X-RBB-2026.pdf"
                className="w-1/2 sm:w-auto px-7 py-3 bg-[#C5A059] hover:bg-[#E5C378] text-[#1A0B0B] font-bold text-xs uppercase tracking-widest shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059]"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
