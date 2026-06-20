"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Database,
  Cpu,
  Layout,
  FileCode,
  CheckCircle,
} from "lucide-react";

// Group techs to render in two different marquee lanes
const row1 = [
  { name: "Python", icon: FileCode, desc: "Data analysis & modeling" },
  { name: "SQL", icon: Database, desc: "Querying & management" },
  { name: "Pandas", icon: Terminal, desc: "Data manipulation" },
  { name: "NumPy", icon: Cpu, desc: "Numerical computing" },
  { name: "Scikit-Learn", icon: Cpu, desc: "Predictive modeling" },
  { name: "XGBoost", icon: Cpu, desc: "Gradient boosted trees" },
];

const row2 = [
  { name: "PySpark", icon: Database, desc: "Large-scale data processing" },
  { name: "TensorFlow", icon: Cpu, desc: "Deep learning models" },
  { name: "Git", icon: CheckCircle, desc: "Version control system" },
  { name: "Streamlit", icon: Layout, desc: "Interactive web applications" },
  {
    name: "Looker Studio",
    icon: Layout,
    desc: "Business intelligence reports",
  },
  { name: "Power BI", icon: Layout, desc: "Corporate analytics dashboards" },
];

export default function TechStack() {
  return (
    <section className="py-14 bg-muted/30 dark:bg-muted/10 transition-colors duration-300 overflow-hidden relative">
      {/* Background glow spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-primary/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 mb-6">
        <div className="text-center md:text-left">
          <p className="text-primary font-semibold tracking-wider uppercase text-xs">
            Tech Stack
          </p>
          <h2 className="text-4xl font-bold mt-3 bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-zinc-200 dark:to-white">
            Technologies & Tools
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl text-base">
            Quantitative modeling and software systems utilized in constructing
            analytics engines and pipelines.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full space-y-2">
        {/* Marquee Row 1 (Scrolls Left) */}
        <div className="flex w-full overflow-hidden py-2 select-none relative mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <motion.div
            animate={{ x: [0, "-50%"] }}
            transition={{
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            }}
            className="flex gap-4 shrink-0 pr-4 w-max"
          >
            {/* Double list for seamless wrapping */}
            {[...row1, ...row1].map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="group w-[190px] h-25 flex items-start gap-3.5 px-5 py-4 rounded-lg border border-border bg-card/60 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-primary/45 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-md bg-primary/5 group-hover:bg-primary/10 text-primary transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">
                      {tech.name}
                    </h4>
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                      {tech.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Marquee Row 2 (Scrolls Right) */}
        <div className="flex w-full overflow-hidden py-2 select-none relative mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <motion.div
            animate={{ x: ["-50%", 0] }}
            transition={{
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            }}
            className="flex gap-4 shrink-0 pl-4 w-max"
          >
            {/* Double list for seamless wrapping */}
            {[...row2, ...row2].map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="group w-[190px] h-25 flex items-start gap-3.5 px-5 py-4 rounded-lg border border-border bg-card/60 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-primary/45 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-md bg-primary/5 group-hover:bg-primary/10 text-primary transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">
                      {tech.name}
                    </h4>
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                      {tech.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
