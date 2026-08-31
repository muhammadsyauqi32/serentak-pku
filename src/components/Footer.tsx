"use client";

import { Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A0B0B] text-[#F7F1E8] border-t-2 border-[#C5A059] pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#C5A059]/30">

          {/* Main Event & Program Identity */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#5A0B14] border border-[#C5A059] flex items-center justify-center">
                <span className="font-heading text-base text-[#C5A059]">S</span>
              </div>
              <span className="font-heading text-xl text-[#C5A059] tracking-wider uppercase">
                SERENTAK 5.0 X RBB 2026
              </span>
            </div>

            <div className="space-y-1 font-body text-xs sm:text-sm text-[#F7F1E8]/85">
              <p className="font-subheading font-bold text-[#C5A059] text-xs uppercase tracking-widest">PUBLIKASI KEMAHASISWAAN:</p>
              <p className="font-semibold text-[#F7F1E8]">Departemen Kajian Aksi dan Strategis</p>
              <p className="text-[#F7F1E8]/70">Ormawa Eksekutif PKU — KM PKU IPB University</p>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="md:col-span-3 space-y-3 font-subheading">
            <h4 className="font-subheading text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-4 border-b border-[#C5A059]/20 pb-2">
              NAVIGASI UTAMA
            </h4>
            <ul className="space-y-2 text-xs text-[#F7F1E8]/80 font-medium">
              <li>
                <a href="#home" className="hover:text-[#C5A059] transition-colors">
                  Beranda Utama
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-[#C5A059] transition-colors">
                  Tentang SERENTAK
                </a>
              </li>
              <li>
                <a href="#tema" className="hover:text-[#C5A059] transition-colors">
                  Tema Kegiatan
                </a>
              </li>
              <li>
                <a href="#sayembara" className="hover:text-[#C5A059] transition-colors">
                  Sayembara Talent
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="md:col-span-3 space-y-3 font-subheading">
            <h4 className="font-subheading text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-4 border-b border-[#C5A059]/20 pb-2">
              INFORMASI & REGULASI
            </h4>
            <ul className="space-y-2 text-xs text-[#F7F1E8]/80 font-medium">
              <li>
                <a href="#lomba" className="hover:text-[#C5A059] transition-colors">
                  Cabang Kompetisi
                </a>
              </li>
              <li>
                <a href="#jadwal" className="hover:text-[#C5A059] transition-colors">
                  Timeline & Agenda
                </a>
              </li>
              <li>
                <a href="#syarat" className="hover:text-[#C5A059] transition-colors">
                  Persyaratan Resmi
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-[#C5A059] transition-colors">
                  Helpdesk Panitia
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Technical Developer Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-xs text-[#F7F1E8]/70">
          <div>
            <p>© 2026 SERENTAK 5.0 X RBB 2026. Ormawa Eksekutif PKU IPB University.</p>
          </div>

          {/* Technical Developer Credit */}
          <div className="flex items-center gap-2 text-[11px] text-[#F7F1E8]/60 font-subheading">
            <span>Website developed by: <strong className="text-[#C5A059] font-semibold">Biro Riset dan Teknologi</strong> — Ormawa Eksekutif PKU</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
