"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle2, Award, Flag, Send, Sparkles, UserCheck } from "lucide-react";

export default function TimelineSection() {
  const timelineEvents = [
    {
      step: "01",
      title: "Pendaftaran Gelombang 1 Open",
      date: "01 September - 25 September 2026",
      status: "ACTIVE",
      statusText: "Berlangsung",
      description: "Pembukaan pendaftaran resmi dan pembayaran registrasi early bird untuk seluruh cabang lomba.",
      icon: UserCheck,
    },
    {
      step: "02",
      title: "Batas Akhir Pendaftaran & Pengumpulan Karya",
      date: "15 Oktober 2026 (23:59 WIB)",
      status: "UPCOMING",
      statusText: "Mendatang",
      description: "Batas penutupan formulir Google Form pendaftaran dan unggah tautan karya video/naskah poster.",
      icon: Clock,
    },
    {
      step: "03",
      title: "Proses Kurasi & Penilaian Juri",
      date: "18 Oktober - 25 Oktober 2026",
      status: "UPCOMING",
      statusText: "Mendatang",
      description: "Penilaian tertutup oleh Dewan Juri Profesional dan praktisi terkemuka.",
      icon: Flag,
    },
    {
      step: "04",
      title: "Pengumuman Finalis & Karya Favorit",
      date: "28 Oktober 2026",
      status: "UPCOMING",
      statusText: "Mendatang",
      description: "Pengumuman daftar finalis terbaik dan voting karya terfavorit melalui media sosial resmi.",
      icon: Sparkles,
    },
    {
      step: "05",
      title: "Technical Meeting & Presentasi Finalis",
      date: "02 November 2026",
      status: "UPCOMING",
      statusText: "Mendatang",
      description: "Briefing teknis dan unjuk penampilan langsung para finalis di hadapan juri & audiens.",
      icon: Send,
    },
    {
      step: "06",
      title: "Puncak Acara & Awarding Night",
      date: "08 November 2026",
      status: "UPCOMING",
      statusText: "Mendatang",
      description: "Malam penganugerahan piala, penyerahan trofi rektor, dan penyerahan e-sertifikat pemenang.",
      icon: Award,
    },
  ];

  return (
    <section id="jadwal" className="py-24 bg-gradient-to-b from-[#3D030D] via-[#4A0E17] to-[#2A050A] text-[#FAF6F0] relative overflow-hidden">
      {/* Motif Background */}
      <div className="absolute inset-0 bg-motif-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#58000E] border border-[#C5A059]/40 mb-4">
            <Calendar className="w-4 h-4 text-[#E5C378]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5C378]">
              Jadwal & Kronologi Lomba
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold gold-gradient-text mb-4">
            Timeline Acara SERENTAK 2026
          </h2>
          <p className="text-sm sm:text-base text-[#FAF6F0]/80">
            Catat tanggal-tanggal penting agar tidak melewatkan momentum pendaftaran dan pengumpulan karya.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C5A059] via-[#E5C378] to-[#C5A059] mx-auto rounded-full mt-6" />
        </div>

        {/* Timeline Desktop & Mobile Grid */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#C5A059] via-[#8B0000] to-[#C5A059] -translate-x-1/2 rounded-full opacity-60" />

          <div className="space-y-8 lg:space-y-12">
            {timelineEvents.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isActive = item.status === "ACTIVE";
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Card */}
                  <div className="w-full lg:w-1/2 px-0 lg:px-8">
                    <div
                      className={`p-6 sm:p-8 rounded-3xl backdrop-blur-md transition-all duration-300 ${
                        isActive
                          ? "bg-[#8B0000]/80 border-2 border-[#E5C378] shadow-2xl gold-border-glow"
                          : "bg-[#2A050A]/70 border border-[#C5A059]/30 hover:border-[#C5A059]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-serif text-3xl font-black text-[#E5C378]">
                          {item.step}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            isActive
                              ? "bg-[#E5C378] text-[#3D030D]"
                              : "bg-[#58000E] text-[#FAF6F0]/80 border border-[#C5A059]/30"
                          }`}
                        >
                          {item.statusText}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF6F0] mb-2">
                        {item.title}
                      </h3>

                      <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E5C378] mb-4 bg-[#3D030D]/60 px-3 py-1 rounded-lg border border-[#C5A059]/20">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.date}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#FAF6F0]/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Circle Node Icon on Center Line */}
                  <div className="my-4 lg:my-0 z-20 flex items-center justify-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 ${
                        isActive
                          ? "bg-[#E5C378] text-[#3D030D] ring-4 ring-[#8B0000]"
                          : "bg-[#58000E] text-[#E5C378] border-2 border-[#C5A059]"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Empty Spacer Column for layout symmetry */}
                  <div className="hidden lg:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
