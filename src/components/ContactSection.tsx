"use client";

import { useState } from "react";
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
    <section id="kontak" className="py-24 bg-[#1A0B0B] text-[#F7F1E8] relative overflow-hidden border-b border-[#C5A059]/30">
      {/* Dark paper grid */}
      <div className="absolute inset-0 bg-dark-paper opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5A0B14] border border-[#C5A059]/40 mb-4 font-subheading">
            <Headset className="w-4 h-4 text-[#C5A059]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">Pusat Informasi & Helpdesk</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#C5A059] mb-4 uppercase">Hubungi Panitia Pelaksana</h2>
          <p className="font-body text-sm sm:text-base text-[#F7F1E8]/80">Pertanyaan mengenai perlombaan atau bantuan kendala pendaftaran? Panitia KM PKU Angkatan 63 siap membantu.</p>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto rounded-full mt-6" />
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 font-subheading">
          {/* WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-[#5A0B14]/70 border border-[#C5A059]/30 flex flex-col justify-between hover:border-[#C5A059] transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1A0B0B] border border-[#C5A059] flex items-center justify-center text-[#C5A059] mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] block mb-1">Contact Person</span>
              <h3 className="font-subheading text-lg font-bold text-[#F7F1E8] mb-2">+62 823-4977-2697</h3>
            </div>
            <button
              onClick={() => handleCopy("+6282349772697", "wa")}
              className="w-full py-2.5 px-3 rounded-md bg-[#1A0B0B] hover:bg-[#5A0B14] border border-[#C5A059]/40 text-xs font-semibold text-[#C5A059] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {copiedField === "wa" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedField === "wa" ? "Tersalin!" : "Salin WhatsApp"}</span>
            </button>
          </div>

          {/* Instagram Card */}
          <div className="p-6 rounded-2xl bg-[#5A0B14]/70 border border-[#C5A059]/30 flex flex-col justify-between hover:border-[#C5A059] transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1A0B0B] border border-[#C5A059] flex items-center justify-center text-[#C5A059] mb-4">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] block mb-1">Instagram Resmi</span>
              <h3 className="font-subheading text-lg font-bold text-[#F7F1E8] mb-2">@serentak.official</h3>
              <p className="font-body text-xs text-[#F7F1E8]/70 mb-4">Informasi pengumuman lomba, twibbon, dan pemenang.</p>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-md bg-[#1A0B0B] hover:bg-[#5A0B14] border border-[#C5A059]/40 text-xs font-semibold text-[#C5A059] flex items-center justify-center gap-2 transition-colors text-center"
            >
              <Send className="w-4 h-4" />
              <span>Buka Instagram</span>
            </a>
          </div>

          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-[#5A0B14]/70 border border-[#C5A059]/30 flex flex-col justify-between hover:border-[#C5A059] transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1A0B0B] border border-[#C5A059] flex items-center justify-center text-[#C5A059] mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] block mb-1">Surat Elektronik</span>
              <h3 className="font-subheading text-base font-bold text-[#F7F1E8] mb-2 truncate">panitia@serentak.or.id</h3>
              <p className="font-body text-xs text-[#F7F1E8]/70 mb-4">Korespondensi resmi panitia pelaksana.</p>
            </div>
            <button
              onClick={() => handleCopy("panitia@serentak.or.id", "email")}
              className="w-full py-2.5 px-3 rounded-md bg-[#1A0B0B] hover:bg-[#5A0B14] border border-[#C5A059]/40 text-xs font-semibold text-[#C5A059] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {copiedField === "email" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedField === "email" ? "Tersalin!" : "Salin Email"}</span>
            </button>
          </div>

          {/* Secretariat Address Card */}
          <div className="p-6 rounded-2xl bg-[#5A0B14]/70 border border-[#C5A059]/30 flex flex-col justify-between hover:border-[#C5A059] transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1A0B0B] border border-[#C5A059] flex items-center justify-center text-[#C5A059] mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] block mb-1">Sekretariat Utama</span>
              <h3 className="font-subheading text-sm font-bold text-[#F7F1E8] mb-2">KM PKU IPB University</h3>
              <p className="font-body text-xs text-[#F7F1E8]/70 mb-4 leading-relaxed">Kampus IPB Dramaga, Bogor, Jawa Barat.</p>
            </div>
            <div className="w-full py-2.5 px-3 rounded-md bg-[#1A0B0B]/80 border border-[#C5A059]/20 text-[11px] font-semibold text-[#C5A059] text-center">KM PKU Angkatan 63</div>
          </div>
        </div>
      </div>
    </section>
  );
}
