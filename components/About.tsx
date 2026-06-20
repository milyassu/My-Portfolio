"use client";
import FadeIn from "./animations/FadeIn";
import { motion } from "framer-motion";

export default function About() {
  return (
    <FadeIn>
      <section id="about" className="py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-700 font-semibold">ABOUT ME</p>

            <h2 className="text-4xl font-bold mt-3">
              Turning Mathematical Thinking into Data-Driven Decisions
            </h2>

            <div
              className="
              mt-10
              text-lg
              text-slate-600
              leading-8
              max-w-4xl
              "
            >
              <p>
                I am a Mathematics undergraduate at Jakarta State University
                with a strong interest in Data Science, Machine Learning,
                Business Analytics, and Mathematical Modeling. My academic
                background has equipped me with rigorous quantitative thinking
                through coursework in statistics, optimization, algorithm
                design, mathematical modeling, and data analysis. I enjoy
                solving real-world problems by transforming complex data into
                meaningful insights and actionable recommendations.
              </p>

              <p className="mt-6">
                Through professional certifications, internships, research
                activities, and project-based learning, I have developed
                practical experience in machine learning, business intelligence,
                predictive analytics, natural language processing, and
                optimization. My projects range from income classification and
                loan repayment analytics to sentiment analysis and
                transportation route optimization using graph theory. Beyond
                technical projects, I actively participate in scientific
                research and national competitions in mathematics and essay
                writing, strengthening my ability to communicate analytical
                findings and develop evidence-based solutions. I aspire to build
                a career as a Data Scientist who combines mathematical rigor,
                business understanding, and data-driven decision making.
              </p>

              {/* <p className="mt-6">
                Through professional certifications, internships, and
                project-based learning, I have developed practical experience in
                transforming raw data into actionable insights and business
                solutions.
              </p> */}
            </div>
          </motion.div>
        </div>
      </section>
    </FadeIn>
  );
}
