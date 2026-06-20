"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap } from "lucide-react";

const researches = [
  {
    title: "Research Member",
    organization: "Kelompok Peneliti Muda",
    period: "2023 - 2024",
    icon: GraduationCap,
    description:
      "Conducted literature reviews, data collection, quantitative analysis, and scientific writing activities as part of a student research group. Contributed to research projects involving mathematical modeling, statistical analysis, and evidence-based problem solving while strengthening academic research and communication skills.",
  },
  {
    title: "Scientific Writing Competitions",
    organization: "National Level",
    period: "2023 - Present",
    icon: BookOpen,
    description:
      "Participated in multiple national-level scientific writing and essay competitions focusing on economics, public policy, education, technology, and social issues. Developed strong analytical thinking, research methodology, argumentation, and academic communication skills through competitive scientific writing activities.",
  },
];

export default function Research() {
  return (
    <section id="research" className="py-28 bg-muted/30 dark:bg-muted/10 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div>
          <p className="text-primary font-semibold tracking-wider uppercase text-xs">
            Research
          </p>
          <h2 className="text-4xl font-bold mt-3 mb-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-zinc-200 dark:to-white">
            Organization & Academic Activities
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {researches.map((research, idx) => {
            const Icon = research.icon;
            return (
              <motion.div
                key={research.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.15 }}
                className="group relative bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Decorative radial gradients on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent blur-xl -z-10 group-hover:scale-125 transition-transform duration-500" />
                
                <div className="flex justify-between items-start gap-4 pb-5 border-b border-border/80">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-md bg-primary/5 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-200">
                        {research.title}
                      </h3>
                      <p className="text-muted-foreground text-sm font-semibold mt-1">
                        {research.organization}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center text-[11px] font-semibold text-muted-foreground px-2.5 py-1 rounded-full bg-muted shrink-0">
                    {research.period}
                  </span>
                </div>

                <p className="mt-5 text-muted-foreground text-sm md:text-base leading-relaxed">
                  {research.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
