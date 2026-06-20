"use client";

import { certifications } from "@/data/certifications";
import { Award, Calendar, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div>
          <p className="text-primary font-semibold tracking-wider uppercase text-xs">
            Certifications
          </p>
          <h2 className="text-4xl font-bold mt-3 mb-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-zinc-200 dark:to-white">
            Professional Certifications
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.15 }}
              className="group relative bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Decorative radial gradients on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent blur-xl -z-10 group-hover:scale-125 transition-transform duration-500" />
              
              <div className="flex justify-between items-start flex-wrap gap-4 pb-5 border-b border-border/80">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-md bg-primary/5 text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-200">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-semibold mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground px-2.5 py-1 rounded-full bg-muted">
                  <Calendar className="h-3 w-3" />
                  {cert.year}
                </span>
              </div>

              <p className="mt-5 text-muted-foreground text-sm md:text-base leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
