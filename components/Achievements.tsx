"use client";

import * as React from "react";
import Image from "next/image";
import { essayAwards, mathAwards } from "@/data/achievements";
import { Trophy, BookOpen, Calendar, MapPin, ZoomIn, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sortedEssayAwards = [...essayAwards].sort(
  (a, b) => Number(b.year) - Number(a.year),
);

const sortedMathAwards = [...mathAwards].sort(
  (a, b) => Number(b.year) - Number(a.year),
);

type Award = {
  title: string;
  organizer: string;
  year: string;
  image?: string;
};

function AwardCard({
  award,
  onPreview,
}: {
  award: Award;
  onPreview: (src: string) => void;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      key={award.organizer}
      className="group flex gap-4 p-5 rounded-lg bg-card border border-border/80 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
    >
      {/* Left accent bar */}
      <div className="absolute top-0 left-0 bottom-0 w-1 bg-primary opacity-80 group-hover:scale-y-110 transition-transform duration-300" />

      {/* Trophy icon */}
      <div className="p-2.5 rounded-md bg-muted text-muted-foreground h-fit shrink-0">
        <Trophy className="h-4 w-4" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-bold text-base text-foreground leading-snug">
            {award.title}
          </h4>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground px-2 py-0.5 rounded-full bg-muted shrink-0">
            <Calendar className="h-3 w-3" />
            {award.year}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5 text-muted-foreground/60 shrink-0" />
          {award.organizer}
        </p>

        {/* Thumbnail */}
        {award.image && (
          <button
            onClick={() => onPreview(award.image!)}
            className="mt-3 flex items-center gap-2 group/thumb focus:outline-none"
            aria-label={`Lihat sertifikat ${award.title}`}
          >
            <div className="relative w-24 h-16 rounded overflow-hidden border border-border/60 shadow-sm group-hover/thumb:shadow-md transition-shadow duration-200 shrink-0">
              <Image
                src={award.image}
                alt={`Sertifikat ${award.title}`}
                fill
                className="object-cover object-top transition-transform duration-300 group-hover/thumb:scale-105"
                sizes="96px"
              />
              <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/25 transition-colors duration-200 flex items-center justify-center">
                <ZoomIn className="h-4 w-4 text-white opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200" />
              </div>
            </div>
            <span className="text-xs text-primary font-semibold group-hover/thumb:underline">
              Lihat Sertifikat
            </span>
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  const [lightbox, setLightbox] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
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
            Awards &amp; Recognition
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
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Scientific Essays
              </h3>
            </div>

            <div className="space-y-4">
              {sortedEssayAwards.map((award) => (
                <AwardCard
                  key={`${award.organizer}-${award.year}`}
                  award={award}
                  onPreview={setLightbox}
                />
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
                <Trophy className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Mathematics Contests
              </h3>
            </div>

            <div className="space-y-4">
              {sortedMathAwards.map((award) => (
                <AwardCard
                  key={`${award.title}-${award.organizer}`}
                  award={award}
                  onPreview={setLightbox}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative max-w-4xl w-full max-h-[90vh] rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Sertifikat"
                width={1200}
                height={850}
                className="w-full h-auto object-contain"
                priority
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
                aria-label="Tutup"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
