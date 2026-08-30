"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Copy, Check, Send, Headset } from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="kontak" className="py-24 bg-gradient-to-b from-[#2A050A] via-[#38070F] to-[#2A050A] text-[#FAF6F0] relative overflow-hidden">
      {/* Background motif */}
      <div className="absolute inset-0 bg-motif-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#58000E] border border-[#C5A059]/40 mb-4">
            <Headset className="w-4 h-4 text-[#E5C378]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5C378]">Pusat Informasi & Helpdesk</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold gold-gradient-text mb-4">Hubungi Panitia Pelaksana</h2>
          <p className="text-sm sm:text-base text-[#FAF6F0]/80">Punya pertanyaan mengenai regulasi lomba atau bantuan kendala pendaftaran? Tim panitia siap membantu.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C5A059] via-[#E5C378] to-[#C5A059] mx-auto rounded-full mt-6" />
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* WhatsApp Card */}
          <div className="p-6 rounded-3xl bg-[#58000E]/40 border border-[#C5A059]/30 backdrop-blur-md flex flex-col justify-between hover:border-[#E5C378] transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#2A050A] border border-[#C5A059] flex items-center justify-center text-[#E5C378] mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] block mb-1">Contact Person</span>
              <h3 className="font-serif text-lg font-bold text-[#FAF6F0] mb-2">+62 823-4977-2697</h3>
            </div>
            <button
              onClick={() => handleCopy("+6281234567890", "wa")}
              className="w-full py-2.5 px-3 rounded-xl bg-[#2A050A] hover:bg-[#8B0000] border border-[#C5A059]/40 text-xs font-semibold text-[#E5C378] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {copiedField === "wa" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedField === "wa" ? "Nomor Tersalin!" : "Salin Kontak WA"}</span>
            </button>
          </div>

          {/* Instagram Card */}
          <div className="p-6 rounded-3xl bg-[#58000E]/40 border border-[#C5A059]/30 backdrop-blur-md flex flex-col justify-between hover:border-[#E5C378] transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#2A050A] border border-[#C5A059] flex items-center justify-center text-[#E5C378] mb-4">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] block mb-1">Instagram Resmi</span>
              <h3 className="font-serif text-lg font-bold text-[#FAF6F0] mb-2">@serentak.official</h3>
              <p className="text-xs text-[#FAF6F0]/70 mb-4">Update pengumuman lomba, jadwal, twibbon, dan pengumuman pemenang.</p>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-[#2A050A] hover:bg-[#8B0000] border border-[#C5A059]/40 text-xs font-semibold text-[#E5C378] flex items-center justify-center gap-2 transition-colors text-center"
            >
              <Send className="w-4 h-4" />
              <span>Buka Instagram</span>
            </a>
          </div>

          {/* Email Card */}
          <div className="p-6 rounded-3xl bg-[#58000E]/40 border border-[#C5A059]/30 backdrop-blur-md flex flex-col justify-between hover:border-[#E5C378] transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#2A050A] border border-[#C5A059] flex items-center justify-center text-[#E5C378] mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] block mb-1">Surat Elektronik</span>
              <h3 className="font-serif text-base font-bold text-[#FAF6F0] mb-2 truncate">panitia@serentak.or.id</h3>
              <p className="text-xs text-[#FAF6F0]/70 mb-4">Untuk korespondensi resmi perguruan tinggi dan kemitraan media partner.</p>
            </div>
            <button
              onClick={() => handleCopy("panitia@serentak.or.id", "email")}
              className="w-full py-2.5 px-3 rounded-xl bg-[#2A050A] hover:bg-[#8B0000] border border-[#C5A059]/40 text-xs font-semibold text-[#E5C378] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {copiedField === "email" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedField === "email" ? "Email Tersalin!" : "Salin Alamat Email"}</span>
            </button>
          </div>

          {/* Secretariat Address Card */}
          <div className="p-6 rounded-3xl bg-[#58000E]/40 border border-[#C5A059]/30 backdrop-blur-md flex flex-col justify-between hover:border-[#E5C378] transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#2A050A] border border-[#C5A059] flex items-center justify-center text-[#E5C378] mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] block mb-1">Sekretariat Utama</span>
              <h3 className="font-serif text-sm font-bold text-[#FAF6F0] mb-2">Gedung Kemahasiswaan Lt. 2</h3>
              <p className="text-xs text-[#FAF6F0]/70 mb-4 leading-relaxed">Kampus Utama Universitas Indonesia, Depok, Jawa Barat.</p>
            </div>
            <div className="w-full py-2.5 px-3 rounded-xl bg-[#2A050A]/60 border border-[#C5A059]/20 text-[11px] font-semibold text-[#C5A059] text-center">Jam Kerja: 09.00 - 17.00 WIB</div>
          </div>
        </div>
      </div>
    </section>
  );
}
