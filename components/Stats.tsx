"use client"; 
import { motion } from "framer-motion";
import FadeIn from "./animations/FadeIn";
export default function Stats() {
  const stats = [
    {
      value: "4",
      label: "Featured Projects",
    },
    {
      value: "7",
      label: "Awards",
    },
    {
      value: "2",
      label: "Certifications",
    },
    {
      value: "3.60",
      label: "GPA",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="
            grid
          md:grid-cols-4
          gap-6
          "
        >
          {stats.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
      text-center
      p-8
      rounded-2xl
      border
      border-slate-200
      bg-white
    "
            >
              <h3
                className="
                text-4xl
                font-bold
                text-blue-700
                "
              >
                {item.value}
              </h3>

              <p className="mt-2 text-slate-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
