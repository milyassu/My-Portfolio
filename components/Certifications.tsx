"use client";

import * as React from "react";
import Image from "next/image";
import { certifications } from "@/data/certifications";
import { Calendar, ShieldCheck, ZoomIn, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Certifications() {
  const [lightbox, setLightbox] = React.useState<string | null>(null);

  // Close on Escape key
  React.useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

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
              className="group relative bg-card border border-border rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent blur-xl -z-10 group-hover:scale-125 transition-transform duration-500" />

              {/* Certificate thumbnail */}
              {"image" in cert && cert.image && (
                <button
                  onClick={() => setLightbox((cert as { image: string }).image)}
                  className="relative w-full h-48 overflow-hidden block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`Lihat sertifikat ${cert.title}`}
                >
                  <Image
                    src={(cert as { image: string }).image}
                    alt={`Sertifikat ${cert.title}`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <ZoomIn className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </button>
              )}

              {/* Card body */}
              <div className="p-8">
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

                {"image" in cert && cert.image && (
                  <button
                    onClick={() => setLightbox((cert as { image: string }).image)}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <ZoomIn className="h-3.5 w-3.5" />
                    Lihat Sertifikat
                  </button>
                )}
              </div>
            </motion.div>
          ))}
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
