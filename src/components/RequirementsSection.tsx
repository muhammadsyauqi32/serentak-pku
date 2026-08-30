"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardCheck, CheckCircle2, UserCheck, FileCheck2, ShieldCheck, Layers, Sparkles } from "lucide-react";

export default function RequirementsSection() {
  const [activeTab, setActiveTab] = useState<"general" | "administrative" | "submission">("general");

  const categories = [
    { id: "general", label: "Syarat Peserta Umum", icon: UserCheck },
    { id: "administrative", label: "Berkas Administrasi", icon: FileCheck2 },
    { id: "submission", label: "Ketentuan Pengumpulan Karya", icon: ShieldCheck },
  ];

  const generalRequirements = [
    "Mahasiswa aktif program Diploma (D3/D4) atau Sarjana (S1) di seluruh Perguruan Tinggi Indonesia (PTN/PTS).",
    "Melampirkan Bukti Kartu Tanda Mahasiswa (KTM) atau Surat Keterangan Mahasiswa Aktif dari Kampus.",
    "Mengikuti akun Instagram resmi @serentak.official dan mengunggah Twibbon resmi di media sosial.",
    "Peserta belum pernah menjadi Juara 1 pada ajang kompetisi SERENTAK di tahun sebelumnya pada cabang lomba yang sama.",
    "Peserta bersedia mengikuti seluruh regulasi, tata tertib, dan jadwal rangkaian acara SERENTAK 2026.",
    "Karya yang dikirimkan wajib orisinal, belum pernah dipublikasikan atau menjuarai lomba sejenis lainnya.",
  ];

  const adminRequirements = [
    "Scan/Foto Kartu Tanda Mahasiswa (KTM) format JPG/PNG/PDF (maksimal file 2MB).",
    "Bukti Pembayaran Registrasi (Early Bird Rp 35.000 / Normal Rp 50.000) ke Rekening Resmi Panitia SERENTAK.",
    "Surat Pernyataan Orisinalitas Karya bertanda tangan di atas materai Rp 10.000 (Formulir template dapat diunduh di Guidebook).",
    "Tautan Google Drive terbuka (Public Access) yang berisi video penampilan (Baca Puisi) atau berkas poster & naskah (Propaganda).",
  ];

  const submissionRequirements = [
    "<strong>Lomba Baca Puisi:</strong> Format MP4, resolusi minimal 720p (disarankan 1080p), pencahayaan & suara terdengar jelas tanpa efek musik studio berlebih.",
    "<strong>Lomba Propaganda:</strong> File Poster A3 300 DPI (JPG/PNG) + Naskah Gagasan (PDF max 3 halaman) dimasukkan dalam 1 folder Google Drive.",
    "Penamaan Folder Google Drive: <code>NamaLomba_NamaPeserta_NamaKampus</code> (Contoh: <code>BacaPuisi_AhmadFauzi_UGM</code>).",
    "Tautan Google Drive diisikan secara teliti ke dalam Formulir Google Form Pendaftaran Resmi.",
    "Batas waktu pengunggahan karya paling lambat tanggal 15 Oktober 2026 Pukul 23:59 WIB.",
  ];

  return (
    <section id="syarat" className="py-24 bg-[#FAF6F0] relative text-[#181512]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B0000]/10 border border-[#8B0000]/20 mb-4">
            <ClipboardCheck className="w-4 h-4 text-[#8B0000]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B0000]">Regulasi & Kriteria</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#3D030D] mb-4">Persyaratan & Ketentuan Pendaftaran</h2>
          <p className="text-sm sm:text-base text-[#5C3D2E]">Pastikan seluruh berkas administrasi dan ketentuan karya telah terpenuhi sebelum mendaftar.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8B0000] via-[#C5A059] to-[#8B0000] mx-auto rounded-full mt-6" />
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                  isActive ? "bg-gradient-to-r from-[#8B0000] to-[#58000E] text-[#E5C378] shadow-lg border border-[#C5A059]/40 scale-105" : "bg-[#FFFDF9] border border-[#EBE0D0] text-[#5C3D2E] hover:border-[#C5A059]"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <motion.div key={activeTab} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="p-8 sm:p-10 rounded-3xl bg-[#FFFDF9] border-2 border-[#EBE0D0] shadow-xl relative">
          <div className="space-y-4">
            {activeTab === "general" &&
              generalRequirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF6F0] border border-[#EBE0D0]">
                  <CheckCircle2 className="w-5 h-5 text-[#8B0000] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#181512]/85 leading-relaxed">{req}</p>
                </div>
              ))}

            {activeTab === "administrative" &&
              adminRequirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF6F0] border border-[#EBE0D0]">
                  <CheckCircle2 className="w-5 h-5 text-[#8B0000] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#181512]/85 leading-relaxed">{req}</p>
                </div>
              ))}

            {activeTab === "submission" &&
              submissionRequirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF6F0] border border-[#EBE0D0]">
                  <CheckCircle2 className="w-5 h-5 text-[#8B0000] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#181512]/85 leading-relaxed" dangerouslySetInnerHTML={{ __html: req }} />
                </div>
              ))}
          </div>

          {/* Institutional note banner */}
          <div className="mt-8 p-4 rounded-2xl bg-[#58000E]/10 border border-[#8B0000]/20 flex items-center gap-3">
            {/* <Sparkles className="w-5 h-5 text-[#8B0000] shrink-0" /> */}
            <p className="text-xs text-[#8B0000] font-semibold">Catatan Penting: Panitia berhak melakukan diskualifikasi jika ditemukan kecurangan, manipulasi identitas, atau plagiarisme karya.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
