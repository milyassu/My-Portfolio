import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }: any) {
  return (
    <Link href={`/projects/${project.slug}`} className="block group h-full">
      <div className="flex flex-col h-full bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative">
        
        {/* Project Image Container */}
        <div className="relative h-60 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={500}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            style={{ height: "100%", width: "100%" }}
          />
          {/* Transparent Overlay on hover */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category Tag */}
          <span className="absolute top-4 left-4 bg-background/90 text-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-sm tracking-wider uppercase">
            {project.category}
          </span>

          {/* Action icon */}
          <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-background/90 flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 shadow-sm">
            <ArrowUpRight className="h-4.5 w-4.5" />
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 md:p-8 flex flex-col flex-grow">
          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {project.title}
          </h3>

          <p className="mt-3 text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Metrics section */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-2.5 mt-5 pb-5 border-b border-border/80">
              {project.metrics.map((metric: string) => (
                <span
                  key={metric}
                  className="bg-primary/5 text-primary text-xs font-semibold px-2.5 py-1 rounded-md border border-primary/10"
                >
                  {metric}
                </span>
              ))}
            </div>
          )}

          {/* Tech tags */}
          {project.tech && project.tech.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-auto pt-5">
              {project.tech.map((t: string) => (
                <span
                  key={t}
                  className="bg-muted text-muted-foreground px-2 py-0.5 rounded-md text-[11px] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

      </div>
    </Link>
  );
}
