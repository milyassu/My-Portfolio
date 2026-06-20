import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: any) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div
        className="
        group
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-2
        transition-all
        duration-300
        "
      >
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
          className="
          w-full
          h-60
          object-cover
          "
        />

        <div className="p-8">
          <span
            className="
            text-blue-700
            text-sm
            font-semibold
            "
          >
            {project.category}
          </span>

          <h3
            className="
            text-2xl
            font-bold
            mt-3
            "
          >
            {project.title}
          </h3>

          <p
            className="
            mt-4
            text-slate-600
            "
          >
            {project.description}
          </p>

          <div
            className="
            flex
            flex-wrap
            gap-2
            mt-5
            "
          >
            {project.metrics.map((metric: string) => (
              <span
                key={metric}
                className="
                  bg-blue-50
                  text-blue-700
                  px-3
                  py-1
                  rounded-lg
                  text-sm
                  "
              >
                {metric}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
