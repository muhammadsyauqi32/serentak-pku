"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Award, Flag, Send, UserCheck } from "lucide-react";

export default function TimelineSection() {
  const timelineEvents = [
    {
      step: "01",
      title: "Pendaftaran Peserta",
      date: "1 - 13 September 2026",
      icon: UserCheck,
    },
    {
      step: "02",
      title: "Technical Meeting",
      date: "16 September 2026",
      icon: Clock,
    },
    {
      step: "03",
      title: "Opening Ceremony dan Babak Penyisihan",
      date: "19 September 2026",
      icon: Flag,
    },
    {
      step: "04",
      title: "Babak Lanjutan dan Semifinal",
      date: "20 September 2026",
      icon: Send,
    },
    {
      step: "05",
      title: "Closing Ceremony dan Babak Final",
      date: "26 September 2026",
      icon: Award,
    },
  ];

  return (
    <section id="jadwal" className="py-24 bg-[#1A0B0B] text-[#F7F1E8] relative overflow-hidden border-b border-[#C5A059]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#C5A059]/40 pb-6 mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-subheading font-bold uppercase tracking-widest text-[#C5A059] mb-2">
              <Calendar className="w-4 h-4 text-[#C5A059]" />
              <span>AGENDA & LINI MASA DOKUMEN</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#C5A059] uppercase tracking-tight">
              Timeline Kegiatan
            </h2>
          </div>
          <span className="font-subheading text-xs font-bold uppercase tracking-widest text-[#F7F1E8]/60">
            BAGIAN III — JADWAL PELAKSANAAN
          </span>
        </div>

        {/* Editorial Timeline Agenda Rows */}
        <div className="max-w-4xl mx-auto space-y-4">
          {timelineEvents.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 sm:p-8 bg-[#5A0B14]/30 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-[#1A0B0B] border border-[#C5A059] flex items-center justify-center text-[#C5A059] font-heading text-xl shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-subheading text-xl sm:text-2xl font-bold text-[#F7F1E8] mb-1 uppercase tracking-wide group-hover:text-[#C5A059] transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-subheading font-bold text-[#C5A059]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 px-4 py-2 bg-[#1A0B0B] border border-[#C5A059]/40 text-xs font-subheading font-bold text-[#C5A059] uppercase tracking-widest flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span>TAHAP {item.step}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
