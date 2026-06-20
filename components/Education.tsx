"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, FileText } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div>
          <p className="text-primary font-semibold tracking-wider uppercase text-xs">
            Education
          </p>
          <h2 className="text-4xl font-bold mt-3 mb-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-zinc-200 dark:to-white">
            Academic Background
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative group bg-card border border-border rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          {/* Subtle gradient accent behind card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 to-transparent blur-3xl -z-10 group-hover:scale-110 transition-transform duration-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-border/80">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-md bg-primary/5 text-primary">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Universitas Negeri Jakarta
                </h3>
                <p className="text-muted-foreground mt-1 text-base">
                  Bachelor of Mathematics
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-semibold">
                <Calendar className="h-3.5 w-3.5" />
                2023 – Present
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold border border-primary/10">
                <Award className="h-3.5 w-3.5" />
                GPA 3.60 / 4.00
              </span>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="flex gap-3">
              <div className="mt-1 text-primary shrink-0">
                <FileText className="h-4.5 w-4.5" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground font-semibold block mb-0.5">Rigorous coursework</strong>
                Solid base in Statistics, Probability theory, Mathematical Modeling, and Optimization methods.
              </p>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 text-primary shrink-0">
                <FileText className="h-4.5 w-4.5" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground font-semibold block mb-0.5">Scientific activities</strong>
                Active participant in scientific research groups, national mathematics contests, and writing olympiads.
              </p>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 text-primary shrink-0">
                <FileText className="h-4.5 w-4.5" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground font-semibold block mb-0.5">Practical modeling</strong>
                Applying abstract math principles into machine learning solutions, graph theory, and business forecasting models.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
