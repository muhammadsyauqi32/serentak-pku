"use client";

import { motion } from "framer-motion";
import { Building2, Sparkles, Handshake } from "lucide-react";

export default function SponsorSection() {
  const sponsorSlots = [
    { type: "Dukungan Institusi", label: "Instansi Perguruan Tinggi" },
    { type: "Sponsor Utama", label: "Mitra Industri / Perusahaan" },
    { type: "Sponsor Pendukung", label: "Mitra Brand / Komunitas" },
    { type: "Media Partner", label: "Media Kemahasiswaan & Pers" },
  ];

  return (
    <section className="py-20 bg-[#FAF6F0] relative text-[#181512] border-t border-b border-[#EBE0D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B0000]/10 border border-[#8B0000]/20 mb-4">
          <Handshake className="w-4 h-4 text-[#8B0000]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B0000]">
            Mitra Strategis & Kerjasama
          </span>
        </div>

        <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-[#3D030D] mb-3">
          Supported By & Media Partner
        </h2>
        <p className="text-xs sm:text-sm text-[#5C3D2E] max-w-2xl mx-auto mb-12">
          Acara ini didukung secara resmi oleh badan perguruan tinggi, organisasi mahasiswa kemitraan, serta jaringan media publikasi nasional.
        </p>

        {/* Sponsor Grid Placeholders */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {sponsorSlots.map((slot, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#FFFDF9] border-2 border-dashed border-[#C5A059]/40 hover:border-[#8B0000] transition-colors flex flex-col items-center justify-center text-center group min-h-[140px]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#EBE0D0] flex items-center justify-center text-[#8B0000] mb-3 group-hover:bg-[#8B0000] group-hover:text-[#E5C378] transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-[#8B0000] uppercase tracking-wider block mb-1">
                {slot.type}
              </span>
              <span className="text-xs text-[#5C3D2E]/70 font-medium">
                {slot.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
