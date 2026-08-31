"use client";

import { useState } from "react";
import { Phone, Copy, Check, Send } from "lucide-react";

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
    <section id="kontak" className="py-24 bg-[#1A0B0B] text-[#F7F1E8] relative overflow-hidden border-b border-[#C5A059]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#C5A059]/40 pb-6 mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-subheading font-bold uppercase tracking-widest text-[#C5A059] mb-2">
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>HELPDESK & LAYANAN INFORMASI</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#C5A059] uppercase tracking-tight">
              Kontak Panitia
            </h2>
          </div>
          <span className="font-subheading text-xs font-bold uppercase tracking-widest text-[#F7F1E8]/60">
            BAGIAN VI — LAYANAN KENDALA
          </span>
        </div>

        {/* Contact Directory Grid (Sharp Institutional Box Layout) */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 font-subheading">
          {/* WhatsApp Contact Box */}
          <div className="p-8 bg-[#5A0B14]/30 border border-[#C5A059]/40 hover:border-[#C5A059] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#C5A059]/30 pb-4 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">CONTACT PERSON</span>
                <div className="w-8 h-8 bg-[#1A0B0B] border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
                  <Phone className="w-4 h-4" />
                </div>
              </div>
              <h3 className="font-subheading text-xl font-bold text-[#F7F1E8] mb-1">+62 821-5058-4294</h3>
              <p className="font-body text-xs text-[#F7F1E8]/70 mb-6">Erfan Zulfa</p>
            </div>
            <button
              onClick={() => handleCopy("+6282150584294", "wa")}
              className="w-full py-3 bg-[#1A0B0B] hover:bg-[#5A0B14] border border-[#C5A059]/50 text-xs font-bold uppercase tracking-widest text-[#C5A059] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {copiedField === "wa" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedField === "wa" ? "Tersalin!" : "Salin WhatsApp"}</span>
            </button>
          </div>

          {/* Instagram Contact Box */}
          <div className="p-8 bg-[#5A0B14]/30 border border-[#C5A059]/40 hover:border-[#C5A059] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#C5A059]/30 pb-4 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">INSTAGRAM RESMI</span>
                <div className="w-8 h-8 bg-[#1A0B0B] border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
                  <InstagramIcon className="w-4 h-4" />
                </div>
              </div>
              <h3 className="font-subheading text-xl font-bold text-[#F7F1E8] mb-1">@serentak.pku</h3>
              <p className="font-body text-xs text-[#F7F1E8]/70 mb-6">Informasi pengumuman lomba, twibbon, dan pemenang.</p>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#1A0B0B] hover:bg-[#5A0B14] border border-[#C5A059]/50 text-xs font-bold uppercase tracking-widest text-[#C5A059] flex items-center justify-center gap-2 transition-colors text-center"
            >
              <Send className="w-4 h-4" />
              <span>Buka Instagram</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
