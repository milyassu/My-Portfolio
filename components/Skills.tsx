"use client";

import { skills } from "@/data/skills";
import { Code2, BarChart3, Binary, Eye } from "lucide-react";
import { motion } from "framer-motion";

const skillTitles: Record<string, string> = {
  programming: "Programming",
  analytics: "Data Analytics",
  machineLearning: "Machine Learning",
  visualization: "Data Visualization",
};

const skillIcons: Record<string, any> = {
  programming: Code2,
  analytics: BarChart3,
  machineLearning: Binary,
  visualization: Eye,
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div>
          <p className="text-primary font-semibold tracking-wider uppercase text-xs">
            Skills
          </p>
          <h2 className="text-4xl font-bold mt-3 mb-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-zinc-200 dark:to-white">
            Core Competencies
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {Object.entries(skills).map(([key, items]) => {
            const Icon = skillIcons[key];
            return (
              <motion.div
                variants={itemVariants}
                key={key}
                className="group bg-card border border-border/80 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col h-full"
              >
                {/* Micro gradient background */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent blur-lg -z-10 group-hover:scale-125 transition-transform duration-500" />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-md bg-primary/5 text-primary transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {skillTitles[key]}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="bg-muted/70 hover:bg-primary/5 hover:text-primary border border-transparent hover:border-primary/10 px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
