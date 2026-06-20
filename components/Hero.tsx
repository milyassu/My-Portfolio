"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import StatsGrid from "./StatsGrid";
import { TypingAnimation } from "./ui/typing-animation";
import { buttonVariants } from "./ui/button";
import { Pointer } from "./ui/pointer";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
      {/* Visual background elements */}
      <div className="absolute inset-0 -z-10 bg-background transition-colors duration-300" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(120,120,120,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.06)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/10 blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Data Science Portfolio
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-bold tracking-tight leading-none text-foreground"
          >
            Mohammad
            <TypingAnimation
              duration={150}
              delay={500}
              className="block mt-2 text-primary"
            >
              Ilyas Suud
            </TypingAnimation>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl"
          >
            Mathematics Undergraduate at Universitas Negeri Jakarta focused on
            Data Science, Machine Learning, Statistical Modeling, and Business
            Analytics. Experienced in machine learning, NLP, interactive
            dashboards, and optimization projects across academic, research, and
            industry settings.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2.5 mt-6"
          >
            <span className="px-3.5 py-1.5 rounded-md bg-muted border border-border text-muted-foreground text-xs font-medium transition-colors duration-300">
              Mathematics Student
            </span>
            <span className="px-3.5 py-1.5 rounded-md bg-muted border border-border text-muted-foreground text-xs font-medium transition-colors duration-300">
              BNSP Certified
            </span>
            <span className="px-3.5 py-1.5 rounded-md bg-muted border border-border text-muted-foreground text-xs font-medium transition-colors duration-300">
              Data Scientist
            </span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const elem = document.getElementById("projects");
                if (elem) {
                  elem.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`${buttonVariants({ size: "lg" })}`}
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="/documents/CV_Mohammad%20Ilyas%20Suud.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonVariants({ variant: "secondary", size: "lg" })}`}
            >
              <FileText className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full">
            <StatsGrid />
          </motion.div>
        </motion.div>

        {/* Right Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Soft decorative shadow/border effect behind image */}
            <div className="absolute -inset-1 rounded-lg bg-linear-to-r from-primary to-primary/40 opacity-25 blur-lg group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

            <div className="relative bg-background border border-border/40 p-2.5 rounded-lg shadow-2xl transition-colors duration-300">
              <Image
                src="/images/profile.jpg"
                alt="Mohammad Ilyas Suud"
                width={400}
                height={400}
                className="rounded-md object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>

            {/* UBAH INI YAS AWOKWOKWOKWKO */}
            <Pointer>
              <motion.div
                animate={{
                  scale: [0.8, 1, 0.8],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <g
                    fill="#EFAAA4"
                    stroke="#B8736D"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  >
                    <path d="M 7,7 C 12,2 17,7 19,9 L 34,24 C 38,21 44,23 44,29C 44,36 37,43 30,43C 24,43 22,37 25,33L 9,18 C 7,16 2,12 7,7 Z" />
                    <path
                      d="M 14,7 C 11,10 10,11 7,14"
                      fill="none"
                      stroke="#B8736D"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </motion.div>
            </Pointer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
