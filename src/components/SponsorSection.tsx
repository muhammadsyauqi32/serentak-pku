"use client";

import { Landmark } from "lucide-react";

export default function SponsorSection() {
  return (
    <section className="py-16 bg-[#F7F1E8] relative text-[#1F1F1F] border-b border-[#C5A059]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5A0B14]/10 border border-[#5A0B14]/20 mb-4 font-subheading">
          <Landmark className="w-4 h-4 text-[#5A0B14]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#5A0B14]">
            Penyelenggara Resmi
          </span>
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#5A0B14] mb-3 uppercase">
          KM PKU IPB University Angkatan 63 X RBB 2026
        </h2>
        
        <p className="font-body text-xs sm:text-sm text-[#6B3E2E] max-w-2xl mx-auto mb-8">
          Diselenggarakan secara institusional oleh Organisasi Kemahasiswaan KM PKU IPB University Angkatan 63 dalam kolaborasi edisi kelima bersama Ruang Baca Bicara (RBB) 2026.
        </p>

        <div className="p-6 rounded-xl bg-[#FFFDF9] border border-[#C5A059]/30 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 shadow-sm font-subheading">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#5A0B14] border border-[#C5A059] flex items-center justify-center text-[#C5A059] font-heading text-sm">
              63
            </div>
            <div className="text-left">
              <span className="text-xs font-bold text-[#1F1F1F] block uppercase">KM PKU Angkatan 63</span>
              <span className="text-[11px] text-[#6B3E2E]">IPB University</span>
            </div>
          </div>

          <div className="hidden sm:block text-[#C5A059] font-bold">X</div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#1A0B0B] border border-[#C5A059] flex items-center justify-center text-[#C5A059] font-heading text-xs">
              RBB
            </div>
            <div className="text-left">
              <span className="text-xs font-bold text-[#1F1F1F] block uppercase">Ruang Baca Bicara</span>
              <span className="text-[11px] text-[#6B3E2E]">Edisi 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
