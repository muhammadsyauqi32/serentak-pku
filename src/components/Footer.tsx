"use client";

import { Landmark } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A0B0B] text-[#F7F1E8] border-t border-[#C5A059]/30 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#C5A059]/20">
          
          {/* SERENTAK Institutional Branding */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#5A0B14] border border-[#C5A059] flex items-center justify-center">
                <span className="font-heading text-lg text-[#C5A059]">S</span>
              </div>
              <span className="font-heading text-xl text-[#C5A059] tracking-wider uppercase">
                SERENTAK 5.0
              </span>
            </div>

            <p className="font-body text-xs sm:text-sm text-[#F7F1E8]/75 leading-relaxed max-w-sm">
              Kegiatan perlombaan sekaligus event interaktif mahasiswa KM PKU IPB University Angkatan 63 dalam kolaborasi Ruang Baca Bicara (RBB) 2026.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs font-subheading text-[#C5A059]">
              <Landmark className="w-4 h-4 text-[#C5A059]" />
              <span>KM PKU IPB University Angkatan 63</span>
            </div>
          </div>

          {/* Nav Links Column 1 */}
          <div className="md:col-span-3 space-y-3 font-subheading">
            <h4 className="font-subheading text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs text-[#F7F1E8]/80">
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
                  Tema Acara
                </a>
              </li>
              <li>
                <a href="#rangkaian" className="hover:text-[#C5A059] transition-colors">
                  Rangkaian Kegiatan
                </a>
              </li>
              <li>
                <a href="#lomba" className="hover:text-[#C5A059] transition-colors">
                  Cabang Kompetisi
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Links Column 2 */}
          <div className="md:col-span-4 space-y-3 font-subheading">
            <h4 className="font-subheading text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
              Informasi & Regulasi
            </h4>
            <ul className="space-y-2 text-xs text-[#F7F1E8]/80">
              <li>
                <a href="#jadwal" className="hover:text-[#C5A059] transition-colors">
                  Jadwal & Timeline
                </a>
              </li>
              <li>
                <a href="#syarat" className="hover:text-[#C5A059] transition-colors">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C5A059] transition-colors">
                  Pusat Bantuan & FAQ
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-[#C5A059] transition-colors">
                  Helpdesk Panitia WA
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-xs text-[#F7F1E8]/60">
          <p>© 2026 SERENTAK 5.0 X RBB 2026 — KM PKU IPB University Angkatan 63.</p>
          <div className="flex items-center gap-1 text-[#C5A059]">
            <span>Semarak Untuk Bergerak</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
