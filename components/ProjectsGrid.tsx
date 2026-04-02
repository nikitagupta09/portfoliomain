"use client";

import { MouseEvent, useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, Cloud, Database, Network, Sparkles, PieChart, Code2 } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: string;
  shortDesc: string;
  highlights: string[];
  impactText: string;
  tags: string[];
  link: string;
  ctaText: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Uber Real-Time Data Engineering Pipeline",
    category: "Cloud Data Engineering",

    shortDesc:
      "Built an end-to-end real-time data pipeline simulating Uber ride data using Azure Event Hub, Databricks, and Medallion architecture to enable scalable analytics.",

    highlights: [
      "Ingested streaming ride data using Azure Event Hub and processed it using Apache Spark (Databricks).",
      "Designed and implemented Medallion architecture (Bronze, Silver, Gold layers) for scalable data transformation.",
      "Built ETL pipelines using Azure Data Factory and stored structured data in Azure Data Lake.",
      "Modeled analytical datasets using Star Schema for efficient querying and reporting."
    ],

    impactText:
      "Delivered a production-ready real-time data platform enabling scalable analytics, optimized data processing, and actionable business insights.",

    tags: [
      "Python",
      "FastAPI",
      "Azure Event Hub",
      "Azure Data Factory",
      "Azure Data Lake",
      "Databricks",
      "Apache Spark",
      "Delta Lake",
      "Streaming Pipelines",
      "ETL Pipelines",
      "Medallion Architecture",
      "Star Schema",
      "Data Warehousing",
      "GitHub"
    ],

    link: "https://github.com/nikitagupta09/uber_Project",
    ctaText: "View Source",
  },
  {
    id: 2,
    title: "GenAI Supply Chain Intelligence System (RAG-based)",

    category: "Generative AI / LLM Engineering",

    shortDesc:
      "Built an AI-powered system to analyze supply chain data and documents using a RAG pipeline, enabling intelligent querying and real-time operational insights.",

    highlights: [
      "Designed a RAG-based system to retrieve and generate context-aware responses from supply chain data and documents.",
      "Implemented document ingestion pipeline with chunking, embeddings, and vector storage for efficient retrieval.",
      "Enabled semantic search to identify delays, inefficiencies, and trends in supply chain operations.",
      "Built FastAPI-based backend to serve real-time AI responses.",
      "Improved response accuracy using prompt engineering and optimized retrieval strategies."
    ],

    impactText:
      "Transformed supply chain data into an intelligent decision-support system, enabling faster issue detection, improved visibility, and data-driven operational insights.",

    tags: [
      "Python",
      "FastAPI",
      "OpenAI / LLM",
      "LangChain",
      "RAG Pipeline",
      "Vector Database",
      "Embeddings",
      "Semantic Search",
      "Prompt Engineering",
      "Supply Chain Analytics",
      "Generative AI"
    ],

    link: "YOUR_GITHUB_LINK",
    ctaText: "View Project",
  },
  {
    id: 4,
    title: "AI-Powered Football Match Outcome Predictor",
    category: "Predictive Analytics / AI",

    shortDesc:
      "Built an interactive football analytics and match prediction platform using Python and Streamlit to analyze English Premier League data, visualize team performance, and forecast match outcomes.",

    highlights: [
      "Developed a multi-tab Streamlit application for league overview, team performance, head-to-head analysis, and match prediction.",
      "Performed data preprocessing and feature preparation using Pandas and NumPy on historical English Premier League datasets.",
      "Integrated a machine learning prediction pipeline to estimate match outcomes, win probabilities, goals, and clean sheets.",
      "Designed interactive visualizations using Matplotlib and Seaborn to surface trends, team insights, and comparative performance."
    ],

    impactText:
      "Delivered a user-friendly sports intelligence dashboard that combines analytics, visualization, and AI-based forecasting to support data-driven match insights and outcome prediction.",

    tags: [
      "Python",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Machine Learning",
      "Predictive Analytics",
      "Joblib",
      "Data Visualization",
      "Sports Analytics"
    ],

    link: "https://github.com/nikitagupta09/ai-sports-predictor",
    ctaText: "View Source",
  },
  {
    id: 5,
    title: "Amazon Last-Mile Delivery Optimization (AWS Pipeline)",

    category: "Data Engineering / Analytics",

    shortDesc:
      "Built an AWS-based analytics pipeline to analyze 100,000+ delivery records and optimize last-mile logistics performance using data-driven insights.",

    highlights: [
      "Designed end-to-end AWS pipeline using S3, Glue, and Redshift to process and analyze large-scale delivery datasets.",
      "Analyzed 100,000+ delivery records to identify key inefficiencies in last-mile logistics operations.",
      "Discovered weather conditions increased missed deliveries by 60% and peak-hour deliveries had 2x higher failure rates.",
      "Applied Lean Six Sigma DMAIC methodology to identify root causes and optimize delivery workflows.",
      "Developed Tableau dashboards to visualize KPIs, delivery trends, and operational bottlenecks."
    ],

    impactText:
      "Recommended optimizations that reduced missed deliveries by 33%, improved fuel efficiency by 15%, and increased delivery productivity by 25%.",

    tags: [
      "Python",
      "AWS S3",
      "AWS Glue",
      "AWS Redshift",
      "SQL",
      "Tableau",
      "Data Analysis",
      "ETL Pipelines",
      "Lean Six Sigma",
      "Logistics Analytics"
    ],

    link: "YOUR_LINK",
    ctaText: "View Project",
  },
  {
    id: 7,
    title: "Urban Road Safety & Crash Analytics Platform",

    category: "Data Analytics / Urban Intelligence",

    shortDesc:
      "Analyzed 3.2M+ traffic crash records across Austin, Chicago, and New York to identify accident patterns, high-risk zones, and key safety insights using data profiling, transformation, and visualization tools.",

    highlights: [
      "Processed and analyzed 3.2M+ crash records across 131 variables from multiple city datasets.",
      "Performed data cleaning and transformation using Talend and Alteryx to ensure data quality and consistency.",
      "Conducted dataset profiling using Python (ydata-profiling) to identify missing values, anomalies, and data inconsistencies.",
      "Designed dimensional data models to support structured analysis and reporting.",
      "Built interactive dashboards using Power BI and Tableau to visualize accident trends, high-risk zones, and contributing factors.",
      "Analyzed pedestrian involvement, time-based trends, and regional accident distribution to uncover safety risks."
    ],

    impactText:
      "Delivered data-driven insights to support urban traffic planning, improve road safety strategies, and enable policy-level decision-making for reducing accident risks.",

    tags: [
      "Python",
      "ydata-profiling",
      "Alteryx",
      "Talend",
      "Power BI",
      "Tableau",
      "Data Cleaning",
      "Data Profiling",
      "Data Modeling",
      "EDA",
      "Urban Analytics",
      "Data Visualization"
    ],

    link: "https://github.com/nikitagupta09/road-safety-crash-analysis",
    ctaText: "View Project",
  },
];

