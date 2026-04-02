"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const FRAME_COUNT = 120;
const FPS = 15;
const FRAME_DURATION = 1000 / FPS;

export default function HeroSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Load Images Context
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.webp`;

      img.onload = () => {
        loadedCount++;
        setLoadingProgress((loadedCount / FRAME_COUNT) * 100);
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
        }
      };

      // Fallback if image fails to load
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages.filter(im => im.complete && im.naturalWidth !== 0));
        }
      };

      loadedImages[i] = img;
    }
  }, []);

  // Autoplay Loop Logic
  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let lastTime = 0;
    let currentFrame = 0;
    let animationFrameId: number;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(currentFrame);
    };

    const renderFrame = (frameIndex: number) => {
      const img = images[frameIndex];
      // Skip undefined gracefully if skipping errors occurred
      if (!img || img.naturalWidth === 0) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;

      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    const loop = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      const elapsed = timestamp - lastTime;

      // When enough time has passed based on our explicit FPS, update frame
      if (elapsed > FRAME_DURATION) {
        currentFrame = (currentFrame + 1) % images.length;
        renderFrame(currentFrame);
        // Correct lastTime to lock to timeline
        lastTime = timestamp - (elapsed % FRAME_DURATION);
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    // Initialize
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [images]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const metrics = [
    { value: "3+", label: "Years Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "1M+", label: "Records Analyzed" },
    { value: "3", label: "Companies Worked" }
  ];

  return (
    <section ref={containerRef} id="home" className="relative h-screen w-full bg-[#121212] overflow-hidden flex items-center">

      {/* Loading State */}
      {loadingProgress < 100 && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#121212]">
          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#a8b1ff] transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Canvas Video Layer */}
      <div className="absolute inset-0">
        <canvas ref={canvasRef} className="w-full h-full object-cover" />
        {/* Background gradient overlays for text readability & styling */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/80 via-[#121212]/40 to-transparent pointer-events-none" />        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-purple-500/10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none" />
      </div>

      {/* Main Content (Left Aligned) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Greeting */}
          <div className="mb-6">
            <p className="text-[0.7rem] md:text-xs uppercase tracking-[0.28em] text-[#7dd3fc] font-semibold mb-4">
              ● DATA ENGINEER / AI SYSTEMS BUILDER
            </p>

          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight mb-5">
            <span className="text-white">Engineering Data →</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-teal-400">
              Driving Intelligence
            </span>
          </h1>

          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mt-4 mb-10">
            From raw data to real-time insights — I design scalable pipelines, streaming systems, and AI-powered solutions for modern data platforms.
          </p>

          <div className="flex flex-wrap items-center gap-5 mb-16">
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#5a67d8] to-[#9f7aea] text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(159,122,234,0.4)] hover:-translate-y-1 transition-all"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="px-8 py-3.5 rounded-full bg-transparent border border-white/30 text-white font-bold tracking-wide hover:bg-white/10 hover:border-white/50 hover:-translate-y-1 transition-all backdrop-blur-sm"
            >
              Get in Touch
            </a>
          </div>

          {/* Metrics Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10"
          >
            {metrics.map((metric, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl font-bold text-white mb-1 tracking-tight drop-shadow-sm">{metric.value}</span>
                <span className="text-xs font-semibold text-white/50 uppercase tracking-widest leading-snug">{metric.label}</span>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
}
