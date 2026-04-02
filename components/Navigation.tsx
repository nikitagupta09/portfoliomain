"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#121212]/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tight text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-teal-400">Nikita Gupta</span>
        </a>

        <div className="hidden md:flex items-center gap-3">

          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white 
            bg-[linear-gradient(135deg,rgba(35,45,80,0.6),rgba(18,22,40,0.6))] 
            border border-white/10 
            hover:border-purple-400/40 
            hover:bg-[linear-gradient(135deg,rgba(55,65,120,0.8),rgba(22,28,52,0.9))] 
            hover:scale-[1.05] 
            transition-all duration-300 
            shadow-[0_10px_30px_-12px_rgba(139,92,246,0.25)]"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, "about")}
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white 
            bg-[linear-gradient(135deg,rgba(35,45,80,0.6),rgba(18,22,40,0.6))] 
            border border-white/10 
            hover:border-purple-400/40 
            hover:bg-[linear-gradient(135deg,rgba(55,65,120,0.8),rgba(22,28,52,0.9))] 
            hover:scale-[1.05] 
            transition-all duration-300 
            shadow-[0_10px_30px_-12px_rgba(139,92,246,0.25)]"
          >
            About
          </a>

          <a
            href="#experience"
            onClick={(e) => handleScrollTo(e, "experience")}
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white 
            bg-[linear-gradient(135deg,rgba(35,45,80,0.6),rgba(18,22,40,0.6))] 
            border border-white/10 
            hover:border-purple-400/40 
            hover:bg-[linear-gradient(135deg,rgba(55,65,120,0.8),rgba(22,28,52,0.9))] 
            hover:scale-[1.05] 
            transition-all duration-300 
            shadow-[0_10px_30px_-12px_rgba(139,92,246,0.25)]"
          >
            Experience
          </a>

          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, "projects")}
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white 
            bg-[linear-gradient(135deg,rgba(35,45,80,0.6),rgba(18,22,40,0.6))] 
            border border-white/10 
            hover:border-purple-400/40 
            hover:bg-[linear-gradient(135deg,rgba(55,65,120,0.8),rgba(22,28,52,0.9))] 
            hover:scale-[1.05] 
            transition-all duration-300 
            shadow-[0_10px_30px_-12px_rgba(139,92,246,0.25)]"
          >
            Projects
          </a>

          <a
            href="#skills"
            onClick={(e) => handleScrollTo(e, "skills")}
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white 
            bg-[linear-gradient(135deg,rgba(35,45,80,0.6),rgba(18,22,40,0.6))] 
            border border-white/10 
            hover:border-purple-400/40 
            hover:bg-[linear-gradient(135deg,rgba(55,65,120,0.8),rgba(22,28,52,0.9))] 
            hover:scale-[1.05] 
            transition-all duration-300 
            shadow-[0_10px_30px_-12px_rgba(139,92,246,0.25)]"
          >
            Skills
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white 
            bg-[linear-gradient(135deg,rgba(35,45,80,0.9),rgba(18,22,40,0.95))] 
            border border-white/10 
            hover:border-purple-400/50 
            hover:bg-[linear-gradient(135deg,rgba(75,85,160,1),rgba(30,35,80,1))] 
            hover:scale-[1.06] 
            transition-all duration-300 
            shadow-[0_12px_35px_-10px_rgba(139,92,246,0.4)]"
          >
            Contact Me
          </a>

        </div>
      </div>
    </motion.nav>
  );
}
