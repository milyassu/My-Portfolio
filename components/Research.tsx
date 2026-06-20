const researches = [
  {
    title: "Research Member",
    organization: "Kelompok Peneliti Muda",
    period: "2023 - 2024",
    description:
      "Conducted literature reviews, data collection, quantitative analysis, and scientific writing activities as part of a student research group. Contributed to research projects involving mathematical modeling, statistical analysis, and evidence-based problem solving while strengthening academic research and communication skills.",
  },

  {
    title: "Scientific Writing Competitions",
    organization: "National Level",
    period: "2023 - Present",
    description:
      "Participated in multiple national-level scientific writing and essay competitions focusing on economics, public policy, education, technology, and social issues. Developed strong analytical thinking, research methodology, argumentation, and academic communication skills through competitive scientific writing activities.",
  },
];

export default function Research() {
  return (
    <section id="research" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-blue-700 font-semibold">RESEARCH</p>

        <h2 className="text-4xl font-bold mt-3 mb-12">
          Organization & Academic Activities
        </h2>

        <div className="space-y-8">
          {researches.map((research) => (
            <div
              key={research.title}
              className="
              bg-slate-50
              rounded-2xl
              p-8
              "
            >
              <h3 className="text-2xl font-bold">{research.title}</h3>

              <p className="text-blue-700 mt-2">{research.organization}</p>

              <p className="text-slate-500 mt-1">{research.period}</p>

              <p className="mt-4 text-slate-600">{research.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
