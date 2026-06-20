"use client";
import { experiences } from "@/data/experiences";
import { motion } from "framer-motion";
export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-blue-700 font-semibold">EXPERIENCE</p>

        <h2 className="text-4xl font-bold mt-3 mb-12">Professional Journey</h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.role}
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
              border-l-4
              border-blue-700
              pl-6
              "
            >
              <p className="text-slate-500">{exp.period}</p>

              <h3
                className="
                text-2xl
                font-bold
                mt-2
                "
              >
                {exp.role}
              </h3>

              <p className="text-slate-600">{exp.company}</p>
              <ul
                className="
  mt-4
  space-y-2
  text-slate-600
  list-disc
  pl-5
  "
              >
                {exp.description.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