// Utility to apply specific color accents to keywords inside strings
function Highlighter({ text }: { text: string }) {
  const parts = text.split(new RegExp(`(AI|Generative AI|Data Engineering|PySpark|Azure|Databricks|RAG|Analytics|AWS)`, 'gi'));
  return (
    <span>
      {parts.map((part, i) => {
        const lowerPart = part.toLowerCase();
        const isHighlight = ["ai", "generative ai", "data engineering", "pyspark", "azure", "databricks", "rag", "analytics", "aws"].includes(lowerPart);

        return isHighlight ? (
          <span key={i} className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-purple-300 to-teal-300 drop-shadow-[0_0_8px_rgba(45,212,191,0.2)]">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </span>
  );
}

function ProjectCard({ project, index, isActive, onToggle }: { project: Project; index: number; isActive: boolean; onToggle: () => void }) {
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
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={(ev) => {
        ev.currentTarget.style.setProperty("--mouse-x", `-1000px`);
        ev.currentTarget.style.setProperty("--mouse-y", `-1000px`);
      }}
      onClick={onToggle}
      className={`relative flex flex-col justify-between p-8 md:p-10 rounded-[2rem] group overflow-hidden cursor-pointer
        transition-all duration-500 ease-out h-full
        ${isActive
          ? 'bg-white/[0.04] border-purple-400/50 shadow-[0_20px_50px_-10px_rgba(139,92,246,0.3)] scale-[1.02] -translate-y-2'
          : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.03] hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(46,16,101,0.5)]'
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
      <div className="relative z-20 flex-grow flex flex-col border border-transparent h-full">

        {/* Header Ribbon */}
        <div className="flex justify-between items-start mb-6 w-full">
          <div className="flex gap-3 items-center">
            {/* Context Icon */}
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-md border shadow-inner transition-colors duration-500 ${isActive ? 'bg-[#1e1a3a]/80 border-purple-400/40' : 'bg-[#1e1a3a]/40 border-white/10 group-hover:border-purple-300/30'
              }`}>
              {project.category.includes('AI') ? <Sparkles className={`w-5 h-5 ${isActive ? 'text-fuchsia-400' : 'text-[#a8b1ff]/80'} transition-colors`} /> :
                project.category.includes('Cloud') ? <Cloud className={`w-5 h-5 ${isActive ? 'text-sky-400' : 'text-[#a8b1ff]/80'} transition-colors`} /> :
                  project.category.includes('Predictive') ? <Network className={`w-5 h-5 ${isActive ? 'text-purple-400' : 'text-[#a8b1ff]/80'} transition-colors`} /> :
                    project.category.includes('Business') ? <PieChart className={`w-5 h-5 ${isActive ? 'text-teal-400' : 'text-[#a8b1ff]/80'} transition-colors`} /> :
                      <Database className={`w-5 h-5 ${isActive ? 'text-sky-400' : 'text-[#a8b1ff]/80'} transition-colors`} />
              }
            </div>
            {/* Category Tag */}
            <span className={`text-[0.65rem] md:text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border transition-colors ${isActive ? 'bg-purple-900/40 border-purple-400/50 text-purple-200 shadow-[0_0_15px_rgba(139,92,246,0.3)]' : 'bg-white/5 border-white/10 text-white/50 group-hover:border-white/20'
              }`}>
              {project.category}
            </span>
          </div>

          <a href={project.link} target={project.link !== "#" ? "_blank" : "_self"} rel="noreferrer" onClick={(e) => e.stopPropagation()} className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-full backdrop-blur-md transition-all duration-300 border focus:ring-2 focus:ring-purple-400 absolute right-0 top-0 md:relative ${isActive ? 'opacity-100 translate-y-0 bg-white/10 border-white/20 text-white shadow-sm' : 'opacity-0 md:-translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-white'
            }`}>
            <span className="text-[10px] md:text-xs font-semibold tracking-wider uppercase hidden sm:block">{project.ctaText}</span>
            <ArrowUpRight className="w-4 h-4 ml-0 sm:ml-1" />
          </a>
        </div>

        {/* Title & Short Description */}
        <h3 className={`text-2xl lg:text-3xl font-bold mb-4 tracking-tight drop-shadow-sm transition-colors mt-4 md:mt-0 ${isActive ? 'text-white' : 'text-white group-hover:text-purple-100'
          }`}>
          {project.title}
        </h3>
        <p className="text-white/70 mb-8 leading-relaxed font-light text-[1.05rem]">
          <Highlighter text={project.shortDesc} />
        </p>

        {/* Highlights Section */}
        <div className="mb-8 space-y-3 flex-grow">
          {project.highlights.map((point, idx) => (
            <div key={idx} className="flex items-start">
              <CheckCircle2 className={`w-4 h-4 mr-3 mt-1.5 shrink-0 transition-colors ${isActive ? 'text-teal-400 drop-shadow-[0_0_8px_rgba(45,212,191,0.6)]' : 'text-purple-400/50 group-hover:text-purple-400'}`} />
              <p className={`text-[0.95rem] font-light leading-relaxed transition-colors tracking-wide ${isActive ? 'text-white/95' : 'text-white/60 group-hover:text-white/80'}`}>
                <Highlighter text={point} />
              </p>
            </div>
          ))}
        </div>

        {/* Impact Box */}
        <div className={`p-5 rounded-xl mb-8 border transition-colors ${isActive ? 'bg-purple-900/30 border-purple-500/40 text-purple-100 shadow-inner' : 'bg-white/5 border-white/5 text-white/60 group-hover:border-purple-400/20 group-hover:bg-purple-900/10'
          }`}>
          <div className={`text-[0.65rem] font-bold uppercase tracking-widest mb-2 flex items-center gap-2 ${isActive ? 'text-teal-300' : 'text-white/40 group-hover:text-teal-200/70'}`}>
            <div className="w-1.5 h-1.5 rounded-full bg-current" /> Key Impact
          </div>
          <p className="text-sm font-medium leading-relaxed drop-shadow-sm">
            <Highlighter text={project.impactText} />
          </p>
        </div>

      </div>

      {/* --- FOOTER: TOOLS BLOCK --- */}
      <div className="relative z-20 mt-auto pt-6 border-t border-white/10 w-full">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className={`px-3 py-1.5 text-[0.7rem] font-bold rounded-lg border tracking-wide uppercase shadow-sm transition-colors flex items-center ${isActive ? 'bg-[#1a1a1a] border-purple-500/50 text-white shadow-[0_0_15px_rgba(139,92,246,0.2)]' : 'bg-[#1A1A1A] border-white/5 text-white/50 group-hover:border-white/10 group-hover:text-white/80'
              }`}>
              {tag === "AWS" ? <Cloud className="w-3 h-3 mr-1.5 opacity-70 text-sky-400" /> : null}
              {tag === "SQL" || tag === "Redshift" ? <Database className="w-3 h-3 mr-1.5 opacity-70 text-sky-400" /> : null}
              {tag === "Python" || tag === "Pandas" ? <Code2 className="w-3 h-3 mr-1.5 opacity-70 text-purple-400" /> : null}
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsGrid() {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

  return (
    <section id="projects" className="relative bg-[#121212] py-32 px-6 overflow-hidden">

      {/* Background Ambience Upgrade */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[700px] h-[700px] bg-sky-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-teal-900/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col mb-24 space-y-6 text-center md:text-left relative"
        >
          <div className="flex items-center justify-center md:justify-start gap-4">
            <span className="text-sm font-semibold tracking-widest text-[#a8b1ff] uppercase">Featured Work</span>
            <div className="h-[1px] w-12 bg-white/20" />
            <Sparkles className="w-4 h-4 text-[#a8b1ff]/40 hidden md:block animate-pulse" />
            <Database className="w-4 h-4 text-[#a8b1ff]/40 hidden md:block" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight pb-2">
            Engineering Data.<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-teal-400 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              {" "}Delivering Intelligence.
            </span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-3xl leading-relaxed mt-4 drop-shadow-sm">
            Real-world projects across data engineering, analytics, cloud platforms, and Generative AI — designed for scale, insight, and automation.
          </p>
        </motion.div>

        {/* Dashboards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isActive={activeProjectId === project.id}
              onToggle={() => setActiveProjectId(activeProjectId === project.id ? null : project.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
