"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ThemeSection from "@/components/ThemeSection";
import EventSeriesSection from "@/components/EventSeriesSection";
import CompetitionSection from "@/components/CompetitionSection";
import TimelineSection from "@/components/TimelineSection";
import RequirementsSection from "@/components/RequirementsSection";
import GuidebookSection from "@/components/GuidebookSection";
import FAQSection from "@/components/FAQSection";
import SponsorSection from "@/components/SponsorSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";
import GuidebookModal from "@/components/GuidebookModal";
import InteractiveMascot from "@/components/InteractiveMascot";

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isGuidebookOpen, setIsGuidebookOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  const handleOpenRegister = (categoryName?: string) => {
    setSelectedCategory(categoryName);
    setIsRegisterOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#181512] flex flex-col font-sans relative">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenRegister={() => handleOpenRegister()}
        onOpenGuidebook={() => setIsGuidebookOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenRegister={() => handleOpenRegister()}
          onOpenGuidebook={() => setIsGuidebookOpen(true)}
        />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Theme Section */}
        <ThemeSection />

        {/* 4. Event Series Section */}
        <EventSeriesSection />

        {/* 5. Competition Categories */}
        <CompetitionSection onOpenRegister={handleOpenRegister} />

        {/* 6. Event Timeline */}
        <TimelineSection />

        {/* 7. Requirements */}
        <RequirementsSection />

        {/* 8. Guidebook CTA */}
        <GuidebookSection onOpenGuidebook={() => setIsGuidebookOpen(true)} />

        {/* 9. FAQ Accordion */}
        <FAQSection />

        {/* 10. Sponsor & Partner Section */}
        <SponsorSection />

        {/* 11. Contact & Helpdesk */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive Event Mascot */}
      <InteractiveMascot />

      {/* Interactive Modals */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        selectedCategory={selectedCategory}
      />

      <GuidebookModal
        isOpen={isGuidebookOpen}
        onClose={() => setIsGuidebookOpen(false)}
      />
    </div>
  );
}
