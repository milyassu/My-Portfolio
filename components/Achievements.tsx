"use client";

import { essayAwards, mathAwards } from "@/data/achievements";
import { Trophy, BookOpen, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const sortedEssayAwards = [...essayAwards].sort(
  (a, b) => Number(b.year) - Number(a.year),
);

const sortedMathAwards = [...mathAwards].sort(
  (a, b) => Number(b.year) - Number(a.year),
);

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="achievements"
      className="py-28 bg-muted/30 dark:bg-muted/10 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase text-xs">
            Achievements
          </p>
          <h2 className="text-4xl font-bold mt-3 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-zinc-200 dark:to-white">
            Awards & Recognition
          </h2>
          <p className="mt-4 text-muted-foreground text-base">
            National achievements and rankings obtained in mathematical
            competitions and scientific academic essays.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Scientific Writing Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-md bg-primary/5 text-primary">
                <BookOpen className="h-5.5 w-5.5" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Scientific Essays
              </h3>
            </div>

            <div className="space-y-4">
              {sortedEssayAwards.map((award) => (
                <motion.div
                  variants={itemVariants}
                  key={award.organizer}
                  className="group flex gap-4 p-5 rounded-lg bg-card border border-border/80 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-primary opacity-80 group-hover:scale-y-110 transition-transform duration-300" />
                  <div className="p-2.5 rounded-md bg-muted text-muted-foreground h-fit">
                    <Trophy className="h-4.5 w-4.5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="font-bold text-base text-foreground leading-snug">
                        {award.title}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground px-2 py-0.5 rounded-full bg-muted">
                        <Calendar className="h-3 w-3" />
                        {award.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-muted-foreground/60" />
                      {award.organizer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mathematics Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-md bg-primary/5 text-primary">
                <Trophy className="h-5.5 w-5.5" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Mathematics Contests
              </h3>
            </div>

            <div className="space-y-4">
              {sortedMathAwards.map((award) => (
                <motion.div
                  variants={itemVariants}
                  key={award.title}
                  className="group flex gap-4 p-5 rounded-lg bg-card border border-border/80 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-primary opacity-80 group-hover:scale-y-110 transition-transform duration-300" />
                  <div className="p-2.5 rounded-md bg-muted text-muted-foreground h-fit">
                    <Trophy className="h-4.5 w-4.5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="font-bold text-base text-foreground leading-snug">
                        {award.title}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground px-2 py-0.5 rounded-full bg-muted">
                        <Calendar className="h-3 w-3" />
                        {award.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-muted-foreground/60" />
                      {award.organizer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
