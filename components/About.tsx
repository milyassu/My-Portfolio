"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, LineChart } from "lucide-react";

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="about"
      className="py-28 bg-muted/30 dark:bg-muted/10 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Core Values / Quote */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <p className="text-primary font-semibold tracking-wider uppercase text-xs">
                About Me
              </p>
              <h2 className="text-4xl font-bold mt-3 bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-zinc-200 dark:to-white leading-tight">
                Turning Mathematical Thinking into Data-Driven Decisions
              </h2>
            </div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="p-6.5 rounded-lg border border-border bg-card shadow-md flex gap-4"
            >
              <div className="p-3 rounded-md bg-primary/5 text-primary shrink-0 h-fit">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-foreground">
                  Academic Foundation
                </h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  Rigorous quantitative methodology shaped by statistical
                  analysis, optimization techniques, and mathematical modeling
                  at UNJ.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="p-6.5 rounded-lg border border-border bg-card shadow-md flex gap-4"
            >
              <div className="p-3 rounded-md bg-primary/5 text-primary shrink-0 h-fit">
                <Code2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-foreground">
                  Applied Engineering
                </h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  Constructing robust machine learning pipelines, predictive
                  engines, and dashboard systems in industry configurations.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="p-6.5 rounded-lg border border-border bg-card shadow-md flex gap-4"
            >
              <div className="p-3 rounded-md bg-primary/5 text-primary shrink-0 h-fit">
                <LineChart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-foreground">
                  Business Analytics
                </h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  Extracting actionable insights from messy transactional
                  databases and segmenting metrics to drive performance
                  upgrades.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Descriptive Text */}
          <div className="lg:col-span-7 lg:pl-6 text-muted-foreground leading-relaxed text-base md:text-lg space-y-6">
            <p>
              I am a Mathematics undergraduate at Jakarta State University with
              a strong interest in Data Science, Machine Learning, Business
              Analytics, and Mathematical Modeling. My academic background has
              equipped me with rigorous quantitative thinking through coursework
              in statistics, optimization, algorithm design, mathematical
              modeling, and data analysis. I enjoy solving real-world problems
              by transforming complex data into meaningful insights and
              actionable recommendations.
            </p>

            <p>
              Through professional certifications, internships, research
              activities, and project-based learning, I have developed practical
              experience in machine learning, business intelligence, predictive
              analytics, natural language processing, and optimization. My
              projects range from income classification and loan repayment
              analytics to sentiment analysis and transportation route
              optimization using graph theory.
            </p>

            <p>
              Beyond technical projects, I actively participate in scientific
              research and national competitions in mathematics and essay
              writing, strengthening my ability to communicate analytical
              findings and develop evidence-based solutions. I aspire to build a
              career as a Data Scientist who combines mathematical rigor,
              business understanding, and data-driven decision making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
