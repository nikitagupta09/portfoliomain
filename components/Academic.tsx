"use client";

import { MouseEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles, Award } from "lucide-react";

interface Degree {
  id: number;
  degree: string;
  school: string;
  location: string;
  period: string;
  status: string;
}

const education: Degree[] = [
  {
    id: 1,
    degree: "MS in Information Systems",
    school: "Northeastern University",
    location: "Boston, MA",
    period: "Sept 2023 – May 2025",
    status: "Graduated",
  },
  {
    id: 2,
    degree: "B.Tech in Information Technology",
    school: "Mumbai University",
    location: "Mumbai, India",
    period: "Jun 2020 – May 2023",
    status: "Graduated",
  }
];

function EduCard({ item, index, isActive, onToggle }: { item: Degree; index: number; isActive: boolean; onToggle: () => void }) {
  const boundingRef = useRef<DOMRect | null>(null);

  const handleMouseMove = (ev: MouseEvent<HTMLDivElement>) => {
    if (!boundingRef.current) return;
    const x = ev.clientX - boundingRef.current.left;
    const y = ev.clientY - boundingRef.current.top;
    ev.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    ev.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseEnter = (ev: MouseEvent<HTMLDivElement>) => {
    boundingRef.current = ev.currentTarget.getBoundingClientRect();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={(ev) => {
        ev.currentTarget.style.setProperty("--mouse-x", `-1000px`);
        ev.currentTarget.style.setProperty("--mouse-y", `-1000px`);
      }}
      onClick={onToggle}
      className={`relative flex flex-col p-8 md:p-10 rounded-[2rem] group overflow-hidden cursor-pointer
        transition-all duration-500 ease-out h-full
        ${isActive
          ? 'bg-white/[0.04] border-purple-400/50 shadow-[0_20px_50px_-10px_rgba(139,92,246,0.3)] scale-[1.02] -translate-y-2'
          : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.03] hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(46,16,101,0.4)]'
        }
      `}
    >
      {/* Light-following Cursor Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(168,177,255,0.06), transparent 40%)`,
        }}
      />

      {/* Border Cursor Trace Element */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 border border-transparent"
        style={{
          background: `radial-gradient(800px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(168,177,255,0.4), transparent 40%) border-box`,
          WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Internal "Active" Ambient Light Burst */}
      <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent transition-opacity duration-500 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'}`} />

      {/* --- CONTENT BLOCK --- */}
      <div className="relative z-20 flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-0">

        <div className="flex gap-6 items-start">
          {/* Institution Icon */}
          <div className={`hidden sm:flex w-16 h-16 rounded-full items-center justify-center backdrop-blur-md shadow-inner flex-shrink-0 transition-colors duration-500 ${isActive ? 'bg-[#1e1a3a]/80 border border-purple-400/50' : 'bg-[#1e1a3a]/40 border border-[#a8b1ff]/20 group-hover:border-purple-300/40'
            }`}>
            <GraduationCap className={`w-8 h-8 transition-colors ${isActive ? 'text-purple-300' : 'text-[#a8b1ff]/90 group-hover:text-purple-200'}`} />
          </div>

          <div>
            <h3 className={`text-2xl md:text-3xl font-bold mb-2 tracking-tight transition-colors drop-shadow-sm ${isActive ? 'text-white' : 'text-white/90 group-hover:text-purple-50'
              }`}>
              {item.degree}
            </h3>
            <div className={`text-lg font-medium tracking-wide mb-3 transition-colors ${isActive ? 'text-purple-200 drop-shadow-[0_0_8px_rgba(192,132,252,0.4)]' : 'text-white/70'
              }`}>
              {item.school}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/50 font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {item.location}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Info & Badges */}
        <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start w-full md:w-auto pt-4 md:pt-0 border-t border-white/10 md:border-t-0">
          <span className={`inline-block text-sm font-semibold tracking-wider uppercase px-4 py-2 rounded-full border mb-0 md:mb-4 transition-colors ${isActive ? 'bg-white/10 border-white/30 text-white shadow-sm' : 'bg-white/5 border-white/10 text-white/80 group-hover:border-white/20'
            }`}>
            {item.period}
          </span>

          {/* Graduated Pill Badge */}
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-bold uppercase tracking-widest shadow-sm transition-colors ${isActive ? 'bg-teal-900/40 border-teal-400/50 text-teal-300 shadow-[0_0_10px_rgba(45,212,191,0.2)]' : 'bg-green-900/20 border-green-500/20 text-green-400/80 group-hover:border-green-500/40'
            }`}>
            <Award className="w-3.5 h-3.5" />
            {item.status}
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default function Academic() {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  return (
    <section id="education" className="relative bg-[#121212] py-32 px-6 border-t border-white/5 overflow-hidden">

      {/* Background Enhancements */}
      <div className="absolute top-1/4 -left-1/4 w-[700px] h-[700px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-900/10 rounded-full blur-[120px] pointer-events-none translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-sky-900/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col mb-10 space-y-3 text-center md:text-left items-center md:items-start"
        >
          <div className="flex items-center gap-3">
            <span className="text-sm md:text-base font-semibold tracking-[0.18em] text-[#a8b1ff] uppercase">
              Education
            </span>
            <div className="h-[1px] w-10 bg-white/20" />
            <Sparkles className="w-4 h-4 text-[#a8b1ff]/40 hidden md:block" />
          </div>

          <p className="max-w-3xl text-white/75 text-sm md:text-base leading-relaxed">
            Focused on data engineering, analytics, and intelligent systems with hands-on
            experience in building scalable data pipelines and cloud-based solutions.
          </p>

          <div className="flex flex-col gap-3 max-w-3xl">
            <span className="text-[0.65rem] font-bold tracking-[0.22em] text-[#a8b1ff] uppercase">
              Coursework
            </span>

            <div className="flex flex-wrap gap-2">
              {[
                "ETL Pipelines",
                "Data Warehousing",
                "Cloud Computing",
                "Big Data Systems",
                "Machine Learning",
                "Deep Learning",
                "Natural Language Processing",
                "Generative AI",
                "RAG Systems",
                "Data Structures & Algorithms"
              ].map((course, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-[0.78rem] font-medium rounded-full border bg-white/[0.04] border-white/10 text-white/70 hover:bg-white/[0.07] hover:border-purple-400/40 hover:text-white hover:shadow-[0_0_15px_rgba(139,92,246,0.12)] hover:scale-[1.03] transition-all duration-300 cursor-default"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education Cards Grid */}
        <div className="flex flex-col space-y-6">
          {education.map((edu, index) => (
            <EduCard
              key={edu.id}
              item={edu}
              index={index}
              isActive={activeCardId === edu.id}
              onToggle={() => setActiveCardId(activeCardId === edu.id ? null : edu.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
