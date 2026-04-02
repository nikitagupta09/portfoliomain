"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Briefcase, Code2, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#121212] pt-32 pb-12 px-6 overflow-hidden">

      {/* Background glow mapping to the deep luxury aesthetic */}
      <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] translate-y-1/2 translate-x-1/4 bg-[radial-gradient(circle_at_center,rgba(46,16,101,0.2)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] -translate-x-1/3 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.4)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(30,40,70,0.85),rgba(15,20,40,0.95))] backdrop-blur-xl shadow-[0_20px_80px_-30px_rgba(0,0,0,0.85)] px-6 md:px-10 py-12 md:py-14">

          <div className="absolute inset-0 pointer-events-none rounded-[2rem]">
            <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-purple-500/20 blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-400/20 blur-[120px]" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-white/20" />
              <span className="text-sm font-semibold tracking-widest text-[#a8b1ff] uppercase">Connect</span>
              <div className="h-[1px] w-12 bg-white/20" />
            </div>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-teal-400 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                Work Together
              </span>
            </h2>

            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto tracking-wide">
              Ready to build scalable data systems, real-time pipelines, or AI-powered solutions? Let’s connect and turn ideas into measurable impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-32 max-w-4xl mx-auto"
          >
            {/* Email Me */}
            {/* Email Me */}
            <a
              className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md text-white font-bold tracking-wide hover:scale-[1.03] hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(46,16,101,0.45)]"
              href="mailto:nikitasantoshgupta@outlook.com"
            >
              <Mail className="w-5 h-5 text-white/80 group-hover:text-cyan-300 transition-colors" />
              <span className="text-white/85 group-hover:text-white transition-colors">
                Email Me
              </span>
            </a>

            {/* Call Me */}
            <a
              href="tel:8574928807"
              className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md text-white font-bold tracking-wide hover:scale-[1.03] hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(46,16,101,0.45)]"
            >
              <Phone className="w-5 h-5 text-[#a8b1ff]" />
              <span>Call Me</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nikita-g-ab4b4516b/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md text-white font-bold tracking-wide hover:scale-[1.03] hover:bg-white/10 hover:border-[#60a5fa]/50 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(46,16,101,0.45)]"
            >
              <Briefcase className="w-5 h-5 text-white/80 group-hover:text-[#60a5fa] transition-colors" />
              <span className="text-white/85 group-hover:text-white transition-colors">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/nikitagupta09?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md text-white font-bold tracking-wide hover:scale-[1.03] hover:bg-white/10 hover:border-[#c084fc]/50 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(46,16,101,0.45)]"
            >
              <Code2 className="w-5 h-5 text-white/80 group-hover:text-[#c084fc] transition-colors" />
              <span className="text-white/85 group-hover:text-white transition-colors">GitHub</span>
            </a>
          </motion.div>

        </div>
      </div>
      {/* Footer */}
      <div className="relative z-10 border-t border-white/10 pt-8 mt-12 text-center flex flex-col items-center">
        <p className="text-white/40 text-sm tracking-wide">
          © 2026 Nikita Gupta · Designing systems where data meets intelligence.
        </p>
        <p className="text-white/25 text-xs tracking-wide mt-2">
          Built in Boston.
        </p>
      </div>

    </section>
  );
}
