"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  Terminal,
  Database,
  Cpu,
  Layout,
  FileCode,
  CheckCircle,
} from "lucide-react";

// Group techs to render in two different marquee lanes
const row1 = [
  { name: "Python", icon: FileCode, desc: "Data analysis & modeling" },
  { name: "SQL", icon: Database, desc: "Querying & management" },
  { name: "Pandas", icon: FileCode, desc: "Data manipulation" },
  { name: "NumPy", icon: Cpu, desc: "Numerical computing" },
  { name: "Scikit-Learn", icon: Cpu, desc: "Predictive modeling" },
  { name: "XGBoost", icon: Cpu, desc: "Gradient boosted trees" },
  { name: "Excel", icon: Database, desc: "Data analysis & visualization" },
  { name: "C++", icon: FileCode, desc: "Alternative Systems programming" },
];

const row2 = [
  { name: "PySpark", icon: Database, desc: "Large-scale data processing" },
  { name: "TensorFlow", icon: Cpu, desc: "Deep learning models" },
  { name: "Git", icon: CheckCircle, desc: "Version control system" },
  { name: "Streamlit", icon: Layout, desc: "Interactive web applications" },
  {
    name: "Looker Studio",
    icon: Layout,
    desc: "Business intelligence reports",
  },
  { name: "Power BI", icon: Layout, desc: "Corporate analytics dashboards" },
  {
    name: "Google Colab",
    icon: Layout,
    desc: "Cloud-based machine learning environment",
  },
];

interface TechCard {
  name: string;
  icon: React.ElementType;
  desc: string;
}

interface MarqueeRowProps {
  items: TechCard[];
  direction?: "left" | "right";
  duration?: number;
}

