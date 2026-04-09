"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef, useState } from "react";

interface Role {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  tag?: string;
  highlights: string[];
}

const roles: Role[] = [
  {
    id: 1,
    title: "Data/AI Engineer",
    company: "RTS Labs",
    location: "USA",
    period: "Aug 2025 – Mar 2026",
    highlights: [
      "Designed and maintained ETL pipelines using Azure Data Factory (ADF) integrating property listings and construction data.",
      "Improved data quality and reduced ingestion errors by 30%.",
      "Built Tableau dashboards for leadership improving KPI tracking efficiency.",
      "Optimized SQL queries using CTEs and indexing, reducing execution time by 50%",
      "Developed a Generative AI tool using LLM APIs and Python, reducing manual documentation effort by 40%"
    ],
  },
  {
    id: 2,
    title: "Data Engineer",
    company: "Northeastern University Bookstore",
    location: "USA",
    period: "Apr 2024 – April 2025",
    highlights: [
      "Wrote complex SQL queries to process 10,000+ product records improving data accuracy.",
      "Reduced data reconciliation time by 30%.",
      "Built Power BI dashboards for inventory and sales analysis.",
      "Improved stock allocation decisions by 25%."
    ],
  },
  {
    id: 3,
    title: "Data Engineer",
    company: "Redington Group",
    location: "UAE",
    period: "Sep 2022 – Aug 2023",
    highlights: [
      "Built PySpark pipelines on Databricks for processing large-scale sales data.",
      "Improved reporting speed by 20%.",
      "Developed demand forecasting models using Python.",
      "Automated reporting workflows reducing manual effort by 70%.",
      "Designed Tableau dashboards improving business decision-making."
    ],
  },
  {
    id: 4,
    title: "Data Science & ML Intern",
    company: "Techtastic Technologies",
    location: "India",
    period: "Jan 2022 – Jun 2022",
    highlights: [
      "Built K-Means clustering models for customer segmentation.",
      "Developed Power BI dashboards improving sales targeting by 25%.",
      "Performed EDA and statistical analysis improving operational efficiency by 20%."
    ],
  },
];

export default function Experience() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="experience" className="relative bg-[#121212] py-32 px-6 overflow-hidden">
      
      {/* Background Enhancements */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-sky-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[800px] h-[400px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-5xl mx-auto relative z-10" ref={containerRef}>
        
        {/* Section Header */}
        <motion.div 
          className="flex flex-col mb-24 space-y-4 text-center md:text-left"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center justify-center md:justify-start gap-4">
            <span className="text-sm font-semibold tracking-widest text-[#a8b1ff] uppercase">Professional Journey</span>
            <div className="h-[1px] w-12 bg-white/20" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-teal-300 drop-shadow-sm pb-2">
            Engineering Data → <br className="hidden md:block" /> Driving Intelligence
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl leading-relaxed mt-4">
            Building scalable data platforms, real-time pipelines, and AI-powered systems across cloud environments.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative pl-8 md:pl-0">
          
          {/* Vertical scroll-animated line */}
          <div className="absolute left-[3px] md:left-[23px] top-4 bottom-0 w-[2px] bg-white/5">
            <motion.div 
              className="w-full bg-gradient-to-b from-sky-400 via-purple-400 to-teal-400 shadow-[0_0_15px_rgba(139,92,246,0.6)]" 
              style={{ height: lineHeight }} 
            />
          </div>

          <div className="space-y-24">
            {roles.map((role, index) => {
              const isActive = activeCard === role.id;

              return (
                <motion.div 
                  key={role.id} 
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative md:pl-20"
                >
                  
                  {/* Timeline Node */}
                  <div className="absolute left-[-25px] md:left-[14px] top-8 md:top-10 w-5 h-5 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    {/* Pulsing ring */}
                    <motion.div 
                      className={`absolute w-10 h-10 rounded-full border-2 border-purple-500/30 ${isActive ? 'opacity-100 scale-110' : 'opacity-0 scale-50'}`} 
                      animate={isActive ? { scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className={`w-4 h-4 rounded-full border-[3px] transition-colors duration-500 relative z-10 ${
                      isActive ? 'bg-purple-400 border-white shadow-[0_0_15px_rgba(168,85,247,0.8)]' : 'bg-[#121212] border-white/30'
                    }`} />
                  </div>
                  
                  {/* Experience Card */}
                  <div 
                    onClick={() => setActiveCard(activeCard === role.id ? null : role.id)}
                    className={`group cursor-pointer relative p-8 md:p-10 rounded-[2rem] backdrop-blur-md overflow-hidden transition-all duration-500
                      ${isActive 
                        ? 'bg-white/[0.06] border-purple-400/50 shadow-[0_20px_40px_-15px_rgba(139,92,246,0.25)] scale-[1.02] -translate-y-2' 
                        : 'bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-purple-400/30 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)]'
                      }
                    `}
                  >
                    {/* Internal Click Light Burst */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent transition-opacity duration-500 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`} />

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 relative z-10">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{role.title}</h3>
                          {role.tag && (
                            <span className={`text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full border transition-colors ${
                              isActive ? 'bg-teal-400/20 text-teal-300 border-teal-400/40 shadow-[0_0_10px_rgba(45,212,191,0.3)]' : 'bg-white/10 text-white/70 border-white/10'
                            }`}>
                              {role.tag}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-white/60 font-medium tracking-wide mt-2">
                          <span className={`${isActive ? 'text-white drop-shadow-md' : ''} transition-colors`}>{role.company}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                          <span>{role.location}</span>
                        </div>
                      </div>
                      <span className={`inline-block mt-4 md:mt-0 text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full border transition-colors ${
                        isActive ? 'text-purple-300 bg-purple-500/20 border-purple-500/30' : 'text-[#a8b1ff] bg-[#a8b1ff]/10 border-[#a8b1ff]/20'
                      }`}>
                        {role.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-4 relative z-10">
                      {role.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-white/70 font-light leading-relaxed flex items-start text-lg">
                          <span className={`mr-4 mt-1.5 text-xs transition-colors ${isActive ? 'text-purple-400 drop-shadow-[0_0_5px_rgba(192,132,252,0.8)]' : 'text-white/30'}`}>▹</span>
                          <span className={`${isActive ? 'text-white/90' : ''} transition-colors`}>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
