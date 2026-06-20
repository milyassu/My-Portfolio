"use client";

import { experiences } from "@/data/experiences";
import { Building2, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 bg-muted/30 dark:bg-muted/10 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background glow spot */}
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase text-xs">
            Experience
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mt-2">
            Professional Journey
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.role}
              className="relative pl-8 group transition-all duration-300 hover:translate-x-1"
            >
              {index !== experiences.length - 1 ? (
                <div className="absolute left-3.5 top-8 h-80 w-0.5 bg-linear-to-b from-primary to-transparent transition-colors duration-300" />
              ) : (
                <div className="absolute left-3.5 top-8 h-50 w-0.5 bg-linear-to-b from-primary to-transparent transition-colors duration-300" />
              )}

              <div className="absolute left-0 top-0.5 z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background shadow-sm group-hover:scale-110 transition-transform duration-300">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="flex items-center gap-1 text-muted-foreground font-medium text-sm">
                      <Building2 className="h-4 w-4" />
                      {exp.company}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="mt-3 space-y-2 text-muted-foreground text-sm sm:text-base leading-relaxed pl-5 list-disc marker:text-primary">
                  {exp.description.map((item: string) => (
                    <li
                      key={item}
                      className="hover:text-foreground transition-colors duration-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
