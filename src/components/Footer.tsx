"use client";

import { Mail, Landmark, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1F0408] text-[#FAF6F0] border-t border-[#C5A059]/30 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#C5A059]/20">
          {/* SERENTAK Institutional Branding */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8B0000] via-[#58000E] to-[#3D030D] border-2 border-[#C5A059] flex items-center justify-center">
                <span className="font-serif text-xl font-bold text-[#E5C378]">S</span>
              </div>
              <span className="font-serif text-2xl font-black text-[#E5C378] tracking-wider">SERENTAK 2026</span>
            </div>

            <p className="text-xs sm:text-sm text-[#FAF6F0]/75 leading-relaxed max-w-sm">SERENTAK adalah [deskripsi serentak]</p>

            <div className="flex items-center gap-3 pt-2 text-xs text-[#C5A059]">
              <Landmark className="w-4 h-4 text-[#E5C378]" />
              <span>Diselenggarakan oleh Organisasi Kemahasiswaan Indonesia</span>
            </div>
          </div>

          {/* Nav Links Column 1 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-[#E5C378] mb-4">Navigasi Cepat</h4>
            <ul className="space-y-2 text-xs text-[#FAF6F0]/80">
              <li>
                <a href="#home" className="hover:text-[#E5C378] transition-colors">
                  Beranda Utama
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-[#E5C378] transition-colors">
                  Tentang SERENTAK
                </a>
              </li>
              <li>
                <a href="#lomba" className="hover:text-[#E5C378] transition-colors">
                  Cabang Kompetisi
                </a>
              </li>
              <li>
                <a href="#jadwal" className="hover:text-[#E5C378] transition-colors">
                  Jadwal & Timeline
                </a>
              </li>
              <li>
                <a href="#syarat" className="hover:text-[#E5C378] transition-colors">
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Links Column 2 */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-[#E5C378] mb-4">Informasi & Regulasi</h4>
            <ul className="space-y-2 text-xs text-[#FAF6F0]/80">
              <li>
                <a href="#faq" className="hover:text-[#E5C378] transition-colors">
                  Pusat Bantuan & FAQ
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-[#E5C378] transition-colors">
                  Sekretariat & Helpdesk WA
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF6F0]/60">
          <p>© 2026 SERENTAK - Departemen Kajian Aksi dan Strategis - Ormawa Eksekutif PKU</p>
          <div className="flex items-center gap-1 text-[#E5C378]">
            <span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
