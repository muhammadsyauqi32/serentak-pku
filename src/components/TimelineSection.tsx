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
    <section id="jadwal" className="py-24 bg-[#1A0B0B] text-[#F7F1E8] relative overflow-hidden border-b border-[#C5A059]/30">
      {/* Dark paper grid */}
      <div className="absolute inset-0 bg-dark-paper opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header (Requirement 4: <h2>Timeline</h2>) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#C5A059] mb-4 uppercase">
            Timeline
          </h2>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto rounded-full mt-4" />
        </div>

        {/* Timeline Items Grid */}
        <div className="max-w-4xl mx-auto space-y-5">
          {timelineEvents.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-[#5A0B14]/80 border border-[#C5A059]/30 hover:border-[#C5A059] backdrop-blur-sm transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-xl bg-[#1A0B0B] border border-[#C5A059] flex items-center justify-center text-[#C5A059] font-heading text-2xl shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-subheading text-xl sm:text-2xl font-bold text-[#F7F1E8] mb-1 uppercase">
                      {item.title}
                    </h3>
                    <div className="inline-flex items-center gap-2 text-xs font-subheading font-semibold text-[#C5A059]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 self-end sm:self-center px-4 py-2 rounded-md bg-[#1A0B0B] border border-[#C5A059]/40 text-xs font-subheading font-bold text-[#C5A059] uppercase tracking-wider flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span>Tahap {item.step}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
