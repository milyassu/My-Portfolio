import { skills } from "@/data/skills";
import FadeIn from "./animations/FadeIn";
const skillTitles: Record<string, string> = {
  programming: "Programming",
  analytics: "Data Analytics",
  machineLearning: "Machine Learning",
  visualization: "Data Visualization",
};

export default function Skills() {
  return (
    <FadeIn>
      <section id="skills" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-blue-700 font-semibold">SKILLS</p>

          <h2 className="text-4xl font-bold mt-3 mb-12">Core Competencies</h2>

          <div
            className="
          grid
          md:grid-cols-2
          gap-8
          "
          >
            {Object.entries(skills).map(([key, items]) => (
              <div
                key={key}
                className="
                bg-white
                p-8
                rounded-2xl
                shadow-sm
                "
              >
                <h3
                  className="
                  text-xl
                  font-bold
                  "
                >
                  {skillTitles[key]}
                </h3>

                <ul className="mt-4 space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-slate-600">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
