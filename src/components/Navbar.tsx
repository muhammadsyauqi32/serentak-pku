"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

      const sections = ["home", "tentang", "lomba", "jadwal", "syarat", "faq", "kontak"];
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
    { name: "Kompetisi", href: "#lomba", id: "lomba" },
    { name: "Jadwal", href: "#jadwal", id: "jadwal" },
    { name: "Persyaratan", href: "#syarat", id: "syarat" },
    { name: "FAQ", href: "#faq", id: "faq" },
    { name: "Kontak", href: "#kontak", id: "kontak" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-[#1A0B0B] py-3 shadow-xl border-b border-[#C5A059]/30"
            : "bg-[#1A0B0B]/90 backdrop-blur-md py-4 border-b border-[#C5A059]/20"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* SERENTAK Institutional Logo & Organization Sub-brand */}
            <a href="#home" className="flex items-center gap-3 group shrink-0">
              <div className="w-20 h-12 relative flex items-center justify-center">
                <Image src="/images/logo.png" alt="Logo SERENTAK 5.0 X RBB 2026" width={80} height={45} className="object-contain" priority />
              </div>
              <div className="hidden sm:flex flex-col border-l border-[#C5A059]/30 pl-3">
                <span className="font-heading text-xs sm:text-sm text-[#C5A059] tracking-wide uppercase leading-tight">
                  SERENTAK 5.0 X RBB 2026
                </span>

              </div>
            </a>

            {/* Desktop Navigation Links (Moved to Right) */}
            <nav className="hidden lg:flex items-center space-x-1 font-subheading bg-[#5A0B14]/30 px-3 py-1 rounded-full border border-[#C5A059]/30 ml-auto">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-colors ${isActive
                        ? "bg-[#5A0B14] text-[#C5A059] border border-[#C5A059]/50 font-bold"
                        : "text-[#F7F1E8]/80 hover:text-[#C5A059] hover:bg-[#5A0B14]/40"
                      }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Mobile Hamburger Toggle Button */}
            <div className="flex lg:hidden items-center font-subheading">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#C5A059] hover:text-[#F7F1E8] rounded-lg"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 lg:hidden bg-[#1A0B0B] border-b border-[#C5A059]/40 shadow-2xl px-6 py-6 font-subheading"
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
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeSection === link.id
                      ? "bg-[#5A0B14] text-[#C5A059] font-bold border border-[#C5A059]/30"
                      : "text-[#F7F1E8] hover:bg-[#5A0B14]/40 hover:text-[#C5A059]"
                    }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#C5A059]" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
