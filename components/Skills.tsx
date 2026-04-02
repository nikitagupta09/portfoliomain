"use client";

import React, { MouseEvent, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Cloud, Database, Network, Sparkles, PieChart, Code2, Wrench, TerminalSquare, Box, GitBranch } from "lucide-react";

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Data Engineering",
    icon: <Network className="w-5 h-5 text-sky-400" />,
    skills: ["ETL / ELT Pipelines", "Data Modeling", "Schema Design", "Data Quality", "Pipeline Orchestration", "CDC", "PySpark"]
  },
  {
    category: "Cloud & Platforms",
    icon: <Cloud className="w-5 h-5 text-purple-400" />,
    skills: ["Azure (ADF, Data Factory)", "AWS (S3, EC2, Glue, Redshift)", "GCP", "Databricks"]
  },
  {
    category: "Analytics & BI",
    icon: <PieChart className="w-5 h-5 text-teal-400" />,
    skills: ["Tableau", "Power BI", "Streamlit", "A/B Testing", "Hypothesis Testing", "Google Analytics", "Excel"]
  },
  {
    category: "Databases & Warehousing",
    icon: <Database className="w-5 h-5 text-indigo-400" />,
    skills: ["Snowflake", "MySQL", "PostgreSQL", "NoSQL", "Pinecone", "MongoDB", "Oracle SQL", "Alteryx"]
  },
  {
    category: "Programming",
    icon: <Code2 className="w-5 h-5 text-fuchsia-400" />,
    skills: ["Python", "SQL", "R", "JavaScript", "Java", "HTML/CSS"]
  },
  {
    category: "AI / Generative AI",
    icon: <Sparkles className="w-5 h-5 text-purple-300" />,
    skills: ["OpenAI GPT-4", "RAG", "LangChain", "LLM API", "Prompt Engineering", "TensorFlow", "PyTorch", "Hugging Face"]
  },
  {
    category: "Tools & Workflow",
    icon: <Wrench className="w-5 h-5 text-slate-400" />,
    skills: ["Docker", "Git", "Apache Airflow", "Apache Spark", "Hadoop", "DBT", "Looker", "Agile/Scrum"]
  }
];

// Helper to precisely map tool icons to distinct keywords
function getSkillIcon(skillName: string) {
  const s = skillName.toLowerCase();
  if (s.includes("python") || s.includes("java")) return <Code2 className="w-3.5 h-3.5 mr-1.5 opacity-70" />;
  if (s.includes("sql") || s.includes("database") || s.includes("snowflake") || s.includes("pinecone")) return <Database className="w-3.5 h-3.5 mr-1.5 opacity-70" />;
  if (s.includes("azure") || s.includes("aws") || s.includes("gcp") || s.includes("cloud")) return <Cloud className="w-3.5 h-3.5 mr-1.5 opacity-70" />;
  if (s.includes("databricks") || s.includes("docker") || s.includes("hadoop")) return <Box className="w-3.5 h-3.5 mr-1.5 opacity-70" />;
  if (s.includes("spark") || s.includes("pyspark")) return <Sparkles className="w-3.5 h-3.5 mr-1.5 opacity-70" />;
  if (s.includes("tableau") || s.includes("power bi") || s.includes("analytics")) return <PieChart className="w-3.5 h-3.5 mr-1.5 opacity-70" />;
  if (s.includes("ai") || s.includes("gpt") || s.includes("rag") || s.includes("tensor") || s.includes("llm")) return <Sparkles className="w-3.5 h-3.5 mr-1.5 opacity-70 text-purple-300" />;
  if (s.includes("git") || s.includes("pipeline") || s.includes("etl")) return <GitBranch className="w-3.5 h-3.5 mr-1.5 opacity-70" />;
  if (s.includes("streamlit")) return <TerminalSquare className="w-3.5 h-3.5 mr-1.5 opacity-70" />;
  return null;
}

function SkillCard({ group, index, isActive, onToggle }: { group: SkillCategory; index: number; isActive: boolean; onToggle: () => void }) {
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
      className={`relative flex flex-col p-8 rounded-[2rem] group overflow-hidden cursor-pointer
        transition-all duration-500 ease-out h-full
        ${isActive 
          ? 'bg-white/[0.04] border-purple-400/50 shadow-[0_15px_40px_-10px_rgba(139,92,246,0.3)] scale-[1.02] -translate-y-2' 
          : 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.03] hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(46,16,101,0.5)]'
        }
      `}
    >
      {/* Light-following Cursor Glow */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(168,177,255,0.08), transparent 40%)`,
        }}
      />
      
      {/* Border Cursor Trace Element */}
      <div 
        className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 border border-transparent"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(168,177,255,0.5), transparent 40%) border-box`,
          WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Internal "Active" Ambient Light Burst */}
      <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent transition-opacity duration-500 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'}`} />

      {/* --- CONTENT BLOCK --- */}
      <div className="relative z-20 flex-grow">
        
        {/* Category Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md border shadow-inner transition-colors duration-500 ${
              isActive ? 'bg-[#1e1a3a]/80 border-purple-400/40' : 'bg-[#1e1a3a]/40 border-white/10 group-hover:border-purple-300/30'
            }`}>
            {group.icon}
          </div>
          <h3 className={`text-lg font-bold tracking-tight drop-shadow-sm transition-colors ${
            isActive ? 'text-white' : 'text-white/90 group-hover:text-purple-100'
          }`}>
            {group.category}
          </h3>
        </div>
        
        {/* Skills Pills */}
        <div className="flex flex-wrap gap-2 lg:gap-2.5">
          {group.skills.map((skill, sIdx) => {
            const SkillIcon = getSkillIcon(skill);
            return (
              <span 
                key={sIdx} 
                className={`flex items-center px-3 py-1.5 text-[0.8rem] font-medium tracking-wide rounded-lg border transition-all duration-300 shadow-sm
                  ${isActive 
                    ? 'bg-[#1a1a1a] border-purple-400/40 text-white shadow-[0_0_15px_rgba(139,92,246,0.15)]' 
                    : 'bg-[#121212] border-white/10 text-white/60 group-hover:border-white/20 group-hover:text-white/90'
                  }
                `}
              >
                {SkillIcon}
                {skill}
              </span>
            );
          })}
        </div>

      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

  return (
    <section id="skills" className="relative bg-[#121212] py-32 px-6 overflow-hidden border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-sky-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col mb-20 space-y-4 text-center md:text-left items-center md:items-start"
        >
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold tracking-widest text-[#a8b1ff] uppercase">Core Competencies</span>
            <div className="h-[1px] w-12 bg-white/20" />
            <Sparkles className="w-4 h-4 text-[#a8b1ff]/40 hidden md:block" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight pb-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-teal-400 drop-shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            Full-Stack Data Expertise
          </h2>
          <p className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-2xl drop-shadow-sm">
            Spanning analytics, engineering, intelligence, and AI automation
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((group, index) => (
            <SkillCard 
              key={index} 
              group={group} 
              index={index} 
              isActive={activeCategoryId === index}
              onToggle={() => setActiveCategoryId(activeCategoryId === index ? null : index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
