"use client";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import FadeIn from "./animations/FadeIn";

export default function Projects() {
  return (
    <FadeIn>
      <section
        id="projects"
        className="
        py-32
        bg-slate-50
        "
      >
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="
            text-blue-700
            font-semibold
            "
          >
            FEATURED PROJECTS
          </p>

          <h2
            className="
            text-4xl
            font-bold
            mt-3
            "
          >
            Selected Data Science Projects
          </h2>

          <p
            className="
            mt-4
            text-slate-600
            max-w-3xl
            "
          >
            A collection of projects spanning machine learning, business
            analytics, optimization, and big data processing.
          </p>

          <div
            className="
            grid
            lg:grid-cols-2
            gap-10
            mt-16
            "
          >
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
