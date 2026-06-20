"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
      py-24
      flex
      items-center
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        grid
        lg:grid-cols-2
        gap-12
        items-center
        "
      >
        <div>
          <p
            className="
            text-blue-700
            font-semibold
            "
          >
            DATA SCIENCE PORTFOLIO
          </p>

          <motion.h1
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
  text-5xl
  lg:text-7xl
  font-bold
  mt-4
  leading-tight
  "
          >
            Mohammad
            <br />
            Ilyas Suud
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
  mt-6
  text-xl
            text-slate-600
            max-w-xl
            "
          >
            Mathematics Undergraduate at Universitas Negeri Jakarta focused on
            Data Science, Machine Learning, Statistical Modeling, and Business
            Analytics. Experienced in machine learning, NLP, interactive
            dashboards, and optimization projects across academic, research, and
            industry projects.
          </motion.p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
              Mathematics Student
            </span>

            <span className="px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium">
              BNSP Certified
            </span>

            <span className="px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium">
              Data Scientist
            </span>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="
    px-6 py-3
    bg-blue-600
    text-white
    rounded-xl
    hover:bg-blue-700
    transition
    "
            >
              View Projects
            </a>

            <a
              href="mailto:muhammadilyas12114@gmail.com"
              className="
    px-6 py-3
    border
    rounded-xl
    hover:bg-slate-50
    transition
    "
            >
              Contact Me
            </a>

            <a
              href="/documents/CV_Mohammad%20Ilyas%20Suud.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
    px-6 py-3
    bg-slate-900
    text-white
    rounded-xl
    hover:bg-slate-800
    transition
    "
            >
              Download Resume
            </a>
          </div>

          <div className="flex gap-6 mt-8 text-slate-600">
            <a
              href="https://www.linkedin.com/in/ilyas12114/"
              target="_blank"
              className="hover:text-blue-600"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/milyassu"
              target="_blank"
              className="hover:text-blue-600"
            >
              GitHub
            </a>

            <a
              href="mailto:muhammadilyas12114@gmail.com"
              className="hover:text-blue-600"
            >
              Email
            </a>
          </div>
          <motion.div
            whileHover={{
              y: -5,
              scale: 1.03,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
  grid
  grid-cols-2
  md:grid-cols-4
  gap-4
  mt-12
  "
          >
            <motion.div
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
  bg-white
  rounded-2xl
  shadow-sm
  p-6
  text-center
"
            >
              <h3 className="text-3xl font-bold">4</h3>
              <p className="text-slate-500">Projects</p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              transition={{
                duration: 0.2,
              }}
              className="bg-white
rounded-2xl
shadow-sm
p-6
text-center"
            >
              <h3 className="text-3xl font-bold">7</h3>
              <p className="text-slate-500">Awards</p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              transition={{
                duration: 0.2,
              }}
              className="bg-white
rounded-2xl
shadow-sm
p-6
text-center"
            >
              <h3 className="text-3xl font-bold">2</h3>
              <p className="text-slate-500">Certifications</p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              transition={{
                duration: 0.2,
              }}
              className="bg-white
rounded-2xl
shadow-sm
p-6
text-center"
            >
              <h3 className="text-3xl font-bold">3.60</h3>
              <p className="text-slate-500">GPA</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
  flex
  justify-center
  "
        >
          <Image
            src="/images/profile.jpg"
            alt="Mohammad Ilyas Suud"
            width={450}
            height={450}
            className="
            rounded-3xl
            shadow-xl
            priority
            "
          />
        </motion.div>
      </div>
    </section>
  );
}
