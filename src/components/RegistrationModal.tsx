"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Copy, Check, FileText, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory?: string;
}

export default function RegistrationModal({ isOpen, onClose, selectedCategory }: RegistrationModalProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  if (!isOpen) return null;

  const googleFormUrl = "https://forms.gle/SERENTAK2026RegistrationFormPlaceholder";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(googleFormUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const steps = [
    {
      num: "01",
      title: "Persiapkan Berkas Administrasi",
      desc: "Siapkan scan KTM aktif dan bukti transfer registrasi di HP/Laptop Anda.",
    },
    {
      num: "02",
      title: "Unggah Karya ke Google Drive",
      desc: "Simpan karya (Video Baca Puisi / File Poster) di Drive pribadi dan atur akses menjadi Publik.",
    },
    {
      num: "03",
      title: "Isi Formulir Pendaftaran Google Form",
      desc: "Klik tombol di bawah ini untuk menuju Google Form resmi panitia SERENTAK 2026.",
    },
    {
      num: "04",
      title: "Konfirmasi Pendaftaran ke WhatsApp",
      desc: "Kirim pesan bukti pendaftaran ke Helpdesk WA untuk mempercepat pencetakan e-Sertifikat.",
    },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-[#FFFDF9] border-2 border-[#C5A059] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#181512] overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-[#5C3D2E] hover:text-[#8B0000] bg-[#FAF6F0] rounded-full transition-colors"
            aria-label="Tutup Pendaftaran"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B0000]/10 text-[#8B0000] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Formulir Pendaftaran Resmi</span>
          </div>

          <h2 className="font-serif text-3xl font-extrabold text-[#3D030D] mb-1">
            Pendaftaran SERENTAK 2026
          </h2>
          {selectedCategory && (
            <p className="text-xs font-bold text-[#8B0000] uppercase tracking-wider mb-4">
              Kategori Terpilih: {selectedCategory}
            </p>
          )}
          <p className="text-xs sm:text-sm text-[#5C3D2E] leading-relaxed mb-6">
            Pendaftaran dilaksanakan secara online melalui Google Form terintegrasi. Ikuti langkah-langkah di bawah ini untuk kemudahan pengisian.
          </p>

          {/* Step Guidance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {steps.map((st) => (
              <div key={st.num} className="p-3.5 rounded-2xl bg-[#FAF6F0] border border-[#EBE0D0]">
                <span className="font-serif text-base font-extrabold text-[#8B0000] block mb-1">
                  Langkah {st.num}
                </span>
                <span className="text-xs font-bold text-[#3D030D] block mb-1">{st.title}</span>
                <p className="text-[11px] text-[#5C3D2E] leading-tight">{st.desc}</p>
              </div>
            ))}
          </div>

          {/* Direct Google Form CTA Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#3D030D] via-[#58000E] to-[#8B0000] text-[#FAF6F0] border border-[#C5A059]/40 shadow-xl mb-6 text-center">
            <h3 className="font-serif text-xl font-bold text-[#E5C378] mb-2">
              Siap Mendaftar Sekarang?
            </h3>
            <p className="text-xs text-[#FAF6F0]/85 mb-6">
              Tekan tombol di bawah untuk membuka halaman pendaftaran Google Form resmi di tab baru.
            </p>

            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#E5C378] via-[#C5A059] to-[#9E7B35] text-[#3D030D] hover:brightness-110 font-bold uppercase tracking-widest text-xs sm:text-sm shadow-xl flex items-center justify-center gap-3 transition-all cursor-pointer border border-[#FFF3C4]/60"
            >
              <span>Buka Google Form Pendaftaran</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Copy Link Option */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF6F0] border border-[#EBE0D0]">
            <span className="text-xs text-[#5C3D2E] font-medium truncate max-w-[70%]">
              {googleFormUrl}
            </span>
            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 rounded-lg bg-[#8B0000] text-[#E5C378] text-xs font-semibold flex items-center gap-1.5 hover:bg-[#58000E] transition-colors cursor-pointer"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? "Tersalin!" : "Salin Tautan"}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
