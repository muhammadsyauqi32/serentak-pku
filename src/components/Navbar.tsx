"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Award, ScrollText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenGuidebook: () => void;
}

export default function Navbar({ onOpenRegister, onOpenGuidebook }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["home", "tentang", "tema", "lomba", "jadwal", "syarat", "faq", "kontak"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#home", id: "home" },
    { name: "Tentang", href: "#tentang", id: "tentang" },
    { name: "Tema", href: "#tema", id: "tema" },
    { name: "Kompetisi", href: "#lomba", id: "lomba" },
    { name: "Jadwal", href: "#jadwal", id: "jadwal" },
    { name: "Persyaratan", href: "#syarat", id: "syarat" },
    { name: "FAQ", href: "#faq", id: "faq" },
    { name: "Kontak", href: "#kontak", id: "kontak" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#3D070F]/95 backdrop-blur-md py-3 shadow-xl border-b border-[#C5A059]/30"
            : "bg-gradient-to-b from-[#2A050A]/90 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* SERENTAK Institutional Logo Placeholder */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8B0000] via-[#58000E] to-[#3D030D] border-2 border-[#C5A059] flex items-center justify-center shadow-lg group-hover:border-[#E5C378] transition-colors">
                <span className="font-serif text-lg font-bold text-[#E5C378] tracking-widest">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-extrabold tracking-wider text-[#FAF6F0] group-hover:text-[#E5C378] transition-colors">
                  SERENTAK
                </span>
                <span className="text-[10px] tracking-widest text-[#C5A059] uppercase font-medium">
                  Kompetisi Mahasiswa 2026
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-[#2A050A]/40 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#C5A059]/20">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-[#8B0000] text-[#E5C378] border border-[#C5A059]/40 shadow-sm"
                        : "text-[#FAF6F0]/80 hover:text-[#E5C378] hover:bg-[#8B0000]/30"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={onOpenGuidebook}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#E5C378] border border-[#C5A059]/50 rounded-lg hover:bg-[#C5A059]/10 transition-all cursor-pointer"
              >
                <ScrollText className="w-4 h-4" />
                <span>Guidebook</span>
              </button>
              <button
                onClick={onOpenRegister}
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#3D030D] bg-gradient-to-r from-[#E5C378] via-[#C5A059] to-[#9E7B35] rounded-lg shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer border border-[#FFF3C4]/40"
              >
                <Award className="w-4 h-4" />
                <span>Daftar Sekarang</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenRegister}
                className="px-3 py-1.5 text-[11px] font-bold text-[#3D030D] bg-[#C5A059] rounded-md"
              >
                Daftar
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#E5C378] hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 lg:hidden bg-[#38070F] border-b border-[#C5A059]/40 shadow-2xl px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              <div className="text-xs uppercase tracking-widest text-[#C5A059] font-bold pb-2 border-b border-[#C5A059]/20">
                Navigasi Acara
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeSection === link.id
                      ? "bg-[#8B0000] text-[#E5C378] font-bold border border-[#C5A059]/30"
                      : "text-[#FAF6F0] hover:bg-[#8B0000]/40 hover:text-[#E5C378]"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#C5A059]" />
                </a>
              ))}

              <div className="pt-4 border-t border-[#C5A059]/20 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGuidebook();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-[#C5A059] text-[#E5C378] text-sm font-semibold hover:bg-[#C5A059]/10"
                >
                  <ScrollText className="w-4 h-4" />
                  <span>Unduh Guidebook Resmi</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRegister();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-[#E5C378] via-[#C5A059] to-[#9E7B35] text-[#3D030D] text-sm font-bold uppercase tracking-wider shadow-lg"
                >
                  <Award className="w-5 h-5" />
                  <span>Daftar Sekarang (Google Form)</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