function MarqueeRow({
  items,
  direction = "left",
  duration = 40,
}: MarqueeRowProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Drag state
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);

  // Sync paused to ref so event handlers can read it
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  // --- CSS animation offset tracking ---
  // We need to track the current "visual" offset of the track when user grabs it
  const offsetRef = useRef(0); // current pixel offset applied via transform (overrides animation)
  const animRunning = useRef(true);
  const halfWidthRef = useRef(0); // half the full duplicated track width (50%)

  // Compute half width once items are rendered
  useEffect(() => {
    if (trackRef.current) {
      halfWidthRef.current = trackRef.current.scrollWidth / 2;
    }
  });

  // Get current animation position in pixels
  const getAnimOffset = useCallback((): number => {
    if (!trackRef.current) return 0;
    const style = window.getComputedStyle(trackRef.current);
    const matrix = new DOMMatrix(style.transform);
    return matrix.m41; // translateX in px
  }, []);

  const stopAnimation = useCallback(() => {
    if (!trackRef.current || !animRunning.current) return;
    const currentX = getAnimOffset();
    offsetRef.current = currentX;
    trackRef.current.style.animationPlayState = "paused";
    // Freeze at current position via inline style
    trackRef.current.style.transform = `translateX(${currentX}px)`;
    trackRef.current.style.animation = "none";
    animRunning.current = false;
  }, [getAnimOffset]);

  const resumeAnimation = useCallback(() => {
    if (!trackRef.current || animRunning.current) return;
    const half = halfWidthRef.current;
    if (!half) return;

    // Normalize offset into [−half, 0] range for seamless looping
    let px = offsetRef.current % -half;
    if (px > 0) px -= half;
    if (px < -half) px += half;

    const pct = (px / half) * 50; // percentage of animation cycle used

    // Calculate delay so animation resumes from current position
    // For "left": animation goes 0 → -50%. For "right": -50% → 0.
    // delay = -(elapsed time at current position)
    const elapsed =
      direction === "left"
        ? (-pct / 50) * duration // pct is negative for left scroll
        : ((50 + pct) / 50) * duration;

    trackRef.current.style.transform = "";
    const animName = direction === "left" ? "marquee-left" : "marquee-right";
    trackRef.current.style.animation = `${animName} ${duration}s linear infinite`;
    trackRef.current.style.animationDelay = `-${elapsed}s`;
    animRunning.current = true;
    offsetRef.current = 0;
  }, [direction, duration]);

  // Hover handlers
  const handleMouseEnter = useCallback(() => {
    setPaused(true);
    stopAnimation();
  }, [stopAnimation]);

  const handleMouseLeave = useCallback(() => {
    if (!isDragging.current) {
      setPaused(false);
      resumeAnimation();
    }
  }, [resumeAnimation]);

  // Drag handlers
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!trackRef.current) return;
      isDragging.current = true;
      dragStartX.current = e.clientX;
      dragStartScrollLeft.current =
        offsetRef.current !== 0 ? offsetRef.current : getAnimOffset();
      stopAnimation();
      trackRef.current.style.cursor = "grabbing";
      e.preventDefault();
    },
    [stopAnimation, getAnimOffset],
  );

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const dx = e.clientX - dragStartX.current;
    let newX = dragStartScrollLeft.current + dx;

    // Wrap for seamless infinite loop feel
    const half = halfWidthRef.current;
    if (half > 0) {
      newX = ((newX % -half) - half) % -half;
      if (newX > 0) newX -= half;
    }

    offsetRef.current = newX;
    trackRef.current.style.transform = `translateX(${newX}px)`;
  }, []);

  const handleMouseUp = useCallback(() => {
    if (!trackRef.current) return;
    isDragging.current = false;
    trackRef.current.style.cursor = "grab";
    // If not hovering, resume animation
    if (!pausedRef.current) {
      resumeAnimation();
    }
  }, [resumeAnimation]);

  // Touch handlers
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!trackRef.current) return;
      isDragging.current = true;
      dragStartX.current = e.touches[0].clientX;
      dragStartScrollLeft.current =
        offsetRef.current !== 0 ? offsetRef.current : getAnimOffset();
      stopAnimation();
    },
    [stopAnimation, getAnimOffset],
  );

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const dx = e.touches[0].clientX - dragStartX.current;
    let newX = dragStartScrollLeft.current + dx;

    const half = halfWidthRef.current;
    if (half > 0) {
      newX = ((newX % -half) - half) % -half;
      if (newX > 0) newX -= half;
    }

    offsetRef.current = newX;
    trackRef.current.style.transform = `translateX(${newX}px)`;
    e.preventDefault();
  }, []);

  const handleTouchEnd = useCallback(() => {
    isDragging.current = false;
    resumeAnimation();
  }, [resumeAnimation]);

  // Global mouse move/up listeners
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  const animName = direction === "left" ? "marquee-left" : "marquee-right";
  const initial = direction === "left" ? undefined : undefined; // handled by keyframes

  return (
    <div
      ref={containerRef}
      className="flex w-full overflow-hidden py-2 select-none relative"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
        cursor: "grab",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div
        ref={trackRef}
        className={`flex gap-4 shrink-0 w-max ${direction === "left" ? "pr-4" : "pl-4"}`}
        style={{
          animation: `${animName} ${duration}s linear infinite`,
          willChange: "transform",
        }}
      >
        {[...items, ...items].map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div
              key={idx}
              className="group w-[190px] h-25 flex items-start gap-3.5 px-5 py-4 rounded-lg border border-border bg-card/60 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-primary/45 hover:-translate-y-1 transition-all duration-300"
              style={{ pointerEvents: isDragging.current ? "none" : "auto" }}
            >
              <div className="p-2.5 rounded-md bg-primary/5 group-hover:bg-primary/10 text-primary transition-colors duration-300">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-foreground">
                  {tech.name}
                </h4>
                <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                  {tech.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <>
      {/* Inject keyframes globally */}
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      <section className="py-14 bg-muted/30 dark:bg-muted/10 transition-colors duration-300 overflow-hidden relative">
        {/* Background glow spot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-primary/5 blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 mb-6">
          <div className="text-center md:text-left">
            <p className="text-primary font-semibold tracking-wider uppercase text-xs">
              Tech Stack
            </p>
            <h2 className="text-4xl font-bold mt-3 bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-zinc-200 dark:to-white">
              Technologies & Tools
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl text-base">
              Quantitative modeling and software systems utilized in
              constructing analytics engines and pipelines.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full space-y-2">
          <MarqueeRow items={row1} direction="left" duration={40} />
          <MarqueeRow items={row2} direction="right" duration={40} />
        </div>
      </section>
    </>
  );
}
