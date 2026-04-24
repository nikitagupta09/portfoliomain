"use client";

import { motion, Variants } from "framer-motion";
import { Database, Activity, PieChart, Sparkles } from "lucide-react";

export default function About() {
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const domainCards = [
    {
      title: "Data Engineering & ETL",
      description: "Building scalable data pipelines using Azure, PySpark, and distributed systems for reliable data processing.",
      icon: <Database className="w-5 h-5 text-sky-400" />
    },
    {
      title: "Real-Time Streaming",
      description: "Designing event-driven architectures using Event Hub and Kafka-based streaming pipelines.",
      icon: <Activity className="w-5 h-5 text-purple-400" />
    },
    {
      title: "Business Intelligence",
      description: "Creating analytics-ready datasets and dashboards for data-driven decision making.",
      icon: <PieChart className="w-5 h-5 text-indigo-400" />
    },
    {
      title: "AI & GenAI Solutions",
      description: "Developing RAG-based systems and intelligent automation powered by modern AI technologies.",
      icon: <Sparkles className="w-5 h-5 text-fuchsia-400" />
    },
  ];

  return (
    <section id="about" className="relative bg-[#121212] min-h-screen pt-24 pb-12 px-6 flex items-center overflow-hidden">

      {/* Background Improvements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-900/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-900/15 rounded-full blur-[100px] pointer-events-none translate-y-1/3" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto w-full relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-8 flex items-center gap-4">
          <div className="h-[1px] w-12 bg-white/20" />
          <span className="text-sm font-semibold tracking-widest text-[#a8b1ff] uppercase">From Data to Intelligent Systems</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Side: Main Text Content */}
          <motion.div variants={itemVariants} className="max-w-[650px] text-white/80 text-base md:text-lg font-light leading-relaxed tracking-wide space-y-4 lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight drop-shadow-sm leading-tight">
              Architecting data for <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-indigo-400">
                scale and intelligence.
              </span>
            </h2>
            <p className="text-[#e2e8f0]">
              I design scalable data pipelines, real-time streaming systems, and AI-powered solutions that transform raw data into actionable insights.
            </p>
            <p>
              My work focuses on building end-to-end platforms using <strong className="font-medium text-white">Azure (ADF, ADLS, Event Hub, Databricks)</strong> and <strong className="font-medium text-white">PySpark</strong>, as well as delivering analytics and dashboards that turn data into clear business insights.
            </p>
            <p>
              I specialize in building clean, analytics-ready data models, optimizing ETL pipelines, and creating <strong className="font-medium text-white">dashboards and reports</strong> that non-technical teams can actually use.
            </p>
            <p>
             I also build <strong className="font-medium text-white">AI-powered solutions</strong> including RAG systems and intelligent automation — making data more accessible and useful through natural language and smart search.
            </p>
            <p>
              I enjoy solving complex data challenges and turning data into meaningful business impact.
            </p>
          </motion.div>

          {/* Right Side: 4 Core Cards */}
          <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4 relative">

            {/* Subtle animated floating light behind cards */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-purple-500/5 to-indigo-500/5 rounded-2xl blur-xl animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} />

            {domainCards.map((card, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm overflow-hidden flex flex-col justify-start items-start
                           transition-all duration-300 ease-out 
                           hover:bg-white/[0.05] hover:border-white/20 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]
                           active:scale-[0.98] active:shadow-[0_0_15px_rgba(139,92,246,0.3)] active:border-purple-400/50 cursor-pointer"
              >
                {/* Internal Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4 shadow-inner relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 relative z-10 drop-shadow-sm group-hover:text-purple-100 transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm font-light text-white/60 leading-snug tracking-wide relative z-10 group-hover:text-white/80 transition-colors">
                  {card.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
