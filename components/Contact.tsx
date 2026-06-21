"use client";

import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-background transition-colors duration-300 relative overflow-hidden"
    >
      {/* Visual background details */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Core Info */}
          <div className="lg:col-span-6 flex flex-col items-start text-left gap-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Opportunities
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
              Let's build something{" "}
              <span className="text-primary">impactful</span> together.
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Open to internship opportunities, research collaborations, and
              data science projects. Let's connect to discuss how statistical
              modeling and machine learning can solve your business questions.
            </p>
          </div>

          {/* Right Column - SaaS style Cards */}
          <div className="lg:col-span-6 flex flex-col gap-4 w-full">
            <a
              href="mailto:muhammadilyas12114@gmail.com"
              className="group flex items-center justify-between p-6 rounded-lg border border-border bg-card hover:border-primary/45 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-md bg-primary/5 text-primary transition-colors duration-300">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors duration-300">
                    Send an Email
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    muhammadilyas12114@gmail.com
                  </p>
                </div>
              </div>
              <div className="p-2 rounded-md bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/milyassu/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-lg border border-border bg-card hover:border-primary/45 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-md bg-primary/5 text-primary transition-colors duration-300">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors duration-300">
                    LinkedIn Network
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    linkedin.com/in/milyassu
                  </p>
                </div>
              </div>
              <div className="p-2 rounded-md bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
