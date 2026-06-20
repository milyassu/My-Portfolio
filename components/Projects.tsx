"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase text-xs">
            Featured Projects
          </p>
          <h2 className="text-4xl font-bold mt-3 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-zinc-200 dark:to-white">
            Selected Data Science Projects
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            A curated compilation of systems demonstrating competencies across statistical modeling, NLP networks, and business intelligence pipelines.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            // Apply bento layout classes based on item index
            const isLarge = idx === 0 || idx === 3;
            const bentoClass = isLarge 
              ? "lg:col-span-2" 
              : "lg:col-span-1";

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                className={bentoClass}
              >
                <ProjectCard project={project} />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
